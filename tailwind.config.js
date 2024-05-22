/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      opacity: {
        54: '.54',
      },
      width: {
        500: '32rem',
      },
      height: {
        500: '32rem',
      },
    },
  },
  plugins: [],
};
