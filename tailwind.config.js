/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
      },
    },
  },
  plugins: [
    require('tailgrids/plugin')
  ],
}
