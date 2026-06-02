export function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/15 bg-white/10 p-5 text-white">
      <p className="font-display text-4xl font-bold">{value}</p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
        {label}
      </p>
    </div>
  );
}
