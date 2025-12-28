/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#1A2B40', // Primary brand color
          800: '#243b55',
        },
        gold: {
          500: '#D4AF37', // Accent brand color
          600: '#B5952F',
        }
      }
    },
  },
  plugins: [],
}