import React from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const PrizePool: React.FC = () => {
    const container = React.useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from('.prize-step', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            opacity: 0,
            y: 100,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
        });
    }, { scope: container });

  const prizes = [
    { rank: '2nd', amount: '₹1500', height: 'h-48' },
    { rank: '1st', amount: '₹2500', height: 'h-64' },
    { rank: '3rd', amount: '₹1000', height: 'h-40' },
  ];

  return (
    <section id="prizepool" ref={container} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <h2 className="text-5xl font-bold text-slate-900">
              Prize Pool
            </h2>
          </div>
          <div className="text-lg text-slate-600 max-w-3xl mx-auto">
            <p className="leading-relaxed">
              Showcase your skills and compete for cash prizes. All participants who submit a valid project will receive a certificate of participation.
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-20">
          <div className="flex justify-center items-end gap-2 md:gap-4">
            {/* Reorder for visual stair effect */}
            <div className={`prize-step flex-1 ${prizes[0].height} flex flex-col justify-center items-center p-6 rounded-t-2xl text-slate-800 shadow-2xl bg-gradient-to-t from-slate-100 to-white`}>
                <span className="text-4xl md:text-5xl font-bold">{prizes[0].rank}</span>
                <span className="text-xl md:text-2xl font-semibold mt-2">{prizes[0].amount}</span>
            </div>
             <div className={`prize-step flex-1 ${prizes[1].height} flex flex-col justify-center items-center p-6 rounded-t-2xl text-white shadow-2xl bg-gradient-to-t from-green-500 to-teal-400`}>
                <span className="text-4xl md:text-5xl font-bold">{prizes[1].rank}</span>
                <span className="text-xl md:text-2xl font-semibold mt-2">{prizes[1].amount}</span>
            </div>
             <div className={`prize-step flex-1 ${prizes[2].height} flex flex-col justify-center items-center p-6 rounded-t-2xl text-slate-800 shadow-2xl bg-gradient-to-t from-slate-100 to-white`}>
                <span className="text-4xl md:text-5xl font-bold">{prizes[2].rank}</span>
                <span className="text-xl md:text-2xl font-semibold mt-2">{prizes[2].amount}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrizePool;