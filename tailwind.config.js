/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#F6B17A",
        secondary: "#7077A1",
        trinary: "#424769",
        background: "#2D3250",
      },
    },
  },
  plugins: [],
};
