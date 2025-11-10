import React from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ParticleBackground from './components/ParticleBackground';
import Stats from './components/Stats';

const App: React.FC = () => {
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <div className="relative z-10 text-gray-100 font-sans selection:bg-accent selection:text-black">
        <Header />
        <main>
          <Hero />
          <About />
          <Stats />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;