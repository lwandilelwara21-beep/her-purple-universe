/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08060D',
        ink2: '#110B1C',
        deep: '#482078',
        royal: '#7C3AED',
        lavender: '#C4A5FF',
        soft: '#F7F3FF',
        silver: '#AAA1B8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        driftUp: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '100%': { transform: 'translateY(-120px) rotate(220deg)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 24px rgba(124,58,237,0.35)' },
          '50%': { boxShadow: '0 0 48px rgba(124,58,237,0.65)' },
        },
        eq: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        twinkle: 'twinkle 3.5s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        driftUp: 'driftUp 9s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        eq: 'eq 1.1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
