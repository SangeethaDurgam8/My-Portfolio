"use client";
export default function ShineButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink text-paper px-5 py-2.5 text-[14px] transition-colors ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      {/* moving reflection */}
      <span
        aria-hidden
        className="absolute inset-y-0 -left-1/3 w-1/3 bg-white/25 blur-md
                   [animation:btn-shine_3.4s_ease-in-out_infinite]
                   motion-reduce:hidden"
      />
    </a>
  );
}