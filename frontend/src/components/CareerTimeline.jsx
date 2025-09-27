import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { careerHighlights } from '../data/mock';
import { 
  Briefcase, 
  Cloud, 
  Award, 
  Server, 
  Database, 
  RefreshCw, 
  Zap, 
  CloudUpload, 
  GraduationCap 
} from 'lucide-react';

const CareerTimeline = () => {
  const getIcon = (iconName) => {
    const icons = {
      'briefcase': Briefcase,
      'cloud': Cloud,
      'award': Award,
      'server': Server,
      'database': Database,
      'refresh': RefreshCw,
      'zap': Zap,
      'cloud-upload': CloudUpload,
      'graduation-cap': GraduationCap
    };
    return icons[iconName] || Briefcase;
  };

  const getTypeColor = (type) => {
    const colors = {
      'role': 'bg-blue-600 text-white',
      'achievement': 'bg-green-600 text-white',
      'education': 'bg-purple-600 text-white'
    };
    return colors[type] || 'bg-blue-600 text-white';
  };

  const getTypeLabel = (type) => {
    const labels = {
      'role': 'Career Role',
      'achievement': 'Achievement',
      'education': 'Education'
    };
    return labels[type] || 'Milestone';
  };

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-4">
              Career Highlights
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              A journey of innovation and excellence spanning 25+ years of transformative database and data engineering achievements.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-0.5"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {careerHighlights.map((highlight, index) => {
                const IconComponent = getIcon(highlight.icon);
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-2 z-10">
                      <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
                    </div>

                    {/* Year Badge (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-8 z-20">
                      <Badge className="bg-blue-800 text-white px-3 py-1 font-semibold">
                        {highlight.year}
                      </Badge>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <Card className="bg-gradient-to-r from-white to-blue-50 border-blue-200 hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-6">
                          {/* Mobile Year Badge */}
                          <div className="md:hidden mb-3">
                            <Badge className="bg-blue-800 text-white px-3 py-1 font-semibold">
                              {highlight.year}
                            </Badge>
                          </div>

                          {/* Header */}
                          <div className="flex items-start gap-4 mb-3">
                            <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                              <IconComponent 
                                size={20} 
                                className="text-blue-600 group-hover:text-white transition-colors duration-300" 
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-blue-900 mb-1 leading-tight">
                                {highlight.title}
                              </h3>
                              <Badge 
                                variant="outline" 
                                className={`${getTypeColor(highlight.type)} text-xs px-2 py-1 border-0`}
                              >
                                {getTypeLabel(highlight.type)}
                              </Badge>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-blue-700 leading-relaxed">
                            {highlight.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;