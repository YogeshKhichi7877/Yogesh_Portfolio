import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Trophy, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    .fromTo(timelineRef.current ? Array.from(timelineRef.current.children) : [],
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(achievementsRef.current ? Array.from(achievementsRef.current.children) : [],
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(skillsRef.current ? Array.from(skillsRef.current.children) : [],
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.2"
    );

    // Enhanced hover effects for education cards
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach((card) => {
      const icon = card.querySelector('.education-icon');
      const timeline = card.querySelector('.timeline-dot');
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          y: -10,
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(icon, {
          scale: 1.2,
          rotation: 360,
          duration: 0.5,
          ease: "back.out(1.7)"
        });

        gsap.to(timeline, {
          scale: 1.5,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });

        gsap.to(timeline, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }, []);

  const education = [
    {
      degree: "Currently pursuing my B.Tech in Computer Science and Engineering from IIT Surat ",
      institution: "Not available yet",
      location: "null",
      period: "null",
      gpa: "null",
      description: "Null",
      achievements: [
        "null"
      ],
      courses: ["NUll"],
      icon: GraduationCap,
      color: "from-blue-500 to-purple-600"
    },
  
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology (IIT) Surat",
      location: "Surat, (Gujarat) India",
      period: "2024 - 2028",
      gpa: "8.2/10.0",
      description: "Comprehensive computer science education with focus on software engineering, algorithms, and system design. Active member of coding club and hackathon organizer.",
      achievements: [
        "10+ College projects done",
        "Member of Computer Science Society",
        "participated in 3+ national hackathons",
        "Google Summer of Code participant"
      ],
      courses: ["Data Structures", "Operating Systems", "Database Systems", "Software Engineering", "Computer Networks" , "Economics and Business Management" , "Programming for Problem Solving"],
      icon: BookOpen,
      color: "from-green-500 to-blue-500"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "A.D Daga Public School",
      location: "palii,(Rajasthan) India",
      period: "2008 - 2022",
      gpa: "79.87%",
      description: "Focused on Mathematics, Physics, and Computer Science. Developed early passion for programming and participated in various science exhibitions.",
      achievements: [
        "Topper in the physics and chemistry",
        "Good in the sports as well as in the academics",
        "Scored 7.56 CGPA in the 10th Boards exam ",
        "Scored 8.67 CGPA in the 12th Boards exam "
      ],
      courses: ["Mathematics", "Physics", "English", "Hindi" , "Sanskrit" , "Social Science"],
      icon: Award,
      color: "from-orange-500 to-red-500"
    }
  ];

  const certifications = [
    { name: "JavaScript Course Completion Certificate", issuer: "W3School", year: "2025" },
   { name: "React Course Completion Certificate", issuer: "W3School", year: "2025" },
    // { name: "React Advanced Certification", issuer: "Meta", year: "2022" },
    // { name: "Machine Learning Specialization", issuer: "Stanford Online", year: "2021" }
    
  ];

  const skills = [
    { category: "Programming", items: ["JavaScript", "Python", "C", "C++", "CSS"] },
    { category: "Frameworks", items: ["React", "Node.js", "TailwindCss", "Three.js" ,"Express.js"] },
    { category: "Databases", items: [ "MongoDB", "MySQL"] },
    // { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"] }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Three.js Canvas for Education Scene */}
      <div id="education-threejs" className="absolute inset-0 z-0">
        <canvas id="education-canvas" className="w-full h-full opacity-30"></canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-white"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Education</span>
        </h2>

        {/* Education Timeline */}
        <div ref={timelineRef} className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>
          
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`education-card relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`timeline-dot absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-r ${edu.color} rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 z-10`}>
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
              </div>

              {/* Content Card */}
              <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`education-icon p-4 bg-gradient-to-r ${edu.color} rounded-xl`}>
                      <edu.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-xl text-blue-300 font-semibold mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Relevant Courses */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-green-400" />
                      Relevant Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span 
                          key={courseIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Skills */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div ref={achievementsRef}>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-400" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                  <p className="text-gray-400 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-yellow-400 font-medium">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div ref={skillsRef}>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Users className="w-8 h-8 text-purple-400" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced SVG Background Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="education-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="2" fill="currentColor"/>
            <circle cx="20" cy="20" r="1" fill="currentColor"/>
            <circle cx="60" cy="60" r="1" fill="currentColor"/>
            <circle cx="20" cy="60" r="1" fill="currentColor"/>
            <circle cx="60" cy="20" r="1" fill="currentColor"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#education-pattern)" />
      </svg>
    </section>
  );
};

export default Education;