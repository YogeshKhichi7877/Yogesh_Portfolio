import { LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';

export const SecurityShieldPreview = () => {
  return (
    <div
      className="relative min-h-[28rem] overflow-hidden rounded-[1.75rem] border border-os-cyan/20 bg-white/[0.045] p-6 shadow-[0_0_70px_rgba(34,211,238,0.12)] backdrop-blur-xl"
      role="img"
      aria-label="Glowing neon security shield visual"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.07] via-transparent to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-[43%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-os-cyan/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-12 left-1/2 h-28 w-[20rem] -translate-x-1/2 rounded-[50%] border border-os-violet/35 bg-os-violet/10 shadow-[0_0_75px_rgba(139,92,246,0.26)]" />

      <div className="relative grid min-h-[24rem] place-items-center">
        <div className="absolute left-1/2 top-[45%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-os-cyan/35 shadow-[0_0_60px_rgba(34,211,238,0.18)]" />
        <div className="absolute left-1/2 top-[45%] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full border border-os-violet/35" />

        <div className="relative grid h-56 w-56 place-items-center rounded-[2rem] border border-os-cyan/35 bg-[#071327]/78 shadow-[0_0_65px_rgba(34,211,238,0.22)] backdrop-blur-xl">
          <div className="absolute inset-5 rounded-[1.45rem] border border-white/10" />
          <ShieldCheck className="h-28 w-28 text-os-cyan drop-shadow-[0_0_30px_rgba(34,211,238,0.72)]" strokeWidth={1.45} aria-hidden="true" />
          <LockKeyhole className="absolute bottom-12 h-8 w-8 text-os-violet drop-shadow-[0_0_18px_rgba(139,92,246,0.7)]" aria-hidden="true" />
        </div>

        <Sparkles className="absolute right-[18%] top-[18%] h-7 w-7 text-os-cyan drop-shadow-[0_0_16px_rgba(34,211,238,0.8)]" aria-hidden="true" />
        <Sparkles className="absolute bottom-[24%] left-[18%] h-6 w-6 text-os-violet drop-shadow-[0_0_16px_rgba(139,92,246,0.8)]" aria-hidden="true" />
      </div>
    </div>
  );
};
