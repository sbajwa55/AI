import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { personalInfo } from '../data/mock';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Send me an email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: 'Give me a call'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      description: 'Based in Pennsylvania'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.linkedIn,
      description: 'Connect professionally'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.github,
      description: 'View my code'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Ready to discuss your next database project or data engineering challenge? I'd love to hear from you and explore how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Get In Touch</h3>
              <p className="text-blue-700 mb-8 leading-relaxed">
                With over 25 years of experience in enterprise database solutions, I'm always excited to take on new challenges and collaborate on innovative projects. Whether you need database architecture guidance, cloud migration expertise, or data engineering solutions, let's discuss how I can help.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card key={index} className="bg-blue-50 border-blue-200 hover:bg-blue-100 transition-colors duration-200">
                      <CardContent className="p-4">
                        <a 
                          href={method.href}
                          className="flex items-center gap-4 text-blue-800 hover:text-blue-900 transition-colors"
                        >
                          <div className="p-2 bg-white rounded-lg">
                            <IconComponent size={20} className="text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">{method.label}</div>
                            <div className="text-sm text-blue-700">{method.value}</div>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Connect Online</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-100 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 text-slate-600 group"
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-slate-50 border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-white border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-white border-slate-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      required
                      className="bg-white border-slate-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or questions..."
                      rows={5}
                      required
                      className="bg-white border-slate-300 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 transition-all duration-300 hover:scale-105"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;