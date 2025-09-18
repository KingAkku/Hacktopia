
import React from 'react';
import Countdown from './Countdown';
import SplitText from './SplitText';
import ShinyText from './ShinyText';
import CalendarIcon from './icons/CalendarIcon';
import LocationIcon from './icons/LocationIcon';

const Hero: React.FC = () => {
  const eventDate = "2025-10-26T09:00:00";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <SplitText
            tag="h1"
            text="Hacktopia 2025"
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
            splitType="words"
          />
        </div>
        <div className="mb-8 text-xl md:text-2xl text-gray-700">
            <ShinyText className="bg-gradient-to-r from-purple-600 to-blue-500">
                Innovate. Collaborate. Create.
            </ShinyText>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 text-gray-600 mb-12">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="w-6 h-6 text-purple-500" />
            <span>October 26, 2025</span>
          </div>
          <div className="flex items-center space-x-2">
            <LocationIcon className="w-6 h-6 text-blue-500" />
            <span>College of Engineering, Pathanapuram</span>
          </div>
        </div>
        
        <div className="mb-12">
            <a href="#register" className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transform transition-transform duration-300 shadow-2xl">
              Register Your Spot!
            </a>
        </div>
        
        <Countdown targetDate={eventDate} />
      </div>
    </section>
  );
};

export default Hero;
