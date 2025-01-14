/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          "0%": { color: "red" },
          "50%": { color: "blue" },
          "100%": { color: "green" },
        },
      },
      height:{
        '100':"400px"
      },
      width:{
120:"480px"
      },
      animation: {
        colorChange: "colorChange 3s infinite", // Define the animation duration and repeat
      },
    },
  },

  plugins: [],
};
