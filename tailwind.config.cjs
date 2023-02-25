/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '2560px'},
      'xl': {'max': '1496px'},
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'sm': {'max': '640px'},
    },
    container: {
      center: true,
      // padding: '40px'
    },
    extend: {
      colors: {
        'blueColor': '#2a68ff',
        'greyIsh': '#f1f4f8',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b36'
      }
    },
  },
  plugins: [],
}
