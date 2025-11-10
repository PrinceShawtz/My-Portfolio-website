import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { ArrowUpIcon } from './icons/ArrowUpIcon';

const SocialLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-500 transition-colors duration-300 hover:text-accent"
    >
      {children}
    </a>
  );
};


const Footer: React.FC = () => {
  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Eseroghene Okobiah. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <SocialLink href="https://github.com/PrinceShawtz">
              <GithubIcon className="h-6 w-6" />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/eseroghene-okobiah-1b3885230">
              <LinkedinIcon className="h-6 w-6" />
            </SocialLink>
          </div>
          <a
            href="#"
            onClick={handleBackToTop}
            className="group flex items-center space-x-2 text-sm text-gray-500 transition-colors duration-300 hover:text-accent"
          >
            <span>Back to Top</span>
            <ArrowUpIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;