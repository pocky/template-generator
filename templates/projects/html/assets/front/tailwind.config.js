const Encore = require('@symfony/webpack-encore');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: Encore.isProduction(),
    content: [
      './public/**/*.html',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
