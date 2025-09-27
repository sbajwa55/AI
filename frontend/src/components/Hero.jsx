import React from 'react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';
import { ChevronDown, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-light text-slate-800 mb-4 tracking-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
              {personalInfo.title}
            </h2>
          </div>

          {/* Location and Contact Quick Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span className="text-sm font-medium">{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span className="text-sm font-medium">{personalInfo.email}</span>
            </div>
          </div>

          {/* Brief Summary */}
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {personalInfo.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;