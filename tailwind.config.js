/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        concrete: "#ebe7df",
        paper: "#f7f5f0",
        ink: "#14161c",
        "ink-soft": "#3a3f4b",
        mud: "#6b6256",

        water: "#0a6f9c",
        "water-deep": "#074d6d",
        hivis: "#ffb703",
        line: "#d4cfc4",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
