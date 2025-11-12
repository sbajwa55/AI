import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { blogPosts } from '../data/mock';
import { FileText, Download, ArrowRight, Filter } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-4">
              Blog & Insights
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Technical documents, scripts, and insights from 25+ years of database engineering and enterprise data solutions experience.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-200 ${
                  selectedCategory === category 
                    ? 'bg-blue-800 hover:bg-blue-700 text-white' 
                    : 'bg-white border-blue-300 text-blue-700 hover:bg-blue-100'
                }`}
              >
                <Filter size={14} className="mr-1" />
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map(post => (
              <Card 
                key={post.id}
                className="bg-white border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <Badge 
                      variant="outline" 
                      className="bg-blue-100 text-blue-800 border-blue-300 text-xs px-2 py-1"
                    >
                      {post.type}
                    </Badge>
                    <div className="text-blue-500 text-xs">{post.publishedDate}</div>
                  </div>
                  
                  <CardTitle className="text-lg text-blue-900 leading-tight group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-blue-700 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>

                  {/* Topics Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.topics.slice(0, 3).map((topic, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 text-xs px-2 py-1 font-normal"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  {/* Download Button */}
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                    className="w-full border-blue-300 text-blue-700 hover:bg-blue-100 group-hover:border-blue-600 transition-all duration-300"
                  >
                    <a
                      href={post.downloadUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Download size={14} />
                      <span>Download Document</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="text-center">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <FileText size={32} className="text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  More Resources Coming Soon
                </h3>
                
                <p className="text-blue-700 mb-6 leading-relaxed">
                  Stay tuned for more technical guides, cloud migration strategies, and implementation lessons.
                </p>

                <div className="flex justify-center">
                  <Button 
                    variant="outline"
                    className="border-blue-600 text-blue-700 hover:bg-blue-50"
                    onClick={() => {
                      alert("More resources coming soon! Connect with me on LinkedIn for updates.");
                    }}
                  >
                    <span className="mr-2">Get Notified</span>
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;