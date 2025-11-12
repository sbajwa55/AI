import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowLeft, Download, Calendar, User } from 'lucide-react';
import Comments from './Comments';

const BlogPost = ({ post, onBack }) => {
  if (!post) return null;

  return (
    <div className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            variant="outline"
            onClick={onBack}
            className="mb-8 border-blue-300 text-blue-700 hover:bg-blue-100"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Button>

          {/* Post Header */}
          <Card className="bg-white border-blue-200 mb-8">
            <CardHeader className="pb-6">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                  {post.type}
                </Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-300">
                  {post.category}
                </Badge>
                <div className="flex items-center gap-1 text-blue-500 text-sm ml-auto">
                  <Calendar size={14} />
                  {post.publishedDate}
                </div>
              </div>
              
              <CardTitle className="text-2xl md:text-3xl text-blue-900 leading-tight mb-4">
                {post.title}
              </CardTitle>
              
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <User size={16} />
                <span className="text-sm font-medium">By Sandeep S. Bajwa</span>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-2">
                {post.topics.map((topic, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-blue-50 text-blue-700 text-sm px-3 py-1"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <CardContent>
              {/* Summary */}
              <div className="prose max-w-none mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Overview</h3>
                <p className="text-blue-700 leading-relaxed text-base">
                  {post.summary}
                </p>
              </div>

              {/* Download Section */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">
                  Download Document
                </h4>
                <p className="text-blue-700 mb-4 text-sm">
                  Access the complete technical document with detailed examples, scripts, and implementation guides.
                </p>
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <a
                    href={post.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Download size={18} />
                    Download {post.type}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card className="bg-white border-blue-200">
            <CardContent className="p-8">
              <Comments blogPostId={post.id.toString()} blogTitle={post.title} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;