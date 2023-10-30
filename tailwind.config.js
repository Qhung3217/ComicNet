/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/app/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#6a12cb",
      },
    },
  },
  plugins: [],
};
