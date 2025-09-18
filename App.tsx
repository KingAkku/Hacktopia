import React, { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Prizes from './components/Prizes';
import Judges from './components/Judges';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BubbleBackground from './components/BubbleBackground';

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
    <div className="bg-white text-gray-800 relative overflow-x-hidden">
      <BubbleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Schedule />
          <Prizes />
          <Judges />
          <Sponsors />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;