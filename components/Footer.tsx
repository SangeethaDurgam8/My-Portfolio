// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t hairline py-10">
      <div className="max-w-page mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-4 items-center text-[12px] text-muted">
        
        {/* Left */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          <span>© 2026 Sangeetha</span>
        </div>

        {/* Center */}
        <div className="text-center">
          <span>Designed with curiosity.</span>
        </div>

        {/* Right */}
        <div className="flex items-center justify-start md:justify-end gap-6">
          <span className="font-mono">v3.1</span>

          <a
            href="#top"
            className="hover:text-ink transition"
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}