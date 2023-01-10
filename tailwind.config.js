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
      spacing: {
        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
       
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
// '1': '8px',
// '2': '12px',
// '3': '16px',
// '4': '24px',
// '5': '32px',
// '6': '48px',
// '7': '48px',
// '8': '12px',
// '9': '16px',
// '10': '24px',
// '11': '32px',
// '12': '48px',
