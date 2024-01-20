/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "800px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        green: "hsl(75, 94%, 57%)",
        white: "hsl(0, 0%, 100%)",
        grey: "hsl(0, 0%, 20%)",
        darkGrey: "hsl(0, 0%, 12%)",
        offBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
