const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      primary: '#FFD500',
      secondary: '#FF3332',
      accent: '#774820',
    },
    extend: {},
  },
  plugins: [],
}
