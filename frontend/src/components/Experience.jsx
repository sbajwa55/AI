import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../data/mock';
import { Building2, MapPin, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              A comprehensive journey through leading financial institutions, educational organizations, and technology companies, delivering enterprise-scale database solutions.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-r from-white to-blue-50 border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-blue-900 mb-2 group-hover:text-blue-800 transition-colors">
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-blue-700">
                        <div className="flex items-center gap-2">
                          <Building2 size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="bg-blue-800 text-white border-blue-800 px-3 py-1 w-fit"
                    >
                      <Calendar size={14} className="mr-2" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-blue-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-blue-900 mb-3 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div 
                            key={achievementIndex}
                            className="flex items-start gap-3 text-blue-700"
                          >
                            <ChevronRight 
                              size={16} 
                              className="text-blue-500 mt-0.5 flex-shrink-0" 
                            />
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;