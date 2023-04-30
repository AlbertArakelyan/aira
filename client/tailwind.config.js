const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: colors.violet,
      secondary: colors.fuchsia,
      gray: colors.gray,
      black: colors.black,
      slate: colors.slate,
    },
    extend: {},
  },
  plugins: [],
}

