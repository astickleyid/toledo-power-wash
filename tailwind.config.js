/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        concrete: "#e6e2d9",
        paper: "#f4f1ea",
        ink: "#111111",
        "ink-soft": "#444444",
        mud: "#6a635a",
        rust: "#c2410c",
        "rust-deep": "#9a3412",
        hivis: "#f5a623",
        line: "#d0cbc0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
