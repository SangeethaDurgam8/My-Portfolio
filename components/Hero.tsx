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
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
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
                Curious about products, people, and scalable systems.
                <br />
                <br />
                Currently exploring product management, strategy, and
                business-focused roles through systems thinking, case studies,
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

            {/* RIGHT — portrait + handwritten traits
             *
             * Layout strategy:
             * - Container: 640px wide × 680px tall, position:relative
             * - Portrait: 260px wide, centered horizontally, anchored to
             *   top:80px so the full head is always visible
             * - Portrait occupies roughly x:190–450, y:80–680
             * - Left labels go in x:0–160 band (clear of portrait)
             * - Right labels go in x:460–640 band (clear of portrait)
             * - All labels z-index:20 so they're always on top
             */}
            <motion.div
              variants={heroItem}
              className="md:col-span-7 flex justify-center md:justify-end mt-10 md:mt-0"
            >
              <div
                className="relative"
                style={{ width: "640px", height: "680px" }}
              >
                {/* Subtle glow */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-[var(--accent-50)] blur-3xl opacity-30 pointer-events-none"
                />

                {/* ── PORTRAIT ──
                 * 260px wide, centered at x=190–450 of the 640px container.
                 * top:80px ensures full head visible, bottom aligns naturally.
                 */}
                <motion.img
                  src="/sketch-portrait.png"
                  alt="Sangeetha"
                  animate={reduce ? undefined : { y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: "60px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "260px",
                    objectFit: "contain",
                    zIndex: 10,
                  }}
                />

                {/* ── SPARKLES ── */}
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: "30px",
                    right: "80px",
                    fontSize: "20px",
                    zIndex: 20,
                  }}
                >
                  ✦
                </span>
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    bottom: "100px",
                    left: "170px",
                    fontSize: "16px",
                    zIndex: 20,
                  }}
                >
                  ✦
                </span>
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    bottom: "80px",
                    left: "210px",
                    fontSize: "11px",
                    zIndex: 20,
                  }}
                >
                  ✧
                </span>

                {/* ── TOP-LEFT: Detail-oriented ──
                 * Text starts at left:0, sits above the portrait shoulder area.
                 * Arrow curves right toward center of portrait.
                 */}
                <motion.div
                  animate={reduce ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: "60px",
                    left: "0px",
                    zIndex: 20,
                  }}
                >
                  <span
                    className={caveat.className}
                    style={{
                      display: "block",
                      fontSize: "28px",
                      color: "currentColor",
                      transform: "rotate(-6deg)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Detail-oriented
                  </span>
                  <svg
                    width="100"
                    height="55"
                    viewBox="0 0 100 55"
                    fill="none"
                    style={{ marginLeft: "80px" }}
                  >
                    <path
                      d="M4 4C30 12 60 28 94 50"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                {/* ── MID-LEFT: Analytical ──
                 * Sits at the portrait's shoulder/chest level.
                 * Arrow goes right toward portrait edge.
                 */}
                <motion.div
                  animate={reduce ? undefined : { y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: "280px",
                    left: "0px",
                    zIndex: 20,
                  }}
                >
                  <span
                    className={caveat.className}
                    style={{
                      display: "block",
                      fontSize: "28px",
                      color: "currentColor",
                      transform: "rotate(-5deg)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Analytical
                  </span>
                  <svg
                    width="120"
                    height="24"
                    viewBox="0 0 120 24"
                    fill="none"
                  >
                    <path
                      d="M4 12C40 12 78 12 116 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                {/* ── BOTTOM-LEFT: User Focused ──
                 * Below the portrait's waist, left side.
                 * Arrow curves up-right toward portrait.
                 */}
                <motion.div
                  animate={reduce ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    bottom: "130px",
                    left: "0px",
                    zIndex: 20,
                  }}
                >
                  <span
                    className={caveat.className}
                    style={{
                      display: "block",
                      fontSize: "28px",
                      color: "currentColor",
                      transform: "rotate(-5deg)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    User Focused
                  </span>
                  <svg
                    width="110"
                    height="50"
                    viewBox="0 0 110 50"
                    fill="none"
                  >
                    <path
                      d="M4 46C26 32 56 18 104 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                {/* ── TOP-RIGHT: Curious ──
                 * Sits top-right, text-align right.
                 * Arrow curves down-left toward portrait.
                 */}
                <motion.div
                  animate={reduce ? undefined : { y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: "60px",
                    right: "0px",
                    textAlign: "right",
                    zIndex: 20,
                  }}
                >
                  <span
                    className={caveat.className}
                    style={{
                      display: "block",
                      fontSize: "28px",
                      color: "currentColor",
                      transform: "rotate(-4deg)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Curious
                  </span>
                  <svg
                    width="100"
                    height="55"
                    viewBox="0 0 100 55"
                    fill="none"
                    style={{ marginLeft: "auto" }}
                  >
                    <path
                      d="M96 4C70 12 40 28 6 50"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                {/* ── MID-RIGHT: Adaptable ──
                 * Mirror of Analytical, right side.
                 */}
                <motion.div
                  animate={reduce ? undefined : { y: [0, -6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: "280px",
                    right: "0px",
                    textAlign: "right",
                    zIndex: 20,
                  }}
                >
                  <span
                    className={caveat.className}
                    style={{
                      display: "block",
                      fontSize: "28px",
                      color: "currentColor",
                      transform: "rotate(-4deg)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Adaptable
                  </span>
                  <svg
                    width="120"
                    height="24"
                    viewBox="0 0 120 24"
                    fill="none"
                    style={{ marginLeft: "auto" }}
                  >
                    <path
                      d="M116 12C80 12 42 12 4 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                {/* ── BOTTOM-RIGHT: Dedicated ──
                 * Mirror of User Focused, right side.
                 */}
                <motion.div
                  animate={reduce ? undefined : { y: [0, 8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    bottom: "130px",
                    right: "0px",
                    textAlign: "right",
                    zIndex: 20,
                  }}
                >
                  <span
                    className={caveat.className}
                    style={{
                      display: "block",
                      fontSize: "28px",
                      color: "currentColor",
                      transform: "rotate(-4deg)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Dedicated
                  </span>
                  <svg
                    width="110"
                    height="50"
                    viewBox="0 0 110 50"
                    fill="none"
                    style={{ marginLeft: "auto" }}
                  >
                    <path
                      d="M106 46C84 32 54 18 6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                {/* Pulse rings */}
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
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.06); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
