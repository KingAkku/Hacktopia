import React from 'react';

const BubbleBackground: React.FC = () => {
  const bubbles = Array.from({ length: 25 });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {bubbles.map((_, i) => {
        const size = Math.random() * (150 - 20) + 20; // 20px to 150px
        const style: React.CSSProperties = {
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 25}s`,
          animationDuration: `${Math.random() * 15 + 15}s`, // 15s to 30s duration
        };
        const colorClass = [
          'bg-green-200/30',
          'bg-teal-200/30',
          'bg-emerald-200/30',
        ][i % 3];

        return (
          <div
            key={i}
            className={`absolute bottom-[-150px] rounded-full animate-bubble ${colorClass}`}
            style={style}
          />
        );
      })}
    </div>
  );
};

export default BubbleBackground;