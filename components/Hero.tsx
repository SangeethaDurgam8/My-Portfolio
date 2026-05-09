"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-28"
    >
      {/* Ambient Blur */}
      <div className="absolute top-10 right-[-120px] h-[420px] w-[420px] rounded-full bg-[#d9d4cc] blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-page mx-auto px-6 md:px-10">

        {/* Heading */}
        <h1 className="serif text-[20vw] sm:text-[15vw] md:text-[11vw] leading-[0.88] tracking-tightest font-normal">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block"
          >
            Hi.
          </motion.span>
        </h1>

        {/* Main Grid */}
        <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-12 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-5"
          >
            <p className="text-[18px] leading-[1.8] text-ink/85 max-w-lg">
              I'm Sangeetha.
              <br />
              Curious about products, people,
              and scalable systems.
              <br />
              <br />
              Currently exploring product management,
              strategy, and business-focused roles
              through systems thinking, case studies,
              and problem-solving.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex items-center gap-5">
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
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="md:col-span-7 flex justify-end -mt-8"
          >
          <img
            src="/photo.jpg"
            alt="Sangeetha"
            className="w-[320px] h-[400px] object-cover rounded-[28px] border border-[#d0cdc5]"
          />
          </motion.div>

        </div>
      </div>

      {/* Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-8 left-6 md:left-10 hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted"
      >
        <span className="h-2 w-2 rounded-full border hairline" />
        Mumbai · Open to remote, hybrid & in-office roles
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-8 right-6 md:right-10 hidden md:block text-[11px] uppercase tracking-[0.2em] text-muted"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}