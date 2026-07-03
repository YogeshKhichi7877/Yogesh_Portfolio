import { ArrowLeft, Mail, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HomeGalaxyBackground } from './layout/HomeGalaxyBackground';
import { SecurityShieldPreview } from './three/SecurityShieldPreview';
import { siteProfile } from '../lib/site';

const policySections = [
  {
    title: 'Information collected',
    copy:
      'This portfolio only collects information you choose to share, such as your name, email address, phone number, project details, or message content when you contact Yogesh directly.',
  },
  {
    title: 'How information is used',
    copy:
      'Contact details are used to reply to inquiries, discuss project opportunities, improve the portfolio experience, and maintain professional communication. Personal information is not sold or traded.',
  },
  {
    title: 'Contact form status',
    copy:
      'The contact interface is designed for portfolio inquiries. If a form submission service is added later, this policy should be updated to reflect the provider and data handling process.',
  },
  {
    title: 'Third-party links',
    copy:
      'The website may link to external platforms such as LinkedIn, GitHub, live project demos, resume files, or email clients. Those services are governed by their own privacy policies.',
  },
  {
    title: 'Cookies and analytics',
    copy:
      'No custom tracking, advertising cookies, or analytics service is intentionally documented in the current portfolio implementation. Browser or hosting providers may still process basic technical logs.',
  },
  {
    title: 'Security',
    copy:
      'Reasonable care is taken to keep the website professional and safe, but no internet transmission or storage method can be guaranteed to be completely secure.',
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

      <nav className="flex flex-wrap items-center gap-2 text-sm text-os-muted" aria-label="Privacy page links">
        <Link className="rounded-full px-3 py-2 transition hover:bg-white/[0.06] hover:text-os-text" to="/terms">
          Terms
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

const Privacy = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-os-bg text-os-text">
      <HomeGalaxyBackground />
      <LegalHeader />

      <main className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.72fr)] lg:px-8 lg:py-20">
        <section className="space-y-8">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-os-cyan/25 bg-os-cyan/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-os-cyan">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Legal / Privacy
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl font-display text-4xl font-black tracking-tight text-os-text sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="max-w-3xl text-base leading-8 text-os-muted sm:text-lg">
                This page explains what information may be collected through {siteProfile.name}&apos;s portfolio,
                how it is used, and how visitors can get in touch about privacy questions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 font-mono uppercase tracking-[0.16em] text-os-muted backdrop-blur-xl">
                Updated Feb 28, 2026
              </span>
              <span className="rounded-full border border-os-cyan/30 bg-os-cyan/10 px-4 py-2 font-mono uppercase tracking-[0.16em] text-os-cyan backdrop-blur-xl">
                No sale of personal data
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {policySections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-glass-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-os-cyan/35 hover:bg-white/[0.06]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-os-cyan/25 bg-os-cyan/10 font-mono text-xs text-os-cyan">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-lg font-bold text-os-text">{section.title}</h2>
                </div>
                <p className="text-sm leading-7 text-os-muted">{section.copy}</p>
              </article>
            ))}
          </div>

          <section className="rounded-[1.5rem] border border-os-cyan/20 bg-[#071327]/70 p-5 shadow-glass-soft backdrop-blur-xl sm:p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-xl font-bold text-os-text">Privacy questions</h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-os-muted">
                  For questions about this policy or a message previously sent through the portfolio, contact Yogesh directly.
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
          <SecurityShieldPreview />
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-glass-soft backdrop-blur-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-os-cyan">Data posture</p>
            <p className="mt-3 text-sm leading-7 text-os-muted">
              The portfolio is designed as a public professional website with direct contact paths, project links,
              legal pages, and no intentional advertising tracker documented in the current codebase.
            </p>
          </div>
        </aside>
      </main>

      <footer className="relative z-10 mx-auto max-w-7xl border-t border-white/10 px-4 py-6 text-sm text-os-muted sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 {siteProfile.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="text-os-text" to="/privacy">
              Privacy
            </Link>
            <Link className="transition hover:text-os-text" to="/terms">
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

export default Privacy;
