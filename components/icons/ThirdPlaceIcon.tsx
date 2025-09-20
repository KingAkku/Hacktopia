import React from 'react';

const ThirdPlaceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 2L5 6L9 10" stroke="#8B5E34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 2L19 6L15 10" stroke="#8B5E34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="15" r="7" fill="#CD7F32" stroke="#8B4513" strokeWidth="2"/>
    <text x="12" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#8B4513">3rd</text>
  </svg>
);
export default ThirdPlaceIcon;