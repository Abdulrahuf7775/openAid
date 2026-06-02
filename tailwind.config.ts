import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#0A3D2A",
        gold: "#F5A623",
        trust: "#1E90FF",
        terracotta: "#C66A42",
        sand: "#F5E9D3",
        charcoal: "#18201C"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(10, 61, 42, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
