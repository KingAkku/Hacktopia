import React from 'react';
import Countdown from './Countdown';
import SplitText from './SplitText';
import ShinyText from './ShinyText';
import CalendarIcon from './icons/CalendarIcon';
import LocationIcon from './icons/LocationIcon';

const Hero: React.FC = () => {
  const eventDate = "2025-09-25T16:00:00";

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      <div className="hero-background-grid"></div>
      <div className="relative z-10 container mx-auto px-5">
        <div className="mb-8 text-center">
          <SplitText
            tag="h1"
            text="Hacktopia"
            className="md:text-9xl font-bold hero-title-hacktopia"
            splitType="words"
            triggerOnScroll={false}
          />
        </div>
        <div className="mb-8 text-xl md:text-2xl text-gray-300 text-center">
            <ShinyText>
                Innovate. Collaborate. Create.
            </ShinyText>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:justify-center items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 text-gray-400 mb-12">
          <div className="flex items-start sm:items-center space-x-2">
            <CalendarIcon className="w-6 h-6 text-violet-400 flex-shrink-0 mt-1 sm:mt-0" />
            <span>September 25 & 26, 2025</span>
          </div>
          <div className="flex items-start sm:items-center space-x-2">
            <LocationIcon className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1 sm:mt-0" />
            <span>College of Engineering, Pathanapuram</span>
          </div>
        </div>
        
        <div className="mb-12 text-center">
            <a href="https://forms.gle/bbWdM79m3G3LAuar8" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transform transition-transform duration-300 shadow-2xl shadow-violet-500/30">
              Register Your Spot!
            </a>
        </div>
        
        <Countdown targetDate={eventDate} />
      </div>
    </section>
  );
};

export default Hero;