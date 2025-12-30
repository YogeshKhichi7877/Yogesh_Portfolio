// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Code2, Palette, Zap, Globe, Award, Users,  Heart } from 'lucide-react';


// gsap.registerPlugin(ScrollTrigger);

// const skills = [
//   { icon: Code2, title: "Frontend Development", desc: "React, TypeScript, Next.js, Vue.js", level: 90 },
//   { icon: Palette, title: "Backend development", desc: "Node.js, Express.js, MongoDB, MySQL", level: 78},
//   { icon: Zap, title: "Performance Optimization", desc: "Web Vitals, Lighthouse, Bundle Analysis", level: 70 },
//   { icon: Globe, title: "3D & Animation", desc: "Three.js, GSAP , Blender", level: 75 }
// ];

// const stats = [
//   { icon: Award, value: 12, label: "Projects Completed", suffix: "+" },
//   { icon: Users, value: 5, label: "Happy Clients", suffix: "+" },
//   { icon: Code2, value: 1200, label: "Hours of Coding", suffix: "+" },
//   { icon: Heart, value: 2, label: "Years Experience", suffix: "" }
// ];

// const About: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const skillsRef = useRef<Array<HTMLDivElement|null>>([]);
//   const statsRef = useRef<Array<HTMLDivElement|null>>([]);
//   const imageRef = useRef<HTMLDivElement>(null);

//   // For stat counter animation
//   const [statCounts, setStatCounts] = useState(stats.map(() => 0));

//   useEffect(() => {
//     // Entrance timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%",
//         end: "bottom 20%",
//         toggleActions: "play none none reverse"
//       }
//     });

//     tl.fromTo(titleRef.current,
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
//     )
//     .fromTo(contentRef.current,
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
//       "-=0.6"
//     )
//     .fromTo(imageRef.current,
//       { x: 50, opacity: 0 },
//       { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
//       "-=0.6"
//     )
//     .fromTo(skillsRef.current.filter(Boolean),
//       { y: 40, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.5, stagger: 0.09, ease: "power3.out" },
//       "-=0.4"
//     )
//     .fromTo(statsRef.current.filter(Boolean),
//       { scale: 0, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 0.35, stagger: 0.09, ease: "back.out(1.7)" },
//       "-=0.2"
//     );

//     // Animated stat counters (smooth and instant)
//     stats.forEach((stat, idx) => {
//       gsap.to({}, {
//         duration: 2,
//         scrollTrigger: {
//           trigger: statsRef.current[idx],
//           start: "top 85%"
//         },
//         onUpdate: function () {
//           setStatCounts(s => {
//             // only update if not target
//             if (Math.round(s[idx]) !== stat.value) {
//               const newArr = [...s];
//               newArr[idx] = Math.round(Number(gsap.getProperty(this, "progress")) * stat.value);
//               return newArr;
//             }
//             return s;
//           });
//         },
//         onComplete: function() {
//           setStatCounts(s => {
//             const newArr = [...s];
//             newArr[idx] = stat.value;
//             return newArr;
//           });
//         }
//       });
//     });

//     return () => {
//       tl.kill();
//       ScrollTrigger.killAll();
//     };
//     // eslint-disable-next-line
//   }, []); // run once

//   // Skill card interactive hovers
//   const handleSkillCardEnter = (idx: number) => {
//     const card = skillsRef.current[idx];
//     if (!card) return;
//     const icon = card.querySelector('.skill-icon') as HTMLElement | null;
//     const progressBar = card.querySelector('.progress-bar') as HTMLElement | null;
//     gsap.to(card, { scale: 1.05, y: -10, duration: 0.2, ease: "power2.out", overwrite: "auto" });
//     if (icon) gsap.to(icon, { scale: 1.13, rotation: 340, duration: 0.35, ease: "back.out(1.7)", overwrite: "auto" });
//     if (progressBar) gsap.to(progressBar, { scaleX: 1.08, duration: 0.2, ease: "power2.out", transformOrigin: "left center", overwrite: "auto" });
//   };

