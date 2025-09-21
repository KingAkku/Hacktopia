import React from 'react';

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.324l5.584.412a.563.563 0 01.31.95l-4.225 3.548a.563.563 0 00-.162.533l1.285 5.247a.562.562 0 01-.84.61l-4.996-2.92a.563.563 0 00-.527 0l-4.996 2.92a.562.562 0 01-.84-.61l1.285-5.247a.563.563 0 00-.162-.533L2.31 9.284a.563.563 0 01.31-.95l5.584-.412a.563.563 0 00.475-.324L11.48 3.5z" />
  </svg>
);

export default StarIcon;