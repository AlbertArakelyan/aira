const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: colors.violet,
      secondary: colors.fuchsia,
      danger: colors.red,
      success: colors.green,
      gray: colors.gray,
      black: colors.black,
      slate: colors.slate,
      white: colors.white,
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-fill-color-transparent': {
          WebkitTextFillColor: 'transparent',
        },
      });
    }),
  ],
}

