/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helv': ['Neue Helvetica BQ', 'sans-serif'],
        'avni': ['Avenir', 'sans-serif']
      }
    },
  },
  plugins: [],
}

