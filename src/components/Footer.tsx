import {
  ArrowUp,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteProfile, socialLinks } from '../lib/site';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const resourceLinks = [
  { label: 'Resume', href: siteProfile.resumeHref },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];

const socialIconMap: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram,
  Email: Mail,
};

const scrollToHash = (href: string) => {
  const target = document.querySelector(href);
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Footer = () => {
  const socials = [
    ...socialLinks.filter((link) => ['GitHub', 'LinkedIn', 'Instagram'].includes(link.label)),
    {
      label: 'Email',
      href: `mailto:${siteProfile.email}`,
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-transparent px-4 py-12 text-os-muted sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="pointer-events-none h-px bg-gradient-to-r from-transparent via-os-cyan/35 to-transparent" />

        <div className="grid gap-10 pt-10 lg:grid-cols-[1.25fr_0.7fr_0.78fr_1fr]">
          <div>
            <button
              type="button"
              onClick={() => scrollToHash('#home')}
              className="mb-6 flex items-center gap-4 rounded-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-os-cyan"
              aria-label="Back to home"
            >
              <img
                src="/yk_logo2.png"
                alt=""
                className="h-14 w-14 object-contain drop-shadow-[0_0_18px_rgba(139,92,246,0.35)]"
                aria-hidden="true"
              />

              <span>
                <span className="block font-display text-xl font-black text-os-text">
                  {siteProfile.name}
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.28em] text-os-cyan">
                  Developer OS
                </span>
              </span>
            </button>

            <p className="max-w-sm text-sm leading-7 text-os-muted">
              Full-stack developer and 3D web enthusiast focused on building modern,
              scalable, and visually polished digital products.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-os-text">
              Quick Links
            </h2>

            <div className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToHash(link.href);
                  }}
                  className="text-sm font-medium text-os-muted transition hover:translate-x-1 hover:text-os-cyan"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-os-text">
              Resources
            </h2>

            <div className="mt-5 grid gap-3">
              {resourceLinks.map((link) => {
                const isRoute = link.href.startsWith('/');
                const isHash = link.href.startsWith('#');

                if (isRoute && link.href !== '/sitemap.xml') {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-sm font-medium text-os-muted transition hover:translate-x-1 hover:text-os-cyan"
                    >
                      {link.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={
                      isHash
                        ? (event) => {
                            event.preventDefault();
                            scrollToHash(link.href);
                          }
                        : undefined
                    }
                    className="text-sm font-medium text-os-muted transition hover:translate-x-1 hover:text-os-cyan"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-os-text">
              Let&apos;s Connect
            </h2>

            <div className="mt-5 space-y-4 rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-5 shadow-glass-soft backdrop-blur-md">
              <a
                href={`mailto:${siteProfile.email}`}
                className="flex gap-3 text-sm leading-6 transition hover:text-os-text"
              >
                <Mail className="mt-1 h-4 w-4 shrink-0 text-os-cyan" aria-hidden="true" />
                <span>{siteProfile.email}</span>
              </a>

              <a
                href={`tel:${siteProfile.phone.replace(/\s+/g, '')}`}
                className="flex gap-3 text-sm leading-6 transition hover:text-os-text"
              >
                <Phone className="mt-1 h-4 w-4 shrink-0 text-os-cyan" aria-hidden="true" />
                <span>{siteProfile.phone}</span>
              </a>

              <div className="flex gap-3 text-sm leading-6">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-os-cyan" aria-hidden="true" />
                <span>{siteProfile.location}</span>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                {socials.map((item) => {
                  const Icon = socialIconMap[item.label] ?? Mail;
                  const isMail = item.href.startsWith('mailto:');

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={isMail ? undefined : '_blank'}
                      rel={isMail ? undefined : 'noreferrer'}
                      aria-label={item.label}
                      className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] text-os-text transition hover:-translate-y-1 hover:border-os-cyan/45 hover:bg-os-cyan/10 hover:text-os-cyan"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            (c) 2026 {siteProfile.name}. Built with React, Three.js, GSAP, and Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link to="/privacy" className="transition hover:text-os-text">
              Privacy
            </Link>
            <Link to="/terms" className="transition hover:text-os-text">
              Terms
            </Link>
            <a href="/sitemap.xml" className="transition hover:text-os-text">
              Sitemap
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollToHash('#home')}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white shadow-[0_0_35px_rgba(139,92,246,0.45)] transition hover:-translate-y-1"
        >
          <ArrowUp className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
