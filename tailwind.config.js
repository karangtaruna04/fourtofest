/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#fff",
        secondary: "#B3B3B3",
        lightdark: "#34404C",
        dark: "#121212",
        semidark: "#282828",
        navdark: "#404040",
      },
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [],
};
