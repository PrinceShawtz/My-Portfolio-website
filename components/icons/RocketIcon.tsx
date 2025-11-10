import React from 'react';

export const RocketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.64-1.25.3-3.1-.85-4.25-1.15-1.15-3-1.49-4.25-.85-.81-.65-2.27-.66-3.11.05Z"></path>
    <path d="m12 15-3-3a9 9 0 0 1 3-7 9 9 0 0 1 7 3l-3 3"></path>
    <path d="m18 15-3-3"></path>
  </svg>
);