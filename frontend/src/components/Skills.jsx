import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { skills } from '../data/mock';
import { Database, Cloud, BarChart3, ArrowLeftRight, Code, Settings } from 'lucide-react';

const Skills = () => {
  const getIconForCategory = (category) => {
    const icons = {
      'Database Management': Database,
      'Cloud Platforms': Cloud,
      'Big Data & Analytics': BarChart3,
      'Data Integration': ArrowLeftRight,
      'Programming & Scripting': Code,
      'Tools & Platforms': Settings
    };
    return icons[category] || Settings;
  };

  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Comprehensive skill set spanning database management, cloud platforms, and enterprise data solutions built over 25+ years of hands-on experience.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillCategory, index) => {
              const IconComponent = getIconForCategory(skillCategory.category);
              
              return (
                <Card 
                  key={index} 
                  className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-slate-800 transition-colors duration-300">
                        <IconComponent 
                          size={20} 
                          className="text-slate-600 group-hover:text-white transition-colors duration-300" 
                        />
                      </div>
                      <CardTitle className="text-lg text-slate-800">
                        {skillCategory.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200 text-xs px-2 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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

export default Skills;