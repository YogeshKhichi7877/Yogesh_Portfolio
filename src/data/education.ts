export type JourneyItem = {
  period: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export const journeyItems: JourneyItem[] = [
  {
    period: '2024 - 2028',
    title: 'B.Tech in Computer Science and Engineering',
    institution: 'Indian Institute of Information Technology, Surat',
    location: 'Surat, Gujarat',
    description:
      'Building a strong computer science foundation while actively working on full-stack products, student platforms, and hackathon-style prototypes.',
    highlights: [
      'Focused on software engineering, data structures, operating systems, databases, and networks.',
      'Built 10+ college and personal projects while learning product-oriented development.',
      'Participated in national hackathons and developer community activities.',
    ],
    tags: ['CSE', 'IIIT Surat', 'Software Engineering', 'Product Building'],
  },
  {
    period: '2025',
    title: 'Frontend and React Certification Track',
    institution: 'W3Schools',
    location: 'Online',
    description:
      'Completed JavaScript and React certification learning while applying the concepts directly inside portfolio, dashboard, and platform projects.',
    highlights: [
      'JavaScript Course Completion Certificate.',
      'React Course Completion Certificate.',
      'Converted learning into real UI components, routing, state, and API workflows.',
    ],
    tags: ['JavaScript', 'React', 'Frontend'],
  },
  {
    period: '2008 - 2022',
    title: 'Higher Secondary Education',
    institution: 'A.D. Daga Public School',
    location: 'Pali, Rajasthan',
    description:
      'Built the academic foundation that led into computer science, problem solving, and hands-on programming curiosity.',
    highlights: [
      'Studied mathematics, physics, languages, and core school subjects.',
      'Developed early interest in technology and practical problem solving.',
      'Balanced academics with sports and extracurricular participation.',
    ],
    tags: ['Mathematics', 'Physics', 'Foundations'],
  },
];

export const journeyStats = [
  { value: '2024', label: 'Started IIIT Surat CSE' },
  { value: '10+', label: 'College and personal projects' },
  { value: '3+', label: 'Hackathon participations' },
];
