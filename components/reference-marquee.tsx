import Image from "next/image"

type LogoItem = {
  src: string
  alt: string
}

const referenzen: LogoItem[] = [
  { src: "/referenzen/ref-1.jpg", alt: "Referenzkunde 1" },
  { src: "/referenzen/ref-2.jpg", alt: "Referenzkunde 2" },
  { src: "/referenzen/ref-3.jpg", alt: "Referenzkunde 3" },
  { src: "/referenzen/ref-4.jpg", alt: "Referenzkunde 4" },
  { src: "/referenzen/ref-5.jpg", alt: "Referenzkunde 5" },
]

const zertifikate: LogoItem[] = [
  { src: "/logo/cert/bgbau.jpg", alt: "BG BAU Berufsgenossenschaft der Bauwirtschaft" },
  { src: "/logo/cert/gebaeudedienstleister.jpg", alt: "Die Gebäudedienstleister" },
  { src: "/logo/cert/ihk-dortmund.jpg", alt: "IHK Dortmund" },
  { src: "/logo/cert/gebaeudereiniger-innung.jpg", alt: "Gebäudereiniger-Handwerk" },
]

function Track({ items }: { items: LogoItem[] }) {
  const loop = [...items, ...items]
  return (
    <div className="group relative overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-12 py-4 group-hover:[animation-play-state:paused]">
        {loop.map((logo, i) => (
          <div
            key={`${logo.src}-${i}`}
            className="flex h-28 w-56 shrink-0 items-center justify-center rounded-2xl bg-white px-5"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={240}
              height={120}
              className="max-h-20 w-auto object-contain mix-blend-multiply"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ReferenceMarquee() {
  return (
    <section id="referenzen" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
            Vertrauen seit 2020
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
            Unternehmen, die auf uns vertrauen
          </h2>
        </div>
      </div>

      <div className="mt-12">
        <Track items={referenzen} />
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Mitglied & zertifiziert bei
        </p>
      </div>

      <div className="mt-6">
        <Track items={zertifikate} />
      </div>
    </section>
  )
}
