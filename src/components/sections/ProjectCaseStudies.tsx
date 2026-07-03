import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers3,
  PanelTop,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { projectCaseStudies } from '../../data/projects';
import { SectionShell } from '../layout/SectionShell';
import { Button } from '../ui/Button';

type CaseStudyWithLinks = (typeof projectCaseStudies)[number] & {
  sourceUrl?: string;
  githubUrl?: string;
};

const techIconStyles = [
  { label: '⚛', border: 'border-cyan-400/35', bg: 'bg-cyan-400/10', text: 'text-cyan-200' },
  { label: 'JS', border: 'border-lime-400/35', bg: 'bg-lime-400/10', text: 'text-lime-200' },
  { label: 'TS', border: 'border-blue-400/35', bg: 'bg-blue-400/10', text: 'text-blue-200' },
  { label: '◆', border: 'border-emerald-400/35', bg: 'bg-emerald-400/10', text: 'text-emerald-200' },
  { label: '☁', border: 'border-white/15', bg: 'bg-white/[0.06]', text: 'text-os-text' },
  { label: '∿', border: 'border-cyan-400/35', bg: 'bg-cyan-400/10', text: 'text-cyan-200' },
];

const caseIcons: LucideIcon[] = [PanelTop, Sparkles, ShieldCheck, Layers3];

const ProjectCaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStudy = useMemo<CaseStudyWithLinks>(() => {
    return projectCaseStudies[activeIndex] ?? projectCaseStudies[0];
  }, [activeIndex]);

  const sourceUrl = activeStudy?.sourceUrl ?? activeStudy?.githubUrl;
  const previewStudies = projectCaseStudies.slice(0, 4);

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? Math.max(projectCaseStudies.length - 1, 0) : current - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current >= projectCaseStudies.length - 1 ? 0 : current + 1,
    );
  };

  if (!activeStudy) return null;

  return (
    <SectionShell
      id="case-studies"
      className="relative bg-transparent py-24 sm:py-28"
      eyebrow="In-Depth Look"
      title={
        <>
          Project Case{' '}
          <span className="bg-gradient-to-r from-os-cyan via-blue-400 to-os-violet bg-clip-text text-transparent">
            Studies
          </span>
        </>
      }
      description="Detailed breakdown of my best work"
    >
      <div className="relative mx-auto max-w-[92rem]">
        <div className="pointer-events-none absolute left-1/2 top-20 h-[34rem] w-[70rem] -translate-x-1/2 rounded-full bg-os-violet/8 blur-3xl" />
        <div className="pointer-events-none absolute left-8 top-[22rem] h-72 w-72 rounded-full bg-os-cyan/8 blur-3xl" />

        <button
          type="button"
          onClick={goPrevious}
          aria-label="Previous case study"
          className="absolute left-0 top-[18.5rem] z-30 hidden h-14 w-14 -translate-x-1/2 place-items-center rounded-full border border-white/12 bg-[#0b1224]/80 text-os-text shadow-[0_0_30px_rgba(0,0,0,0.45)] backdrop-blur-xl transition hover:border-os-cyan/45 hover:bg-os-cyan/10 hover:text-os-cyan lg:grid"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next case study"
          className="absolute right-0 top-[18.5rem] z-30 hidden h-14 w-14 translate-x-1/2 place-items-center rounded-full border border-white/12 bg-[#0b1224]/80 text-os-text shadow-[0_0_30px_rgba(0,0,0,0.45)] backdrop-blur-xl transition hover:border-os-violet/45 hover:bg-os-violet/10 hover:text-os-violet lg:grid"
        >
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>

        <article className="relative overflow-hidden rounded-[1.8rem] border border-os-violet/35 bg-[#050816]/58 shadow-[0_0_75px_rgba(139,92,246,0.14)] backdrop-blur-md">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_34%_72%,rgba(139,92,246,0.22),transparent_34%),radial-gradient(circle_at_70%_28%,rgba(34,211,238,0.08),transparent_26%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-os-violet/80 to-transparent" />

          <div className="relative grid lg:grid-cols-[minmax(0,1.58fr)_minmax(22rem,0.92fr)]">
            <div className="relative min-h-[31rem] overflow-hidden border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:border-r lg:border-white/10">
              <div className="pointer-events-none absolute bottom-8 left-1/2 h-28 w-[36rem] max-w-[82%] -translate-x-1/2 rounded-[50%] border border-os-violet/50 bg-os-violet/10 shadow-[0_0_80px_rgba(139,92,246,0.36)]" />
              <div className="pointer-events-none absolute bottom-14 left-1/2 h-12 w-[25rem] max-w-[60%] -translate-x-1/2 rounded-[50%] border border-os-cyan/40 bg-os-cyan/10 shadow-[0_0_50px_rgba(34,211,238,0.2)]" />

              <div className="relative mx-auto max-w-4xl">
                <div className="relative overflow-hidden rounded-[1.25rem] border border-white/15 bg-[#050a16]/80 shadow-[0_24px_80px_rgba(0,0,0,0.48)]">
                  <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.045] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/90" />
                    <span className="ml-3 rounded-full border border-os-cyan/25 bg-os-cyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-os-cyan">
                      {activeStudy.eyebrow}
                    </span>
                  </div>

                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={activeStudy.image}
                      alt={`${activeStudy.title} case study preview`}
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/72 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-os-violet/70 to-transparent" />
                  </div>
                </div>

                <div className="absolute -bottom-10 -left-7 hidden w-64 overflow-hidden rounded-2xl border border-os-cyan/35 bg-[#071327]/82 p-4 shadow-[0_0_45px_rgba(34,211,238,0.18)] backdrop-blur-xl md:block">
                  <div className="mb-3 grid h-12 w-12 place-items-center rounded-2xl border border-os-cyan/35 bg-os-cyan/12 text-os-cyan">
                    <ExternalLink className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-os-cyan">
                    Product Signal
                  </p>
                  <p className="mt-2 text-sm leading-6 text-os-text">
                    Real workflow, clear UI, and practical product thinking.
                  </p>
                </div>

                <div className="absolute -bottom-6 -right-6 hidden w-52 overflow-hidden rounded-2xl border border-os-violet/35 bg-[#0d1024]/82 p-4 shadow-[0_0_45px_rgba(139,92,246,0.2)] backdrop-blur-xl md:block">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-os-violet">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm leading-6 text-os-muted">
                    Built to be useful, scannable, and easy to extend.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-14 flex justify-center gap-2">
                {projectCaseStudies.map((study, index) => (
                  <button
                    key={study.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Open ${study.title} case study`}
                    className={`h-3 rounded-full transition ${
                      index === activeIndex
                        ? 'w-8 bg-gradient-to-r from-os-cyan to-os-violet shadow-[0_0_18px_rgba(139,92,246,0.7)]'
                        : 'w-3 bg-white/25 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-os-cyan/35 bg-os-cyan/10 text-os-cyan shadow-[0_0_35px_rgba(34,211,238,0.24)]">
                <PanelTop className="h-8 w-8" aria-hidden="true" />
              </div>

              <h3 className="font-display text-3xl font-bold tracking-tight text-os-text sm:text-4xl">
                {activeStudy.title}
              </h3>

              <p className="mt-4 max-w-md text-lg leading-8 text-os-muted">
                {activeStudy.solution}
              </p>

              <div className="mt-6">
                <p className="font-display text-base font-semibold text-os-text">Tech Stack</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {activeStudy.stack.slice(0, 6).map((item, index) => {
                    const style = techIconStyles[index % techIconStyles.length];

                    return (
                      <span
                        key={item}
                        title={item}
                        className={`grid h-14 w-14 place-items-center rounded-2xl border ${style.border} ${style.bg} ${style.text} font-display text-lg font-black shadow-[0_0_28px_rgba(0,0,0,0.25)] backdrop-blur-md`}
                      >
                        {style.label}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="mt-7">
                <p className="font-display text-base font-semibold text-os-text">Features</p>
                <div className="mt-4 grid gap-3">
                  {activeStudy.features.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-base text-os-text">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-os-violet/20 text-os-violet">
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {activeStudy.liveUrl && (
                  <Button href={activeStudy.liveUrl} target="_blank" rel="noreferrer">
                    Live Demo
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </Button>
                )}

                {sourceUrl && (
                  <Button href={sourceUrl} variant="secondary" target="_blank" rel="noreferrer">
                    View Code
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {previewStudies.map((study, index) => {
            const Icon = caseIcons[index % caseIcons.length];
            const isActive = index === activeIndex;

            return (
              <button
                key={study.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group overflow-hidden rounded-2xl border p-4 text-left shadow-[0_0_34px_rgba(0,0,0,0.24)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-os-cyan/45 hover:bg-white/[0.075] ${
                  isActive
                    ? 'border-os-cyan/50 bg-os-cyan/[0.07]'
                    : 'border-white/10 bg-white/[0.045]'
                }`}
              >
                <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_8rem]">
                  <div>
                    <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl border border-os-cyan/30 bg-os-cyan/10 text-os-cyan">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <h4 className="font-display text-lg font-bold text-os-text">
                      {study.title}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-os-muted">
                      {study.problem}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.stack.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-os-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative hidden min-h-32 overflow-hidden rounded-xl border border-white/10 sm:block">
                    <img
                      src={study.image}
                      alt={`${study.title} thumbnail`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070d1d]/65 to-transparent" />
                    <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white shadow-[0_0_22px_rgba(139,92,246,0.42)]">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
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
      </div>
    </SectionShell>
  );
};

export default ProjectCaseStudies;