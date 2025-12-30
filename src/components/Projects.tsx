import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ExternalLink, Github, Eye, Star, GitBranch, Calendar, Users, Code } from 'lucide-react';

const projects = [
      {
      title: "PaperStack ",
      description: "Modern website for iiit surat students , they can see all the previous years papers  and can upload there own papers as well.",
      longDescription: "Full-stack paper sharing platform for iiit surat students with user authentication, paper upload/download, and search functionality.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      category: "Full-Stack",
      github: "",
      live: "https://paper-stack-beryl.vercel.app/",
      featured: true,
      stats: { stars: 202, forks: 59, views: "5.5k" },
      duration: "1 months",
      team: "1 developer",
      status: "Completed"
    },
      {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution , real-time inventory management, and advanced analytics dashboard.Includes advanced security features and user authentication.",
      longDescription: "Full-stack e-commerce platform , advanced filtering, and comprehensive admin dashboard with sales analytics.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      category: "Full-Stack",
      github: "",
      live: "https://yogeshkhichi7877.github.io/Ecommerce_web/",
      featured: true,
      stats: { stars: 102, forks: 39, views: "2.5k" },
      duration: "3 months",
      team: "2 developers",
      status: "Completed"
    },
    {
      title: "3D Portfolio Website",
      description: "Interactive portfolio website featuring immersive 3D models, particle systems, and smooth GSAP animations.",
      longDescription: "Cutting-edge portfolio showcasing advanced web development techniques including WebGL rendering, physics simulations, and responsive 3D interactions with real-time lighting effects.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      tech: ["Three.js", "React", "GSAP", "WebGL", "Blender", "Javascript"],
      category: "Three.js/WebGL",
      github: "#",
      live: "#",
      featured: true,
      stats: { stars: 189, forks: 45, views: "3.1k" },
      duration: "2 months",
      team: "Solo project",
      status: "Completed"
    },
    {
      title: "Full Stack Authentication System",
      description: "Modern authentication website with end to end encryption and secure login system.",
      longDescription: "Comprehensive authentication system with end-to-end encryption, password reset, email verification, and secure login.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      tech: ["HTML", "CSS", "Javascript", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      category: "Full-Stack",
      github: "",
      live: "https://yogeshkhichi7877.github.io/Signup_app/",
      featured: false,
      stats: { stars: 98, forks: 24, views: "2.8k" },
      duration: "4 months",
      team: "2 developers",
      status: "Completed"
    },
    {
      title: "AI-Chat Box",
      description: "AI chat box with real-time messaging, file sharing, video calls, and advanced moderation features.",
      longDescription: "Based on google gemini api, it is a chat box that can be used to chat with AI.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      tech: ["HTML", "CSS", "Javascript", "Tailwind CSS", "Google Gemini API"],
      category: "AI",
      github: "",
      live: "https://yogeshkhichi7877.github.io/AI-Model/",
      featured: false,
      stats: { stars: 104, forks: 33, views: "4.4k" },
      duration: "1 months",
      team: "1 developer",
      status: "Completed"
    },
    {
      title: "News Collector",
      description: "A news application which finds and curates articles from various sources.",
      longDescription: "This platform uses AI to analyze and summarize news articles, providing users with personalized news feeds and insights.",
      image: "https://images.pexels.com/photos/4386453/pexels-photo-4386453.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/4386331/pexels-photo-4386331.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      tech: ["React Native", "Node.js", "MongoDB", "JWT", "Stripe"],
      category: "Full-Stack",
      github: "#",
      live: "#",
      featured: false,
      stats: { stars: 167, forks: 23, views: "2.1k" },
      duration: "2 weeks",
      team: "1 developer",
      status: "Completed"
    },
    {
      title: "Expense Tracker",
      description: "A web application for tracking personal expenses and managing budgets.",
      longDescription: "This application allows users to log their expenses, categorize them, and visualize their spending habits over time.category vise pie charts and many more ",
      image: "https://images.pexels.com/photos/2007635/pexels-photo-2007635.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/2007669/pexels-photo-2007669.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/2007666/pexels-photo-2007666.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      tech: ["Three.js", "WebXR", "A-Frame", "WebGL", "Web Audio API", "PWA"],
      category: "Full-Stack",
      github: "#",
      live: "#",
      featured: true,
      stats: { stars: 445, forks: 123, views: "7.8k" },
      duration: "2 weeks",
      team: "1 developer",
      status: "Completed"
    }

];

