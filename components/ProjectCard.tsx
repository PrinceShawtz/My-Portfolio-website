import React from 'react';
import { Project } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GithubIcon } from './icons/GithubIcon';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLAnchorElement>({ threshold: 0.2, triggerOnce: true });

  const { title, tagline, category, image, span, link } = project;

  return (
    <a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/20 transition-all duration-700 ease-out ${span} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:-translate-y-2 hover:shadow-accent`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <GithubIcon className="absolute top-4 right-4 z-30 h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
      <div className="absolute bottom-0 left-0 z-20 p-6 transition-all duration-300 group-hover:bg-black/20 w-full">
        <span className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">{category}</span>
        <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-accent">{title}</h3>
        <p className="mt-2 text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-h-0 group-hover:max-h-40">{tagline}</p>
      </div>
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{boxShadow: 'inset 0 0 100px 20px rgba(0,0,0,0.7)'}}></div>
      <div className="absolute inset-0 z-0 opacity-0 ring-2 ring-accent transition-opacity duration-500 group-hover:opacity-100"></div>
    </a>
  );
};

export default ProjectCard;