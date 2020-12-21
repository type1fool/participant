const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    '../lib/**/*.ex',
    '../lib/**/*.leex',
    '../lib/**/*.eex',
    './js/**/*.js',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      default: colors.coolGray,
      brand: colors.emerald,
      warning: colors.orange,
      success: colors.lime,
      danger: colors.red,
      info: colors.lightBlue,
      gray: colors.coolGray,
      white: colors.white,
      black: colors.black,
      transparent: colors.transparent,
      current: colors.current,
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
