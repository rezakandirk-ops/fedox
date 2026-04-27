import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Smartphone, MapPin } from "lucide-react"
import { topLevelServices } from "@/lib/services"
import { contact } from "@/lib/contact"
import { SeoCities } from "@/components/seo-cities"

const memberships = [
  { name: "BG BAU", src: "/logo/cert/bgbau.jpg" },
  { name: "Die Gebäudedienstleister", src: "/logo/cert/gebaeudedienstleister.jpg" },
  { name: "IHK Dortmund", src: "/logo/cert/ihk-dortmund.jpg" },
  { name: "Gebäudereiniger-Handwerk", src: "/logo/cert/gebaeudereiniger-innung.jpg" },
]

export function SiteFooter() {
  return (
    <footer className="relative mt-24">
      {/* Weißer Logo-Streifen */}
      <div className="border-y border-[color:var(--brand-soft)] bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <Link href="/" className="inline-flex">
            <Image
              src="/logo/fedox-logo.png"
              alt="Fedox Facility Services"
              width={720}
              height={216}
              className="h-20 w-auto"
            />
          </Link>
          <div>
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]/60 md:text-right">
              Mitgliedschaften
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
              {memberships.map((m) => (
                <li key={m.name} title={m.name}>
                  <Image
                    src={m.src}
                    alt={m.name}
                    width={160}
                    height={96}
                    className="h-20 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Blauer Footer */}
      <div className="relative overflow-hidden bg-[color:var(--brand-deep)] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(600px circle at 20% 0%, rgba(63,169,245,0.35), transparent 60%), radial-gradient(800px circle at 80% 100%, rgba(63,169,245,0.2), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Fedox Facility Services
              </h3>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
                Sauberkeit und Hygiene in Perfektion. Ihr verlässlicher Partner
                für Gebäudemanagement und Reinigungsdienstleistungen.
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Leistungen
              </h3>
              <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
                {topLevelServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/leistungen/${s.slug}`}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Kontakt
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-drop)]" />
                  <a href={`tel:${contact.phoneTel}`} className="hover:text-white">
                    {contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-drop)]" />
                  <a href={`tel:${contact.mobileTel}`} className="hover:text-white">
                    {contact.mobile}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-drop)]" />
                  <a href={`mailto:${contact.email}`} className="hover:text-white">
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-drop)]" />
                  <span>
                    {contact.address.street}
                    <br />
                    {contact.address.zip} {contact.address.city}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <SeoCities />
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
            <p>© {new Date().getFullYear()} Fedox Facility Services. Alle Rechte vorbehalten.</p>
            <div className="flex flex-wrap gap-6">
              <Link href="/impressum" className="hover:text-white">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
              <Link href="/agb" className="hover:text-white">AGB</Link>
              <Link href="/cookies" className="hover:text-white">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
