/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#17A39D",
          200: "#D1EDEB",
          700: "#0C524F",
        },
        secondary: {
          DEFAULT: "#198754",
        },
        blue: {
          DEFAULT: "#0D6EFD",
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
