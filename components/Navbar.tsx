// components/Navbar.tsx

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Selected Work", href: "#work" },
  // { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = links.map((l) =>
        l.href.replace("#", "")
      );

      for (const section of sections) {
        const el = document.getElementById(section);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(section);
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-paper/75 border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-page mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-2 w-2 rounded-full bg-ink" />

          <span className="text-[15px] tracking-tight font-medium">
            Sangeetha
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[14px] transition-colors duration-300 ${
                active === l.href.replace("#", "")
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border hairline px-4 py-1.5 text-[13px] hover:bg-ink hover:text-paper hover:border-ink transition-all duration-300"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>

          Open to opportunities
        </a>

        {/* Mobile Menu Button */}
        <button
          aria-label="Menu"
          className="md:hidden h-9 w-9 grid place-items-center"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-ink transition ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-5 bg-ink transition ${
                open ? "-translate-y-px -rotate-45" : ""
              }`}
            />
          </div>
        </button>

      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t hairline bg-paper"
          >
            <div className="px-6 py-6 flex flex-col gap-5">

              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg tracking-tight ${
                    active === l.href.replace("#", "")
                      ? "text-ink"
                      : "text-muted"
                  }`}
                >
                  {l.label}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}