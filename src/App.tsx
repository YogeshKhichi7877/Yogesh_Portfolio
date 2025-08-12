import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { initThreeJS } from './lib/three-setup';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  useSmoothScroll();

  // Controlled loading state for showing loader first
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Three.js scenes after component mounts
    const cleanup = initThreeJS();

    // Simulate loading delay or replace with real data loading logic
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loader
    
    // Clean up timers and effects on unmount
    return () => {
      cleanup();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
    <CustomCursor />
    <div className="bg-black text-white overflow-x-hidden">
      {/* Show Loader while loading */}
      {isLoading && <Loader isLoading={isLoading} />}
      
      {/* Show main app only once loading is finished */}
      {!isLoading && (
        <>
          <Navigation />
          <main>
            <section id="home">
              <Hero />
            </section>

            <section id="about">
              <About />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="education">
              <Education />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </main>

          {/* Footer */}
          <footer className="py-12 px-4 bg-gradient-to-t from-gray-900 via-black to-black border-t border-gray-800/50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Brand */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Y</span>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">
                        YOGESH
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                          Dev
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Creative Developer crafting digital experiences with modern technologies and innovative design solutions.
                  </p>
                </div>

                {/* Quick Links */}
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

                {/* Contact Info */}
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
                  © 2024 YOGESH Khinchi. Built with React, Three.js, GSAP & Tailwind CSS.
                </p>
                <div className="flex gap-4 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
                </div>
              </div>
            </div>

            {/* SVG Background Pattern */}
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
        </>
      )}
    </div>
    </>
  );
};

export default App;
