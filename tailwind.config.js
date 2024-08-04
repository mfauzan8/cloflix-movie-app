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
        racing: ['Racing Sans One'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.button-movie-primary': {
          backgroundColor: '#991b1b',
          color: '#ffffff',
          fontWeight: '700',
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
          textAlign: 'center',
          display: 'inline-block',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',

          '&:hover': {
            backgroundColor: '#c53030',
          },

          '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 2px rgba(234, 87, 87, 0.5)',
          },
        },
      });
    },
  ],
};
