
import {
  Calendar,
  Code2,
  GraduationCap,
  MapPin,
  Rocket,
  Search,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { journeyItems } from '../data/education';
import { SectionShell } from './layout/SectionShell';

const ROCKET_IMAGE_SRC = '/rocket.png';

const journeyIcons: LucideIcon[] = [GraduationCap, Code2, Search, Rocket];

const Education = () => {
  return (
    <SectionShell
      id="education"
      className="relative bg-transparent py-24 sm:py-28"
      eyebrow="My Journey"
      title={
        <>
          Education{' '}
          <span className="bg-gradient-to-r from-os-cyan via-blue-400 to-os-violet bg-clip-text text-transparent">
            & Journey
          </span>
        </>
      }
      description="A timeline of my key milestones, projects, and continuous growth as a developer and problem solver."
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_26rem] xl:grid-cols-[minmax(0,1fr)_30rem]">
        <div className="relative">
          <div className="absolute bottom-8 left-7 top-8 hidden w-[3px] rounded-full bg-gradient-to-b from-os-violet via-os-cyan to-os-violet shadow-[0_0_28px_rgba(139,92,246,0.75)] md:block" />

          <div className="space-y-5">
            {journeyItems.map((item, index) => {
              const Icon = journeyIcons[index % journeyIcons.length];

              return (
                <article key={item.title} className="relative md:pl-24">
                  <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 md:block">
                    <div className="relative grid h-14 w-14 place-items-center rounded-full border border-os-cyan/50 bg-[#071020] text-os-cyan shadow-[0_0_26px_rgba(34,211,238,0.5)]">
                      <div className="absolute inset-[-7px] rounded-full border border-os-violet/45 shadow-[0_0_26px_rgba(139,92,246,0.5)]" />
                      <Icon className="relative h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="absolute left-14 top-1/2 h-px w-10 -translate-y-1/2 bg-gradient-to-r from-os-cyan to-transparent" />
                  </div>

                  <div className="group relative overflow-hidden rounded-[1.7rem] border border-os-violet/35 bg-white/[0.06] p-5 shadow-[0_0_48px_rgba(59,130,246,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-os-cyan/45 hover:bg-white/[0.085] hover:shadow-[0_0_58px_rgba(34,211,238,0.16)] sm:p-6">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-transparent" />
                    <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-os-cyan/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="relative grid gap-5 lg:grid-cols-[7rem_minmax(0,1fr)] lg:items-start">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-display text-3xl font-black tracking-tight text-os-cyan">
                            {item.period.split(' ')[0]}
                          </span>
                          {index === 0 && (
                            <span className="rounded-full border border-os-violet/30 bg-os-violet/10 px-3 py-1 text-xs font-semibold text-os-violet">
                              Present
                            </span>
                          )}
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2 text-xs text-os-muted lg:hidden">
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5">
                            <MapPin className="h-3.5 w-3.5 text-os-cyan" aria-hidden="true" />
                            {item.location}
                          </span>
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5">
                            <Calendar className="h-3.5 w-3.5 text-os-cyan" aria-hidden="true" />
                            {item.period}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-5">
                        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-os-cyan/30 bg-os-cyan/10 text-os-cyan shadow-[0_0_28px_rgba(34,211,238,0.22)]">
                          <Icon className="h-8 w-8" aria-hidden="true" />
                        </div>

                        <div>
                          <h3 className="font-display text-2xl font-bold leading-tight text-os-text">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-lg font-semibold text-blue-300">
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      <div className="border-white/10 lg:col-span-2">
                        <p className="text-base leading-7 text-os-muted">{item.description}</p>

                        <div className="mt-4 hidden flex-wrap gap-2 lg:flex">
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-os-muted">
                            <MapPin className="h-3.5 w-3.5 text-os-cyan" aria-hidden="true" />
                            {item.location}
                          </span>
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-os-muted">
                            <Calendar className="h-3.5 w-3.5 text-os-cyan" aria-hidden="true" />
                            {item.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="relative hidden min-h-[42rem] lg:block">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute bottom-20 left-1/2 h-36 w-80 -translate-x-1/2 rounded-[50%] bg-os-violet/20 blur-3xl" />
            <div className="absolute bottom-8 left-1/2 h-20 w-[22rem] -translate-x-1/2 rounded-[50%] border border-os-violet/40 bg-os-violet/10 shadow-[0_0_80px_rgba(139,92,246,0.3)]" />
            <div className="absolute right-10 top-24 h-1.5 w-1.5 rounded-full bg-os-cyan shadow-[0_0_26px_8px_rgba(34,211,238,0.8)]" />
            <div className="absolute left-16 top-36 h-1 w-1 rounded-full bg-os-violet shadow-[0_0_24px_7px_rgba(139,92,246,0.8)]" />
          </div>

          <img
            src={ROCKET_IMAGE_SRC}
            alt="Neon rocket representing growth journey"
            className="relative z-10 mx-auto h-[39rem] w-auto object-contain drop-shadow-[0_0_45px_rgba(139,92,246,0.45)]"
            loading="lazy"
          />

          <div className="absolute bottom-10 left-1/2 z-0 h-28 w-72 -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-blue-600/30 via-os-violet/40 to-os-cyan/30 blur-2xl" />
        </aside>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-4">
        {[
          ['Strong Foundation', 'Computer science fundamentals'],
          ['Real Products', 'Shipping useful full-stack builds'],
          ['Creative Growth', 'Exploring UI, 3D, and AI tools'],
          ['Always Improving', 'Learning through practical work'],
        ].map(([title, subtitle], index) => {
          const Icon = [GraduationCap, Sparkles, Rocket, Calendar][index];

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

export default Education;
