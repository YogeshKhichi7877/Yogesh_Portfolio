import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero entrance animation
    tl.fromTo(
      imageRef.current,
      { scale: 0, rotation: 180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.5, ease: 'back.out(1.7)' }
    )
      .fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
        '-=1'
      )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(
        (ctaRef.current ? Array.from(ctaRef.current.children) : []),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        (socialRef.current ? Array.from(socialRef.current.children) : []),
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        scrollIndicatorRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.2'
      );

    // Parallax effect
    gsap.to(heroRef.current, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Floating animation for profile image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
    });
  }, []);

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const downloadResume = () => {
    const resumeContent = `
Yogesh Khinchi - Resume

Full Stack Developer & UI/UX Designer

Contact: yogesh.khinchi@email.com
LinkedIn: linkedin.com/in/yogesh-khinchi
GitHub: github.com/yogesh-khinchi

Skills:
- React, TypeScript, Node.js
- Three.js, GSAP, CSS3
- MongoDB, PostgreSQL
- UI/UX Design, Figma

Education:
- Master of Computer Science - IIT surat
- Bachelor of Computer Science - Delhi University

Projects:
- Interactive Portfolio Website
- E-commerce Platform
- 3D Visualization Tool
    `;
    
    localStorage.setItem('yogesh-resume', resumeContent);
    
    const element = document.createElement('a');
    const file = new Blob([resumeContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Yogesh_Khinchi_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[160vh] sm:min-h-[120vh] md:min-h-[120vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Three.js Canvas Container */}
      <div id="threejs-hero" className="absolute inset-0 z-0">
        <canvas id="hero-canvas" className="w-full h-[110vh]"></canvas>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full min-h-screen">
          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center items-center mt-[30vh] md:mt-[20vw] pt-6 md:pt-[20vw] lg:pt-0 w-full md:w-auto">
            <div className="relative flex justify-center items-center">
              <div className="rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-blue-500/20 to-purple-600/20 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 transition-all duration-300">
                <img
                   src="/portfolio .jpg"
                   alt="YOGESH Khinchi - Creative Developer"
                   className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-2 sm:-inset-4 rounded-full border border-white/10 animate-spin-slow"></div>
              <div className="absolute -inset-4 sm:-inset-8 rounded-full border border-purple-500/20 animate-spin-reverse"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right max-w-2xl pt-[7vw]">
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Hi, I'm .....
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
                YOGESH KHINCHI
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Driven by curiosity and creativity, I craft responsive designs that not only look great but also deliver seamless performance across all devices ..
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-end">
              <button
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
              <button
                onClick={downloadResume}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                className="group px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <a
                  className="flex items-center gap-2 text-white"
                  style={{ textDecoration: 'none' }}
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Download CV</span>
                </a>
              </button>
            </div>

            {/* Social Links */}
            <div ref={socialRef} className="flex gap-4 justify-center lg:justify-end">
              <a
                href="#"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 })}
                onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 })}
                onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:ui24s85@iiitsurat.ac.in"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 })}
                onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Custom SVG Background Pattern */}
      <svg
        className="absolute inset-0 w-full h-full z-5 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </section>
  );
};

export default Hero;
