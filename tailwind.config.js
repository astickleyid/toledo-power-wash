/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        navy: "#0F2744",
        steel: "#1E3A5F",
        sky: "#3B82F6",
        ice: "#E8F1FF",
        mute: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.18)",
      },
    },
  },
  plugins: [],
};
