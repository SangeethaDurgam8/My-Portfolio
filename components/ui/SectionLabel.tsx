// components/ui/SectionLabel.tsx
export default function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-muted">
      <span className="font-mono">{index}</span>
      <span className="h-px w-8 bg-line" />
      <span>{label}</span>
    </div>
  );
}