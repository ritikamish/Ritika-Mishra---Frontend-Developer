/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        '95': '95px',
        '152' : '152px',
      },
      padding:{
        '152' : '152px',
        '169' : '169.5',
      }
    },
  },
  plugins: [],
}