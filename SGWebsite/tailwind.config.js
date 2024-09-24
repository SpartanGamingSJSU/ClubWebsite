/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body-orange': '#b4966e',
        'head-foot-orange': '#cdb08a',
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

