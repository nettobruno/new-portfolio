/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(./src/assets/background2.jpg)'
      },
      fontFamily: {
        sans: 'Montserrat, sans-serif'
      },
      colors: {
        blue: {
          700: '#5E00FF',
        },
        blackOpacity: {
          800: 'rgba(0, 0, 0, .8)'
        }
      },
    },
  },
  plugins: [],
}
