/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       'blue-rgb': 'rgb(119, 124, 206)',
       'radial-gradient': 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.00) 100%), #6E72C9',
       'moon-color':'rgba(17, 24, 39, 0.75)',
       'sun-color':'rgba(255, 255, 255, 0.75)',
    },
  },
  plugins: [],
};
  