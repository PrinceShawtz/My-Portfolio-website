
import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="work" ref={ref} className="py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Selected Works</h2>
                    <div className="relative mt-4 h-1 w-24 bg-accent"></div>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS_DATA.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
