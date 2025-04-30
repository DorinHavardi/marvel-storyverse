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
          dark: '#0C0F17',
          medium: '#1F2C33',
        },
        neutral: {
          DEFAULT: '#E9DED9',
          text: '#889095',
        },
        accent: {
          deep: '#6C2B2A',
          soft: '#A4474F',
        },
      },
    },
  },
  plugins: [],
};

export default config;
