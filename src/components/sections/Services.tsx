
import {
  ArrowUpRight,
  Bot,
  Code2,
  Cuboid,
  Database,
  GraduationCap,
  LayoutDashboard,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { services } from '../../data/services';
import { SectionShell } from '../layout/SectionShell';
import { Button } from '../ui/Button';

const serviceIcons: LucideIcon[] = [
  Code2,
  Cuboid,
  LayoutDashboard,
  Bot,
  GraduationCap,
  Database,
];

const cardAccents = [
  {
    icon: 'from-cyan-400/25 to-blue-600/20',
    border: 'border-cyan-400/35',
    glow: 'shadow-[0_0_45px_rgba(34,211,238,0.18)]',
    iconGlow: 'shadow-[0_0_35px_rgba(34,211,238,0.35)]',
  },
  {
    icon: 'from-blue-500/25 to-violet-600/20',
    border: 'border-blue-400/35',
    glow: 'shadow-[0_0_45px_rgba(59,130,246,0.16)]',
    iconGlow: 'shadow-[0_0_35px_rgba(59,130,246,0.32)]',
  },
  {
    icon: 'from-fuchsia-500/25 to-violet-600/20',
    border: 'border-fuchsia-400/35',
    glow: 'shadow-[0_0_45px_rgba(217,70,239,0.16)]',
    iconGlow: 'shadow-[0_0_35px_rgba(217,70,239,0.32)]',
  },
  {
    icon: 'from-cyan-400/25 to-teal-600/20',
    border: 'border-cyan-400/35',
    glow: 'shadow-[0_0_45px_rgba(34,211,238,0.16)]',
    iconGlow: 'shadow-[0_0_35px_rgba(34,211,238,0.32)]',
  },
  {
    icon: 'from-violet-500/25 to-fuchsia-600/20',
    border: 'border-violet-400/35',
    glow: 'shadow-[0_0_45px_rgba(139,92,246,0.17)]',
    iconGlow: 'shadow-[0_0_35px_rgba(139,92,246,0.34)]',
  },
  {
    icon: 'from-blue-500/25 to-cyan-600/20',
    border: 'border-blue-400/35',
    glow: 'shadow-[0_0_45px_rgba(59,130,246,0.16)]',
    iconGlow: 'shadow-[0_0_35px_rgba(59,130,246,0.32)]',
  },
];

const fallbackServices = [
  {
    title: 'Web Development',
    summary: 'Full-stack web apps using modern technologies and best practices.',
  },
  {
    title: '3D Web Experiences',
    summary: 'Interactive 3D websites and immersive experiences with Three.js.',
  },
  {
    title: 'UI/UX Design',
    summary: 'Modern, responsive UI with clean layouts and smooth experiences.',
  },
  {
    title: 'AI Integrations',
    summary: 'AI tools, chatbots, and automation to power smarter applications.',
  },
  {
    title: 'Student Platforms',
    summary: 'College and student focused platforms with smart features and dashboards.',
  },
  {
    title: 'MERN Stack Apps',
    summary: 'Scalable and performant full-stack applications using the MERN stack.',
  },
];

const Services = () => {
  const displayServices = services.length ? services.slice(0, 6) : fallbackServices;

  return (
    <SectionShell
      id="services"
      className="relative bg-transparent py-24 sm:py-28"
      eyebrow="What I Do"
      title={
        <>
          Services I{' '}
          <span className="bg-gradient-to-r from-os-cyan via-blue-400 to-os-violet bg-clip-text text-transparent">
            Offer
          </span>
        </>
      }
      description="End-to-end digital solutions that are modern, scalable, and built to make impact."
    >
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {displayServices.map((service, index) => {
          const Icon = serviceIcons[index] ?? Code2;
          const accent = cardAccents[index % cardAccents.length];

          return (
            <article
              key={service.title}
              className={`group relative overflow-hidden rounded-[1.8rem] border ${accent.border} bg-white/[0.06] px-7 py-8 text-center backdrop-blur-md ${accent.glow} transition duration-300 hover:-translate-y-2 hover:border-os-cyan/55 hover:bg-white/[0.085] hover:shadow-[0_0_65px_rgba(34,211,238,0.22)] sm:px-8 sm:py-10`}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] bg-gradient-to-b from-white/[0.08] via-white/[0.025] to-transparent" />
              <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-os-cyan/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-os-violet/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative mx-auto mb-6 grid h-28 w-28 place-items-center rounded-[1.6rem] border border-white/10 bg-white/[0.045]">
                <div className={`absolute inset-3 rounded-[1.25rem] bg-gradient-to-br ${accent.icon} blur-sm`} />
                <div
                  className={`relative grid h-20 w-20 place-items-center rounded-[1.25rem] border border-os-violet/35 bg-white/[0.07] text-os-cyan ${accent.iconGlow}`}
                >
                  <Icon className="h-11 w-11" strokeWidth={1.7} aria-hidden="true" />
                </div>
              </div>

              <h3 className="relative font-display text-2xl font-bold tracking-tight text-os-text">
                {service.title}
              </h3>

              <p className="relative mx-auto mt-4 max-w-sm text-base leading-7 text-os-muted">
                {service.summary}
              </p>
            </article>
          );
        })}
      </div>

      <div className="relative mx-auto mt-12 flex max-w-4xl justify-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[42rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-os-cyan/35 bg-os-cyan/5 shadow-[0_0_70px_rgba(34,211,238,0.22)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-[30rem] max-w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-gradient-to-r from-blue-600/30 via-os-violet/35 to-os-cyan/30 blur-xl" />

        <Button
          href="#contact"
          className="relative z-10 min-w-72 justify-center text-lg"
          onClick={(event) => {
            event.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Let&apos;s Work Together
          <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
        {[
          ['Future-ready Builds', 'Modern apps designed to scale.'],
          ['Premium Interfaces', 'Clean UI that feels polished.'],
          ['Practical Execution', 'Focused on shipping useful products.'],
        ].map(([title, subtitle], index) => {
          const Icon = [Sparkles, LayoutDashboard, ArrowUpRight][index];

          return (
            <div
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 shadow-glass-soft backdrop-blur-xl"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-os-cyan/25 bg-os-cyan/10 text-os-cyan shadow-[0_0_22px_rgba(34,211,238,0.22)]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <span>
                <span className="block font-semibold text-os-text">{title}</span>
                <span className="block text-xs text-os-muted">{subtitle}</span>
              </span>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
};

export default Services;
