/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  [
    './src/**/*.{html,js}',
    './*.{html,js}',
  ],
  theme: {
    extend: {
      colors: 
      {
        fc_red: '#BF1901',
      },
      fontFamily: 
      {
        work_sans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
