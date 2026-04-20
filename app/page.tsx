import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, Clock } from "lucide-react"
import { StatsBar } from "@/components/stats-bar"
import { ReferenceMarquee } from "@/components/reference-marquee"
import { ServicesMarquee } from "@/components/services-marquee"
import { QuoteForm } from "@/components/quote-form"
import { WaveDivider } from "@/components/wave-divider"
import { getSubServices } from "@/lib/services"
import { contact } from "@/lib/contact"

export default function HomePage() {
  const gebaeudemgmtSubs = getSubServices("gebaeudemanagement")

  return (
    <>
      {/* HERO — Bild-basiert, clean */}
      <section className="relative isolate overflow-hidden bg-[color:var(--brand-soft)]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-fedox-team.png"
            alt="Das Team von fedox Facility Services in Dortmund"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
          {/* Weißer Fade oben (Kopfzeile), dezenter Verlauf links für Text-Lesbarkeit */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-[color:var(--brand-deep)]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/10 to-transparent md:from-white/80 md:via-white/5" />
        </div>

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col items-start justify-center px-6 pt-28 pb-32">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)] shadow-sm">
            Facility Services in Dortmund
          </span>

          <h1
            className="max-w-xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-[color:var(--brand-deep)] sm:text-6xl md:text-7xl"
            style={{ textShadow: "0 2px 20px rgba(255,255,255,0.9), 0 0 8px rgba(255,255,255,0.7)" }}
          >
            Gebäudereinigung
            <br />
            <span className="text-[color:var(--brand)]">in Dortmund</span>
          </h1>

          <p
            className="mt-6 max-w-lg text-balance text-lg font-medium leading-relaxed text-[color:var(--brand-deep)]"
            style={{ textShadow: "0 1px 12px rgba(255,255,255,0.95), 0 0 4px rgba(255,255,255,0.8)" }}
          >
            Sauberkeit, Werterhalt und zuverlässiger Service – aus einer Hand.
            Ihr Facility-Partner für Büro, Gewerbe und Wohnobjekte.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#angebot"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand)]/30 transition-all hover:bg-[color:var(--brand-deep)] hover:shadow-xl"
            >
              Angebot anfragen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${contact.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[color:var(--brand-deep)] shadow-lg transition-all hover:bg-[color:var(--brand-soft)]"
            >
              <Phone className="h-4 w-4 text-[color:var(--brand)]" />
              {contact.phone}
            </a>
          </div>

          <div className="mt-12 grid w-full max-w-xl grid-cols-1 gap-3">
            {[
              { icon: CheckCircle2, label: "Leistungen aus einer Hand" },
              { icon: ShieldCheck, label: "Versichert & zertifiziert" },
              { icon: Clock, label: "Termintreu und zuverlässig" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-sm ring-1 ring-[color:var(--brand-soft)] backdrop-blur-sm"
              >
                <Icon className="h-5 w-5 shrink-0 text-[color:var(--brand)]" />
                <span className="text-sm font-medium text-[color:var(--brand-deep)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10">
          <WaveDivider color="#ffffff" />
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="relative bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
            Leistungen
          </span>
          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-5xl">
            Unsere Leistungen
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Sauberkeit, Werterhalt und zuverlässiger Service stehen bei uns im
            Mittelpunkt. Mit Erfahrung, Sorgfalt und einem geschulten Blick für
            Qualität sorgen wir dafür, dass Immobilien professionell betreut und
            dauerhaft gepflegt bleiben.
          </p>
        </div>

        <div className="mt-14">
          <ServicesMarquee />
        </div>

        {gebaeudemgmtSubs.length > 0 && (
          <div className="mx-auto mt-16 max-w-5xl px-6">
            <div className="rounded-3xl border border-[color:var(--brand-soft)] bg-[color:var(--brand-soft)]/50 p-8 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand)]">
                    Inklusive im Gebäudemanagement
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[color:var(--brand-deep)] sm:text-3xl">
                    Rundum-Service aus einer Hand
                  </h3>
                </div>
                <Link
                  href="/leistungen/gebaeudemanagement"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-deep)] shadow-sm transition-all hover:bg-[color:var(--brand)] hover:text-white"
                >
                  Details ansehen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {gebaeudemgmtSubs.map((sub) => {
                  const Icon = sub.icon
                  return (
                    <li key={sub.slug}>
                      <Link
                        href={`/leistungen/${sub.slug}`}
                        className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-semibold text-[color:var(--brand-deep)]">
                          {sub.title}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )}
      </section>

      <StatsBar />

      {/* ÜBER UNS */}
      <section id="ueber-uns" className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
              Seit 2020
            </span>
            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-5xl">
              Kompetenz und Sauberkeit aus einer Hand
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Mit unserer Fachkompetenz und langjährigen Erfahrung sind wir Ihr
              zuverlässiger Partner für Sauberkeit, Pflege und Werterhalt. Unser
              Anspruch geht über reine Reinigung hinaus: Wir schaffen saubere,
              hygienische und repräsentative Räume, in denen sich Mitarbeiter, Kunden,
              Besucher und Bewohner gleichermaßen wohlfühlen.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Inhabergeführt seit 2020",
                "Geschultes Fachpersonal",
                "Feste Ansprechpartner",
                "Transparente Abläufe",
                "Moderne Technik",
                "Umweltfreundliche Mittel",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-[color:var(--brand-deep)]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--brand)]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="#angebot"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand)]/20 transition-all hover:bg-[color:var(--brand-deep)] hover:shadow-xl"
              >
                Angebot anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero-facility-manager.png"
                alt="fedox Team vor Ort"
                fill
                sizes="(min-width: 768px) 720px, 100vw"
                quality={95}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-60 rounded-2xl border border-[color:var(--brand-soft)] bg-white p-5 shadow-xl sm:block">
              <p className="text-3xl font-bold text-[color:var(--brand)]">Seit 2020</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Verlässlich am Markt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANGEBOT */}
      <QuoteForm />

      {/* REFERENZEN */}
      <ReferenceMarquee />

      {/* CTA */}
      <section className="relative overflow-hidden bg-[color:var(--brand-soft)] py-20">
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-6 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-5xl">
            Bereit für saubere Ergebnisse?
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Wir melden uns
            innerhalb von 24 Stunden.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#angebot"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[color:var(--brand-deep)] hover:shadow-xl"
            >
              Angebot anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${contact.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[color:var(--brand-deep)] shadow-md transition-all hover:shadow-lg"
            >
              <Phone className="h-4 w-4 text-[color:var(--brand)]" />
              {contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
