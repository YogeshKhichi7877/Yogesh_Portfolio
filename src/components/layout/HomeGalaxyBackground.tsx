import { GlobalGalaxyCanvas } from '../three/GlobalGalaxyCanvas';

const starFields = [
  'left-[7%] top-[14%] h-1.5 w-1.5 bg-os-cyan shadow-[0_0_24px_8px_rgba(34,211,238,0.78)]',
  'left-[22%] top-[38%] h-1 w-1 bg-white shadow-[0_0_18px_6px_rgba(255,255,255,0.55)]',
  'right-[12%] top-[18%] h-1.5 w-1.5 bg-os-violet shadow-[0_0_26px_8px_rgba(139,92,246,0.75)]',
  'right-[24%] top-[58%] h-1 w-1 bg-blue-300 shadow-[0_0_22px_7px_rgba(96,165,250,0.68)]',
  'left-[13%] bottom-[22%] h-1.5 w-1.5 bg-os-cyan shadow-[0_0_24px_8px_rgba(34,211,238,0.72)]',
  'right-[9%] bottom-[16%] h-1 w-1 bg-white shadow-[0_0_18px_6px_rgba(255,255,255,0.55)]',
];

export const HomeGalaxyBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#02040d]" aria-hidden="true">
      <GlobalGalaxyCanvas />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_82%_14%,rgba(139,92,246,0.22),transparent_32%),radial-gradient(circle_at_48%_45%,rgba(59,130,246,0.13),transparent_38%),radial-gradient(circle_at_72%_76%,rgba(217,70,239,0.13),transparent_36%),radial-gradient(circle_at_18%_84%,rgba(20,184,166,0.11),transparent_34%)]" />
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle,rgba(255,255,255,0.86)_0.7px,transparent_1.2px),radial-gradient(circle,rgba(34,211,238,0.55)_0.8px,transparent_1.4px)] [background-position:0_0,42px_58px] [background-size:86px_86px,124px_124px]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:92px_92px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

      <div className="absolute left-1/2 top-[28%] h-[36rem] w-[72rem] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[50%] border border-os-cyan/12 shadow-[0_0_70px_rgba(34,211,238,0.1)]" />
      <div className="absolute left-1/2 top-[56%] h-[42rem] w-[84rem] -translate-x-1/2 -translate-y-1/2 rotate-[10deg] rounded-[50%] border border-os-violet/14 shadow-[0_0_90px_rgba(139,92,246,0.1)]" />
      <div className="absolute left-1/2 top-[78%] h-[28rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 rotate-[-16deg] rounded-[50%] border border-blue-300/10" />

      {starFields.map((classes) => (
        <span key={classes} className={`absolute rounded-full ${classes}`} />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,13,0.18),rgba(2,4,13,0.08)_28%,rgba(2,4,13,0.2)_74%,rgba(2,4,13,0.34))]" />
    </div>
  );
};
