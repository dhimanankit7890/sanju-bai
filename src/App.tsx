import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import './index.css';

function App() {
  return (
    <div className="font-sans text-black bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;