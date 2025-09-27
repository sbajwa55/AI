import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { testimonials } from '../data/mock';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              What colleagues and clients say about working with me on enterprise database and data engineering projects.
            </p>
          </div>

          {/* Main Testimonial Display */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="inline-flex p-3 bg-blue-100 rounded-full mb-6">
                    <Quote size={32} className="text-blue-600" />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, index) => (
                      <Star 
                        key={index} 
                        size={20} 
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-xl md:text-2xl text-blue-800 leading-relaxed mb-8 font-light italic">
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-blue-200 pt-6">
                    <div className="font-semibold text-blue-900 text-lg">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-blue-600 font-medium">
                      {currentTestimonial.position}
                    </div>
                    <div className="text-blue-500 text-sm">
                      {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-blue-300 text-blue-700 hover:bg-blue-50 p-2"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-blue-300 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-blue-300 text-blue-700 hover:bg-blue-50 p-2"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* All Testimonials Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  index === currentIndex 
                    ? 'bg-blue-100 border-blue-300 scale-105' 
                    : 'bg-white/60 border-blue-200 hover:bg-blue-50'
                }`}
                onClick={() => goToTestimonial(index)}
              >
                <CardContent className="p-6 text-center">
                  <div className="font-semibold text-blue-900 text-sm mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-blue-600 text-xs mb-2">
                    {testimonial.position}
                  </div>
                  <div className="text-blue-500 text-xs">
                    {testimonial.company}
                  </div>
                  <div className="flex justify-center mt-3">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star 
                        key={starIndex} 
                        size={12} 
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;