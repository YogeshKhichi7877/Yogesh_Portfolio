import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current || !letterRef.current) return;

    if (isLoading) {
      // Show loader with animation
      gsap.set(loaderRef.current, { display: 'flex' });
      
      const tl = gsap.timeline();
      
      // Animate loader entrance
      tl.fromTo(loaderRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      )
      .fromTo(letterRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.1"
      );

      // Continuous Y letter animation
      gsap.to(letterRef.current, {
        scale: 1.1,
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

      // Animate particles
      const particles = particlesRef.current?.children;
      if (particles) {
        gsap.fromTo(particles,
          { scale: 0, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.5, 
            stagger: 0.1, 
            ease: "power2.out",
            delay: 0.5
          }
        );

        // Floating animation for particles
        gsap.to(particles, {
          y: -20,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.2
        });
      }
    } else {
      // Hide loader with animation
      const tl = gsap.timeline({
        onComplete: () => {
          if (loaderRef.current) {
            gsap.set(loaderRef.current, { display: 'none' });
          }
        }
      });

      tl.to(letterRef.current, {
        scale: 1.2,
        rotation: 360,
        duration: 0.5,
        ease: "power2.out"
      })
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.2");
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      style={{ display: isLoading ? 'flex' : 'none' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Y Letter */}
        <div 
          ref={letterRef}
          className="relative mb-8"
        >
          <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            Y
          </div>
          
          {/* Glowing effect */}
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-blue-400/20 blur-lg">
            Y
          </div>
          
          {/* Border effect */}
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600 opacity-50">
            Y
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Loading<span className="loading-dots"></span>
          </h2>
          <p className="text-gray-400 text-lg">
            Preparing your experience
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-8">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse loading-bar"></div>
        </div>

        {/* Floating Particles */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${20 + (i * 5)}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2 animate-spin-slow origin-bottom"></div>
            <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-400 rounded-full -translate-y-1/2 animate-spin-reverse origin-left"></div>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-pink-400 rounded-full -translate-x-1/2 animate-spin-slow origin-top"></div>
            <div className="absolute top-1/2 left-0 w-2 h-2 bg-cyan-400 rounded-full -translate-y-1/2 animate-spin-reverse origin-right"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="loader-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#loader-grid)" />
      </svg>
    </div>
  );
};

export default Loader;