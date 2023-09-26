/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{html,js}",
    "./src/components/**/*.{html,js}",
    "./src/pages/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },

  plugins: [require("tailwindcss"), require("daisyui")],
};
