const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.purple,
        complementary: colors.gray
      },
      flex: {
        '2': '2 2 0%'
      }
    }
  },
  plugins: [],
}

