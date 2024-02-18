/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        favorit: ["Favorit"],
        garamond: ["EB Garamond"],
        helvetica: ["Roboto "],
      },

      gridTemplateAreas: {
        card: ["images", "text"],
      },
      gridTemplateColumns: {
        "auto*2": "auto auto",
        cartItem: "9vw auto",
      },
      gridTemplateRows: {
        cartItem: "9auto",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
