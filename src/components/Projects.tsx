
import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Bot,
  Braces,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { featuredProjects, projectCategories, type FeaturedProject } from '../data/projects';
import { SectionShell } from './layout/SectionShell';
import { Button } from './ui/Button';

const categoryLabels: Record<string, string> = {
  All: 'All',
  'Full-Stack': 'Full Stack',
  'AI Product': 'AI Projects',
  'Creative Web': '3D / Creative',
  'Web App': 'Web Apps',
};

const projectIcons: Record<string, LucideIcon> = {
  'Full-Stack': Braces,
  'AI Product': Bot,
  'Creative Web': Layers3,
  'Web App': Code2,
};

const accentStyles = [
  {
    border: 'border-blue-500/45',
    glow: 'shadow-[0_0_42px_rgba(59,130,246,0.18)]',
    badge: 'border-blue-400/30 bg-blue-500/10 text-blue-200',
  },
  {
    border: 'border-fuchsia-500/45',
    glow: 'shadow-[0_0_42px_rgba(217,70,239,0.18)]',
    badge: 'border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-200',
  },
  {
    border: 'border-emerald-500/40',
    glow: 'shadow-[0_0_42px_rgba(16,185,129,0.14)]',
    badge: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200',
  },
  {
    border: 'border-cyan-500/45',
    glow: 'shadow-[0_0_42px_rgba(34,211,238,0.16)]',
    badge: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200',
  },
  {
    border: 'border-violet-500/45',
    glow: 'shadow-[0_0_42px_rgba(139,92,246,0.18)]',
    badge: 'border-violet-400/30 bg-violet-500/10 text-violet-200',
  },
  {
    border: 'border-indigo-500/45',
    glow: 'shadow-[0_0_42px_rgba(99,102,241,0.18)]',
    badge: 'border-indigo-400/30 bg-indigo-500/10 text-indigo-200',
  },
];

const categoryDescriptions: Record<string, string> = {
  All: "Some of the awesome projects I've built",
  'Full-Stack': 'Complete full-stack products with real workflows',
  'AI Product': 'AI-powered tools built for practical outcomes',
  'Creative Web': 'Interactive and memorable frontend experiences',
  'Web App': 'Modern web apps with clean user experiences',
};

const getProjectIcon = (category: string) => {
  return projectIcons[category] ?? Sparkles;
};

const ProjectCard = ({ project, index }: { project: FeaturedProject; index: number }) => {
  const accent = accentStyles[index % accentStyles.length];
  const Icon = getProjectIcon(project.category);

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.65rem] border ${accent.border} bg-white/[0.06] ${accent.glow} backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/[0.085] hover:shadow-[0_0_55px_rgba(56,189,248,0.22)]`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[1.65rem] bg-gradient-to-b from-white/[0.09] via-white/[0.025] to-transparent opacity-80" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-os-cyan/15 blur-3xl transition duration-500 group-hover:bg-os-violet/20" />

      <div className="relative h-56 overflow-hidden border-b border-white/10">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          loading={index < 3 ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-[#060b18]/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.18),transparent_36%)]" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className={`rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] backdrop-blur-xl ${accent.badge}`}>
            {categoryLabels[project.category] ?? project.category}
          </span>
        </div>

        <div className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-black/35 text-os-cyan shadow-[0_0_25px_rgba(34,211,238,0.22)] backdrop-blur-xl">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <div className="relative flex min-h-[13rem] flex-col p-5">
        <h3 className="font-display text-2xl font-bold tracking-tight text-os-text">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-os-muted">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-os-violet/25 bg-os-violet/10 px-3 py-1.5 text-xs font-semibold text-violet-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open live project: ${project.title}`}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.055] text-os-text transition hover:border-os-cyan/40 hover:bg-os-cyan/10 hover:text-os-cyan"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}

            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open source code for ${project.title}`}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.055] text-os-text transition hover:border-os-violet/40 hover:bg-os-violet/10 hover:text-os-violet"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-os-muted">
            View
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] =
    useState<(typeof projectCategories)[number]>('All');

  const visibleProjects = useMemo(() => {
    if (activeCategory === 'All') return featuredProjects;
    return featuredProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <SectionShell
      id="projects"
      className="relative bg-transparent py-24 sm:py-28"
      eyebrow="Featured Work"
      title="Featured Projects"
      description={categoryDescriptions[activeCategory] ?? "Some of the awesome projects I've built"}
    >
      <div
        className="mb-12 flex gap-4 overflow-x-auto pb-3 lg:justify-center lg:overflow-visible"
        aria-label="Project filters"
      >
        {projectCategories.map((category) => {
          const isActive = activeCategory === category;
          const label = categoryLabels[category] ?? category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`min-w-max rounded-xl border px-7 py-3.5 text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-os-cyan ${
                isActive
                  ? 'border-os-cyan/45 bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white shadow-[0_0_35px_rgba(139,92,246,0.42)]'
                  : 'border-white/10 bg-white/[0.055] text-os-muted backdrop-blur-xl hover:border-os-cyan/35 hover:bg-white/[0.08] hover:text-os-text'
              }`}
              aria-pressed={isActive}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button
          href="#contact"
          onClick={(event) => {
            event.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          View All Projects
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </SectionShell>
  );
};

export default Projects;
