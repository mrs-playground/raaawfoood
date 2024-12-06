/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#4340C7',
        'grey': '#E9E9E9',
      },
      fontFamily: {
        title: ['"Bebas Neue"', 'cursive'],
        text: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

