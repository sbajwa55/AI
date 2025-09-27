import React from 'react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';
import { ChevronDown, Mail, MapPin, User, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Professional Headshot Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300">
              <User size={48} className="text-white" />
            </div>
          </div>

          {/* Enhanced Name and Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-light text-blue-900 mb-6 tracking-tight leading-tight">
              {personalInfo.name}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl text-blue-700 font-normal max-w-4xl mx-auto leading-relaxed">
              {personalInfo.title}
            </h2>
          </div>

          {/* Enhanced Location and Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-blue-600">
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <MapPin size={20} className="text-blue-700" />
              <span className="font-medium">{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Mail size={20} className="text-blue-700" />
              <span className="font-medium">{personalInfo.email}</span>
            </div>
          </div>

          {/* Enhanced Summary */}
          <p className="text-xl md:text-2xl text-blue-800 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            {personalInfo.summary}
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <a 
                href="https://customer-assets.emergentagent.com/job_dbexpert/artifacts/3eq35lp2_sbajwa_resume_Sep_2025_pdf.pdf"
                download="Sandeep_Bajwa_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-blue-500 hover:text-blue-700 transition-all duration-300 animate-bounce"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown size={24} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;