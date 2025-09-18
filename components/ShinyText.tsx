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
          linear-gradient(120deg, transparent 30%, white 50%, transparent 70%),
          linear-gradient(to right, #8b5cf6, #3b82f6)
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
