/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        LeagueSpartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        "blue-primary": "#304674",
        "pink-primary": "#fb6f92",
        "blue-secondary": "#98bad5",
        "pink-secondary": "#ffc2d1",
      },
    },
  },
  plugins: [],
};
