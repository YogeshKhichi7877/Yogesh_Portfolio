
import {
  ArrowUpRight,
  Award,
  Braces,
  Code2,
  Flame,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { certifications } from '../../data/certifications';
import { SectionShell } from '../layout/SectionShell';
import { Button } from '../ui/Button';

const TROPHY_IMAGE_SRC = '/trophy.png';

const certificationIcons: Record<string, { label?: string; Icon?: LucideIcon; className: string }> = {
  JavaScript: {
    label: 'JS',
    className: 'bg-yellow-300 text-black border-yellow-200/70 shadow-[0_0_35px_rgba(250,204,21,0.35)]',
  },
  React: {
    label: '⚛',
    className: 'bg-cyan-400/10 text-cyan-300 border-cyan-300/45 shadow-[0_0_35px_rgba(34,211,238,0.35)]',
  },
  'Responsive Web Design': {
    Icon: Flame,
    className: 'bg-white/[0.055] text-white border-violet-300/35 shadow-[0_0_35px_rgba(139,92,246,0.3)]',
  },
  TypeScript: {
    label: 'TS',
    className: 'bg-blue-500/25 text-blue-100 border-blue-300/45 shadow-[0_0_35px_rgba(59,130,246,0.35)]',
  },
};

const fallbackCertifications = [
  {
    name: 'JavaScript',
    issuer: 'W3Schools',
    year: '2025',
    focus: 'Language fundamentals, DOM behavior, functions, and practical browser logic.',
    appliedIn: 'Interactive UI states, form handling, project logic, and frontend workflows.',
  },
  {
    name: 'React',
    issuer: 'W3Schools',
    year: '2025',
    focus: 'Component architecture, props, state, routing patterns, and reusable UI thinking.',
    appliedIn: 'Portfolio sections, dashboard-style interfaces, and full-stack React apps.',
  },
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2025',
    focus: 'Responsive layouts, semantic HTML, CSS structure, and accessible interfaces.',
    appliedIn: 'Mobile-friendly dashboards, landing pages, and portfolio UI systems.',
  },
  {
    name: 'TypeScript',
    issuer: 'Microsoft Learn',
    year: '2025',
    focus: 'Typed JavaScript, safer components, reusable types, and maintainable code.',
    appliedIn: 'Cleaner frontend logic, better data handling, and scalable React structures.',
  },
];

const getCertificationVisual = (name: string) => {
  const key = Object.keys(certificationIcons).find((item) =>
    name.toLowerCase().includes(item.toLowerCase()),
  );

  return key ? certificationIcons[key] : undefined;
};

const Certifications = () => {
  const displayCertifications = certifications.length
    ? certifications.slice(0, 4)
    : fallbackCertifications;

  return (
    <SectionShell
      id="certifications"
      className="relative bg-transparent py-24 sm:py-28"
      eyebrow="Page 8 of 10"
      title="Certifications"
      description="Credentials that validate my skills, knowledge, and commitment to continuous learning."
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_30rem] xl:grid-cols-[minmax(0,1fr)_34rem]">
        <div>
          <div className="grid gap-6 sm:grid-cols-2">
            {displayCertifications.map((certification) => {
              const visual = getCertificationVisual(certification.name);
              const Icon = visual?.Icon;

              return (
                <article
                  key={certification.name}
                  className="group relative min-h-[25rem] overflow-hidden rounded-[1.8rem] border border-os-violet/35 bg-white/[0.06] p-7 text-center shadow-[0_0_48px_rgba(59,130,246,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-os-cyan/45 hover:bg-white/[0.085] hover:shadow-[0_0_65px_rgba(34,211,238,0.18)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.08] via-white/[0.025] to-transparent" />
                  <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-os-cyan/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-os-violet to-transparent shadow-[0_0_25px_rgba(139,92,246,0.9)]" />

                  <div className="relative mx-auto mb-7 grid h-24 w-24 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <div
                      className={`grid h-20 w-20 place-items-center rounded-xl border font-display text-4xl font-black ${
                        visual?.className ??
                        'border-os-cyan/35 bg-os-cyan/10 text-os-cyan shadow-[0_0_35px_rgba(34,211,238,0.28)]'
                      }`}
                    >
                      {Icon ? (
                        <Icon className="h-12 w-12" strokeWidth={1.7} aria-hidden="true" />
                      ) : (
                        visual?.label ?? <Award className="h-11 w-11" aria-hidden="true" />
                      )}
                    </div>
                  </div>

                  <h3 className="relative font-display text-2xl font-bold tracking-tight text-os-text">
                    {certification.name}
                  </h3>

                  <p className="relative mt-2 text-xl text-os-muted">
                    {certification.issuer}
                  </p>

                  <div className="relative mx-auto my-7 h-px w-full bg-white/10" />

                  <p className="relative text-lg font-semibold text-blue-300">
                    Certified
                  </p>

                  <p className="relative mt-2 font-display text-2xl font-bold text-os-text">
                    {certification.year}
                  </p>

                  <div className="relative mt-6 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-os-cyan/20 bg-os-cyan/10 px-3 py-1.5 text-xs font-semibold text-os-cyan">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      Verified Skill
                    </span>
                  </div>

                  <div className="sr-only">
                    <p>{certification.focus}</p>
                    <p>{certification.appliedIn}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="relative mt-12 flex justify-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-os-violet/35 bg-os-violet/5 shadow-[0_0_70px_rgba(139,92,246,0.22)]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-[24rem] max-w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-gradient-to-r from-blue-600/30 via-os-violet/35 to-os-cyan/30 blur-xl" />

            <Button
              href="#projects"
              className="relative z-10 min-w-72 justify-center text-lg"
              onClick={(event) => {
                event.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View All Certificates
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <aside className="relative hidden min-h-[38rem] lg:block">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[52%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-os-violet/20 blur-3xl" />
            <div className="absolute bottom-20 left-1/2 h-20 w-[24rem] -translate-x-1/2 rounded-[50%] border border-os-violet/40 bg-os-violet/10 shadow-[0_0_80px_rgba(139,92,246,0.3)]" />
            <div className="absolute left-8 top-24 h-14 w-14 rotate-12 rounded-xl border border-os-cyan/30 bg-os-cyan/10 shadow-[0_0_28px_rgba(34,211,238,0.25)]" />
            <div className="absolute right-6 bottom-28 h-20 w-20 -rotate-12 rounded-2xl border border-os-violet/35 bg-os-violet/10 shadow-[0_0_34px_rgba(139,92,246,0.28)]" />
          </div>

          <img
            src={TROPHY_IMAGE_SRC}
            alt="Glowing trophy representing certifications"
            className="relative z-10 mx-auto h-[34rem] w-auto object-contain drop-shadow-[0_0_55px_rgba(139,92,246,0.55)]"
            loading="lazy"
          />
        </aside>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
        {[
          ['Learning Proof', 'Credentials show technical consistency.', Award],
          ['Applied Skills', 'Used inside real portfolio projects.', Code2],
          ['Growth Mindset', 'Continuous improvement through practice.', Braces],
        ].map(([title, subtitle, Icon]) => {
          const TypedIcon = Icon as LucideIcon;

          return (
            <div
              key={title as string}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 shadow-glass-soft backdrop-blur-xl"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-os-cyan/25 bg-os-cyan/10 text-os-cyan shadow-[0_0_22px_rgba(34,211,238,0.22)]">
                <TypedIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <span>
                <span className="block font-semibold text-os-text">{title as string}</span>
                <span className="block text-xs text-os-muted">{subtitle as string}</span>
              </span>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
};

export default Certifications;
