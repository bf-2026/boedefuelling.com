/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0E9EFF", // Main blue
          accent: "#05FFF2", // Cyan/Teal
          dark: "#0F172A", // Slate 900
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Assuming Inter or system font
      },
    },
  },
  plugins: [],
};
