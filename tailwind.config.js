/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'scroll-diagonal': {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '100%': { transform: 'translateX(-100%) translateY(0)' },
        },
      },
      animation: {
        'scroll-diagonal': 'scroll-diagonal 60s linear infinite',
      },
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