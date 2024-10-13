/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "p-yellow": "#E9C664",
        "gray-bg": "#212121",
      },
      fontFamily: {
        "headings": 'Abril Fatface, serif',
        "inter-p": 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}

