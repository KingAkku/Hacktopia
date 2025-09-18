import React from 'react';

const TrophyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9 9 0 1 1 9 0Zm-9 0a9 9 0 0 0 9 0m-9 0h9m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5V14.25a1.125 1.125 0 0 0-1.125-1.125H18.75m-1.125 6.375v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a3.375 3.375 0 0 0-3.375 3.375v1.875m9-3.375a3.375 3.375 0 0 0-3.375-3.375h-1.5a3.375 3.375 0 0 0-3.375 3.375m9 3.375h3.375a1.125 1.125 0 0 0 1.125-1.125V14.25" />
    </svg>
);

export default TrophyIcon;
