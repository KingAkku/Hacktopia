import React from 'react';

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

const ShinyText: React.FC<ShinyTextProps> = ({ children, className = '', speed = 5 }) => {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(120deg, transparent 25%, #d1fae5 50%, transparent 75%),
          linear-gradient(to right, #22c55e, #14b8a6)
        `,
        backgroundSize: '200% 100%, 100% 100%',
        backgroundPosition: '200% 0, 0 0',
        backgroundRepeat: 'no-repeat',
        animation: `shine ${speed}s linear infinite`,
      }}
    >
      {children}
    </span>
  );
};

export default ShinyText;