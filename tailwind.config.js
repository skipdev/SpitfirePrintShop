module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue': '#03ADEF',
        'grey': '#252B34',
        'pink': '#ED038C',
        'yellow': '#FEF203'
      },
      boxShadow: {
        'card': '-5px 5px 0px 5px #252B34, 0px 5px 0px 5px #252B34, 0px -1px 0px 5px #252B34, -5px -1px 0px 5px #252B34'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
