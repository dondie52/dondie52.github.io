/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "light-sweep": "light-sweep 7s ease-in-out infinite",
        "hologram-pulse": "hologram-pulse 3s ease-in-out infinite",
        "glow-rotate": "glow-rotate 8s linear infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "light-sweep": {
          "0%, 100%": { 
            transform: "translateX(-100%) translateY(-100%) rotate(45deg)",
            opacity: "0"
          },
          "10%": { opacity: "0.6" },
          "50%": { 
            transform: "translateX(100%) translateY(100%) rotate(45deg)",
            opacity: "0"
          },
        },
        "hologram-pulse": {
          "0%, 100%": { opacity: "0.6", filter: "blur(20px)" },
          "50%": { opacity: "1", filter: "blur(25px)" },
        },
        "glow-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
