import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { MessageCircle, Send, User, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Comments = ({ blogPostId, blogTitle }) => {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    author_name: '',
    author_email: '',
    comment_text: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showCommentForm, setShowCommentForm] = useState(false);

  // Fetch comments for this blog post
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${API}/comments/${blogPostId}`);
        setComments(response.data);
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      }
    };

    if (blogPostId) {
      fetchComments();
    }
  }, [blogPostId]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const commentData = {
        ...formData,
        blog_post_id: blogPostId
      };

      const response = await axios.post(`${API}/comments`, commentData);

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ author_name: '', author_email: '', comment_text: '' });
        setShowCommentForm(false);
      }
    } catch (error) {
      console.error('Comment submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="mt-8 border-t border-blue-200 pt-8">
      {/* Comments Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <MessageCircle size={24} className="text-blue-600" />
          <h3 className="text-xl font-semibold text-blue-900">
            Comments ({comments.length})
          </h3>
        </div>
        
        {!showCommentForm && (
          <Button
            onClick={() => setShowCommentForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            size="sm"
          >
            Leave a Comment
          </Button>
        )}
      </div>

      {/* Comment Form */}
      {showCommentForm && (
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
              <MessageCircle size={20} />
              Leave a Comment on "{blogTitle}"
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 text-green-800">
                  <CheckCircle size={20} />
                  <span className="font-medium">Comment submitted successfully!</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  Your comment is pending approval and will appear once reviewed.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 text-red-800">
                  <AlertCircle size={20} />
                  <span className="font-medium">Failed to submit comment</span>
                </div>
                <p className="text-red-700 text-sm mt-1">
                  Please try again or contact me directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-2">Name</label>
                  <Input
                    name="author_name"
                    value={formData.author_name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                    className="bg-white border-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-2">Email</label>
                  <Input
                    type="email"
                    name="author_email"
                    value={formData.author_email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                    className="bg-white border-blue-300"
                  />
                  <p className="text-xs text-blue-600 mt-1">Email will not be published</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">Comment</label>
                <Textarea
                  name="comment_text"
                  value={formData.comment_text}
                  onChange={handleInputChange}
                  placeholder="Share your thoughts on this document..."
                  rows={4}
                  required
                  disabled={isSubmitting}
                  className="bg-white border-blue-300 resize-none"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-800 hover:bg-blue-700 text-white"
                >
                  <Send size={16} className="mr-2" />
                  {isSubmitting ? 'Submitting...' : 'Submit Comment'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowCommentForm(false)}
                  className="border-blue-300 text-blue-700 hover:bg-blue-100"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Comments List */}
      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <Card key={comment.id} className="bg-white border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">{comment.author_name}</h4>
                      <div className="flex items-center gap-2 text-blue-600 text-sm">
                        <Calendar size={14} />
                        {formatDate(comment.timestamp)}
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-green-300">
                    Approved
                  </Badge>
                </div>
                <p className="text-blue-700 leading-relaxed">{comment.comment_text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <MessageCircle size={48} className="text-blue-300 mx-auto mb-4" />
          <p className="text-blue-600">No comments yet. Be the first to share your thoughts!</p>
        </div>
      )}
    </div>
  );
};

export default Comments;