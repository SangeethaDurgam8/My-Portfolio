// components/FeaturedProjects.tsx
"use client";
import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import Reveal from "./ui/Reveal";

const projects = [
  {
    n: "01",
    client: "Northwind Capital",
    title: "Reimagining underwriting for SMB lending",
    role: "Lead PM",
    year: "2024",
    summary:
      "Took a manual, 6-day underwriting process and turned it into a tiered automated workflow. Cut decision time by 38% and reduced default risk by 12%.",
    tags: ["0→1 product", "Fintech", "Workflow"],
    metric: { k: "Underwriting time", v: "−38%" },
  },
  {
    n: "02",
    client: "Lattice (internal)",
    title: "A leaner artifact for company strategy",
    role: "Product strategy",
    year: "2024",
    summary:
      "Replaced a 40-page OKR document with a single 'strategy canvas' adopted by four product pods. Improved cross-team alignment scores by 22%.",
    tags: ["Strategy", "Internal tooling", "Operations"],
    metric: { k: "Alignment score", v: "+22%" },
  },
  {
    n: "03",
    client: "Polymath Health",
    title: "Pricing & packaging for a clinical SaaS",
    role: "Business analyst",
    year: "2023",
    summary:
      "Led market research and pricing modeling for a relaunch. Designed a three-tier structure that lifted ARPA by 1.6× over two quarters.",
    tags: ["Pricing", "Healthcare", "Research"],
    metric: { k: "ARPA", v: "1.6×" },
  },
  {
    n: "04",
    client: "Banco Sur",
    title: "Regulatory transformation roadmap",
    role: "Consulting analyst",
    year: "2022",
    summary:
      "Co-authored a 3-year compliance roadmap for a Latin American bank. Synthesized 14 regulatory frameworks into a single execution plan.",
    tags: ["Consulting", "Banking", "Roadmap"],
    metric: { k: "Frameworks unified", v: "14" },
  },
];

export default function FeaturedProjects() {
  return (
    <section id="work" className="border-t hairline py-28 md:py-40">
      <div className="max-w-page mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <Reveal>
            <SectionLabel index="04" label="Selected work" />
            <h2 className="serif text-5xl md:text-7xl tracking-tight mt-6 max-w-3xl leading-[1.05]">
              Four projects that taught me something I still use.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="text-[14px] text-muted hover:text-ink transition"
            >
              Full case studies on request →
            </a>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24 border-t hairline">
          {projects.map((p, i) => (
            <ProjectRow key={p.n} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  i,
}: {
  project: (typeof projects)[number];
  i: number;
}) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group block border-b hairline py-10 md:py-14"
    >
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
        <div className="md:col-span-1 text-[12px] font-mono text-muted pt-1">
          {project.n}
        </div>

        <div className="md:col-span-6">
          <div className="text-[12px] uppercase tracking-[0.18em] text-muted">
            {project.client} · {project.year}
          </div>
          <h3 className="serif mt-3 text-3xl md:text-[44px] leading-[1.05] tracking-tight max-w-[18ch] group-hover:text-accent transition-colors duration-500">
            {project.title}
          </h3>
        </div>

        <div className="md:col-span-4 text-[15px] text-ink/75 leading-relaxed">
          <p>{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] uppercase tracking-[0.14em] text-muted border hairline rounded-full px-2.5 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 text-right">
          <div className="serif text-3xl tracking-tight">
            {project.metric.v}
          </div>
          <div className="text-[10px] uppercase tracking-[0.16em] text-muted mt-1">
            {project.metric.k}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-[13px] text-muted group-hover:text-ink transition">
        Read case study
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-500 group-hover:translate-x-1"
        >
          <path
            d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </motion.a>
  );
}