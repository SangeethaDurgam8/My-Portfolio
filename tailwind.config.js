/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f6f5f1",
        ink: "#111110",
        muted: "#6b6a64",
        line: "#e6e4dd",
        accent: "#b54e1f",
      },
    },
  },
  plugins: [],
};