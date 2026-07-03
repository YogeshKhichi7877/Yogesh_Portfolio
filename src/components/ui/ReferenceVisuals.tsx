import {
  Braces,
  Code2,
  Cpu,
  Database,
  Globe2,
  Hexagon,
  Rocket,
  Server,
  Sparkles,
  Trophy,
  UserRound,
  Zap,
} from 'lucide-react';
import type React from 'react';

const techBadges = [
  { label: 'React', icon: Braces, className: 'left-[8%] top-[16%]' },
  { label: 'Node', icon: Server, className: 'right-[8%] top-[10%]' },
  { label: 'TS', icon: Code2, className: 'right-[3%] top-[48%]' },
  { label: '3D', icon: Hexagon, className: 'left-[4%] top-[52%]' },
];

const StageShell = ({
  children,
  className = '',
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  ariaLabel: string;
}) => (
  <div
    className={`reference-stage relative isolate min-h-[24rem] overflow-visible ${className}`}
    role="img"
    aria-label={ariaLabel}
  >
    <div className="absolute inset-x-[18%] bottom-4 h-20 rounded-full bg-os-cyan/20 blur-3xl" />
    <div className="absolute inset-x-[25%] bottom-10 h-10 rounded-full bg-os-violet/20 blur-2xl" />
    {children}
  </div>
);

export const HeroWorkstationVisual = () => (
  <StageShell
    ariaLabel="Futuristic developer workstation with laptop and orbiting technology badges"
    className="min-h-[30rem] sm:min-h-[34rem]"
  >
    <div className="absolute left-1/2 top-[49%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-os-cyan/40 shadow-[0_0_70px_rgba(34,211,238,0.22)]" />
    <div className="absolute left-1/2 top-[49%] h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-os-violet/25" />
    <div className="absolute left-1/2 top-[57%] h-28 w-[28rem] max-w-[92%] -translate-x-1/2 rounded-[50%] border border-os-cyan/30 bg-os-cyan/10 shadow-[0_0_80px_rgba(139,92,246,0.35)]" />
    <div className="absolute left-1/2 top-[60%] h-10 w-[22rem] max-w-[80%] -translate-x-1/2 rounded-[50%] border border-os-violet/40 bg-os-violet/10" />

    <div className="absolute left-1/2 top-[47%] w-[28rem] max-w-[86%] -translate-x-1/2 -translate-y-1/2 perspective-[900px]">
      <div className="relative mx-auto h-56 rounded-[1.7rem] border border-os-cyan/25 bg-gradient-to-br from-slate-950 via-[#111933] to-[#070a15] p-3 shadow-[0_34px_110px_rgba(56,189,248,0.24)] [transform:rotateX(3deg)_rotateY(-8deg)]">
        <div className="h-full rounded-[1.25rem] border border-white/10 bg-[#050816] p-4">
          <div className="mb-3 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="space-y-2 font-mono text-[10px] text-os-muted sm:text-xs">
            <p><span className="text-os-violet">const</span> app = <span className="text-os-cyan">build</span>();</p>
            <p><span className="text-os-cyan">return</span> &lt;CreativePortfolio /&gt;</p>
            <p className="text-os-aqua">React + Node + Three.js + AI</p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <span className="h-12 rounded-xl bg-os-cyan/15" />
              <span className="h-12 rounded-xl bg-os-violet/15" />
              <span className="h-12 rounded-xl bg-white/[0.06]" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 left-1/2 h-8 w-[82%] -translate-x-1/2 rounded-b-[2rem] border border-os-cyan/20 bg-gradient-to-b from-slate-800 to-slate-950" />
      </div>
      <div className="mx-auto mt-10 h-12 w-[76%] rounded-[1.5rem] border border-os-line bg-white/[0.055] p-2 shadow-[0_22px_65px_rgba(139,92,246,0.2)]">
        <div className="grid h-full grid-cols-12 gap-1">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} className="rounded bg-white/[0.08]" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-[2%] h-14 w-20 rounded-full border border-os-cyan/20 bg-white/[0.07] shadow-[0_0_28px_rgba(34,211,238,0.2)]" />
    </div>

    {techBadges.map((badge, index) => (
      <div
        key={badge.label}
        className={`absolute ${badge.className} grid h-20 w-20 place-items-center rounded-3xl border border-os-line bg-os-surface/80 text-os-cyan shadow-glass-soft backdrop-blur-xl`}
        style={{ animationDelay: `${index * 0.45}s` }}
      >
        <badge.icon className="h-8 w-8" aria-hidden="true" />
        <span className="mt-1 font-mono text-[10px] font-semibold text-os-text">{badge.label}</span>
      </div>
    ))}
  </StageShell>
);

