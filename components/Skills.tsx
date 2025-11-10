import React from 'react';
import { SKILLS_DATA } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SkillChip from './SkillChip';

const Skills: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="skills" ref={ref} className="py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`text-center transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Skills & Tools</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
                        The technologies I work with to bring digital products to life.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {SKILLS_DATA.map((category, index) => {
                        const { Icon, title, skills } = category;
                        return (
                             <div 
                                key={title}
                                className={`rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-x-4">
                                     <div className="inline-flex rounded-lg bg-accent/10 p-3">
                                        <Icon className="h-8 w-8 text-accent" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <SkillChip key={skill} skill={skill} />
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
