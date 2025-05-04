import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 10px 3px rgba(255, 255, 255, 0.6)',
      },
      colors: {
        primary: {
          dark: '#0C0F17', // Very dark blue-gray (background or app base)
          medium: '#1F2C33', // Dark muted teal-gray (secondary background or surface)
        },
        neutral: {
          DEFAULT: '#E9DED9', // Light beige (neutral background or surface)
          text: '#889095', // Muted gray-blue (body text or secondary text)
        },
        accent: {
          deep: '#6C2B2A', // Deep wine red (primary accent or buttons)
          soft: '#A4474F', // Soft muted rose (hover or lighter accent)
        },
      },
    },
  },
  plugins: [],
};

export default config;
