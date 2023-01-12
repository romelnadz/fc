/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  [
    './src/**/*.{html,js}',
    './*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        // 'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        // 'laptop': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        'desktop': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
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
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '100vw': '100vw',
        '110vw': '110vw',
        '120vw': '120vw',
        '130vw': '130vw',
        '140vw': '140vw',
        '150vw': '150vw',
        '160vw': '160vw',
        '180vw': '180vw',
        'm_xl': '200px',
        'mobile_64px': '17vw',
        'laptop_64px': '3.7vw',

        // PERCENT
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
        
       
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
