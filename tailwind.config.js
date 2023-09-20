/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'red': 'red',
      'dimWhite': 'hsl(0, 0%, 70%)',
      'population': 'hsl(0, 0%, 30%)',
      'lightGrey': 'hsl(0, 0%, 98%)',
      'darkGrey': 'hsl(0, 0%, 52%)',
      'darkBlue': 'hsl(209, 23%, 22%)',
      'darkBlueBg': 'hsl(207, 26%, 17%)',
      'darkBlueT': 'hsl(200, 15%, 8%)',
    },
    extend: {},
  },
  plugins: [],
}

