import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;