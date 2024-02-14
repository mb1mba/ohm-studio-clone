/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2200px",
      },
      fontFamily: {
        favorit: ["Favorit"],
        garamond: ["EB Garamond"],
        helvetica: ["Helvetica Neue"],
      },

      gridTemplateAreas: {
        card: ["images", "text"],
      },
      gridTemplateColumns: {
        "auto*2": "auto auto",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
