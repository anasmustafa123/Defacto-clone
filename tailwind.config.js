/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      animation: {
        slide: "slideLeft 0.5s ease-in-out",
      },

      keyframes: (theme) => ({
        slideLeft: {
          "0%": { transform: "translateX(400px)" },
          "100%": { transform: "translateX(0)" },
        },
      }),
    },
  },
  plugins: [],
};
