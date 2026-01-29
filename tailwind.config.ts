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
          primary: "#000000",
          secondary: "#71717a",
          accent: "#52525b",
          neutral: "#18181b",
          "base-100": "#FAFAFA",
          "base-200": "#E4E4E7",
          "base-300": "#D4D4D8",
          "base-content": "#000000",
          info: '#e0e8f0',
          success: '#86e1b9',
          warning: '#fbbf24',
          error: '#ef4444',
        },
      },], // This enables only the retro theme
  },
} satisfies Config;
