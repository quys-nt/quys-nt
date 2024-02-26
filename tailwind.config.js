/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cus-black': '#090909',
      },
      fontFamily: {
        'deathstar':  ['"DeatStar", sans-serif',]
      }
    },
  },
  plugins: [],
}