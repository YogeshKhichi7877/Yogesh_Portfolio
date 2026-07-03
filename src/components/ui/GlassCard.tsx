import type { HTMLAttributes } from 'react';

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  intensity?: 'soft' | 'strong';
};

const cx = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(' ');

export const GlassCard = ({
  className,
  intensity = 'soft',
  children,
  ...props
}: GlassCardProps) => {
  return (
    <div
      className={cx(
        'relative overflow-hidden rounded-2xl border border-os-line shadow-glass-soft backdrop-blur-2xl',
        intensity === 'strong' ? 'bg-os-surface/85' : 'bg-white/[0.055]',
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-os-cyan/60 to-transparent" />
      {children}
    </div>
  );
};
