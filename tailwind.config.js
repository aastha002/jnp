/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // enables dark mode using 'dark' class
  theme: {
    extend: {
      colors: {
    dark: {
      bg: '#000000',
      text: '#ffffff',
      accent: '#FFD700', // golden
    },
    light: {
      bg: '#ffffff',
      text: '#000000',
      accent: '#FF0000', // red for accents in light mode
    },
  },
      fontFamily: {
        elegant: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
