/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: '#FFF3E2',
      secondary: '#D28B5F',
      secondary_2: '#9c5b33',
      accent: '#E4E3EB',
      white: '#ffffff',
      pink: '#F79A8D',

    },
    fontFamily: {
      archivo: 'Archivo Black',
      open_sans: 'Open Sans',
    }
  },
  plugins: [],
};
