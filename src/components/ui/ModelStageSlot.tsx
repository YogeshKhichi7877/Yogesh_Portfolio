type ModelStageSlotProps = {
  scene: 'hero' | 'about' | 'journey' | 'certifications' | 'contact';
  className?: string;
  glow?: 'cyan' | 'violet' | 'aqua';
};

const glowClasses = {
  cyan: 'bg-os-cyan/14 border-os-cyan/20',
  violet: 'bg-os-violet/14 border-os-violet/20',
  aqua: 'bg-os-aqua/14 border-os-aqua/20',
};

export const ModelStageSlot = ({ scene, className = '', glow = 'cyan' }: ModelStageSlotProps) => {
  return (
    <div
      data-model-stage={scene}
      className={`pointer-events-none relative min-h-80 overflow-visible ${className}`}
      aria-hidden="true"
    >
      <div className={`absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border ${glowClasses[glow]} opacity-70 blur-[1px]`} />
      <div className={`absolute bottom-10 left-1/2 h-24 w-72 -translate-x-1/2 rounded-full ${glowClasses[glow].split(' ')[0]} blur-3xl`} />
      <div className="absolute left-1/2 top-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};
