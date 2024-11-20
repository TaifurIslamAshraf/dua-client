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
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
} satisfies Config;
