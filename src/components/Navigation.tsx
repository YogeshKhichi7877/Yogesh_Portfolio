import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Cpu, Download, GraduationCap, Home, Mail, Menu, Sparkles, User, X } from 'lucide-react';
import { Button } from './ui/Button';
import { sectionIds, siteProfile } from '../lib/site';

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Cpu },
  { label: 'Projects', href: '#projects', icon: Briefcase },
  { label: 'Services', href: '#services', icon: Sparkles },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Contact', href: '#contact', icon: Mail },
];

const Navigation: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateNavState = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(scrollY > 24);
      setProgress(docHeight > 0 ? Math.min((scrollY / docHeight) * 100, 100) : 0);

      const scrollPosition = scrollY + window.innerHeight * 0.28;

      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (!element) continue;

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section);
          break;
        }
      }
    };

    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
    window.addEventListener('resize', updateNavState);

    return () => {
      window.removeEventListener('scroll', updateNavState);
      window.removeEventListener('resize', updateNavState);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5"
      aria-label="Primary navigation"
    >
      <div
        className={`mx-auto max-w-7xl overflow-hidden rounded-[1.35rem] border transition-all duration-300 ${
          scrolled
            ? 'border-os-line bg-os-surface/82 shadow-glass-soft backdrop-blur-2xl'
            : 'border-white/[0.08] bg-os-surface/[0.34] backdrop-blur-xl'
        }`}
      >
        <div className="relative flex h-16 items-center justify-between px-3 sm:h-[4.5rem] sm:px-5">
          <button
            type="button"
            onClick={() => handleNavClick('#home')}
            className="group flex min-w-0 items-center gap-3 rounded-full pr-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-os-cyan"
            aria-label="Go to home section"
          >
            <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl border border-os-line bg-white/[0.06]">
              <span className="absolute inset-0 bg-accent-conic opacity-35 blur-md transition group-hover:opacity-55" />
              <img
                src="/yk_logo2.png"
                alt=""
                className="relative h-8 w-8 object-contain"
                aria-hidden="true"
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-bold tracking-tight text-os-text sm:text-base">
                Yogesh Khinchi
              </span>
              <span className="hidden truncate font-mono text-[10px] uppercase tracking-[0.18em] text-os-muted sm:block">
                Developer OS
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeSection === id;

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`group relative inline-flex items-center py-2 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-os-cyan ${
                    isActive
                      ? 'text-os-text'
                      : 'text-os-muted hover:text-os-text'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-os-violet via-os-cyan to-os-violet shadow-[0_0_18px_rgba(56,189,248,0.75)]" />
                  )}
                  <span className="relative">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href={siteProfile.resumeHref} size="sm" download>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-os-line bg-white/[0.06] text-os-text transition hover:border-os-cyan/50 hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-os-cyan lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`lg:hidden transition-all duration-300 ${
            isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="border-t border-os-line px-3 pb-4 pt-3">
            <div className="grid gap-2">
              {navItems.map((item) => {
                const id = item.href.slice(1);
                const isActive = activeSection === id;

                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                      isActive
                        ? 'border-os-cyan/30 bg-os-cyan/10 text-os-text'
                        : 'border-transparent text-os-muted hover:border-os-line hover:bg-white/[0.06] hover:text-os-text'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                      <span className="font-medium">{item.label}</span>
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-os-muted">
                      {id}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4">
              <Button href={siteProfile.resumeHref} className="w-full" size="sm" download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </Button>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-white/[0.04]">
          <div
            className="h-full bg-gradient-to-r from-os-cyan via-os-aqua to-os-violet transition-[width] duration-200"
            style={{ width: `${progress}%` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
