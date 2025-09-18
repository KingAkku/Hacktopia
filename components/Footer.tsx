import React from 'react';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center">
          <div className="text-left mb-0">
            <h3 className="text-2xl font-bold">Code<span className="text-green-400">Fest</span> 2024</h3>
            <p className="text-gray-400">Innovate. Collaborate. Create.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <LinkedInIcon className="w-6 h-6" />
            </a>
            {/* Add more social icons here */}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} CodeFest. All rights reserved.</p>
          <p className="mt-1">Designed with ❤️ for the innovators of tomorrow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;