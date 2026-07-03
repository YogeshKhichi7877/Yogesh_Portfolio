export const siteProfile = {
  name: 'Yogesh Khinchi',
  role: 'Full-Stack Developer & 3D Web Enthusiast',
  positioning:
    'I build fast, modern, and interactive web experiences using React, Node.js, Three.js and AI tools.',
  location: 'Surat, Gujarat, India',
  email: 'YogeshKhinchi2005@gmail.com',
  phone: '+91 7877xxxxxxx',
  resumeHref: '/Yogesh_Khinchi_Resume_v3.pdf',
};

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/yogeshkhichi7877',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yogesh-khinchi-1103j?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    label: 'Email',
    href: `mailto:${siteProfile.email}`,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
  },
];

export const modelPaths = {
  heroLaptop: '/models/asus.glb',
  developerAvatar: '/models/developer-avatar.glb',
  journeyRocket: '/models/journey-rocket.glb',
  trophy: '/models/trophy.glb',
  astronaut404: '/models/astronaut-404.glb',
  securityShield: '/models/security-shield.glb',
  legalGavel: '/models/legal-gavel.glb',
  contactGlobe: '/models/contact-globe.glb',
  smartphone: '/models/smartphone.glb',
  desktopSetup: '/models/desktop-setup.glb',
  desktopSetupLite: '/models/desktop-setup2.glb',
  paperPlane: '/models/paper-plane.glb',
  keyboard: '/models/keyboard.glb',
  mouse: '/models/mouse.glb',
} as const;

export const sectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'case-studies',
  'education',
  'services',
  'certifications',
  'contact',
] as const;

export const trustStats = [
  { value: '12+', label: 'Projects Completed' },
  { value: '5+', label: 'Happy Clients' },
  { value: '1200+', label: 'Coding Hours' },
  { value: '2+', label: 'Years of Experience' },
  { value: 'IIIT', label: 'Surat CSE Student' },
];
