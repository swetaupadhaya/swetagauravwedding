/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "hsl(0 0% 100%)",
        rose: "hsl(340 80% 52%)",
        "rose-deep": "hsl(340 70% 35%)",
        "sage-soft": "hsl(340 85% 96%)",
        "sage-deep": "hsl(340 60% 45%)",
        gold: "hsl(340 70% 60%)",
        "gold-soft": "hsl(340 75% 82%)",
        foreground: "hsl(340 45% 18%)",
        primary: "hsl(340 75% 50%)",
      },
      fontFamily: {
        script: ["'Great Vibes'", "cursive"],
        cinzel: ["Cinzel", "serif"],
        "serif-display": ["'Cormorant Garamond'", "serif"],
      },
      boxShadow: {
        elegant: "0 20px 60px -20px hsl(340 55% 40% / .2)",
        soft: "0 8px 30px -10px hsl(340 40% 30% / .12)",
        gold: "0 10px 40px -10px hsl(340 70% 55% / .35)",
      },
    },
  },
  plugins: [],
};