import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
        blob: "var(--blob)",
        lavender: "var(--lavender)",
      },
      maxWidth: { page: "1200px" },
      letterSpacing: { tightest: "-0.04em" },
      borderColor: { line: "var(--line)" },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.10)",
        "card-hover":
          "0 1px 2px rgba(0,0,0,0.05), 0 24px 60px -20px var(--accent-glow)",
      },
    },
  },
  plugins: [],
};
export default config;