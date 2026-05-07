// components/Contact.tsx
import Reveal from "./ui/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t hairline py-32 md:py-48 relative overflow-hidden"
    >
      <div className="max-w-page mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-muted">
            <span className="font-mono">06</span>
            <span className="h-px w-8 bg-line" />
            <span>Contact</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="serif mt-10 text-[14vw] md:text-[10vw] leading-[0.95] tracking-tightest">
            Let's talk
            <span className="cursor inline-block ml-2 align-middle h-[0.8em] w-[0.04em] bg-ink translate-y-[-0.05em]" />
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-6" delay={0.1}>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-ink/80 max-w-md">
              I'm currently exploring senior product and strategy roles at
              companies that take craft seriously. Always happy to chat about
              ideas, intros, or the occasional reading recommendation.
            </p>
          </Reveal>

          <Reveal className="md:col-span-5 md:col-start-8" delay={0.15}>
            <ul className="divide-y hairline border-y hairline">
              {[
                { k: "Email", v: "aanya@mehta.studio", href: "mailto:aanya@mehta.studio" },
                { k: "LinkedIn", v: "in/aanyamehta", href: "#" },
                { k: "Read.cv", v: "read.cv/aanya", href: "#" },
                { k: "Calendar", v: "Book 20 minutes", href: "#" },
              ].map((row) => (
                <li key={row.k}>
                  <a
                    href={row.href}
                    className="group flex items-center justify-between py-5 hover:px-2 transition-all duration-500"
                  >
                    <span className="text-[12px] uppercase tracking-[0.18em] text-muted">
                      {row.k}
                    </span>
                    <span className="serif text-xl md:text-2xl tracking-tight group-hover:text-accent transition-colors duration-500">
                      {row.v}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}