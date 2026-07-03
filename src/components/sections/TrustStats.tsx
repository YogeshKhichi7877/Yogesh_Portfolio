import { Building2, Clock3, Code2, Link2, UsersRound } from 'lucide-react';
import { trustStats } from '../../lib/site';

const icons = [Link2, UsersRound, Clock3, Code2, Building2];

const TrustStats = () => {
  return (
    <section className="relative z-10 px-4 pb-8 sm:px-6 lg:px-8" aria-label="Portfolio stats">
      <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-os-line bg-os-surface/70 p-4 shadow-glass-soft backdrop-blur-2xl sm:p-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {trustStats.map((stat, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.04] p-4"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-os-cyan/25 bg-os-cyan/10 text-os-cyan shadow-glow">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-2xl font-bold text-os-text sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="block text-sm leading-5 text-os-muted">{stat.label}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
