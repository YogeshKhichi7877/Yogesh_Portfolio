import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AnchorButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-os-cyan disabled:pointer-events-none disabled:opacity-60';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-os-cyan via-os-aqua to-os-violet text-os-bg shadow-glow hover:-translate-y-0.5 hover:shadow-glow-violet',
  secondary:
    'border border-os-line bg-white/[0.06] text-os-text backdrop-blur-xl hover:-translate-y-0.5 hover:border-os-cyan/60 hover:bg-white/[0.1]',
  ghost:
    'text-os-muted hover:text-os-text hover:bg-white/[0.06]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-sm sm:px-7 sm:text-base',
};

const cx = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(' ');

export const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps | AnchorButtonProps) => {
  const classes = cx(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
