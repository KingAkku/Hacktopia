
import React from 'react';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Hacktopia 2025</h3>
            <p className="text-gray-500">College of Engineering, Pathanapuram</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              <TwitterIcon className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              <LinkedInIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8 pt-6 border-t border-gray-100">
          <p>&copy; {new Date().getFullYear()} Hacktopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
