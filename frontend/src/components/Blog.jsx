import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { FileText, Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
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
              Sharing thoughts on database engineering, cloud migrations, and the evolving landscape of enterprise data solutions.
            </p>
          </div>

          {/* Empty State */}
          <div className="text-center py-16">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 max-w-2xl mx-auto">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <FileText size={48} className="text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                  Coming Soon
                </h3>
                
                <p className="text-blue-700 mb-6 leading-relaxed">
                  I'm preparing to share insights from my 25+ years of experience in database engineering, 
                  cloud migrations, and enterprise data solutions. Stay tuned for articles on Oracle optimization, 
                  Snowflake migrations, and modern data architectures.
                </p>

                <div className="space-y-3 text-blue-600 mb-8">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm">Oracle Documents, Scripts and Tips</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm">Cloud Migration Strategies</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm">Big Data Implementation Lessons</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="outline"
                    className="border-blue-600 text-blue-700 hover:bg-blue-50"
                    onClick={() => {
                      // Placeholder for future functionality
                      alert("Blog articles coming soon! Connect with me on LinkedIn for updates.");
                    }}
                  >
                    <span className="mr-2">Get Notified</span>
                    <ArrowRight size={16} />
                  </Button>
                  
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    asChild
                  >
                    <a 
                      href="https://gkquiz-app.emergent.host/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span>View GKQA App</span>
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Blog Grid Placeholder */}
          <div className="hidden">
            {/* This section will be used when blogs are added */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog cards will go here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;