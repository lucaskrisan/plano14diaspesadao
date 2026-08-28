/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0F0F0F',
        darker: '#1A1A1A',
        accent: '#E50914',
        warning: '#FACC15',
        border: '#444444',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        archivo: ['Archivo Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
};