
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { RibbonIcon } from './icons/RibbonIcon';
import { GraduationCapIcon } from './icons/GraduationCapIcon';
import { HeartIcon } from './icons/HeartIcon';

const statsData = [
  { Icon: BriefcaseIcon, value: '6+', label: 'Years Experience' },
  { Icon: RibbonIcon, value: '50+', label: 'Projects Completed' },
  { Icon: GraduationCapIcon, value: '10+', label: 'Certifications' },
  { Icon: HeartIcon, value: '30+', label: 'Happy Clients' },
];

const Stats: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1, triggerOnce: true });

    return (
        <section ref={ref} className="py-20 sm:py-24 bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border border-gray-800 bg-gray-900/50 p-8 text-center backdrop-blur-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <stat.Icon className="mx-auto h-12 w-12 text-accent" />
                            <p className="mt-4 text-5xl font-black text-white">{stat.value}</p>
                            <p className="mt-2 text-lg text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
