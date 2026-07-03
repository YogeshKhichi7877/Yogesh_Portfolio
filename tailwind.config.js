/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html" ,
    "./src/**/*.{js,ts,jsx,tsx}" ,
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        os: {
          bg: '#050816',
          surface: '#0B1020',
          elevated: '#11172A',
          card: 'rgba(255,255,255,0.06)',
          line: 'rgba(255,255,255,0.12)',
          text: '#F8FAFC',
          muted: '#94A3B8',
          cyan: '#38BDF8',
          violet: '#8B5CF6',
          aqua: '#22D3EE',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.18)',
        'glow-violet': '0 0 44px rgba(139, 92, 246, 0.2)',
        'glass-soft': '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'os-radial': 'radial-gradient(circle at top left, rgba(56,189,248,0.16), transparent 32%), radial-gradient(circle at bottom right, rgba(139,92,246,0.14), transparent 36%)',
        'os-grid': 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
        'accent-conic': 'conic-gradient(from 180deg at 50% 50%, #38BDF8, #8B5CF6, #22D3EE, #38BDF8)',
      },
      keyframes: {
        'soft-pulse': {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'soft-pulse': 'soft-pulse 5s ease-in-out infinite',
        'scan-line': 'scan-line 4s linear infinite',
      },
    },
  },
  plugins: [],
}
