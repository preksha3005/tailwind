// /** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Fix: darkmode -> darkMode
  theme: {
    screens: {
      xs: { min: '0px', max: '639px' },
      ...defaultTheme.screens,
    },
  },
  variants: {
    hover: true,
    extend: {
      fontSize: ["responsive"],
    },
  },
  plugins: [],
};
