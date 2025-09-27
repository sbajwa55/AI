import React from 'react';
import { personalInfo } from '../data/mock';
import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedIn,
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: personalInfo.github,
      label: 'GitHub'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-4">{personalInfo.name}</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                {personalInfo.title}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Specializing in enterprise database solutions, cloud migrations, and data engineering 
                with over 25 years of experience across finance, healthcare, education, and manufacturing industries.
              </p>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="space-y-3 mb-6">
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
                >
                  <Phone size={16} />
                  {personalInfo.phone}
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
                >
                  <Mail size={16} />
                  {personalInfo.email}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Back to Top ↑
              </button>
              <div className="flex items-center gap-1 text-slate-400 text-sm">
                Made with <Heart size={14} className="text-red-400" /> for excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;