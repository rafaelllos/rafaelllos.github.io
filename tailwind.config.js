/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'text-roboto': 'Roboto, sans-serif',
      'text-dosis': 'Dosis, sans-serif',
      'text-freehand': 'Freehand, cursive',
    },
    extend: {
      gridTemplateColumns: {
        '5-100px': 'repeat(5, minmax(0, 100px))',
      },
    },
  },
  plugins: [],
}