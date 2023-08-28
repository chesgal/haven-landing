/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        krub: ['Krub'],
        aladin: ['Aladin'],
        abel: ['Abel']
      }
    },
  },
  plugins: [],
}

