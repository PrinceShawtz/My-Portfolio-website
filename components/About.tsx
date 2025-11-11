
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="about" ref={ref} className="overflow-hidden bg-gray-900/50 py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="group relative h-96 w-full max-w-lg mx-auto lg:mx-0 lg:h-[32rem] border-2 border-accent/30 p-4">
                        <div className="absolute inset-2 bg-gray-800 overflow-hidden">
                             <img
                                src="https://lh3.googleusercontent.com/d/1DNl5Nswl1DGHEYxLghVAB2Wz9V1LWztD"
                                alt="Professional headshot of Eseroghene Okobiah"
                                className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                             />
                        </div>
                        <div className="absolute -top-2 -left-2 h-16 w-16 border-l-2 border-t-2 border-accent"></div>
                        <div className="absolute -bottom-2 -right-2 h-16 w-16 border-r-2 border-b-2 border-accent"></div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">About Me</h2>
                         <div className="relative mt-4 h-1 w-24 bg-accent"></div>
                        <p className="mt-8 text-lg leading-8 text-gray-300">
                           I am a multifaceted Cloud & DevOps Engineer and Full-Stack Developer dedicated to building high-performance, scalable digital ecosystems. My proficiency ranges from creating dynamic user interfaces with React and TypeScript to architecting robust back-end services and APIs using Java, .NET, and Node.js.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                           I excel in automating infrastructure and deployment pipelines with cutting-edge tools like Kubernetes, Terraform, and Jenkins across AWS, Azure, and GCP. My mission is to translate complex business requirements into elegant, efficient, and future-proof technological solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
