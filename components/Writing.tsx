// // components/Writing.tsx
// import SectionLabel from "./ui/SectionLabel";
// import Reveal from "./ui/Reveal";

// const posts = [
//   {
//     date: "Feb 2025",
//     title: "On replacing OKRs with a one-page strategy canvas",
//     read: "8 min read",
//     tag: "Strategy",
//   },
//   {
//     date: "Jan 2025",
//     title: "The PM artifact I wish someone had shown me earlier",
//     read: "6 min read",
//     tag: "Craft",
//   },
//   {
//     date: "Nov 2024",
//     title: "What underwriting taught me about product trade-offs",
//     read: "11 min read",
//     tag: "Fintech",
//   },
//   {
//     date: "Sep 2024",
//     title: "Why pricing belongs to product, not marketing",
//     read: "7 min read",
//     tag: "Pricing",
//   },
// ];

// export default function Writing() {
//   return (
//     <section id="writing" className="border-t hairline py-28 md:py-40 bg-paper">
//       <div className="max-w-page mx-auto px-6 md:px-10">
//         <div className="grid md:grid-cols-12 gap-10">
//           <Reveal className="md:col-span-4">
//             <SectionLabel index="05" label="Writing" />
//             <h2 className="serif text-5xl md:text-6xl tracking-tight mt-6 leading-[1.05]">
//               Notes from the practice.
//             </h2>
//             <p className="mt-6 text-[15px] text-ink/70 leading-relaxed max-w-sm">
//               Short essays on product strategy, operations, and the craft of
//               shipping software with intent. New writing every few weeks.
//             </p>
//             <a
//               href="#"
//               className="mt-8 inline-flex items-center gap-2 text-[14px] text-ink underline-offset-4 hover:underline"
//             >
//               All essays →
//             </a>
//           </Reveal>

//           <div className="md:col-span-8 md:col-start-6 border-t hairline">
//             {posts.map((p, i) => (
//               <Reveal key={p.title} delay={i * 0.05}>
//                 <a
//                   href="#"
//                   className="group flex items-center justify-between gap-6 py-7 border-b hairline"
//                 >
//                   <div className="flex items-baseline gap-6 min-w-0">
//                     <span className="text-[12px] font-mono text-muted shrink-0 w-20">
//                       {p.date}
//                     </span>
//                     <span className="serif text-xl md:text-2xl tracking-tight truncate group-hover:text-accent transition-colors duration-500">
//                       {p.title}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-5 shrink-0">
//                     <span className="hidden md:inline text-[11px] uppercase tracking-[0.16em] text-muted">
//                       {p.tag}
//                     </span>
//                     <span className="text-[12px] text-muted">{p.read}</span>
//                     <svg
//                       width="14"
//                       height="14"
//                       viewBox="0 0 14 14"
//                       fill="none"
//                       className="transition-transform duration-500 group-hover:translate-x-1 text-muted group-hover:text-ink"
//                     >
//                       <path
//                         d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
//                         stroke="currentColor"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                   </div>
//                 </a>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }