import React, { useEffect, useRef } from 'react';
import {
  Code2,
  Cuboid,
  Lightbulb,
  PenTool,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featureRows = [
  { title: 'Clean & Efficient Code', icon: Code2 },
  { title: 'Modern UI/UX Design', icon: PenTool },
  { title: 'Problem Solver', icon: Lightbulb },
  { title: 'AI & 3D Web Enthusiast', icon: Cuboid },
];

const codePanels = [
  {
    title: 'index.jsx',
    className: 'left-[0%] top-[19%] rotate-[-5deg]',
    lines: [
      'import React from "react";',
      'export default function Hero() {',
      '  return (',
      '    <div className="hero">',
      '      <h1>Build. Ship. Scale.</h1>',
      '    </div>',
      '  );',
      '}',
    ],
  },
  {
    title: 'app.js',
    className: 'right-[0%] top-[32%] rotate-[4deg]',
    lines: [
      'const app = express();',
      'app.get("/", (req, res) => {',
      '  res.json({',
      '    message: "Hello World!",',
      '    status: "success"',
      '  });',
      '});',
    ],
  },
];

const Crystal = ({ className }: { className: string }) => (
  <div
    className={`pointer-events-none absolute rotate-45 border border-os-cyan/35 bg-gradient-to-br from-os-cyan/35 via-os-violet/30 to-transparent shadow-[0_0_34px_rgba(139,92,246,0.38)] ${className}`}
  >
    <span className="absolute inset-2 border border-white/20" />
    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20" />
  </div>
);

const AboutImageStage = () => (
  <div className="relative isolate mx-auto min-h-[31rem] w-full max-w-[43rem] overflow-visible sm:min-h-[38rem] lg:min-h-[42rem]">
    {/* Main glow field */}
    <div className="pointer-events-none absolute left-1/2 top-[48%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-os-cyan/10 blur-3xl sm:h-[36rem] sm:w-[36rem]" />
    <div className="pointer-events-none absolute left-1/2 top-[49%] h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-os-violet/10 blur-3xl sm:h-[32rem] sm:w-[32rem]" />

    {/* Halo rings */}
    <div className="pointer-events-none absolute left-1/2 top-[44%] h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-os-cyan/65 shadow-[0_0_38px_rgba(34,211,238,0.78),inset_0_0_30px_rgba(34,211,238,0.2)] sm:h-[29rem] sm:w-[29rem]" />
    <div className="pointer-events-none absolute left-1/2 top-[44%] h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/18 sm:h-[25rem] sm:w-[25rem]" />
    <div className="pointer-events-none absolute left-1/2 top-[45%] h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-os-cyan/20 sm:h-[37rem] sm:w-[37rem]" />

    {/* Platform */}
    <div className="pointer-events-none absolute bottom-[7%] left-1/2 h-24 w-[82%] -translate-x-1/2 rounded-[50%] border border-os-violet/45 bg-os-violet/10 shadow-[0_0_80px_rgba(139,92,246,0.34)]" />
    <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-9 w-[62%] -translate-x-1/2 rounded-[50%] border border-os-cyan/45 bg-os-cyan/10 shadow-[0_0_60px_rgba(56,189,248,0.25)]" />

    {/* Floating code panels */}
    {codePanels.map((panel) => (
      <div
  key={panel.title}
  className={`absolute z-10 hidden w-60 rounded-[1.35rem] border border-[#8b5cf6]/40 bg-[#030712]/95 p-4 font-mono text-[10px] leading-[1.85] text-[#d6defa] shadow-[0_0_35px_rgba(139,92,246,0.18),0_18px_40px_rgba(0,0,0,0.42)] backdrop-blur-xl lg:block ${panel.className}`}
>
  <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_26%,transparent_100%)]" />
  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-os-cyan/60 to-transparent" />

  <div className="relative mb-3 flex items-center justify-between border-b border-white/10 pb-2">
    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-2 text-[10px] text-os-cyan/90">{panel.title}</span>
    </div>

    <span className="h-2 w-2 rounded-full bg-os-violet shadow-[0_0_12px_rgba(139,92,246,0.9)]" />
  </div>

  <div className="relative space-y-1">
    {panel.lines.map((line, index) => (
      <p key={line} className="text-[#cfd8ff]">
        <span className="mr-3 inline-block w-4 text-right text-[#6b7497]">
          {index + 1}
        </span>
        <span>{line}</span>
      </p>
    ))}
  </div>
</div>
    ))}

    {/* Crystals */}
    <Crystal className="left-[11%] top-[9%] h-14 w-14" />
    <Crystal className="right-[8%] top-[17%] h-16 w-16" />
    <Crystal className="bottom-[20%] left-[6%] h-14 w-14" />
    <Crystal className="bottom-[19%] right-[11%] h-12 w-12" />

    {/* Avatar */}
    <img
      src="/about_me.png"
      alt="Yogesh Khinchi working on a laptop"
      className="absolute bottom-[7%] left-1/2 z-20 h-[28rem] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_26px_70px_rgba(34,211,238,0.28)] sm:h-[35rem] lg:h-[39rem]"
      loading="lazy"
    />
  </div>
);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 72%',
        toggleActions: 'play none none reverse',
      },
      defaults: { ease: 'power3.out' },
    });

    timeline
      .fromTo(
        contentRef.current?.children ?? [],
        { y: 28, opacity: 0, filter: 'blur(8px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.08 },
      )
      .fromTo(
        visualRef.current,
        { y: 34, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.95 },
        '-=0.45',
      );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate overflow-hidden px-4 py-24 text-os-text sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_42%,rgba(34,211,238,0.11),transparent_30%),radial-gradient(circle_at_74%_44%,rgba(139,92,246,0.14),transparent_34%)]" />
      <div className="pointer-events-none absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-os-cyan/8 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-[26%] h-80 w-80 rounded-full bg-os-violet/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[92rem] items-center gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(34rem,1.22fr)]">
        {/* Left content */}
        <div ref={contentRef} className="max-w-2xl">
          <p className="mb-5 font-mono text-sm font-semibold uppercase tracking-[0.32em] text-os-cyan">
            Who I Am
          </p>

          <h2 className="font-display text-5xl font-black tracking-tight text-os-text sm:text-6xl lg:text-7xl">
            About{' '}
            <span className="bg-gradient-to-r from-os-cyan to-os-violet bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mt-6 h-1 w-44 rounded-full bg-gradient-to-r from-os-violet via-os-cyan to-transparent shadow-[0_0_22px_rgba(139,92,246,0.65)]" />

          <p className="mt-9 text-lg leading-9 text-os-text/88">
            I&apos;m a Computer Science student at IIIT Surat and a full-stack
            developer who loves building practical, scalable and visually stunning
            web experiences. I enjoy turning ideas into real products that solve
            problems and create impact.
          </p>

          <div className="mt-8 max-w-xl divide-y divide-white/12">
            {featureRows.map((feature) => (
              <div key={feature.title} className="group flex items-center gap-5 py-4">
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl border border-os-violet/35 bg-os-violet/12 text-os-violet shadow-[0_0_24px_rgba(139,92,246,0.22)] transition group-hover:border-os-cyan/45 group-hover:text-os-cyan">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <span className="font-display text-lg font-semibold text-os-text">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div ref={visualRef} className="relative">
          <AboutImageStage />
        </div>
      </div>
    </section>
  );
};

export default About;