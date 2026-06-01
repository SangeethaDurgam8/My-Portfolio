"use client";
import { useTheme } from "../providers/ThemeProvider";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="relative h-8 w-8 grid place-items-center rounded-full border hairline hover:border-accent transition-colors"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="text-[13px] leading-none"
      >
        {dark ? "☾" : "☀"}
      </motion.span>
    </button>
  );
}