import React from 'react';

const BubbleBackground: React.FC = () => {
  const bubbles = Array.from({ length: 20 });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {bubbles.map((_, i) => {
        const size = Math.random() * 80 + 20; // 20px to 100px
        const style: React.CSSProperties = {
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 15}s`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          backgroundColor: `rgba(34, 197, 94, ${Math.random() * 0.15 + 0.05})`,
        };
        return <div key={i} className="bubble" style={style} />;
      })}
    </div>
  );
};

export default BubbleBackground;