export const AvatarHologramVisual = () => (
  <StageShell ariaLabel="Holographic developer avatar visual" className="min-h-[29rem]">
    <div className="absolute left-1/2 top-[49%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-os-cyan/60 shadow-[0_0_80px_rgba(34,211,238,0.35)]" />
    <div className="absolute left-1/2 top-[52%] h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-os-violet/50" />
    <div className="absolute left-1/2 top-[49%] grid h-48 w-48 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-os-cyan/20 via-os-violet/15 to-white/[0.04] shadow-[0_24px_100px_rgba(139,92,246,0.32)]">
      <UserRound className="h-24 w-24 text-os-text" aria-hidden="true" />
      <span className="absolute bottom-7 rounded-full border border-os-cyan/30 bg-os-bg/70 px-4 py-1 font-mono text-xs font-semibold text-os-cyan">
        YK
      </span>
    </div>
    <div className="absolute left-[13%] top-[28%] rounded-2xl border border-os-line bg-black/30 px-4 py-3 font-mono text-[10px] text-os-muted backdrop-blur-xl">
      clean.code()
    </div>
    <div className="absolute bottom-[22%] right-[10%] rounded-2xl border border-os-violet/30 bg-os-violet/10 px-4 py-3 font-mono text-[10px] text-violet-200 backdrop-blur-xl">
      product mindset
    </div>
  </StageShell>
);

export const RocketLaunchVisual = () => (
  <StageShell ariaLabel="Stylized rocket launch visual" className="min-h-[31rem]">
    <div className="absolute left-1/2 top-[32%] -translate-x-1/2 -translate-y-1/2">
      <div className="relative h-52 w-24 rotate-[18deg]">
        <div className="absolute left-1/2 top-0 h-40 w-20 -translate-x-1/2 rounded-t-full rounded-b-[1.75rem] border border-os-cyan/35 bg-gradient-to-b from-slate-100 via-slate-300 to-slate-900 shadow-[0_0_60px_rgba(56,189,248,0.35)]" />
        <div className="absolute left-1/2 top-12 h-12 w-12 -translate-x-1/2 rounded-full border-4 border-os-cyan bg-os-cyan/20 shadow-glow" />
        <div className="absolute bottom-10 left-0 h-16 w-8 rounded-bl-full rounded-tl-full bg-os-violet/80" />
        <div className="absolute bottom-10 right-0 h-16 w-8 rounded-br-full rounded-tr-full bg-os-cyan/80" />
        <div className="absolute bottom-0 left-1/2 h-24 w-14 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-300 via-fuchsia-500 to-transparent blur-sm" />
      </div>
    </div>
    <div className="absolute bottom-[13%] left-1/2 h-24 w-72 -translate-x-1/2 rounded-[50%] bg-gradient-to-t from-os-violet/45 via-os-cyan/20 to-transparent blur-xl" />
    <Rocket className="absolute right-[14%] top-[20%] h-8 w-8 text-os-cyan" aria-hidden="true" />
  </StageShell>
);

export const TrophyAwardVisual = () => (
  <StageShell ariaLabel="Glowing trophy achievement visual" className="min-h-[29rem]">
    <div className="absolute left-1/2 top-[48%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-os-violet/25" />
    <div className="absolute left-1/2 top-[47%] grid h-56 w-56 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-os-violet/10 shadow-[0_0_95px_rgba(139,92,246,0.42)]">
      <Trophy className="h-36 w-36 text-os-violet drop-shadow-[0_0_28px_rgba(139,92,246,0.65)]" aria-hidden="true" />
    </div>
    <div className="absolute bottom-[19%] left-1/2 h-20 w-72 -translate-x-1/2 rounded-[50%] border border-os-violet/40 bg-os-violet/10" />
    <Sparkles className="absolute right-[20%] top-[23%] h-8 w-8 text-os-cyan" aria-hidden="true" />
    <Zap className="absolute left-[18%] top-[32%] h-7 w-7 text-os-violet" aria-hidden="true" />
  </StageShell>
);

