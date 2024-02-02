/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        favorit: ["Favorit"],
        garamond: ["EB Garamond"],
        helvetica: ["Helvetica Neue"],
      },
      gridTemplateAreas: {
        card: ["images", "text"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
