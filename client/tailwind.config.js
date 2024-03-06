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
        "3/10": "32% auto",
        "10/3": "auto, 32%",
        cartItem: "9vw auto",
        homePageText: "25% auto",
        navFooter: "1.8fr 4fr 1.5fr",
      },
      gridTemplateRows: {
        cartItem: "9auto",
        "auto*2": "auto auto",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
