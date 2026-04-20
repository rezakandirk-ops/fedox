import Link from "next/link"
import Image from "next/image"
import { topLevelServices } from "@/lib/services"

export function ServicesMarquee() {
  const loop = [...topLevelServices, ...topLevelServices]
  return (
    <div className="group relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"
      />
      <ul className="flex w-max animate-marquee-slow gap-6 py-2 group-hover:[animation-play-state:paused]">
        {loop.map((service, i) => (
          <li key={`${service.slug}-${i}`} className="shrink-0">
            <Link
              href={`/leistungen/${service.slug}`}
              className="group/card flex w-[260px] flex-col overflow-hidden rounded-3xl border border-[color:var(--brand-soft)] bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-[color:var(--brand-drop)]/50 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="260px"
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
              </div>
              <div className="px-5 py-4 text-center">
                <h3 className="text-base font-semibold leading-tight text-[color:var(--brand-deep)]">
                  {service.title}
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
