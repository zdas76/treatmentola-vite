/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005897",
        red_base: "#E50000",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
}

