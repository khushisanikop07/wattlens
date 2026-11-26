/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B4D2E',
          mint: '#D9F2E3',
          yellow: '#F5C842',
          text: '#12261C',
          lightBg: '#F3F9F5',
          border: 'rgba(11, 77, 46, 0.15)',
          muted: '#52665B',
          amber: '#E69E19',
          crimson: '#D9383A',
          teal: '#1A8754'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(11, 77, 46, 0.08), 0 2px 6px 0 rgba(0, 0, 0, 0.04)',
        'glass-hover': '0 12px 40px 0 rgba(11, 77, 46, 0.14), 0 4px 12px 0 rgba(0, 0, 0, 0.06)',
        'glass-glow': '0 0 25px rgba(245, 200, 66, 0.45)',
      },
      borderRadius: {
        'card': '20px',
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.25s ease-out',
      },
    },
  },
  plugins: [],
}
