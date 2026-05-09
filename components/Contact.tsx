import Reveal from "./ui/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t hairline py-32 md:py-44 relative overflow-hidden"
    >
      {/* Ambient Blur */}
      <div className="absolute bottom-[-120px] left-[-100px] h-[360px] w-[360px] rounded-full bg-[#d9d4cc] blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-page mx-auto px-6 md:px-10">

        <Reveal>
          <h2 className="serif text-[14vw] md:text-[10vw] leading-[0.95] tracking-tightest">
            Let’s talk
            <span className="cursor inline-block ml-2 align-middle h-[0.8em] w-[0.04em] bg-ink translate-y-[-0.05em]" />
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-10">

          {/* Left */}
          <Reveal
            className="md:col-span-6"
            delay={0.1}
          >
            <p className="text-[18px] md:text-[20px] leading-[1.9] text-ink/80 max-w-lg">
              Currently exploring product management, data, and
              business-focused opportunities. Always open to thoughtful
              conversations around products, systems, startups, and ideas.
            </p>
          </Reveal>

          {/* Right */}
          <Reveal
            className="md:col-span-5 md:col-start-8"
            delay={0.15}
          >
            <ul className="divide-y hairline border-y hairline">

              {[
                {
                  k: "Email",
                  v: "durgamsangeetha24@gmail.com",
                  href: "mailto:durgamsangeetha24@gmail.com",
                },

                {
                  k: "LinkedIn",
                  v: "linkedin.com/in/sangeetha-d-766836285",
                  href: "https://www.linkedin.com/in/sangeetha-d-766836285/",
                },

                {
                  k: "GitHub",
                  v: "github.com/SangeethaDurgam8",
                  href: "https://github.com/SangeethaDurgam8",
                },

                {
                  k: "Calendar",
                  v: "Schedule a conversation",
                  href: "https://calendar.app.google/wCBCQnxZtpHDftPX7",
                },

              ].map((row) => (
                <li key={row.k}>

                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-5 hover:px-2 transition-all duration-500"
                  >

                    <span className="text-[12px] uppercase tracking-[0.18em] text-muted">
                      {row.k}
                    </span>

                    <span className="serif text-lg md:text-2xl tracking-tight group-hover:text-accent transition-colors duration-500 text-right">
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