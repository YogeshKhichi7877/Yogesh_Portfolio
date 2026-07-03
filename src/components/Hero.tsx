import { useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  Award,
  Braces,
  Building2,
  Clock3,
  Code2,
  Github,
  Hexagon,
  Instagram,
  Linkedin,
  Mail,
  Send,
  Server,
  Users,
} from 'lucide-react';
import { gsap } from 'gsap';
import { Button } from './ui/Button';
import { HeroLaptopScene } from './three/HeroLaptopScene';
import { socialLinks, trustStats } from '../lib/site';

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  Instagram,
};

const techBadges = [
  { label: 'React', icon: Braces, className: 'left-[15%] top-[14%]' },
  { label: 'Node.js', icon: Server, className: 'right-[15%] top-[8%]' },
  { label: 'JavaScript', icon: Code2, className: 'right-[3%] top-[36%]' },
  { label: 'TypeScript', icon: Code2, className: 'right-[14%] bottom-[20%]' },
  { label: 'Three.js', icon: Hexagon, className: 'left-[8%] bottom-[28%]' },
];

const statIcons = [Award, Users, Clock3, Award, Building2];

const HeroModelStage = () => (
  <div
    className="relative isolate mx-auto min-h-[29rem] w-full max-w-[53rem] overflow-visible sm:min-h-[36rem] lg:min-h-[43rem]"
    role="img"
    aria-label="3D laptop developer workstation with orbiting technology badges"
  >
    <div className="pointer-events-none absolute left-1/2 top-[48%] h-[28rem] w-[92%] -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] rounded-[50%] border border-os-cyan/40 shadow-[0_0_70px_rgba(34,211,238,0.2)]" />
    <div className="pointer-events-none absolute left-1/2 top-[49%] h-[21rem] w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] rounded-[50%] border border-os-violet/45 shadow-[0_0_55px_rgba(139,92,246,0.12)]" />
    <div className="pointer-events-none absolute left-1/2 top-[48%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-os-cyan/10 blur-3xl" />
    <div className="pointer-events-none absolute right-[8%] top-[15%] h-48 w-48 rounded-full bg-os-violet/15 blur-3xl" />

    <div className="pointer-events-none absolute left-1/2 bottom-[4.5rem] h-[9rem] w-[92%] -translate-x-1/2 rounded-[50%] border border-os-violet/45 bg-os-violet/10 shadow-[0_0_95px_rgba(139,92,246,0.32)]" />
    <div className="pointer-events-none absolute left-1/2 bottom-[6.8rem] h-10 w-[72%] -translate-x-1/2 rounded-[50%] border border-os-cyan/50 bg-os-cyan/10 shadow-[0_0_65px_rgba(56,189,248,0.3)]" />

    <div className="absolute inset-x-[-3%] top-[6%] z-10 h-[25rem] sm:top-[4%] sm:h-[32rem] lg:top-[1%] lg:h-[39rem]">
      <HeroLaptopScene />
    </div>

    {techBadges.map((badge, index) => (
      <div
        key={badge.label}
        className={`absolute ${badge.className} z-20 hidden h-[5.4rem] w-[5.4rem] place-items-center rounded-2xl border border-white/12 bg-[#081124]/80 text-os-cyan shadow-[0_0_30px_rgba(34,211,238,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-os-cyan/45 sm:grid`}
        style={{ animationDelay: `${index * 0.25}s` }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-os-cyan/10 to-os-violet/10" />
        <badge.icon className="relative h-7 w-7" aria-hidden="true" />
        <span className="relative mt-1 font-display text-[11px] font-bold text-os-text">
          {badge.label}
        </span>
      </div>
    ))}

    <div className="absolute right-[24%] top-[30%] z-20 hidden h-20 w-20 rotate-12 rounded-2xl border border-os-violet/35 bg-os-violet/10 shadow-[0_0_35px_rgba(139,92,246,0.25)] lg:block" />
  </div>
);

const Hero = () => {
  const copyRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .fromTo(
        copyRef.current?.children ?? [],
        { y: 30, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.85, stagger: 0.08 },
      )
      .fromTo(
        visualRef.current,
        { y: 34, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 1 },
        '-=0.45',
      )
      .fromTo(
        statsRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.45',
      );

    return () => timeline.kill();
  }, []);

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden px-4 pb-10 pt-28 text-os-text sm:px-6 lg:px-8 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(34,211,238,0.13),transparent_32%),radial-gradient(circle_at_76%_34%,rgba(139,92,246,0.18),transparent_34%),radial-gradient(circle_at_52%_78%,rgba(59,130,246,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-10 [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-13rem)] w-full max-w-[92rem] items-center gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(37rem,1.15fr)]">
        <div ref={copyRef} className="max-w-2xl">
          <p className="mb-4 font-display text-3xl font-bold text-os-text sm:text-4xl">
            Hi, I&apos;m
          </p>

          <h1 className="font-display text-6xl font-black leading-[0.92] tracking-tight text-os-text sm:text-7xl lg:text-[6.7rem]">
            Yogesh
            <span className="block bg-gradient-to-r from-os-cyan via-blue-400 to-os-violet bg-clip-text text-transparent">
              Khinchi
            </span>
          </h1>

          <div className="mt-6 inline-flex rounded-2xl border border-os-cyan/45 bg-os-bg/50 px-5 py-2 font-display text-base font-semibold text-os-text shadow-[0_0_32px_rgba(34,211,238,0.15)] backdrop-blur-xl sm:text-lg">
            Full-Stack Developer &amp; 3D Web Enthusiast
          </div>

          <p className="mt-7 max-w-xl text-lg leading-8 text-os-muted sm:text-xl sm:leading-9">
            I build fast, modern, and interactive web experiences using React, Node.js,
            Three.js and AI tools.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href="#projects"
              size="lg"
              className="min-w-48 text-base"
              onClick={(event) => {
                event.preventDefault();
                scrollTo('#projects');
              }}
            >
              View Projects
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Button>

            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              className="min-w-44 text-base"
              onClick={(event) => {
                event.preventDefault();
                scrollTo('#contact');
              }}
            >
              Hire Me
              <Send className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.label as keyof typeof socialIconMap] ?? Github;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-white/[0.055] text-os-text shadow-glass-soft backdrop-blur-xl transition hover:-translate-y-1 hover:border-os-cyan/50 hover:bg-os-cyan/10 hover:text-os-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-os-cyan"
                  aria-label={link.label}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div ref={visualRef} className="relative">
          <HeroModelStage />
        </div>
      </div>

      <div ref={statsRef} className="relative z-20 mx-auto mt-2 max-w-[92rem]">
        <div className="grid gap-4 rounded-[1.6rem] border border-os-violet/35 bg-[#070d1d]/62 p-4 shadow-[0_0_55px_rgba(139,92,246,0.12)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-5 lg:p-5">
          {trustStats.map((stat, index) => {
            const Icon = statIcons[index] ?? Award;

            return (
              <div
                key={stat.label}
                className="relative flex items-center gap-4 rounded-2xl px-4 py-4"
              >
                {index > 0 && (
                  <div className="absolute -left-2 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-white/10 lg:block" />
                )}

                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-os-violet/35 bg-os-violet/10 text-os-violet shadow-[0_0_25px_rgba(139,92,246,0.22)]">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>

                <div>
                  <p className="font-display text-3xl font-black leading-none text-os-violet">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-os-text/85">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
