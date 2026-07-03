export type Certification = {
  name: string;
  issuer: string;
  year: string;
  focus: string;
  appliedIn: string;
};

export const certifications: Certification[] = [
  {
    name: 'JavaScript Course Completion Certificate',
    issuer: 'W3Schools',
    year: '2025',
    focus: 'Language fundamentals, DOM behavior, functions, and practical browser logic.',
    appliedIn: 'Interactive UI states, form handling, project logic, and frontend workflows.',
  },
  {
    name: 'React Course Completion Certificate',
    issuer: 'W3Schools',
    year: '2025',
    focus: 'Component architecture, props, state, routing patterns, and reusable UI thinking.',
    appliedIn: 'Portfolio sections, dashboard-style interfaces, and full-stack React apps.',
  },
];
