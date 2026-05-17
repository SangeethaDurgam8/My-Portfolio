// components/FeaturedProjects.tsx

"use client";

import Reveal from "./ui/Reveal";

const projects = [
  {
    id: "01",
    year: "2024",
    company: "IIT Bombay",
    title: "Campus EV Tracking System",

    description:
      "Exploring ways to improve the IIT Bombay e-buggy transportation experience by solving uncertainty around vehicle availability, routes & wait times.",

    tags: ["Systems", "Operations", "User Research"],

    link: "https://www.notion.so/CampusFlow-36285eb0e1dd8069ab57f7ae167bfcf0?source=copy_link",
    linkText: "View project research",
  },

  {
    id: "02",
    year: "2026",
    company: "Independent Project",
    title: "KYC Risk Analytics Dashboard",

    description:
      "Built an end-to-end KYC and AML risk analytics system using SQL, Python & Power BI to identify high-risk customer profiles and suspicious transaction patterns.",

    tags: ["SQL", "Python", "Power BI"],

    link: "",
    linkText: "View Project Info",
  },

  {
    id: "03",
    year: "2025",
    company: "HiLabs Case Study",
    title: "Healthcare Provider Data Platform",

    description:
      "Designed HiSSOT, an AI-powered healthcare data platform focused on creating a reliable Single Source of Truth for provider information. Explored trust scoring, data reconciliation, operational workflows & scalable system design.",

    tags: ["Healthcare", "Systems", "Product Strategy"],

    link: "/HiLabs.pdf",
    linkText: "Read case study",
  },

  {
    id: "04",
    year: "2024",
    company: "IIT Bombay",
    title: "Campus EV Tracking System",

    description:
      "Exploring ways to improve the IIT Bombay e-buggy transportation experience by solving uncertainty around vehicle availability, routes & wait times.",

    tags: ["Systems", "Operations", "User Research"],

    link: "https://www.notion.so/CampusFlow-36285eb0e1dd8069ab57f7ae167bfcf0?source=copy_link",
    linkText: "View project research",
  },

  {
    id: "05",
    year: "2025",
    company: "Flipkart Case Study",
    title: "Consumer Behavior & Attention Economy Analysis",

    description:
      "Explored how digital overstimulation impacts creativity, focus & reflective thinking among Gen Z users. Designed Serenova, a neuroscience-driven product concept using AI guidance & behavioral systems to encourage cognitive recovery & deeper thinking.",

    tags: ["Consumer Psychology", "Product Thinking", "Research"],

    link: "/Flipkart.pdf",
    linkText: "Read case study",
  },

  {
    id: "06",
    year: "2025",
    company: "RISA Labs",
    title: "AI Browser & Research Workflow Systems",

    description:
      "Conceptualized Velocity, an AI-native research browser designed to reduce context switching & support deeper work for researchers & product teams. Explored AI-assisted workflows, productivity systems & scalable product strategy.",

    tags: ["AI Products", "Systems", "Research"],

    link: "/RISA_Labs.pdf",
    linkText: "View project",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="work"
      className="border-t hairline py-28 md:py-40"
    >
      <div className="max-w-page mx-auto px-6 md:px-10">

        {/* Heading */}
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">

            <div>
              <h2 className="serif text-[42px] md:text-[64px] leading-none tracking-tight">
                Selected Work
              </h2>

              {/* <p className="mt-4 text-[15px] md:text-[16px] text-muted max-w-xl leading-relaxed">
                A collection of projects, case studies, and systems-focused
                explorations across product thinking, operations, strategy,
                and user experience.
              </p> */}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-ink/20" />
              <div className="h-3 w-3 rounded-full bg-ink/40" />
              <div className="h-3 w-3 rounded-full bg-ink/70" />
            </div>

          </div>
        </Reveal>

        {/* Projects */}
        <div className="mt-20 space-y-24">

          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>

              <div className="grid md:grid-cols-12 gap-10 border-t border-line pt-12">

                {/* LEFT */}
                <div className="md:col-span-5">

                  <div className="flex items-center gap-4 mb-6">

                    <span className="text-[12px] uppercase tracking-[0.18em] text-muted">
                      {project.company} · {project.year}
                    </span>

                    <span className="h-px flex-1 bg-line" />

                  </div>

                  <h3 className="serif text-[36px] md:text-[54px] leading-[0.96] tracking-tight max-w-[11ch]">
                    {project.title}
                  </h3>

                </div>

                {/* RIGHT */}
                <div className="md:col-span-6 md:col-start-7 flex flex-col justify-between">

                  <div>

                    <p className="text-[17px] md:text-[18px] leading-[1.9] text-ink/80 max-w-xl">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-8 flex flex-wrap gap-3">

                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-muted hover:border-ink/30 transition"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* Link */}
                  <div className="mt-10">

                    <a
                      href={project.link}
                      className="group inline-flex items-center gap-2 text-[15px] text-ink hover:text-muted transition"
                    >
                      {project.linkText}

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>

                  </div>

                </div>

              </div>

            </Reveal>
          ))}

        </div>

        {/* Bottom subtle element */}
        <Reveal delay={0.2}>
          <div className="mt-28 flex items-center justify-center">

            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted">

              <span className="h-px w-10 bg-line" />

              Product Thinking · Systems · Strategy

              <span className="h-px w-10 bg-line" />

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}