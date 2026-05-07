// components/About.tsx
import SectionLabel from "./ui/SectionLabel";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="border-t hairline py-28 md:py-40">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel index="02" label="About" />
        </Reveal>

        <div className="mt-14 grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-7" delay={0.05}>
            <p className="serif text-[28px] md:text-[40px] leading-[1.2] tracking-tight">
              I spent five years in strategy and product roles across fintech and
              SaaS — translating market signals, customer interviews, and
              operational data into product bets that shipped.
            </p>
          </Reveal>

          <Reveal className="md:col-span-5 md:col-start-8 space-y-6 text-[15px] text-ink/75 leading-relaxed" delay={0.15}>
            <p>
              Most recently, I led a 0→1 lending workflow at a Series B fintech,
              taking it from discovery through launch with three engineers and
              one designer. The work cut underwriting time by 38%.
            </p>
            <p>
              Before that, I worked as a business analyst at a top-tier
              consulting firm, advising banks on regulatory transformation. I
              still keep a soft spot for spreadsheets that explain themselves.
            </p>
            <p>
              I care about second-order effects, well-written PRDs, and the
              quiet craft of making complex systems feel obvious.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border hairline rounded-2xl overflow-hidden">
            {[
              { k: "Years", v: "5+" },
              { k: "Products shipped", v: "11" },
              { k: "Markets", v: "3" },
              { k: "Coffees / week", v: "21" },
            ].map((s) => (
              <div key={s.k} className="bg-paper p-6 md:p-8">
                <div className="serif text-4xl md:text-5xl tracking-tight">
                  {s.v}
                </div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.16em] text-muted">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}