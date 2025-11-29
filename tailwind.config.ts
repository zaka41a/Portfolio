import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './styles/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        'surface-dark': '#0b0b0f',
        'surface-card': '#0f0f12',
        purple: '#C084FC',
        'purple-dark': '#7C3AED',
        accent: {
          light: '#f5f5f5',
          muted: '#1f1f24',
          border: '#2f2f35',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 18px 60px rgba(192, 132, 252, 0.25)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(139,92,246,0.25), transparent 45%), linear-gradient(135deg, rgba(0,0,0,0.02), rgba(0,0,0,0))',
      },
    },
  },
  plugins: [],
}

export default config
