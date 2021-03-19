let tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./assets/front/tailwind.config.js'),
    require('autoprefixer'),
  ]
}