// Categories as per your screenshot
const categories = ["All", "Three.js/WebGL", "Full-Stack", "AI", "Mobile"];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<string>("All");

  // Handle filtering
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Initial animation for section/title/filter/projects
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" })
      .fromTo(filterRef.current ? Array.from(filterRef.current.children) : [], { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.4")
      .fromTo(projectsRef.current ? Array.from(projectsRef.current.children) : [], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.17, ease: "power2.out" }, "-=0.36");
    return () => { tl.kill(); };
  }, [activeCategory]);

  // Per card refs for GSAP
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const imageRefs = useRef<Array<HTMLImageElement | null>>([]);
  const overlayRefs = useRef<Array<HTMLDivElement | null>>([]);
  const titleRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const techRefs = useRef<Array<Array<HTMLSpanElement | null>>>([]);

  // Clear arrays for each render
  cardRefs.current = [];
  imageRefs.current = [];
  overlayRefs.current = [];
  titleRefs.current = [];
  techRefs.current = [];

  // Optimized handlers using refs, not DOM queries
  const handleCardEnter = (idx: number) => {
    gsap.to(cardRefs.current[idx], { y: -8, scale: 1.03, duration: 0.26, ease: "power2.out", overwrite: "auto" });
    gsap.to(imageRefs.current[idx], { scale: 1.06, duration: 0.33, overwrite: "auto" });
    gsap.to(overlayRefs.current[idx], { opacity: 1, duration: 0.21, overwrite: "auto" });
    gsap.to(titleRefs.current[idx], { color: "#60a5fa", duration: 0.19, overwrite: "auto" });
    if (techRefs.current[idx])
      gsap.to(techRefs.current[idx], { y: 0, opacity: 1, duration: 0.23, stagger: 0.05, overwrite: "auto" });
  };

  const handleCardLeave = (idx: number) => {
    gsap.to(cardRefs.current[idx], { y: 0, scale: 1, duration: 0.25, overwrite: "auto" });
    gsap.to(imageRefs.current[idx], { scale: 1, duration: 0.31, overwrite: "auto" });
    gsap.to(overlayRefs.current[idx], { opacity: 0, duration: 0.19, overwrite: "auto" });
    gsap.to(titleRefs.current[idx], { color: "#fff", duration: 0.22, overwrite: "auto" });
    if (techRefs.current[idx])
      gsap.to(techRefs.current[idx], { y: 0, opacity: 0.8, duration: 0.18, stagger: 0.04, overwrite: "auto" });
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-white"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</span>
        </h2>
        <div ref={filterRef} className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              ref={el => (cardRefs.current[i] = el)}
              className={`project-card group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer`}
              onMouseEnter={() => handleCardEnter(i)}
              onMouseLeave={() => handleCardLeave(i)}
            >
              <div className="relative overflow-hidden">
                <img
                  ref={el => (imageRefs.current[i] = el)}
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-64 object-cover transition-transform duration-500"
                />
                <div
                  ref={el => (overlayRefs.current[i] = el)}
                  className="project-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    {project.stats.stars}
                  </span>
                  <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm flex items-center gap-1">
                    <GitBranch className="w-3 h-3 text-green-400" />
                    {project.stats.forks}
                  </span>
                  <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm flex items-center gap-1">
                    <Eye className="w-3 h-3 text-blue-400" />
                    {project.stats.views}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-3 bg-black/70 backdrop-blur-sm rounded-full text-white hover:bg-black/90 transition-colors hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="p-3 bg-black/70 backdrop-blur-sm rounded-full text-white hover:bg-black/90 transition-colors hover:scale-110"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/90 to-purple-600/90 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center gap-1">
                    <Code className="w-3 h-3" />
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3
                  ref={el => (titleRefs.current[i] = el)}
                  className="project-title text-2xl font-bold text-white mb-4 transition-colors duration-300"
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      ref={el => {
                        if (!techRefs.current[i]) techRefs.current[i] = [];
                        techRefs.current[i][techIdx] = el;
                      }}
                      className="tech-tag px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-center hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 px-4 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
