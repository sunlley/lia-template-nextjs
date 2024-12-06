const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "450px",
      md: "768px",
      lg: "1170px",
      xl: "1440px",

      // huge: '1440px',
      // large: '1170px',
      // medium: '768px',
      // small: '450px',
    },
    colors:{
      ...colors,
      primary: "#00CF8B",
      white:"#ffffff"
      // ...theme("colors"),
    },
    extend: {},
  },
  plugins: [],
};
