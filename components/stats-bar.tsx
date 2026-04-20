// components/stats-bar.tsx
const stats = [
  { value: "Seit 2020", label: "Verlässlich am Markt" },
  { value: "98 %", label: "Kundenzufriedenheit" },
  { value: "740+", label: "Zufriedene Kunden" },
  { value: "365", label: "Tage im Jahr erreichbar" },
]

export function StatsBar() {
  return (
    <section className="relative bg-[color:var(--brand-soft)] py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center text-center"
          >
            <span className="text-4xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-5xl">
              {s.value}
            </span>
            <span className="mt-2 text-sm font-medium text-[color:var(--brand-deep)]/70">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
