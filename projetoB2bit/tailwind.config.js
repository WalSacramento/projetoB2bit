/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        'textBlack': '#262626',
        'boxGray': '#F1F1F1',
        'textGray': '#999999',
        'blueB2': '#02274F',
        'backgroundHome': '#F1F5F9',
      }
    },
  },
  plugins: [],
}