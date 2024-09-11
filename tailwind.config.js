/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      },
      backgroundColor :{
        orangecolor : "#f36525",
      },
      colors: {
        customGray: '#25253' // Add your custom color here
      },
      textShadow: {
        'default': '1px 1px 3px rgba(0, 0, 0, 0.9)', // Darker shadow
        'lg': '2px 2px 5px rgba(0, 0, 0, 0.9)', // Darker shadow
        'xl': '3px 3px 8px rgba(0, 0, 0, 0.9)', // Darker shadow
      },
    },
    
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-default': {
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9)', // Darker shadow
        },
        '.text-shadow-lg': {
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.9)', // Darker shadow
        },
        '.text-shadow-xl': {
          textShadow: '3px 3px 8px rgba(0, 0, 0, 0.9)', // Darker shadow
        },
      }, ['responsive', 'hover']);
    },
  ],
}

