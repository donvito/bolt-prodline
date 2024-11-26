/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60A5FA',
          DEFAULT: '#2563EB',
          dark: '#1D4ED8'
        },
        success: {
          light: '#34D399',
          DEFAULT: '#059669',
          dark: '#047857'
        },
        warning: {
          light: '#FBBF24',
          DEFAULT: '#D97706',
          dark: '#B45309'
        },
        background: {
          light: '#F8FAFC',
          dark: '#0A0F1A'
        },
        card: {
          light: '#FFFFFF',
          dark: '#111827'
        },
        accent: {
          purple: '#7C3AED',
          pink: '#DB2777',
          blue: '#2563EB'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dots': 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
        'gradient-dark': 'linear-gradient(to bottom right, rgba(124, 58, 237, 0.05), rgba(219, 39, 119, 0.05))',
        'gradient-light': 'linear-gradient(to bottom right, rgba(124, 58, 237, 0.02), rgba(219, 39, 119, 0.02))',
      },
      backgroundSize: {
        'dots-sm': '24px 24px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 58, 237, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
};