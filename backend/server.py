from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class Comment(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    blog_post_id: str
    author_name: str
    author_email: EmailStr
    comment_text: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = "pending"  # pending, approved, rejected
    ip_address: Optional[str] = None

class CommentCreate(BaseModel):
    blog_post_id: str
    author_name: str
    author_email: EmailStr
    comment_text: str

class CommentApprove(BaseModel):
    status: str  # approved or rejected

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Email configuration
async def send_contact_email(contact_data: ContactMessageCreate):
    """Send contact form email via SMTP"""
    try:
        # Email configuration - these should be in environment variables
        smtp_server = "smtp.mail.yahoo.com"
        smtp_port = 587
        sender_email = os.environ.get('EMAIL_FROM', 'noreply@example.com')
        sender_password = os.environ.get('EMAIL_PASSWORD', '')
        recipient_email = "bajwa_sandeep@yahoo.com"
        
        # Create message
        message = MIMEMultipart()
        message["From"] = sender_email
        message["To"] = recipient_email
        message["Subject"] = f"Portfolio Contact: {contact_data.subject}"
        
        # Email body
        body = f"""
New contact form submission from your portfolio website:

Name: {contact_data.name}
Email: {contact_data.email}
Subject: {contact_data.subject}

Message:
{contact_data.message}

---
Sent from Portfolio Contact Form
        """
        
        message.attach(MIMEText(body, "plain"))
        
        # Send email
        await aiosmtplib.send(
            message,
            hostname=smtp_server,
            port=smtp_port,
            start_tls=True,
            username=sender_email,
            password=sender_password,
        )
        
        return True
        
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False

@api_router.post("/contact", response_model=ContactMessage)
async def submit_contact_form(contact_data: ContactMessageCreate):
    """Handle contact form submission"""
    try:
        # Create contact message object
        contact_message = ContactMessage(**contact_data.dict())
        
        # Save to database
        await db.contact_messages.insert_one(contact_message.dict())
        
        # Send email notification
        email_sent = await send_contact_email(contact_data)
        
        if not email_sent:
            logger.warning("Email sending failed, but message was saved to database")
        
        return contact_message
        
    except Exception as e:
        logger.error(f"Contact form submission failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process contact form")

@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    """Get all contact messages (admin endpoint)"""
    messages = await db.contact_messages.find().sort("timestamp", -1).to_list(100)
    return [ContactMessage(**message) for message in messages]

# Comment endpoints
@api_router.post("/comments", response_model=Comment)
async def submit_comment(comment_data: CommentCreate):
    """Submit a new comment for a blog post"""
    try:
        # Create comment object
        comment = Comment(**comment_data.dict())
        
        # Save to database
        await db.comments.insert_one(comment.dict())
        
        logger.info(f"New comment submitted for blog post {comment_data.blog_post_id} by {comment_data.author_name}")
        
        return comment
        
    except Exception as e:
        logger.error(f"Comment submission failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit comment")

@api_router.get("/comments/{blog_post_id}", response_model=List[Comment])
async def get_blog_comments(blog_post_id: str):
    """Get all approved comments for a specific blog post"""
    try:
        comments = await db.comments.find({
            "blog_post_id": blog_post_id, 
            "status": "approved"
        }).sort("timestamp", 1).to_list(100)
        
        return [Comment(**comment) for comment in comments]
        
    except Exception as e:
        logger.error(f"Failed to fetch comments: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch comments")

@api_router.get("/admin/comments", response_model=List[Comment])
async def get_all_comments():
    """Get all comments for admin moderation"""
    try:
        comments = await db.comments.find().sort("timestamp", -1).to_list(200)
        return [Comment(**comment) for comment in comments]
        
    except Exception as e:
        logger.error(f"Failed to fetch all comments: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch comments")

@api_router.put("/admin/comments/{comment_id}", response_model=Comment)
async def moderate_comment(comment_id: str, approval_data: CommentApprove):
    """Approve or reject a comment (admin endpoint)"""
    try:
        # Update comment status
        result = await db.comments.update_one(
            {"id": comment_id},
            {"$set": {"status": approval_data.status}}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Comment not found")
        
        # Return updated comment
        updated_comment = await db.comments.find_one({"id": comment_id})
        return Comment(**updated_comment)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Comment moderation failed: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to moderate comment")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
