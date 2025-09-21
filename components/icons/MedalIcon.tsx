import React from 'react';

const MedalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 3v4.586a1 1 0 0 1-1.707.707L4 5"/>
    <path d="M15 3v4.586a1 1 0 0 0 1.707.707L20 5"/>
    <circle cx="12" cy="13" r="7"/>
  </svg>
);

export default MedalIcon;