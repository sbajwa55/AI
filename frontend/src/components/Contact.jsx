import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { personalInfo } from '../data/mock';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                <h4 className="text-lg font-semibold text-blue-900 mb-4">Connect Online</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-100 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300 text-blue-600 group"
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 text-green-800">
                        <CheckCircle size={20} />
                        <span className="font-medium">Message sent successfully!</span>
                      </div>
                      <p className="text-green-700 text-sm mt-1">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 text-red-800">
                        <AlertCircle size={20} />
                        <span className="font-medium">Message failed to send</span>
                      </div>
                      <p className="text-red-700 text-sm mt-1">
                        Please try again or contact me directly via email.
                      </p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-800 mb-2">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        disabled={isSubmitting}
                        className="bg-white border-blue-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-800 mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                        className="bg-white border-blue-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-2">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      required
                      disabled={isSubmitting}
                      className="bg-white border-blue-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or questions..."
                      rows={5}
                      required
                      disabled={isSubmitting}
                      className="bg-white border-blue-300 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-800 hover:bg-blue-700 text-white py-3 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={18} className="mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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