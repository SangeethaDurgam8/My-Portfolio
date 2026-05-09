// // components/CurrentFocus.tsx
// import SectionLabel from "./ui/SectionLabel";
// import Reveal from "./ui/Reveal";

// const items = [
//   {
//     title: "Building",
//     body: "An internal benchmarking tool that compares pricing strategies across SaaS verticals. Currently in alpha with three design partners.",
//   },
//   {
//     title: "Reading",
//     body: "“Working in Public” by Nadia Asparouhova, and re-reading Christensen's “The Innovator's Solution” for the third time.",
//   },
//   {
//     title: "Thinking about",
//     body: "How small teams can replace org-wide OKRs with a leaner artifact — something between a strategy memo and a roadmap.",
//   },
//   {
//     title: "Open to",
//     body: "Senior PM and strategy roles at thoughtful companies. Particularly interested in fintech, dev tools, and applied AI.",
//   },
// ];

// export default function CurrentFocus() {
//   return (
//     <section className="border-t hairline py-28 md:py-40 bg-paper">
//       <div className="max-w-page mx-auto px-6 md:px-10">
//         <div className="flex items-end justify-between gap-6 flex-wrap">
//           <Reveal>
//             <SectionLabel index="03" label="Currently" />
//             <h2 className="serif text-5xl md:text-7xl tracking-tight mt-6 max-w-3xl leading-[1.05]">
//               A snapshot of where my attention is today.
//             </h2>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <div className="text-[12px] uppercase tracking-[0.18em] text-muted">
//               Updated · Mar 2025
//             </div>
//           </Reveal>
//         </div>

//         <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-px bg-line border hairline rounded-2xl overflow-hidden">
//           {items.map((it, i) => (
//             <Reveal key={it.title} delay={i * 0.05}>
//               <div className="bg-paper p-8 md:p-10 h-full">
//                 <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-muted">
//                   <span className="font-mono">0{i + 1}</span>
//                   <span>{it.title}</span>
//                 </div>
//                 <p className="mt-6 text-[18px] md:text-[20px] leading-snug tracking-tight text-ink/90">
//                   {it.body}
//                 </p>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }