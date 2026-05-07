// components/Hero.tsx
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 pb-28 md:pt-52 md:pb-40 overflow-hidden"
    >
      <div className="max-w-page mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-muted mb-10"
        >
          <span className="font-mono">01</span>
          <span className="h-px w-8 bg-line" />
          <span>Portfolio · 2025</span>
        </motion.div>

        <h1 className="serif text-[12vw] sm:text-[10vw] md:text-[8.2vw] leading-[0.95] tracking-tightest font-normal max-w-[15ch]">
          {[
            "Product thinking,",
            "with the patience",
            <span key="of" className="italic text-muted">of a strategist.</span>,
          ].map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-start-7 md:col-span-5 text-[17px] leading-relaxed text-ink/80 max-w-md"
          >
            I'm Aanya — a product manager and business analyst working at the
            intersection of strategy, operations, and design. I help teams turn
            ambiguous problems into measurable outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="md:col-start-7 md:col-span-6 flex items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper px-5 py-2.5 text-[14px] hover:bg-ink/85 transition"
            >
              View selected work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="text-[14px] text-muted hover:text-ink transition"
            >
              Get in touch →
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.1 }}
        className="absolute bottom-8 left-6 md:left-10 hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted"
      >
        <span className="h-2 w-2 rounded-full border hairline" />
        Bengaluru · Remote
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.1 }}
        className="absolute bottom-8 right-6 md:right-10 hidden md:block text-[11px] uppercase tracking-[0.2em] text-muted"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}