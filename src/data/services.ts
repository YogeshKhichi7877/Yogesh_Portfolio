export type Service = {
  title: string;
  summary: string;
  deliverables: string[];
  fit: string;
};

export const services: Service[] = [
  {
    title: 'Web Development',
    summary:
      'Modern responsive websites and portfolio systems built with React, TypeScript, and polished UI engineering.',
    deliverables: ['Responsive UI', 'Reusable components', 'Performance-minded build'],
    fit: 'Best for personal brands, portfolios, and product landing experiences.',
  },
  {
    title: 'MERN Stack Apps',
    summary:
      'Full-stack applications with React frontends, Node/Express APIs, MongoDB data models, and practical user flows.',
    deliverables: ['Frontend + API', 'Database structure', 'Auth-ready architecture'],
    fit: 'Best for dashboards, student platforms, and MVP-style product builds.',
  },
  {
    title: '3D Interactive Websites',
    summary:
      'Creative WebGL experiences using Three.js and React Three Fiber without sacrificing clarity or usability.',
    deliverables: ['3D scenes', 'Model integration', 'Fallback states'],
    fit: 'Best for standout portfolios, product reveals, and immersive brand sections.',
  },
  {
    title: 'UI/UX Design Systems',
    summary:
      'Clean interfaces, dark premium visual systems, component patterns, and polished interaction states.',
    deliverables: ['Design language', 'Component styling', 'Responsive layouts'],
    fit: 'Best for upgrading rough apps into professional product experiences.',
  },
  {
    title: 'AI Integrations',
    summary:
      'AI-assisted workflows for resume analysis, chat interfaces, content feedback, and productivity tools.',
    deliverables: ['Prompt flow', 'AI API wiring', 'Result-focused UX'],
    fit: 'Best for practical tools where AI improves the user outcome.',
  },
  {
    title: 'Student Platforms',
    summary:
      'Useful platforms for academic communities, resource sharing, and student productivity workflows.',
    deliverables: ['Resource flows', 'Search/filter UX', 'Community-friendly UI'],
    fit: 'Best for college tools, paper hubs, and student-first utilities.',
  },
];
