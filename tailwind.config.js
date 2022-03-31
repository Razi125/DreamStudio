module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      boxShadow: {
        'iconShadow': '0px 10px 10px -5px rgba(0, 0, 0, 0.06), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'Cardshadow': '0px 4px 6px -2px rgba(0, 0, 0, 0.06), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'footerIcon': '0px 2px 5px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}