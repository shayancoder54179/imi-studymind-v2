import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#2563EB",
          "blue-light": "#3B82F6",
          "blue-dark": "#1E40AF",
          "blue-deep": "#1E3A8A",
        },
        background: {
          white: "#FFFFFF",
          "light-blue": "#EFF6FF",
          "blue-50": "#EFF6FF",
        },
        text: {
          dark: "#1F2937",
          gray: "#6B7280",
        },
        accent: {
          orange: "#F97316",
          pink: "#EC4899",
          teal: "#14B8A6",
          green: "#10B981",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        button: "12px",
        pill: "9999px",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;

