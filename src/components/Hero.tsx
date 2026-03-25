import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Hero3D from './Hero3D';

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

    // Hero entrance animation - Modernized
    tl.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0, filter: 'blur(10px)' },
      { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power4.out' }
    )
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' },
        '-=1'
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(
        (ctaRef.current ? Array.from(ctaRef.current.children) : []),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        (socialRef.current ? Array.from(socialRef.current.children) : []),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
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
    // Create an anchor element to download the PDF
    const element = document.createElement('a');
    element.href = '/Yogesh_Khinchi_Resume_v3.pdf';
    element.download = 'Yogesh_Khinchi_Resume.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0514]"
    >
      {/* Three.js Canvas Container */}
      <Hero3D />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pt-32 pb-12 sm:pt-16 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 w-full min-h-screen lg:min-h-auto pt-8 lg:pt-0">
          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center items-center order-1 lg:order-2 w-full md:w-auto">
            <div className="relative flex justify-center items-center">
              <div className="rounded-full overflow-hidden border-8 border-white shadow-2xl backdrop-blur-sm bg-gradient-to-br from-blue-500/20 to-purple-600/20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 transition-all duration-300">
                <img
                   src="/portfolio .jpg"
                   alt="YOGESH Khinchi - Creative Developer"
                   className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-2 sm:-inset-4 rounded-full border-4 border-white animate-spin-slow shadow-[0_0_30px_rgba(56,189,248,0.5)]"></div>
              <div className="absolute -inset-4 sm:-inset-8 rounded-full border border-purple-500/20 animate-spin-reverse"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right max-w-2xl order-2 lg:order-1">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl relative z-30"
            >
              Hi, I'm .....
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 animate-gradient drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] px-1">
                YOGESH KHINCHI
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0 font-medium drop-shadow-md relative z-30"
            >
              Driven by curiosity and creativity, I craft responsive designs that not only look great but also deliver seamless performance across all devices ..
            </p>

            <div ref={ctaRef} className="flex justify-center lg:justify-end mb-6 sm:mb-8 px-2 sm:px-0">
              <button
                onClick={downloadResume}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                className="group px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base shadow-xl relative z-30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                <a
                  className="flex items-center gap-2 relative z-10"
                  style={{ textDecoration: 'none' }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" />
                  <span>Download CV</span>
                </a>
              </button>
            </div>

            {/* Social Links */}
            <div ref={socialRef} className="flex gap-3 sm:gap-4 justify-center lg:justify-end px-2 sm:px-0 relative z-30">
              <a
                href="#"
                className="p-2 sm:p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
                onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 })}
                onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/yogesh-khinchi-1103j?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="p-2 sm:p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
                onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 })}
                onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:ui24s85@iiitsurat.ac.in"
                className="p-2 sm:p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
                onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 })}
                onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
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
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-sm font-bold tracking-widest uppercase">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Custom SVG Background Pattern */}
      <svg
        className="absolute inset-0 w-full h-full z-5 pointer-events-none opacity-50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(0,0,0,0.05)"
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
