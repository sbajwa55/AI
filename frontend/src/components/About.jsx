import React from 'react';
import { Card, CardContent } from './ui/card';
import { personalInfo, education, certifications } from '../data/mock';
import { Award, GraduationCap, Users, Building } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              A seasoned professional with over two decades of experience in transforming complex data challenges into strategic business solutions.
            </p>
          </div>

          <div className="grid md:grid-2 lg:grid-cols-2 gap-12">
            {/* Professional Story */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Professional Journey</h3>
              <div className="space-y-4 text-blue-700 leading-relaxed">
                <p>
                  With over 25 years of experience in the data engineering landscape, I've had the privilege of working with 
                  international companies across diverse industries including finance, healthcare, education, and manufacturing.
                </p>
                <p>
                  My expertise spans the entire data lifecycle - from architecting robust Oracle database solutions and 
                  implementing cloud migrations to building enterprise-grade data warehouses and real-time replication systems.
                </p>
                <p>
                  I specialize in transforming legacy systems into modern, cloud-native architectures while ensuring zero 
                  downtime and maintaining the highest standards of data integrity and security.
                </p>
                <p>
                  Throughout my career, I've successfully led complex database migrations, implemented big data solutions 
                  processing terabytes daily, and mentored teams in adopting best practices for database administration 
                  and data engineering.
                </p>
              </div>
            </div>

            {/* Stats and Highlights */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-blue-50 border-blue-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <Users className="mx-auto mb-3 text-blue-600" size={32} />
                    <div className="text-2xl font-bold text-blue-900 mb-1">25+</div>
                    <div className="text-sm text-blue-700">Years Experience</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-blue-50 border-blue-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <Building className="mx-auto mb-3 text-blue-600" size={32} />
                    <div className="text-2xl font-bold text-blue-900 mb-1">500+</div>
                    <div className="text-sm text-blue-700">Databases Managed</div>
                  </CardContent>
                </Card>
              </div>

              {/* Education */}
              <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="text-blue-600 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Education</h4>
                      <div className="text-blue-800 font-medium">{education.degree}</div>
                      <div className="text-blue-700 text-sm">{education.school} • {education.year}</div>
                      <div className="text-blue-700 text-sm mt-1">Focus: {education.focus}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="text-blue-600 mt-1" size={24} />
                    <div className="w-full">
                      <h4 className="font-semibold text-blue-900 mb-4">Certifications</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {certifications.map((cert, index) => (
                          <div key={index} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
                            <img 
                              src={cert.logo} 
                              alt={cert.shortName}
                              className="w-12 h-12 object-contain"
                            />
                            <div>
                              <div className="text-blue-900 text-sm font-medium">{cert.shortName}</div>
                              <div className="text-blue-700 text-xs">{cert.name}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;