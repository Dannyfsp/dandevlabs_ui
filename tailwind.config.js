/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'sans-serif'],
      },
      colors: {
        primary: "#1D2939",
        secondary: "#5E3AEF",
      }
    },
  },
  plugins: [],
}