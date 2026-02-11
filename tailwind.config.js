/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-horizontal': 'floatH 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        floatH: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(15px)' }, // Moves right and back
        }
      }
    },
  },
  plugins: [],
}