/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom,  90deg, rgba(#FA709A 0%), (#FEE140 100%)",
      },
    },
    fontFamily: {
      Anton: ["Anton"],
    },
    colors: {
      test: "#5D5E5F",
      black_cuy: "#000000",
      white_cuy: "#FFFFFF",
      purple_cuy: "#925FF0",
      btn_cuy: "#292929",
      summary_cuy: "#C8FEC7",
      footer_cuy: "#292929",
    },
    dropShadow: {
      "sm-shadow": [
        "0px 548px 219px rgba(0,0,0,0.01)",
        "0px 308px 185px rgba(0,0,0,0.04)",
        "0px 137px 137px rgba(0,0,0,0.06)",
        "0px 34px 75px rgba(0,0,0,0.07)",
        "0px 0px 0px rgba(0,0,0,0.07)",
      ],
      "lg-shadow": [
        "0px 548px 219px rgba(0,0,0,0.01)",
        "0px 308px 185px rgba(0,0,0,0.04)",
        "0px 137px 137px rgba(0,0,0,0.06)",
        "0px 34px 75px rgba(0,0,0,0.07)",
        "0px 0px 0px rgba(0,0,0,0.07)",
      ],
    },
  },
  plugins: [],
};
