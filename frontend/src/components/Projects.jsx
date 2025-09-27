import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../data/mock';
import { ExternalLink, ChevronRight, Database, Cloud, Zap, BarChart3 } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (category) => {
    const icons = {
      'Cloud Migration': Cloud,
      'Data Integration': Database,
      'Performance Optimization': Zap,
      'Big Data': BarChart3
    };
    return icons[category] || Database;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Cloud Migration': 'bg-blue-100 text-blue-800 border-blue-200',
      'Data Integration': 'bg-green-100 text-green-800 border-green-200',
      'Performance Optimization': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Big Data': 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return colors[category] || 'bg-slate-100 text-slate-800 border-slate-200';
  };

  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto mb-8">
              Showcasing enterprise-scale database and data engineering projects that have transformed business operations and delivered measurable results.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
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
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map(project => {
              const IconComponent = getCategoryIcon(project.category);
              
              return (
                <Card 
                  key={project.id}
                  className="bg-white border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-800 transition-colors duration-300">
                            <IconComponent 
                              size={20} 
                              className="text-blue-600 group-hover:text-white transition-colors duration-300" 
                            />
                          </div>
                          <Badge className={`${getCategoryColor(project.category)} text-xs px-2 py-1 border`}>
                            {project.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-blue-900 group-hover:text-blue-800 transition-colors leading-tight">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-blue-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-slate-100 text-slate-700 text-xs px-2 py-1 font-normal"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wide">
                        Key Results
                      </h4>
                      <div className="space-y-2">
                        {project.highlights.slice(0, 3).map((highlight, index) => (
                          <div 
                            key={index}
                            className="flex items-start gap-3 text-slate-600"
                          >
                            <ChevronRight 
                              size={14} 
                              className="text-slate-400 mt-0.5 flex-shrink-0" 
                            />
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 group-hover:border-slate-800 group-hover:text-slate-800 transition-all duration-300"
                    >
                      <span className="mr-2">View Details</span>
                      <ExternalLink size={14} />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;