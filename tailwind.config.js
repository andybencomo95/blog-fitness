/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'header': '#0d1b2a',
        'body': '#1b263b',
        'button': '#415a77',
        'arrow': '#778da9',
        'dark': {
          'bg': '#0f172a',
          'card': '#1e293b',
          'text': '#e2e8f0'
        }
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
