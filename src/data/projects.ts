export type ProjectCategory = 'Full-Stack' | 'AI Product' | 'Creative Web';

export type FeaturedProject = {
  title: string;
  category: ProjectCategory;
  status: 'Live' | 'Completed';
  image: string;
  summary: string;
  impact: string;
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
};

export type ProjectCaseStudy = {
  title: string;
  eyebrow: string;
  image: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  result: string;
  liveUrl?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'PaperStack',
    category: 'Full-Stack',
    status: 'Live',
    image: '/paperstack.png',
    summary:
      'A paper-sharing platform for IIIT Surat students to browse previous-year papers and contribute resources.',
    impact: 'Built around search, upload flow, student utility, and a clean MERN platform structure.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://paper-stack-beryl.vercel.app/',
    featured: true,
  },
  {
    title: 'Resume Lens',
    category: 'AI Product',
    status: 'Live',
    image: '/resumeAnalyser.png',
    summary:
      'An AI-powered resume analysis tool that highlights strengths, weaknesses, grammar issues, and improvement areas.',
    impact: 'Combines full-stack workflows with practical AI feedback for students and job seekers.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Groq AI'],
    liveUrl: 'http://www.resumelens.me',
    featured: true,
  },
  {
    title: 'Expense Tracker',
    category: 'Full-Stack',
    status: 'Live',
    image: '/expense.png',
    summary:
      'A personal finance app for logging expenses, tracking categories, and visualizing spending patterns.',
    impact: 'Focused dashboard experience with budget awareness, category views, and PWA fundamentals.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'PWA'],
    liveUrl: 'https://expensetracker2-eight.vercel.app/',
    featured: true,
  },
  {
    title: 'Auth System',
    category: 'Full-Stack',
    status: 'Completed',
    image: '/cooding.png',
    summary:
      'Secure authentication and authorization system with protected routes and user-aware flows.',
    impact: 'Demonstrates backend auth logic, route protection, and clean security-focused UI patterns.',
    tech: ['MERN', 'JWT', 'Auth', 'Tailwind CSS'],
    featured: true,
  },
  {
    title: 'AI Chat Box',
    category: 'AI Product',
    status: 'Completed',
    image: '/portfolio .jpg',
    summary:
      'A Gemini-powered AI chat experience for conversational prompts and quick assistant-style workflows.',
    impact: 'Shows API integration, conversational UX, and lightweight AI product experimentation.',
    tech: ['JavaScript', 'Tailwind CSS', 'Gemini API', 'HTML', 'CSS'],
    liveUrl: 'https://yogeshkhichi7877.github.io/AI-Model/',
  },
  {
    title: '3D Portfolio System',
    category: 'Creative Web',
    status: 'Completed',
    image: '/cooding.png',
    summary:
      'An interactive creative portfolio direction using React, Three.js, GSAP, and polished motion.',
    impact: 'Explores recruiter-friendly storytelling with immersive visual layers and WebGL presentation.',
    tech: ['React', 'Three.js', 'R3F', 'GSAP', 'Tailwind CSS'],
  },
];

export const projectCategories = ['All', 'Full-Stack', 'AI Product', 'Creative Web'] as const;

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    title: 'PaperStack',
    eyebrow: 'Student utility platform',
    image: '/paperstack.png',
    problem:
      'IIIT Surat students needed a cleaner way to find previous-year papers and contribute useful academic resources.',
    solution:
      'Built a MERN paper-sharing platform with resource browsing, upload flow, and a student-first interface.',
    features: ['Paper discovery', 'Upload workflow', 'Search-friendly structure', 'Responsive dashboard UI'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    result:
      'A practical student platform that turns scattered academic material into a more accessible resource hub.',
    liveUrl: 'https://paper-stack-beryl.vercel.app/',
  },
  {
    title: 'Resume Lens',
    eyebrow: 'AI-powered career tool',
    image: '/resumeAnalyser.png',
    problem:
      'Students and early-career candidates often struggle to understand what makes their resume weak or unclear.',
    solution:
      'Created an AI-assisted resume analyzer that gives structured feedback on strengths, weaknesses, grammar, and improvement areas.',
    features: ['AI feedback engine', 'Resume quality insights', 'Grammar review', 'Actionable improvement prompts'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Groq AI'],
    result:
      'A focused AI product that converts resume review into clear, useful, and repeatable feedback.',
    liveUrl: 'http://www.resumelens.me',
  },
  {
    title: 'Expense Tracker',
    eyebrow: 'Personal finance dashboard',
    image: '/expense.png',
    problem:
      'Users need a lightweight way to understand where money goes without fighting a complicated finance tool.',
    solution:
      'Developed a full-stack tracker with expense logging, category organization, and visual spending summaries.',
    features: ['Expense logging', 'Category views', 'Spending visualization', 'PWA-ready structure'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'PWA'],
    result:
      'A simple, useful dashboard that makes personal spending patterns easier to scan and manage.',
    liveUrl: 'https://expensetracker2-eight.vercel.app/',
  },
];
