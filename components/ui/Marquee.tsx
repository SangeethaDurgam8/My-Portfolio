"use client";
import { useReducedMotion } from "framer-motion";

export default function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y hairline py-5"
         style={{ maskImage:
           "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
      <div
        className="flex w-max gap-10 will-change-transform"
        style={
          reduce
            ? undefined
            : { animation: "marquee 38s linear infinite" }
        }
      >
        {row.map((s, i) => (
          <span
            key={i}
            className="text-[12px] uppercase tracking-[0.18em] text-muted whitespace-nowrap flex items-center gap-10"
          >
            {s}
            <span className="h-1 w-1 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}