import React from 'react';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import LocationIcon from './icons/LocationIcon';
import PhoneIcon from './icons/PhoneIcon';

const Footer: React.FC = () => {
  const quickLinks = ['About', 'Guidelines', 'Schedule', 'Prize Pool', 'FAQ'];
  const socialLinks = [
    { href: '#', icon: <TwitterIcon className="w-6 h-6" />, name: 'Twitter' },
    { href: 'https://www.linkedin.com/school/college-of-engineering-pathanapuram/posts/?feedView=all', icon: <LinkedInIcon className="w-6 h-6" />, name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 py-16 text-slate-600">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-start">
            <a href="#" aria-label="Hacktopia Home">
              <img src="/Hacktopia.svg" alt="Hacktopia Logo" className="h-9" />
            </a>
            <p className="mt-4 text-sm max-w-xs">
              A launchpad for student innovators to tackle the challenges that matter most to them.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-green-100 hover:text-green-500 transition-colors"
                  aria-label={`Follow us on ${link.name}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-base text-slate-900">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="text-sm hover:text-green-500 transition-colors hover:underline underline-offset-4">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div>
            <h3 className="font-bold text-base text-slate-900">Get in Touch</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <LocationIcon className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>College of Engineering, Pathanapuram</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <div>
                  <a href="tel:8138950611" className="hover:text-green-500 transition-colors">Devika: 8138950611</a><br/>
                  <a href="tel:7736011978" className="hover:text-green-500 transition-colors">Aswin C S: 7736011978</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Registration */}
          <div className="bg-green-50 p-6 rounded-2xl border border-green-200/80">
             <h3 className="font-bold text-base text-slate-900">Ready to Innovate?</h3>
             <p className="mt-2 text-sm">
                Registrations close soon. Secure your spot and get ready to build something amazing.
             </p>
             <a href="https://forms.gle/bbWdM79m3G3LAuar8" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-green-500/30">
                Register Now
             </a>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 py-5 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Hacktopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
