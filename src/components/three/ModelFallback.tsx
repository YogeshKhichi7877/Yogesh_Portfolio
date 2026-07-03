type ModelFallbackProps = {
  label?: string;
  className?: string;
};

const cx = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(' ');

export const ModelFallback = ({ label = '3D preview unavailable', className }: ModelFallbackProps) => {
  return (
    <div
      className={cx(
        'flex h-full min-h-64 items-center justify-center rounded-2xl border border-os-line bg-os-radial text-center',
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="relative h-32 w-32 rounded-full border border-os-cyan/30 bg-os-card shadow-glow">
        <div className="absolute inset-4 rounded-full border border-os-violet/40" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-os-aqua shadow-glow" />
      </div>
    </div>
  );
};
