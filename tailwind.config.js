/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: '#707a8a',
        gray: '#8a94a1',
        green: '#00d646',
        cyan: '#00dbd3',
        'black-900': '#111a20',
        'navy-blue': '#333b50',
        'sky-blue': '#bec7d5',
        'dark-blue': '#4d5466',
      },
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'scaleX(0)',
            transformOrigin: '0% 50%',
          },
          '100%': {
            transform: 'scaleX(1)',
            transformOrigin: '0% 100%',
          },
        },
      },
    },
  },
  plugins: [],
};