//   const handleSkillCardLeave = (idx: number) => {
//     const card = skillsRef.current[idx];
//     if (!card) return;
//     const icon = card.querySelector('.skill-icon') as HTMLElement | null;
//     const progressBar = card.querySelector('.progress-bar') as HTMLElement | null;
//     gsap.to(card, { scale: 1, y: 0, duration: 0.23, ease: "power2.out", overwrite: "auto" });
//     if (icon) gsap.to(icon, { scale: 1, rotation: 0, duration: 0.21, ease: "power2.out", overwrite: "auto" });
//     if (progressBar) gsap.to(progressBar, { scaleX: 1, duration: 0.21, ease: "power2.out", overwrite: "auto" });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="py-20 px-4 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <h2
//           ref={titleRef}
//           className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-8 md:mb-16 text-white"
//         >
//           About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
//         </h2>
//         <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-10 md:mb-20">
//           <div ref={contentRef} className="space-y-4 md:space-y-6">
//             <div className="prose prose-invert max-w-auto">
//               <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 md:mb-6">
//                 I'm a passionate <span className="text-blue-400 font-semibold">Creative Developer</span> and 
//                 <span className="text-purple-400 font-semibold"> UI/UX Designer</span> with over 5 years of experience 
//                 crafting digital experiences that blend functionality with aesthetic appeal.
//               </p>
//               <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-4 md:mb-6">
//                 My expertise spans from traditional web development to cutting-edge 3D experiences, 
//                 always pushing the boundaries of what's possible on the web. I believe in creating 
//                 solutions that not only look beautiful but also provide exceptional user experiences.
//               </p>
//               <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
//                 When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
//                 projects, or sharing knowledge with the developer community through blogs and workshops.
//               </p>
//             </div>

//             {/* Interactive Three.js Scene placeholder */}
//             <div id="about-threejs" className="h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
//               <canvas id="about-canvas" className="w-full h-full cursor-pointer"></canvas>
//             </div>

 
    
//             <p className="text-sm text-gray-500 text-center">Click and drag to interact with the 3D model</p>
//           </div>
//           <div ref={imageRef} className="relative">
//             <div className="relative z-10">
//               <img
//                 src="/cooding.png"
//                 alt="YOGESH Khinchi working"
//                 className="w-screen h-96 object-cover rounded-2xl shadow-2xl"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
//             </div>
//             {/* Decorative elements */}
//             <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
//             <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
//           </div>
//         </div>

//         {/* Skills */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               ref={el => skillsRef.current[index] = el}
//               className="skill-card group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/20 transition-all duration-300 cursor-pointer relative overflow-hidden"
//               onMouseEnter={() => handleSkillCardEnter(index)}
//               onMouseLeave={() => handleSkillCardLeave(index)}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <div className="relative z-10">
//                 <div className="flex items-center justify-between mb-4">
//                   <skill.icon className="skill-icon w-10 h-10 text-blue-400 transition-all duration-300" />
//                   <span className="text-2xl font-bold text-white">{skill.level}%</span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">{skill.title}</h3>
//                 <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">{skill.desc}</p>
//                 <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
//                   <div
//                     className="progress-bar bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out relative"
//                     style={{ width: `${skill.level}%` }}
//                   >
//                     <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
//                   </div>
//                 </div>
//               </div>
//               {/* Optional: floating particles */}
//             </div>
//           ))}
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, idx) => (
//             <div
//               key={idx}
//               ref={el => statsRef.current[idx] = el}
//               className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
//             >
//               <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
//               <div className="text-4xl font-bold text-white mb-2">
//                 <span>{statCounts[idx]}</span>
//                 <span>{stat.suffix}</span>
//               </div>
//               <p className="text-gray-400 font-medium">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
//             <circle cx="10" cy="10" r="1" fill="currentColor"/>
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#dots)" />
//       </svg>
//     </section>
//   );
// };

// export default About;













import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Palette, Zap, Globe, Award, Users, Heart } from 'lucide-react';
import { initAboutScene } from '../lib/three-setup'; // Ensure this path is correct for your project

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: Code2, title: "Frontend Development", desc: "React, TypeScript, Next.js, Vue.js", level: 90 },
  { icon: Palette, title: "Backend development", desc: "Node.js, Express.js, MongoDB, MySQL", level: 78},
  { icon: Zap, title: "Performance Optimization", desc: "Web Vitals, Lighthouse, Bundle Analysis", level: 70 },
  { icon: Globe, title: "3D & Animation", desc: "Three.js, GSAP , Blender", level: 75 }
];

