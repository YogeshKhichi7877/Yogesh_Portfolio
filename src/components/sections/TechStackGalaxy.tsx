
import { useMemo, useState } from 'react';
import {
  Bot,
  Braces,
  Code2,
  Database,
  Layers3,
  Orbit,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { skillGroups, type SkillCategory } from '../../data/skills';
import { SectionShell } from '../layout/SectionShell';
import { Button } from '../ui/Button';

const categoryIcons = {
  Frontend: Braces,
  Backend: Server,
  Database,
  'Creative Tech': Rocket,
  'AI / Tools': Bot,
} satisfies Record<SkillCategory, LucideIcon>;

const fallbackIcons: LucideIcon[] = [Braces, Code2, Zap, Database, Server, Sparkles, Bot, Orbit, Rocket, Layers3];

const brandStyles: Record<
  string,
  {
    label: string;
    bg: string;
    text: string;
    glow: string;
    border: string;
  }
> = {
  React: {
    label: '⚛',
    bg: 'rgba(34, 211, 238, 0.12)',
    text: '#22D3EE',
    glow: '0 0 36px rgba(34, 211, 238, 0.55)',
    border: 'rgba(34, 211, 238, 0.45)',
  },
  TypeScript: {
    label: 'TS',
    bg: 'rgba(59, 130, 246, 0.18)',
    text: '#60A5FA',
    glow: '0 0 34px rgba(59, 130, 246, 0.5)',
    border: 'rgba(96, 165, 250, 0.45)',
  },
  JavaScript: {
    label: 'JS',
    bg: 'rgba(250, 204, 21, 0.18)',
    text: '#FACC15',
    glow: '0 0 34px rgba(250, 204, 21, 0.45)',
    border: 'rgba(250, 204, 21, 0.45)',
  },
  'Tailwind CSS': {
    label: '∿',
    bg: 'rgba(56, 189, 248, 0.16)',
    text: '#38BDF8',
    glow: '0 0 34px rgba(56, 189, 248, 0.45)',
    border: 'rgba(56, 189, 248, 0.45)',
  },
  Vite: {
    label: '⚡',
    bg: 'rgba(168, 85, 247, 0.18)',
    text: '#C084FC',
    glow: '0 0 34px rgba(168, 85, 247, 0.5)',
    border: 'rgba(168, 85, 247, 0.45)',
  },
  'Next.js': {
    label: 'N',
    bg: 'rgba(255, 255, 255, 0.08)',
    text: '#F8FAFC',
    glow: '0 0 34px rgba(255, 255, 255, 0.2)',
    border: 'rgba(255, 255, 255, 0.28)',
  },
  'Redux Toolkit': {
    label: '◉',
    bg: 'rgba(139, 92, 246, 0.16)',
    text: '#A78BFA',
    glow: '0 0 34px rgba(139, 92, 246, 0.45)',
    border: 'rgba(167, 139, 250, 0.45)',
  },
  Zustand: {
    label: '🐻',
    bg: 'rgba(251, 146, 60, 0.13)',
    text: '#FB923C',
    glow: '0 0 34px rgba(251, 146, 60, 0.35)',
    border: 'rgba(251, 146, 60, 0.35)',
  },
  'React Query': {
    label: '✿',
    bg: 'rgba(244, 63, 94, 0.14)',
    text: '#FB7185',
    glow: '0 0 34px rgba(244, 63, 94, 0.35)',
    border: 'rgba(251, 113, 133, 0.35)',
  },
  Axios: {
    label: 'AX',
    bg: 'rgba(99, 102, 241, 0.15)',
    text: '#A5B4FC',
    glow: '0 0 34px rgba(99, 102, 241, 0.4)',
    border: 'rgba(165, 180, 252, 0.4)',
  },
  ESLint: {
    label: '⬢',
    bg: 'rgba(79, 70, 229, 0.16)',
    text: '#818CF8',
    glow: '0 0 34px rgba(79, 70, 229, 0.38)',
    border: 'rgba(129, 140, 248, 0.4)',
  },
  Prettier: {
    label: '≋',
    bg: 'rgba(45, 212, 191, 0.13)',
    text: '#5EEAD4',
    glow: '0 0 34px rgba(45, 212, 191, 0.35)',
    border: 'rgba(94, 234, 212, 0.36)',
  },
};

const stageTransforms = [
  { y: -26, rotate: -7, z: 0 },
  { y: -40, rotate: -4, z: 1 },
  { y: -52, rotate: 0, z: 2 },
  { y: -42, rotate: 4, z: 1 },
  { y: -28, rotate: 7, z: 0 },
  { y: 42, rotate: -6, z: 0 },
  { y: 34, rotate: -3, z: 1 },
  { y: 30, rotate: 0, z: 1 },
  { y: 36, rotate: 3, z: 1 },
  { y: 46, rotate: 6, z: 0 },
];

const TechStackGalaxy = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('Frontend');

  const activeGroup = useMemo(
    () => skillGroups.find((group) => group.category === activeCategory) ?? skillGroups[0],
    [activeCategory],
  );

  const visibleSkills = useMemo(() => {
    const rest = skillGroups
      .flatMap((group) => group.skills)
      .filter((skill) => !activeGroup.skills.some((activeSkill) => activeSkill.name === skill.name));

    return [...activeGroup.skills, ...rest].slice(0, 10);
  }, [activeGroup]);

  return (
      <SectionShell
        id="skills"
      className="relative bg-transparent py-24 sm:py-28"
      eyebrow="My Skills"
      title={
        <>
          Tech Stack{' '}
          <span className="bg-gradient-to-r from-os-cyan via-blue-400 to-os-violet bg-clip-text text-transparent">
            Galaxy
          </span>
        </>
      }
      description="A universe of technologies and tools I use to build fast, scalable, and delightful digital experiences."
    >
      <div
        className="mb-12 flex gap-4 overflow-x-auto pb-3 lg:justify-center lg:overflow-visible"
        role="tablist"
        aria-label="Skill categories"
      >
        {skillGroups.map((group) => {
          const Icon = categoryIcons[group.category];
          const isActive = group.category === activeCategory;

          return (
            <button
              key={group.category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(group.category)}
              className={`inline-flex min-w-max items-center gap-3 rounded-2xl border px-7 py-4 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-os-cyan ${
                isActive
                  ? 'border-os-cyan/50 bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white shadow-[0_0_36px_rgba(139,92,246,0.45)]'
                  : 'border-white/10 bg-white/[0.055] text-os-muted backdrop-blur-xl hover:border-os-cyan/35 hover:bg-white/[0.08] hover:text-os-text'
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {group.category}
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto min-h-[43rem] max-w-7xl overflow-visible px-3 py-8 sm:px-6 lg:min-h-[44rem]">
        <div className="pointer-events-none absolute left-1/2 top-[55%] h-[21rem] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-os-violet/55 opacity-90 shadow-[0_0_46px_rgba(139,92,246,0.25)]" />
        <div className="pointer-events-none absolute left-1/2 top-[55%] h-[14rem] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-os-cyan/40 opacity-80 shadow-[0_0_38px_rgba(34,211,238,0.22)]" />
        <div className="pointer-events-none absolute left-1/2 top-[58%] h-[9rem] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-500/30 opacity-60" />

        <div className="pointer-events-none absolute left-[8%] top-[32%] hidden h-20 w-20 rotate-12 rounded-2xl border border-os-violet/35 bg-gradient-to-br from-os-violet/25 to-os-cyan/10 shadow-[0_0_34px_rgba(139,92,246,0.4)] lg:block" />
        <div className="pointer-events-none absolute right-[9%] top-[38%] hidden h-14 w-14 -rotate-12 rounded-xl border border-os-cyan/35 bg-gradient-to-br from-os-cyan/25 to-os-violet/10 shadow-[0_0_34px_rgba(34,211,238,0.38)] lg:block" />
        <div className="pointer-events-none absolute bottom-[36%] left-[14%] h-4 w-4 rounded-full bg-os-violet shadow-[0_0_26px_8px_rgba(139,92,246,0.65)]" />
        <div className="pointer-events-none absolute bottom-[34%] right-[16%] h-5 w-5 rounded-full bg-os-cyan shadow-[0_0_26px_8px_rgba(34,211,238,0.65)]" />

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-4 pt-8 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
          {visibleSkills.map((skill, index) => {
            const Icon = fallbackIcons[index % fallbackIcons.length];
            const brand = brandStyles[skill.name];
            const transform = stageTransforms[index] ?? { y: 0, rotate: 0, z: 0 };

            return (
              <article
                key={`${skill.name}-${index}`}
                className="group relative min-h-40 rounded-3xl border bg-white/[0.065] p-4 text-center shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-md transition duration-300 hover:-translate-y-3 hover:border-os-cyan/55 hover:bg-white/[0.09] hover:shadow-[0_0_42px_rgba(34,211,238,0.22)]"
                style={{
                  transform: `translateY(${transform.y}px) rotate(${transform.rotate}deg)`,
                  zIndex: 20 + transform.z,
                  borderColor: brand?.border ?? 'rgba(255,255,255,0.12)',
                }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent opacity-70" />
                <div className="relative">
                  <div
                    className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl border text-2xl font-black shadow-glow transition group-hover:scale-110"
                    style={{
                      background: brand?.bg ?? 'rgba(34, 211, 238, 0.1)',
                      color: brand?.text ?? '#22D3EE',
                      borderColor: brand?.border ?? 'rgba(34, 211, 238, 0.35)',
                      boxShadow: brand?.glow ?? '0 0 30px rgba(34, 211, 238, 0.35)',
                    }}
                  >
                    {brand ? brand.label : <Icon className="h-8 w-8" aria-hidden="true" />}
                  </div>

                  <h3 className="font-display text-base font-bold text-os-text">{skill.name}</h3>
                  <p className="mt-1 text-xs leading-5 text-os-muted">{skill.context}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="pointer-events-none absolute bottom-16 left-1/2 h-32 w-[38rem] max-w-[82%] -translate-x-1/2 rounded-[50%] border border-os-cyan/45 bg-os-cyan/10 shadow-[0_0_90px_rgba(56,189,248,0.34)]" />
        <div className="pointer-events-none absolute bottom-[4.8rem] left-1/2 h-16 w-[24rem] max-w-[66%] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-blue-600/35 via-os-cyan/35 to-fuchsia-500/35 blur-xl" />

        <div className="relative z-20 mt-20 flex justify-center">
          <Button
            href="#projects"
            onClick={(event) => {
              event.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View All Skills
            <Rocket className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-4">
        {[
          ['Modern & Scalable', 'Building future-ready solutions', Rocket],
          ['Clean & Performant', 'Optimized for speed & efficiency', Zap],
          ['Best Practices', 'Writing maintainable, tested code', ShieldCheck],
          ['Always Learning', 'Exploring new tech every day', Sparkles],
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

export default TechStackGalaxy;
