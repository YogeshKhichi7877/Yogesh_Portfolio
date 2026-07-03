export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Creative Tech'
  | 'AI / Tools';

export type SkillItem = {
  name: string;
  level: 'Core' | 'Strong' | 'Working';
  context: string;
};

export type SkillGroup = {
  category: SkillCategory;
  summary: string;
  skills: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    summary: 'Interfaces that feel fast, polished, and responsive across devices.',
    skills: [
      { name: 'React', level: 'Core', context: 'Component systems and SPA flows' },
      { name: 'TypeScript', level: 'Strong', context: 'Safer UI and app logic' },
      { name: 'Tailwind CSS', level: 'Core', context: 'Premium responsive interfaces' },
      { name: 'GSAP', level: 'Strong', context: 'Purposeful motion and scroll reveals' },
      { name: 'Vite', level: 'Strong', context: 'Fast modern frontend tooling' },
    ],
  },
  {
    category: 'Backend',
    summary: 'Practical API and product logic for real full-stack applications.',
    skills: [
      { name: 'Node.js', level: 'Core', context: 'Server-side JavaScript apps' },
      { name: 'Express.js', level: 'Core', context: 'REST APIs and routing' },
      { name: 'Authentication', level: 'Working', context: 'Login, sessions, and protected flows' },
      { name: 'API Design', level: 'Strong', context: 'Clean contracts between UI and backend' },
      { name: 'PWA Basics', level: 'Working', context: 'Installable app experiences' },
    ],
  },
  {
    category: 'Database',
    summary: 'Data models and storage choices for dashboards, tools, and platforms.',
    skills: [
      { name: 'MongoDB', level: 'Core', context: 'Document models and app data' },
      { name: 'Mongoose', level: 'Strong', context: 'Schemas, validation, and queries' },
      { name: 'MySQL', level: 'Working', context: 'Relational data foundations' },
      { name: 'Data Modeling', level: 'Strong', context: 'Structuring products around real use cases' },
    ],
  },
  {
    category: 'Creative Tech',
    summary: 'Interactive visuals that add memorability without losing usability.',
    skills: [
      { name: 'Three.js', level: 'Strong', context: 'WebGL scenes and 3D interactions' },
      { name: 'React Three Fiber', level: 'Strong', context: '3D components inside React' },
      { name: 'Drei', level: 'Strong', context: 'Model loading, controls, and scene helpers' },
      { name: 'Blender', level: 'Working', context: '3D asset awareness and presentation' },
      { name: 'Motion Design', level: 'Strong', context: 'Subtle transitions and interactive states' },
    ],
  },
  {
    category: 'AI / Tools',
    summary: 'Modern tooling for smarter products and faster developer workflows.',
    skills: [
      { name: 'Groq AI', level: 'Working', context: 'AI-assisted resume and content analysis' },
      { name: 'Gemini API', level: 'Working', context: 'Conversational AI prototypes' },
      { name: 'GitHub', level: 'Core', context: 'Version control and project workflow' },
      { name: 'Postman', level: 'Strong', context: 'API testing and debugging' },
      { name: 'Deployment', level: 'Strong', context: 'Vercel and GitHub Pages shipping' },
    ],
  },
];
