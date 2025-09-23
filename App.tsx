import React, { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Sponsors from './components/Sponsors';
import Guidelines from './components/Guidelines';
import MoreInfo from './components/MoreInfo';
import Schedule from './components/Schedule';
import PrizePool from './components/PrizePool';
import Benefits from './components/Benefits';
import Coordinators from './components/Judges';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
      header: '[data-scroll-header]',
      offset: 60,
    });
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="bg-white text-slate-700 relative overflow-x-hidden">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Sponsors />
          <Guidelines />
          <Schedule />
          <PrizePool />
          <Benefits />
          <Coordinators />
          <MoreInfo />
          <Location />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;