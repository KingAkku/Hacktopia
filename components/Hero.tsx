import React from 'react';
import Countdown from './Countdown';
import SplitText from './SplitText';
import ShinyText from './ShinyText';
import CalendarIcon from './icons/CalendarIcon';
import LocationIcon from './icons/LocationIcon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SplitText
          tag="h1"
          text="Welcome to CodeFest 2024"
          className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-4"
          splitType="words"
          from={{ opacity: 0, y: 50, scale: 0.8 }}
          to={{ opacity: 1, y: 0, scale: 1 }}
          duration={0.8}
          delay={50}
          ease="back.out(1.7)"
        />
        <SplitText
          tag="p"
          text="Innovate. Collaborate. Create. The future is in your hands."
          className="text-lg md:text-2xl text-gray-600 mb-8"
          splitType="words"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          delay={20}
          duration={0.5}
          ease="power2.out"
        />
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-12 text-gray-700">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-green-500" />
            <span className="font-semibold">October 25-27, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <LocationIcon className="w-6 h-6 text-green-500" />
            <span className="font-semibold">Innovation Hub, Tech Valley</span>
          </div>
        </div>
        
        <div className="mb-12">
          <a
            href="#register"
            className="bg-green-500 text-white font-bold py-4 px-10 text-lg rounded-full hover:bg-green-600 transition-all transform hover:scale-105 inline-block"
          >
            <ShinyText>Join the Challenge</ShinyText>
          </a>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Event Starts In</h3>
          <Countdown targetDate="2024-10-25T09:00:00" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
