import { ArrowLeft, ExternalLink, FileText, Mail, Phone, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HomeGalaxyBackground } from './layout/HomeGalaxyBackground';
import { LegalGavelPreview } from './three/LegalGavelPreview';
import { siteProfile } from '../lib/site';

const termSections = [
  {
    title: 'Acceptance of terms',
    copy:
      'By accessing this portfolio, you agree to use it responsibly and only for lawful personal, professional, hiring, collaboration, or project inquiry purposes.',
  },
  {
    title: 'Portfolio content',
    copy:
      'Text, visuals, project descriptions, design work, source examples, images, and branding on this website belong to Yogesh Khinchi unless otherwise noted.',
  },
  {
    title: 'Use license',
    copy:
      'You may view the website for evaluation, recruitment, collaboration, learning, or project discussion. You may not copy, resell, misrepresent, or commercially reuse the materials without permission.',
  },
  {
    title: 'Project and external links',
    copy:
      'Live demos, repositories, social profiles, resume links, and third-party websites are provided for context. External services remain responsible for their own content, availability, and policies.',
  },
  {
    title: 'No guaranteed outcomes',
    copy:
      'Portfolio materials are provided for professional presentation. They do not guarantee employment, project results, availability, service timelines, or uninterrupted website access.',
  },
  {
    title: 'Limitation of liability',
    copy:
      'Yogesh Khinchi is not liable for indirect damages, lost data, lost profits, business interruption, or issues caused by using, relying on, or being unable to access this website.',
  },
  {
    title: 'Updates to terms',
    copy:
      'These terms may be updated as the website, services, projects, or legal requirements evolve. The updated date on this page indicates the latest published version.',
  },
  {
    title: 'Governing law',
    copy:
      'These terms are governed by the laws of India. Any related dispute is subject to the appropriate jurisdiction in Surat, Gujarat, India, where applicable.',
  },
];

const phoneHref = siteProfile.phone.replace(/\s/g, '');

const LegalHeader = () => (
  <header className="relative z-20 mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-4 rounded-[1.35rem] border border-white/10 bg-[#071327]/72 px-4 py-4 shadow-glass-soft backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <Link to="/" className="flex items-center gap-3" aria-label="Back to Yogesh Khinchi portfolio">
        <img src="/yk_logo2.png" alt="" className="h-11 w-11 object-contain" aria-hidden="true" />
        <span>
          <span className="block font-display text-lg font-black text-os-text">{siteProfile.name}</span>
          <span className="block font-mono text-[10px] uppercase tracking-[0.26em] text-os-cyan">
            Developer OS
          </span>
        </span>
      </Link>

      <nav className="flex flex-wrap items-center gap-2 text-sm text-os-muted" aria-label="Terms page links">
        <Link className="rounded-full px-3 py-2 transition hover:bg-white/[0.06] hover:text-os-text" to="/privacy">
          Privacy
        </Link>
        <a className="rounded-full px-3 py-2 transition hover:bg-white/[0.06] hover:text-os-text" href="/sitemap.xml">
          Sitemap
        </a>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-os-cyan/25 bg-white/[0.055] px-4 py-2 font-semibold text-os-text transition hover:border-os-cyan/45 hover:bg-os-cyan/10 hover:text-os-cyan"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Portfolio
        </Link>
      </nav>
    </div>
  </header>
);

const Terms = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-os-bg text-os-text">
      <HomeGalaxyBackground />
      <LegalHeader />

      <main className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.72fr)] lg:px-8 lg:py-20">
        <section className="space-y-8">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-os-violet/30 bg-os-violet/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-os-cyan">
              <Scale className="h-4 w-4" aria-hidden="true" />
              Legal / Terms
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl font-display text-4xl font-black tracking-tight text-os-text sm:text-5xl lg:text-6xl">
                Terms of Service
              </h1>
              <p className="max-w-3xl text-base leading-8 text-os-muted sm:text-lg">
                These terms explain the rules for viewing, referencing, and interacting with {siteProfile.name}&apos;s
                portfolio, project materials, contact paths, and external links.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 font-mono uppercase tracking-[0.16em] text-os-muted backdrop-blur-xl">
                Updated Feb 28, 2026
              </span>
              <span className="rounded-full border border-os-violet/30 bg-os-violet/10 px-4 py-2 font-mono uppercase tracking-[0.16em] text-os-cyan backdrop-blur-xl">
                India jurisdiction
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {termSections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-glass-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-os-violet/35 hover:bg-white/[0.06]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-os-violet/30 bg-os-violet/10 font-mono text-xs text-os-cyan">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-lg font-bold text-os-text">{section.title}</h2>
                </div>
                <p className="text-sm leading-7 text-os-muted">{section.copy}</p>
              </article>
            ))}
          </div>

          <section className="rounded-[1.5rem] border border-os-violet/25 bg-[#071327]/70 p-5 shadow-glass-soft backdrop-blur-xl sm:p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-xl font-bold text-os-text">Questions about these terms</h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-os-muted">
                  For permission requests, project inquiries, or questions about acceptable use, contact Yogesh directly.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${siteProfile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-os-cyan to-os-violet px-5 py-2.5 font-semibold text-white shadow-[0_0_32px_rgba(139,92,246,0.28)]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email
                </a>
                <a
                  href={`tel:${phoneHref}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-5 py-2.5 font-semibold text-os-text transition hover:border-os-cyan/35 hover:text-os-cyan"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call
                </a>
              </div>
            </div>
          </section>
        </section>

        <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">
          <LegalGavelPreview />
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-glass-soft backdrop-blur-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-os-cyan">Use boundaries</p>
            <p className="mt-3 text-sm leading-7 text-os-muted">
              The portfolio is public-facing, but the work, writing, design direction, and project materials should be
              treated as professional IP unless a repository or project explicitly states otherwise.
            </p>
          </div>
          <Link
            to="/privacy"
            className="group flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 text-sm text-os-muted shadow-glass-soft backdrop-blur-xl transition hover:border-os-cyan/40 hover:text-os-text"
          >
            <span className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-os-cyan" aria-hidden="true" />
              Read the Privacy Policy
            </span>
            <ExternalLink className="h-4 w-4 opacity-60 transition group-hover:opacity-100" aria-hidden="true" />
          </Link>
        </aside>
      </main>

      <footer className="relative z-10 mx-auto max-w-7xl border-t border-white/10 px-4 py-6 text-sm text-os-muted sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 {siteProfile.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="transition hover:text-os-text" to="/privacy">
              Privacy
            </Link>
            <Link className="text-os-text" to="/terms">
              Terms
            </Link>
            <Link className="transition hover:text-os-text" to="/">
              Portfolio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
