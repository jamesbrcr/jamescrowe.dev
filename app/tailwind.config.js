/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/app/bookshelf/**/*.{js,ts,jsx,tsx}",
      "./src/app/contact/**/*.{js,ts,jsx,tsx}",
      "./src/app/projects/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            //domine: ['Domine', 'serif'],
            sans: ['Domine', 'serif'],
          },
        animation: {
          'fade-out': 'fadeOut 1s ease-in-out forwards',
          'fade-in': 'fadeIn 1s ease-in-out',
        },
        keyframes: {
          fadeOut: {
            '0%': { opacity: '1' },
            '100%': { opacity: '0' },
          },
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }
  