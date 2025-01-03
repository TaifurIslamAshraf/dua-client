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
        secondary: "var( --secodrary)",
        primary: "var(--primary)",
        "primary-forground": "var(--primary-foreground)",
        green: "var(--green)",
      },
      screens: {
        "3xl": "1640px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
} satisfies Config;
