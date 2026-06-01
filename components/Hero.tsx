"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroStagger, heroItem } from "@/lib/motion";
import ShineButton from "./ui/ShineButton";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-28"
    >
      {/* Ambient blob */}
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { y: [0, -18, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-[-120px] h-[420px] w-[420px] rounded-full bg-blob blur-3xl opacity-40 pointer-events-none"
      />

      <div className="max-w-page mx-auto px-6 md:px-10">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="show"
        >
          {/* Heading */}
          <motion.h1
            variants={heroItem}
            className="serif text-[20vw] sm:text-[15vw] md:text-[11vw] leading-[0.88] tracking-tightest font-normal"
          >
            <span className="block">Hi.</span>
          </motion.h1>

          {/* Main Grid */}
          <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-12 items-start">
            {/* LEFT */}
            <div className="md:col-span-5">
              <motion.p
                variants={heroItem}
                className="text-[18px] leading-[1.8] text-ink/85 max-w-lg"
              >
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
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={heroItem}
                className="mt-10 flex items-center gap-5"
              >
                <ShineButton href="#work">
                  View selected work
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </ShineButton>

                <a
                  href="#contact"
                  className="text-[14px] text-muted hover:text-ink transition"
                >
                  Get in touch →
                </a>
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div
              variants={heroItem}
              className="md:col-span-7 flex justify-end -mt-8"
            >
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -inset-6 rounded-[40px] bg-[var(--accent-50)] blur-2xl"
                />

                {!reduce && (
                  <>
                    <span className="absolute inset-0 rounded-[28px] border border-accent/30 [animation:pulse-ring_3.6s_ease-out_infinite]" />
                    <span className="absolute inset-0 rounded-[28px] border border-accent/20 [animation:pulse-ring_3.6s_ease-out_infinite_1.2s]" />
                  </>
                )}

                <motion.img
                  src="/photo.jpg"
                  alt="Sangeetha"
                  animate={reduce ? undefined : { y: [0, -10, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-[320px] h-[400px] object-cover rounded-[28px] border border-line"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
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

      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.06);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}