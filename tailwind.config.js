/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        clicker:['"Clicker Script"', 'cursive'],
        roboto:['"Roboto Mono"', 'monospace'],

      }
    },
  },
  plugins: [],
}

