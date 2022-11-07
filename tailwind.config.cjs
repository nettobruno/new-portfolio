/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat, sans-serif'
      },
      colors: {
        purple: {
          700: '#7732E6',
        },
        blackOpacity: {
          800: 'rgba(0, 0, 0, .8)'
        }
      },
    },
  },
  plugins: [],
}
