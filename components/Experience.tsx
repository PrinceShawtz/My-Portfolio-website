import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Experience: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="experience" ref={ref} className="py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Professional Experience</h2>
                    <div className="relative mt-4 h-1 w-24 bg-accent"></div>
                </div>
                <div className="relative mt-16">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-700/50" aria-hidden="true"></div>
                    <div className="space-y-12">
                        {EXPERIENCE_DATA.map((job, index) => (
                            <div key={index} className={`relative pl-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                                {/* Timeline dot */}
                                <div className="absolute left-4 top-1 -translate-x-1/2 h-4 w-4 rounded-full bg-accent border-4 border-black"></div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-accent">{job.duration}</p>
                                <h3 className="mt-1 text-2xl font-bold text-white">{job.role}</h3>
                                <p className="mt-1 text-lg text-gray-400">{job.company}</p>
                                <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                                    {job.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;