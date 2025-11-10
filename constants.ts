
import React from 'react';
import { PaletteIcon } from './components/icons/PaletteIcon';
import { GearIcon } from './components/icons/GearIcon';
import { CloudIcon } from './components/icons/CloudIcon';
import { DatabaseIcon } from './components/icons/DatabaseIcon';
import { WrenchIcon } from './components/icons/WrenchIcon';
import { RocketIcon } from './components/icons/RocketIcon';
import { MobileIcon } from './components/icons/MobileIcon';

export interface Project {
  title: string;
  tagline: string;
  category: string;
  image: string;
  span: string;
  link: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Full Stack DevOps Pipeline',
    tagline: 'Integrated DevOps tooling with a full-stack app, featuring Kubernetes, Helm, Jenkins, and SonarQube for automated CI/CD.',
    category: 'DevOps & Full Stack',
    image: 'https://images.unsplash.com/photo-1542382257-80dedb725088?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    link: 'https://github.com/PrinceShawtz/todos-multi-devops',
  },
  {
    title: 'Reusable IaC Modules for Azure',
    tagline: 'Built modular Terraform modules for provisioning Azure resources, ensuring consistent, version-controlled infrastructure.',
    category: 'Cloud & IaC',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1',
    link: 'https://github.com/PrinceShawtz/Terraform-Azure',
  },
  {
    title: 'Social Media Blog API',
    tagline: 'Designed and built a RESTful API backend using Java and Spring Boot, featuring authentication, CRUD, and layered architecture.',
    category: 'Backend Development',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1',
    link: 'https://github.com/PrinceShawtz/PrinceShawtz-pep-spring-project',
  },
    {
    title: 'Mobile Real Estate App',
    tagline: 'A mobile-first real estate listing app built with Flutter and a REST API, focused on clean architecture and scalability.',
    category: 'Mobile & Full Stack',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1',
    link: 'https://github.com/PrinceShawtz/Real-estate-app',
  },
  {
    title: 'AI-Powered News Validator',
    tagline: 'A full-stack application that leverages AI/ML to detect and classify fake news articles, featuring a React frontend and Python backend.',
    category: 'Full Stack & AI',
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    link: 'https://github.com/PrinceShawtz/News-Validator',
  },
  {
    title: 'Authenticated Task Manager',
    tagline: 'A complete full-stack To-Do application featuring user authentication, database integration, and a responsive React UI.',
    category: 'Full Stack Web',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1',
    link: 'https://github.com/PrinceShawtz/Full-stack-todo-app-with-user-login-and-database/tree/main',
  },
  {
    title: 'Interactive Portfolio Website',
    tagline: 'This very site, built with React, TypeScript, and Tailwind CSS. Designed for a high-impact, tech-forward aesthetic with custom animations.',
    category: 'Frontend & Design',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1',
    link: '#',
  },
];

export interface SkillCategory {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  skills: string[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Front-End',
    Icon: PaletteIcon,
    skills: ['React', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS'],
  },
  {
    title: 'Back-End',
    Icon: GearIcon,
    skills: ['Node.js', 'Java', '.NET', 'Spring Boot', 'Python', 'Go (Golang)', 'GraphQL', 'Microservices'],
  },
  {
    title: 'Mobile Development',
    Icon: MobileIcon,
    skills: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Dart', 'Firebase'],
  },
  {
    title: 'Cloud & DevOps',
    Icon: CloudIcon,
    skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'Jenkins', 'Terraform', 'ARM Templates', 'Ansible', 'IaC', 'Prometheus', 'Grafana'],
  },
  {
    title: 'Databases',
    Icon: DatabaseIcon,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Microsoft SQL', 'PL/SQL', 'Informatica'],
  },
  {
    title: 'Version Control',
    Icon: WrenchIcon,
    skills: ['Git', 'GitHub', 'GitLab', 'CI/CD'],
  },
  {
    title: 'Other',
    Icon: RocketIcon,
    skills: ['REST APIs', 'System Design', 'AI/ML', 'Automation', 'Agile/Scrum'],
  },
];


export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export const EXPERIENCE_DATA: Experience[] = [
    {
        role: 'Cloud & DevOps Engineer',
        company: 'Tech Consulting',
        duration: 'July 2024 - Present',
        description: [
            'Built and automated CI/CD pipelines using Azure DevOps, Jenkins, Helm, and Terraform, streamlining deployments.',
            'Deployed and managed Kubernetes (AKS/EKS) clusters with Istio service mesh, integrating monitoring via Prometheus & Grafana.',
            'Automated infrastructure provisioning with Terraform & Ansible, cutting setup time by 50%.',
            'Enhanced security posture with Azure AD, Key Vault, Sentinel, RBAC, and MFA, and implemented governance policies.',
        ],
    },
    {
        role: 'Backend Developer',
        company: 'Revature',
        duration: 'January 2021 - July 2023',
        description: [
            'Built RESTful APIs using Java and Spring Boot with TDD, improving backend reliability and reducing post-deployment bugs by 45%.',
            'Collaborated in agile sprints to ship features 20% faster using Git, Maven, and code reviews.',
            'Wrote unit and integration tests with JUnit and Mockito, achieving 85% test coverage and improving code maintainability.',
        ],
    },
    {
        role: 'Software Developer',
        company: 'Lunar Launch Labs (L^3)',
        duration: 'June 2018 - December 2021',
        description: [
            'Designed and implemented dynamic web interfaces with React, improving user interaction and engagement by 25%.',
            'Automated deployment and testing processes via CI/CD pipelines using Jenkins and GitLab CI, reducing manual errors by 40%.',
            'Deployed full-stack applications across AWS, Azure, and Google Cloud, enhancing system availability and scalability.',
        ],
    },
];