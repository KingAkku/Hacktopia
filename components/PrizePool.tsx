import React from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import FirstPlaceIcon from './icons/FirstPlaceIcon';
import SecondPlaceIcon from './icons/SecondPlaceIcon';
import ThirdPlaceIcon from './icons/ThirdPlaceIcon';

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

  const prizes = {
    first: { amount: '₹3000', height: 'h-64', Icon: FirstPlaceIcon, className: 'bg-gradient-to-t from-yellow-400 to-amber-300 text-slate-800' },
    second: { amount: '₹1500', height: 'h-48', Icon: SecondPlaceIcon, className: 'bg-gradient-to-t from-slate-300 to-slate-100 text-slate-800' },
    third: { amount: '₹500', height: 'h-40', Icon: ThirdPlaceIcon, className: 'bg-gradient-to-t from-amber-600 to-amber-400 text-white' }
  };

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
            {/* 2nd Place */}
            <div className={`prize-step flex-1 ${prizes.second.height} flex flex-col justify-center items-center p-6 rounded-t-2xl shadow-2xl ${prizes.second.className}`}>
                <prizes.second.Icon className="w-20 h-20 mb-2" />
                <span className="text-xl md:text-2xl font-semibold mt-2">{prizes.second.amount}</span>
            </div>
            {/* 1st Place */}
             <div className={`prize-step flex-1 ${prizes.first.height} flex flex-col justify-center items-center p-6 rounded-t-2xl shadow-2xl ${prizes.first.className}`}>
                <prizes.first.Icon className="w-24 h-24 mb-2" />
                <span className="text-xl md:text-2xl font-semibold mt-2">{prizes.first.amount}</span>
            </div>
            {/* 3rd Place */}
             <div className={`prize-step flex-1 ${prizes.third.height} flex flex-col justify-center items-center p-6 rounded-t-2xl shadow-2xl ${prizes.third.className}`}>
                <prizes.third.Icon className="w-16 h-16 mb-2" />
                <span className="text-xl md:text-2xl font-semibold mt-2">{prizes.third.amount}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrizePool;