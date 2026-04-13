const cities = [
  "Dortmund",
  "Recklinghausen",
  "Dorsten",
  "Lüdinghausen",
  "Waltrop",
  "Castrop-Rauxel",
  "Herne",
  "Bochum",
  "Witten",
  "Lünen",
  "Schwerte",
  "Unna",
]

export function SeoCities() {
  return (
    <div className="border-t border-white/10 pt-10">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-white/80">
        Gebäudereinigung in Ihrer Region
      </h3>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60">
        {cities.map((city) => (
          <li key={city}>Gebäudereinigung {city}</li>
        ))}
      </ul>
    </div>
  )
}
