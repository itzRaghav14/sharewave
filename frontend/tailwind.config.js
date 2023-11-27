/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.gray
      },
      flex: {
        '2': '2 2 0%',
        '2.5': '2.5 2.5 0%',
        '3': '3 3 0%',
        '3.5': '3.5 3.5 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
        '9.5': '9.5 9.5 0%'
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      height: {
        '1/12': '8.33%',
        '11/12': '91.67%'
      }
    },
  },
  plugins: [],
}
