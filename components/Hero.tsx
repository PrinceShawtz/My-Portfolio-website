
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { LinkedinIcon } from './icons/LinkedinIcon';

const Hero: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden text-center">
      <div className={`relative z-10 max-w-5xl px-4 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-fade-in-up mb-6 inline-flex items-center gap-x-2 rounded-full bg-white/10 px-4 py-2 text-sm text-gray-200" style={{ animationDelay: '100ms' }}>
          <span>👋</span>
          Hi, I'm Eseroghene
        </div>
        <h1 className="animate-fade-in-up text-5xl font-black text-white md:text-7xl lg:text-8xl" style={{ animationDelay: '300ms' }}>
          Transforming Ideas into <br/>
          <span className="text-accent">
            Digital Experiences
          </span>
        </h1>
        <p className="animate-fade-in-up mx-auto mt-6 max-w-3xl text-lg text-gray-300 md:text-xl" style={{ animationDelay: '500ms' }}>
          Full Stack Developer | Software Engineer | Cloud & DevOps | AI Innovator
        </p>
        <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6" style={{ animationDelay: '700ms' }}>
          <a
            href="#work"
            onClick={handleNavClick}
            className="inline-block transform rounded-full bg-accent px-8 py-4 text-base font-bold uppercase tracking-wider text-black transition-all duration-300 hover:scale-105 hover:shadow-accent"
          >
            View My Work
          </a>
          <a
            href="https://linkedin.com/in/eseroghene-okobiah-1b3885230"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-2 text-gray-300 transition-colors duration-300 hover:text-white"
          >
            <LinkedinIcon className="h-5 w-5" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
