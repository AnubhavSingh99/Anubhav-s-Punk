/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {fontFamily: {
        'anonymous': ['Anonymous Pro', 'monospace'],
        'roboto': ['Roboto', 'sans-serif'],
      }},
  },
  plugins: [],
}

