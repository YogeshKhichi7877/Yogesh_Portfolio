import type { HTMLAttributes, ReactNode } from 'react';

type SectionShellProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  innerClassName?: string;
};

const cx = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(' ');

export const SectionShell = ({
  eyebrow,
  title,
  description,
  className,
  innerClassName,
  children,
  ...props
}: SectionShellProps) => {
  return (
    <section className={cx('relative px-4 py-20 sm:px-6 lg:px-8', className)} {...props}>
      <div className={cx('relative z-10 mx-auto w-full max-w-7xl', innerClassName)}>
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-os-cyan">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-bold tracking-tight text-os-text sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-8 text-os-muted sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
