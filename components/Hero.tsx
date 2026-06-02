"use client";
import { Caveat } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { heroStagger, heroItem } from "@/lib/motion";
import ShineButton from "./ui/ShineButton";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
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
        <motion.div variants={heroStagger} initial="hidden" animate="show">
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

              <motion.div
                variants={heroItem}
                className="mt-10 flex items-center gap-5"
              >
                <ShineButton href="#work">
                  View selected work
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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

            {/* RIGHT — portrait + handwritten traits */}
            {/* RIGHT — portrait + handwritten traits */}
<motion.div
  variants={heroItem}
  className="md:col-span-7 flex justify-center md:justify-end mt-10 md:mt-0"

>
<div className="relative w-[620px] h-[540px] overflow-visible flex items-center justify-center -translate-x-10 -translate-y-8">    {/* Glow */}
    <span
      aria-hidden
      className="absolute inset-0 bg-[var(--accent-50)] blur-3xl opacity-50 pointer-events-none"
    />

    {/* Top-left label */}
    <motion.div
      animate={reduce ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[50px] left-[90px]"
    >
      <span
        className={`${caveat.className} block text-[30px] md:text-[36px] text-ink -rotate-6`}
      >
        Detail-oriented
      </span>
      <svg
        width="120"
        height="90"
        viewBox="0 0 120 90"
        fill="none"
        className="ml-16"
      >
        <path
          d="M4 4C42 12 62 28 67 58C70 73 82 79 112 84"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>

    {/* Left label */}
    <motion.div
      animate={reduce ? undefined : { y: [0, 8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-[120px] top-[250px]"
    >
      <span
  style={{
    transform: "translate(540px, 120px) rotate(-6deg)",
  }}
  className={`${caveat.className} block text-[30px] md:text-[36px] text-ink`}
>
  Curious
</span>

<svg
  style={{
    transform: "translate(480px, -1fouc0px)",
  }}
  width="160"
  height="90"
  viewBox="0 0 160 90"
  fill="none"
>
        <path
  d="M4 4C42 12 62 28 67 58C70 73 82 79 102 84"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
/>
      </svg>
    </motion.div>

    {/* Bottom-left label */}
    {/* Bottom-left label */}
<motion.div
  animate={reduce ? undefined : { y: [0, -8, 0] }}
  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
  className="absolute bottom-[95px] left-[100px]"
>
  <span
    style={{
    transform: "translate(0px, 80px) rotate(-6deg)",
  }}
    className={`${caveat.className} block text-[30px] md:text-[36px] text-ink -rotate-6`}
  >
    User Focused
  </span>

  <svg
    style={{
      transform: "translate(80px, -30px)",
    }}
    width="140"
    height="60"
    viewBox="0 0 140 60"
    fill="none"
  >
    <path
      d="M116 4C78 12 58 28 53 58C50 73 38 79 18 84"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
</motion.div>
{/* Sparkles */}
<div className="absolute top-6 right-24 text-xl">✦</div>
<div className="absolute bottom-12 left-28 text-lg">✧</div>
<div className="absolute bottom-8 left-406 text-sm">✦</div>

{/* New top-right sparkles */}
<div className="absolute top-10 right-50 text-lg">✧</div>
<div className="absolute top-80 right 50 text-sm">✦</div>
<div className="absolute top-160 right-5 text-xl">✦</div>
<div className="absolute top-10 right-[40px] text-sm">✧</div>
<div className="absolute top-28 right-480 text-lg">✦</div>
    {/* Top-right label */}
    <motion.div
      animate={reduce ? undefined : { y: [0, 8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[55px] right-[-80px] text-right"
    >
      <span
      style={{
    transform: "translate(30px, 0px) rotate(-6deg)",
  }}
        className={`${caveat.className} block text-[30px] md:text-[36px] text-ink -rotate-6`}
      >
        Analytical
      </span>
      <svg
        width="120"
        height="70"
        viewBox="0 0 120 70"
        fill="none"
        className="-mt-2"
      >
        <path
          d="M116 4C78 12 58 28 53 58C50 73 38 79 18 84"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>

    {/* Right label */}
    <motion.div
      animate={reduce ? undefined : { y: [0, -6, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-[55px] top-[250px] text-right"
    >
      <span
        className={`${caveat.className} block text-[30px] md:text-[36px] text-ink -rotate-6`}
      >
        Adaptable
      </span>
      <svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        fill="none"
        className="ml-auto"
      >
        <path
          d="M2 12C30 12 56 22 114 52"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>

    {/* Bottom-right label */}
    <motion.div
      animate={reduce ? undefined : { y: [0, 8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[85px] right-[90px] text-right"
    >
      <span
        className={`${caveat.className} block text-[30px] md:text-[36px] text-ink -rotate-6`}
      >
        Dedicated
      </span>
    </motion.div>
<svg
  width="160"
  height="90"
  viewBox="0 0 160 90"
  fill="none"
  className="ml-auto"
>
  <path
    d="M150 10C120 20 90 35 65 55C45 70 30 78 8 84"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
</svg>
    {/* Sparkles */}
    <div className="absolute top-56 right-12 text-xl">✦</div>
    <div className="absolute bottom-12 right-[80px] text-lg">✧</div>
    <div className="absolute top-[300px] right-[140px] text-sm">✦</div>

    {/* Portrait */}
    <motion.img
  src="sketch-portrait.png"
  alt="Sangeetha"
  animate={reduce ? undefined : { y: [0, -10, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    top-[-220px]
    left-[35%]
    -translate-x-1/2
    z-10
    w-[420px]
    md:w-[460px]
    object-contain
  "
/>

    {/* Rings */}
    {!reduce && (
      <>
        <span className="absolute inset-0 rounded-[28px] border border-accent/30 [animation:pulse-ring_3.6s_ease-out_infinite]" />
        <span className="absolute inset-0 rounded-[28px] border border-accent/20 [animation:pulse-ring_3.6s_ease-out_infinite_1.2s]" />
      </>
    )}
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