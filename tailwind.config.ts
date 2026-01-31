import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-inria-serif)', 'serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        myCustomTheme: {
          primary: "#C0C0C0", // Silver
          secondary: "#000000", // Black
          accent: "#FFFFFF", // White
          neutral: "#1A202C", // Dark Gray mostly for neutral backgrounds
          "base-100": "#0f1013ff", // The requested Dark Blue background
          "base-200": "#36393eff", // Slightly lighter for cards/sections
          "base-300": "#253a5c", // Even lighter for specialized areas
          "base-content": "#FFFFFF", // White text for readability
          info: '#e0e8f0',
          success: '#86e1b9',
          warning: '#fbbf24',
          error: '#ef4444',
        },
      },], // This enables only the retro theme
  },
} satisfies Config;
