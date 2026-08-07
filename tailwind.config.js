/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        brand: {
          DEFAULT: "#0f766e",
          dark: "#115e59",
          soft: "#ccfbf1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};
