
import React from 'react';
import BubbleBackground from './components/BubbleBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Judges from './components/Judges';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 relative overflow-x-hidden">
      <BubbleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Schedule />
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