const stats = [
  { icon: Award, value: 12, label: "Projects Completed", suffix: "+" },
  { icon: Users, value: 5, label: "Happy Clients", suffix: "+" },
  { icon: Code2, value: 1200, label: "Hours of Coding", suffix: "+" },
  { icon: Heart, value: 2, label: "Years Experience", suffix: "" }
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<Array<HTMLDivElement|null>>([]);
  const statsRef = useRef<Array<HTMLDivElement|null>>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Refs for Three.js
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const threeCanvasRef = useRef<HTMLCanvasElement>(null);

  const [statCounts, setStatCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    // 1. Initialize Three.js Scene
    let cleanupThree: (() => void) | undefined;
    
    if (threeContainerRef.current && threeCanvasRef.current) {
      cleanupThree = initAboutScene(threeContainerRef.current, threeCanvasRef.current);
    }

    // 2. GSAP Animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(imageRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(skillsRef.current.filter(Boolean),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.09, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(statsRef.current.filter(Boolean),
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.35, stagger: 0.09, ease: "back.out(1.7)" },
      "-=0.2"
    );

    // Stat counters
    stats.forEach((stat, idx) => {
      gsap.to({}, {
        duration: 2,
        scrollTrigger: {
          trigger: statsRef.current[idx],
          start: "top 85%"
        },
        onUpdate: function () {
          const progress = this.progress();
          setStatCounts(s => {
            const newArr = [...s];
            newArr[idx] = Math.round(progress * stat.value);
            return newArr;
          });
        },
        onComplete: function() {
          setStatCounts(s => {
            const newArr = [...s];
            newArr[idx] = stat.value;
            return newArr;
          });
        }
      });
    });

    return () => {
      tl.kill();
      if (cleanupThree) cleanupThree();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleSkillCardEnter = (idx: number) => {
    const card = skillsRef.current[idx];
    if (!card) return;
    gsap.to(card, { scale: 1.05, y: -10, duration: 0.2, ease: "power2.out", overwrite: "auto" });
  };

  const handleSkillCardLeave = (idx: number) => {
    const card = skillsRef.current[idx];
    if (!card) return;
    gsap.to(card, { scale: 1, y: 0, duration: 0.23, ease: "power2.out", overwrite: "auto" });
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-8 md:mb-16 text-white">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-10 md:mb-20">
          <div ref={contentRef} className="space-y-4 md:space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-blue-400 font-semibold">Creative Developer</span> and 
                <span className="text-purple-400 font-semibold"> UI/UX Designer</span> crafting digital experiences that blend functionality with aesthetic appeal.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                My expertise spans from traditional web development to cutting-edge 3D experiences, always pushing the boundaries of what's possible on the web.
              </p>
            </div>
            
            {/* Three.js Container */}
            <div 
              ref={threeContainerRef} 
              className="h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 relative"
            >
              <canvas ref={threeCanvasRef} className="w-full h-full cursor-grab active:cursor-grabbing"></canvas>
            </div>
            <p className="text-xs text-gray-500 text-center uppercase tracking-widest">Interact with the 3D Space</p>
          </div>

          <div ref={imageRef} className="relative group">
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <img
                src="/cooding.png"
                alt="Developer working"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={el => skillsRef.current[index] = el}
              onMouseEnter={() => handleSkillCardEnter(index)}
              onMouseLeave={() => handleSkillCardLeave(index)}
              className="p-8 bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700/50 hover:border-blue-500/40 transition-all cursor-default"
            >
              <skill.icon className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{skill.desc}</p>
              <div className="w-full bg-gray-900 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              ref={el => statsRef.current[idx] = el}
              className="text-center p-8 bg-gray-800/20 rounded-2xl border border-gray-700/30"
            >
              <stat.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white">
                {statCounts[idx]}{stat.suffix}
              </div>
              <p className="text-gray-500 text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;