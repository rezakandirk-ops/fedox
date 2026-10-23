import Link from "next/link"

// Slugs muessen zu content/staedte/ passen
const cities = [
  { name: "Dortmund", slug: "gebaeudereinigung-dortmund" },
  { name: "Recklinghausen", slug: "gebaeudereinigung-recklinghausen" },
  { name: "Dorsten", slug: "gebaeudereinigung-dorsten" },
  { name: "Lüdinghausen", slug: "gebaeudereinigung-luedinghausen" },
  { name: "Waltrop", slug: "gebaeudereinigung-waltrop" },
  { name: "Castrop-Rauxel", slug: "gebaeudereinigung-castrop-rauxel" },
  { name: "Herne", slug: "gebaeudereinigung-herne" },
  { name: "Bochum", slug: "gebaeudereinigung-bochum" },
  { name: "Witten", slug: "gebaeudereinigung-witten" },
  { name: "Lünen", slug: "gebaeudereinigung-luenen" },
  { name: "Schwerte", slug: "gebaeudereinigung-schwerte" },
  { name: "Unna", slug: "gebaeudereinigung-unna" },
]

// Suchbegriff-Seiten, Auftrag vom 20.10.2026
const keywordPages = [
  { name: "Büroreinigung Dortmund", slug: "bueroreinigung-dortmund" },
  { name: "Büroreinigung Bochum", slug: "bueroreinigung-bochum" },
  { name: "Büroreinigung Lünen", slug: "bueroreinigung-luenen" },
  { name: "Büroreinigung Witten", slug: "bueroreinigung-witten" },
  { name: "Treppenhausreinigung Lüdinghausen", slug: "treppenhausreinigung-luedinghausen" },
  { name: "Treppenhausreinigung Waltrop", slug: "treppenhausreinigung-waltrop" },
  { name: "Entrümpelung Dortmund", slug: "entruempelung-dortmund" },
]

export function SeoCities() {
  return (
    <div className="border-t border-white/10 pt-10">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-white/80">
        Gebäudereinigung in Ihrer Region
      </h3>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60">
        {cities.map((city) => (
          <li key={city.slug}>
            <Link href={`/${city.slug}`} className="transition-colors hover:text-white">
              Gebäudereinigung {city.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60">
        {keywordPages.map((p) => (
          <li key={p.slug}>
            <Link href={`/${p.slug}`} className="transition-colors hover:text-white">
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
