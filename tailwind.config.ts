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
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        myCustomTheme: {
          primary: "#4DA2FF",     // Sea (bright, vibrant Sui blue)
        secondary: "#C0E6FF",   // Aqua (soft highlight / accents)
        accent: "#011829",      // Ocean (dark blue for contrast accents)
        neutral: "#030F1C",     // Deep Ocean (very dark blue for strong backgrounds)
        "base-100": "#FFFFFF",  // Cloud (clean white, page background)
        "base-200": "#F3F4F6",  // Slightly off-white (UI elements)
        "base-300": "#E5E7EB",  // Light gray (borders, subtle fills)
        "base-content": "#011829", // Ocean (default text color for good contrast)
          info: '#e0e8f0',      // Soft Blue
          success: '#86e1b9',   // Mint Green
          warning: '#fbbf24',   // Warm Yellow
          error: '#ef4444',     // Red for errors
        },
    },], // This enables only the retro theme
  },
} satisfies Config;
