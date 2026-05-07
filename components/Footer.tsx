// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t hairline py-10">
      <div className="max-w-page mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-4 text-[12px] text-muted">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          <span>© 2025 Aanya Mehta. Designed and built in Bengaluru.</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-mono">v3.1</span>
          <span>Last updated · Mar 2025</span>
          <a href="#top" className="hover:text-ink transition">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}