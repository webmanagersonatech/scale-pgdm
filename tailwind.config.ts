import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // 👈 added here
        classy: ["Playfair Display", "serif"],
      },
      colors: {
        maroon: {
          DEFAULT: "#6A4A2F",
          900: "#2B1A10",  
          800: "#3A2416",     
          700: "#4A301C",     
          600: "#5A3B24",   
          500: "#6A4A2F",     
          400: "#8A6645",      
          300: "#A88562",     
          200: "#C9A683",      
          100: "#E3C8A8",
        },

        grayText: "#73737eff",
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.15)",
      },

    },
  },
  plugins: [],
};

export default config;
