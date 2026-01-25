/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3B82F6", // Modern Blue
          accent: "#14B8A6", // Sophisticated Teal
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
