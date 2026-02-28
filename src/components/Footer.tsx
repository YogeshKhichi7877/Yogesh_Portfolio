import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-to-t from-gray-900 via-black to-black border-t border-gray-800/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/yk_logo2.png" 
                alt="YK Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="text-xl font-bold text-white">
                  YOGESH
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> Dev</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creative Developer crafting digital experiences with modern technologies and innovative design solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Education', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>yogeshkhinchi7877@gmail.com</p>
              <p>+91 78770 80701</p>
              <p>Surat, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 YOGESH Khinchi. Built with React, Three.js, GSAP & Tailwind CSS.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
            <a href="/sitemap.xml" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-grid)" />
      </svg>
    </footer>
  );
};

export default Footer;