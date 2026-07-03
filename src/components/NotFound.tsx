import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Mail, Radar } from 'lucide-react';
import { Button } from './ui/Button';
import { Astronaut404Preview } from './three/Astronaut404Preview';
import { siteProfile } from '../lib/site';

const recoveryLinks = [
  { label: 'Home', href: '/', description: 'Return to the portfolio command center.' },
  { label: 'Projects', href: '/#projects', description: 'Jump back into featured work and case studies.' },
  { label: 'Contact', href: '/#contact', description: 'Open the contact section for project inquiries.' },
];

const NotFound: React.FC = () => {
  return (
    <div className="os-shell min-h-screen overflow-hidden bg-os-bg text-os-text">
      <div className="os-grid-overlay" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 rounded-[1.5rem] border border-os-line bg-os-card/80 px-4 py-4 shadow-glass-soft backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <Link to="/" className="flex items-center gap-3" aria-label="Back to Yogesh Khinchi portfolio">
            <img src="/yk_logo2.png" alt="YK logo" className="h-10 w-10 object-contain" />
            <span className="font-display text-lg font-bold tracking-wide text-os-text">
              Yogesh <span className="text-gradient">Khinchi</span>
            </span>
          </Link>
          <Button href="/" variant="secondary" size="sm">
            <ArrowLeft className="h-4 w-4" />
            Portfolio
          </Button>
        </header>

        <main className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.85fr)] lg:py-20">
          <section className="space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-os-line bg-white/[0.05] px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-os-aqua">
                <Radar className="h-4 w-4" />
                Error / 404
              </div>
              <div className="space-y-4">
                <p className="font-mono text-7xl font-bold tracking-tight text-gradient sm:text-8xl lg:text-9xl">
                  404
                </p>
                <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight text-os-text sm:text-5xl lg:text-6xl">
                  This route drifted outside the portfolio orbit.
                </h1>
                <p className="max-w-3xl text-base leading-8 text-os-muted sm:text-lg">
                  The page you requested does not exist, moved, or was typed incorrectly. Use one of the recovery paths
                  below to get back to {siteProfile.name}'s portfolio.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/" variant="primary" size="lg">
                  <Home className="h-5 w-5" />
                  Back Home
                </Button>
                <Button href={`mailto:${siteProfile.email}`} variant="secondary" size="lg">
                  <Mail className="h-5 w-5" />
                  Contact Yogesh
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {recoveryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-2xl border border-os-line bg-os-card/80 p-5 shadow-glass-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-os-cyan/40"
                >
                  <span className="font-display text-lg font-semibold text-os-text">{link.label}</span>
                  <span className="mt-3 block text-sm leading-6 text-os-muted">{link.description}</span>
                </a>
              ))}
            </div>
          </section>

          <aside className="space-y-5">
            <Astronaut404Preview />
            <div className="rounded-[1.5rem] border border-os-line bg-os-card/80 p-5 shadow-glass-soft backdrop-blur-xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-os-aqua">Navigation status</p>
              <p className="mt-3 text-sm leading-7 text-os-muted">
                Valid routes are currently `/`, `/privacy`, and `/terms`. This catch-all page keeps broken links from
                becoming a dead end.
              </p>
            </div>
          </aside>
        </main>

        <footer className="border-t border-os-line py-6 text-sm text-os-muted">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {siteProfile.name}. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link className="transition hover:text-os-text" to="/privacy">
                Privacy
              </Link>
              <Link className="transition hover:text-os-text" to="/terms">
                Terms
              </Link>
              <Link className="text-os-text" to="/">
                Portfolio
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NotFound;
