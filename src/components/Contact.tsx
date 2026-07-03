import { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Github,
  Instagram,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Send,
  User,
  type LucideIcon,
} from 'lucide-react';
import { SectionShell } from './layout/SectionShell';
import { ContactGlobeVisual } from './ui/ReferenceVisuals';
import { siteProfile, socialLinks } from '../lib/site';

const inputBaseClasses =
  'w-full rounded-2xl border border-white/10 bg-white/[0.06] py-4 pl-14 pr-4 text-base text-os-text outline-none transition placeholder:text-os-muted/70 focus:border-os-cyan/55 focus:bg-white/[0.09] focus:ring-2 focus:ring-os-cyan/15';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    getValue: () => siteProfile.email,
    getHref: () => `mailto:${siteProfile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    getValue: () => siteProfile.phone,
    getHref: () => `tel:${siteProfile.phone.replace(/\s+/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    getValue: () => siteProfile.location,
    getHref: () => undefined,
  },
  {
    icon: Clock,
    label: 'Availability',
    getValue: () => 'Open for opportunities',
    getHref: () => undefined,
    online: true,
  },
];

const socialIconMap: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Instagram,
  Email: Mail,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    window.setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 3500);
  };

  const socialItems = [
    ...socialLinks.filter((link) =>
      ['LinkedIn', 'GitHub', 'Instagram'].includes(link.label),
    ),
    {
      label: 'Email',
      href: `mailto:${siteProfile.email}`,
    },
  ];

  return (
    <SectionShell
      id="contact"
      className="relative bg-transparent pb-16 pt-24 sm:pb-20 sm:pt-28"
      eyebrow=""
      title={null}
      description=""
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_0.95fr_0.9fr] lg:items-center">
        <div>
          <p className="font-mono text-sm font-bold uppercase tracking-[0.26em] text-os-violet">
            Get In Touch
          </p>

          <h2 className="mt-5 font-display text-5xl font-black tracking-tight text-os-text sm:text-6xl lg:text-7xl">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-os-cyan via-blue-400 to-os-violet bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mt-7 max-w-md text-xl leading-9 text-os-muted">
            Have a project idea or want to collaborate? I&apos;d love to hear from you.
          </p>

          <div className="mt-8 space-y-5">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const value = item.getValue();
              const href = item.getHref();

              const card = (
                <div className="group flex items-center gap-5">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-os-violet/45 bg-os-violet/10 text-os-violet shadow-[0_0_30px_rgba(139,92,246,0.22)] transition group-hover:border-os-cyan/45 group-hover:text-os-cyan">
                    <Icon className="h-8 w-8" strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <div>
                    <p className="font-display text-xl font-bold text-os-text">{item.label}</p>
                    <p className="mt-1 flex items-center gap-2 text-lg text-os-muted">
                      {item.online && (
                        <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.85)]" />
                      )}
                      {value}
                    </p>
                  </div>
                </div>
              );

              return href ? (
                <a key={item.label} href={href} className="block">
                  {card}
                </a>
              ) : (
                <div key={item.label}>{card}</div>
              );
            })}
          </div>

          <div className="mt-8 h-px w-full max-w-md bg-white/10" />

          <div className="mt-6">
            <p className="font-display text-lg font-bold text-os-text">Follow Me</p>

            <div className="mt-5 flex flex-wrap gap-5">
              {socialItems.map((item) => {
                const Icon = socialIconMap[item.label] ?? Mail;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    aria-label={item.label}
                    className="grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] text-os-text shadow-glass-soft backdrop-blur-xl transition hover:-translate-y-1 hover:border-os-cyan/45 hover:bg-os-cyan/10 hover:text-os-cyan hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]"
                  >
                    <Icon className="h-8 w-8" strokeWidth={1.8} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.65rem] border border-os-violet/35 bg-white/[0.06] p-6 shadow-[0_0_65px_rgba(139,92,246,0.12)] backdrop-blur-md sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-transparent" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-os-cyan/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-os-violet/10 blur-3xl" />

          <form onSubmit={handleSubmit} className="relative space-y-6">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.24em] text-os-violet">
              Send a Message
            </p>

            <div>
              <label htmlFor="name" className="mb-3 block text-lg font-bold text-os-text">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-os-violet" aria-hidden="true" />
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputBaseClasses}
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-3 block text-lg font-bold text-os-text">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-os-violet" aria-hidden="true" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputBaseClasses}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-3 block text-lg font-bold text-os-text">
                Your Message
              </label>
              <div className="relative">
                <Pencil className="absolute left-5 top-6 h-6 w-6 text-os-violet" aria-hidden="true" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`${inputBaseClasses} min-h-40 resize-none pt-5`}
                  placeholder="Write your message here..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-os-cyan to-fuchsia-500 px-7 py-4 font-display text-lg font-bold text-white shadow-[0_0_40px_rgba(139,92,246,0.38)] transition hover:-translate-y-1 hover:shadow-[0_0_55px_rgba(34,211,238,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-os-cyan"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  Request noted locally
                </>
              ) : (
                <>
                  <Send className="h-6 w-6" aria-hidden="true" />
                  Send Message
                </>
              )}
            </button>

            <p className="flex items-center justify-center gap-2 text-sm text-os-muted">
              <LockKeyhole className="h-4 w-4" aria-hidden="true" />
              Your information is safe with me.
            </p>

            {isSubmitted && (
              <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
                This demo form does not send data yet. Please email me directly at{' '}
                <a href={`mailto:${siteProfile.email}`} className="font-semibold underline">
                  {siteProfile.email}
                </a>
                .
              </div>
            )}
          </form>
        </div>

        <aside className="relative hidden min-h-[36rem] lg:block">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[52%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-os-cyan/15 blur-3xl" />
            <div className="absolute bottom-16 left-1/2 h-24 w-[25rem] -translate-x-1/2 rounded-[50%] border border-os-violet/40 bg-os-violet/10 shadow-[0_0_80px_rgba(139,92,246,0.3)]" />
          </div>

          <div className="relative z-10 mx-auto h-[34rem] max-w-[34rem]">
            <ContactGlobeVisual />
          </div>
        </aside>
      </div>
    </SectionShell>
  );
};

export default Contact;
