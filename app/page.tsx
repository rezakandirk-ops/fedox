import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react"
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
      {/* HERO — Split-Layout: links Blau-Block, rechts Foto, weiche Naht */}
      <section className="relative isolate overflow-hidden bg-[color:var(--brand-deep)]">
        {/* Foto als Hintergrund auf der rechten Seite */}
        <div className="absolute inset-y-0 right-0 -z-0 w-full md:w-[62%]">
          <Image
            src="/images/hero-vacuum-horizontal.png"
            alt="Professionelle Gebäudereinigung – Staubsauger auf blauem Teppich"
            fill
            priority
            quality={90}
            sizes="(min-width: 768px) 62vw, 100vw"
            className="rotate-180 object-cover object-center"
          />
          {/* Weicher Übergang Blau -> Foto von links */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--brand-deep) 0%, var(--brand-deep) 8%, rgba(11,59,111,0.85) 22%, rgba(11,59,111,0.35) 40%, rgba(11,59,111,0) 62%)",
            }}
          />
          {/* Dezente Verdunklung unten fuer die Welle */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--brand-deep)]/50 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl items-center px-6 pt-28 pb-32">
          <div className="w-full">
            <h1
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl md:text-[72px] md:leading-[1]"
              style={{ textShadow: "0 2px 24px rgba(11,59,111,0.55), 0 0 1px rgba(11,59,111,0.4)" }}
            >
              Gebäudereinigung
              <br />
              <span className="font-light text-[color:var(--brand-drop)]">in Dortmund</span>
            </h1>

            <p className="mt-6 max-w-md text-balance text-base font-normal leading-relaxed text-white/85 md:text-lg">
              Sauberkeit, Werterhalt und zuverlässiger Service – aus einer Hand.
              Ihr Facility-Partner für Büro, Gewerbe und Wohnobjekte.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#angebot"
                className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all hover:bg-white hover:text-[color:var(--brand-deep)] hover:shadow-xl"
              >
                Angebot anfragen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${contact.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm transition-all hover:bg-white hover:text-[color:var(--brand-deep)]"
              >
                <Phone className="h-4 w-4" />
                {contact.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20">
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
