/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#48B0C1",
        "secondary": "#E38C19",
        "tertiary": "#F6F6F6"
      }
    },
  },
  plugins: [],
}