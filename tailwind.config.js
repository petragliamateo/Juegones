/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{src,pages}/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        nature: {
          0: '#19A3F9',
          1: '#16C3DB',
          2: '#24F2D3',
          3: '#16DB86',
          4: '#19F959',
        },
      },
    },
  },
  plugins: [],
};
