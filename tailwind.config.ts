import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          navy: {
            DEFAULT: "#1e3a5f",
            dark: "#152d4a",
            light: "#2a4d78",
          },
          orange: {
            DEFAULT: "#e85d26",
            dark: "#d14e1a",
            light: "#f17a4a",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
