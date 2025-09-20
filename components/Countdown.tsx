import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return null;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="text-3xl font-bold text-violet-400">The event has started!</div>;
  }

  const timeParts = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center items-center space-x-4 md:space-x-8">
      {timeParts.map(({ label, value }) => (
        <div key={label} className="text-center p-4 rounded-2xl bg-black/50 shadow-lg w-24 h-24 md:w-32 md:h-32 flex flex-col justify-center border border-purple-800/40 backdrop-blur-sm">
          <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
            {String(value).padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;