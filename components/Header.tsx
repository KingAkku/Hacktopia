import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Sponsors', 'Guidelines', 'Schedule', 'Prize Pool', 'Benefits', 'Coordinators', 'More Info', 'Location', 'FAQ'];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-slate-200/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="block" aria-label="Hacktopia Home">
            <img src="/Hacktopia.svg" alt="Hacktopia Logo" className="h-8" />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="text-slate-600 hover:text-green-500 transition-colors font-medium">
                {link}
              </a>
            ))}
          </div>
          <a href="" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg">
            Register Now
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-slate-200/95 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="container mx-auto px-6 pt-28 flex flex-col items-center space-y-8">
              {navLinks.map(link => (
                  <a 
                    key={link} 
                    href={`#${link.toLowerCase().replace(/\s+/g, '')}`} 
                    className="text-2xl text-slate-800 hover:text-green-500 transition-colors font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                      {link}
                  </a>
              ))}
              <a 
                href="https://forms.gle/bbWdM79m3G3LAuar8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transform transition-transform duration-300 shadow-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                  Register Now
              </a>
          </div>
      </div>
    </>
  );
};

export default Header;