export const ContactGlobeVisual = () => (
  <StageShell ariaLabel="Neon wireframe globe contact visual" className="min-h-[34rem]">
    <div className="absolute left-1/2 top-[45%] h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-os-cyan/18 blur-3xl" />
    <div className="absolute left-1/2 top-[45%] h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-os-cyan/85 bg-[radial-gradient(circle_at_32%_26%,rgba(255,255,255,0.22),transparent_20%),radial-gradient(circle_at_35%_30%,rgba(56,189,248,0.35),transparent_38%),radial-gradient(circle_at_70%_72%,rgba(139,92,246,0.24),transparent_48%),radial-gradient(circle,rgba(2,8,23,0.18),rgba(2,8,23,0.58)_70%)] shadow-[0_0_115px_rgba(34,211,238,0.48),inset_0_0_48px_rgba(34,211,238,0.22)]">
      <div className="absolute inset-6 rounded-full border border-os-cyan/45" />
      <div className="absolute inset-12 rounded-full border border-os-violet/40" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-os-cyan/70 shadow-[0_0_14px_rgba(34,211,238,0.75)]" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-os-cyan/55 shadow-[0_0_14px_rgba(34,211,238,0.75)]" />
      <div className="absolute left-1/2 top-1/2 h-[18rem] w-[8rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-os-cyan/55" />
      <div className="absolute left-1/2 top-1/2 h-[18rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-os-cyan/35" />
      <div className="absolute left-1/2 top-1/2 h-[5.5rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-os-violet/55" />
      <div className="absolute left-1/2 top-1/2 h-[11rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-os-cyan/35" />
      <span className="absolute left-[30%] top-[28%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_20px_6px_rgba(255,255,255,0.7)]" />
      <span className="absolute right-[25%] top-[58%] h-2 w-2 rounded-full bg-os-violet shadow-[0_0_20px_6px_rgba(139,92,246,0.7)]" />
    </div>
    <div className="absolute left-1/2 top-[45%] h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-full border border-os-violet/65 shadow-[0_0_48px_rgba(139,92,246,0.22)]" />
    <div className="absolute left-1/2 top-[45%] h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rotate-[24deg] rounded-full border border-os-cyan/35" />
    <div className="absolute bottom-[11%] left-1/2 h-24 w-[24rem] -translate-x-1/2 rounded-[50%] border border-os-cyan/55 bg-os-cyan/12 shadow-[0_0_90px_rgba(34,211,238,0.34)]" />
    <div className="absolute bottom-[13%] left-1/2 h-10 w-[18rem] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-blue-600/30 via-os-cyan/45 to-fuchsia-500/30 blur-xl" />
    <Globe2 className="absolute right-[12%] top-[15%] h-9 w-9 text-os-cyan drop-shadow-[0_0_18px_rgba(34,211,238,0.8)]" aria-hidden="true" />
  </StageShell>
);

export const MiniGlobeVisual = () => (
  <div className="relative hidden min-h-56 lg:block" aria-hidden="true">
    <div className="absolute right-2 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-os-cyan/70 bg-os-cyan/12 shadow-[0_0_55px_rgba(34,211,238,0.24)]" />
    <div className="absolute right-0 top-1/2 h-48 w-48 -translate-y-1/2 rotate-12 rounded-full border border-os-violet/55" />
    <div className="absolute right-8 top-1/2 h-40 w-16 -translate-y-1/2 rounded-full border border-os-cyan/35" />
    <div className="absolute right-2 top-1/2 h-px w-40 bg-os-cyan/45" />
    <Cpu className="absolute right-16 top-1/2 h-10 w-10 -translate-y-1/2 text-os-cyan" aria-hidden="true" />
    <Database className="absolute right-28 top-16 h-5 w-5 text-os-violet" aria-hidden="true" />
  </div>
);
