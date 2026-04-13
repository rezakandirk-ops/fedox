import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, CheckCircle2, Sparkles, ShieldCheck, Clock } from "lucide-react"
import { ShaderBackground } from "@/components/ui/hero-shader"
import { WaveDivider } from "@/components/wave-divider"
import { StatsBar } from "@/components/stats-bar"
import { services } from "@/lib/services"
import { contact } from "@/lib/contact"

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <ShaderBackground className="min-h-[780px]">
          <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl flex-col items-start justify-center px-6 pt-24 pb-40">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md"
              style={{ filter: "url(#glass-effect)" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-drop)]" />
              Sauberkeit und Hygiene in Perfektion
            </div>

            <h1 className="max-w-3xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              Ihr Partner für
              <br />
              <span className="bg-gradient-to-r from-[color:var(--brand-drop)] via-white to-[color:var(--brand-drop)] bg-clip-text text-transparent">
                Sauberkeit und Werterhalt
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/80">
              Sauberkeit, Werterhalt und zuverlässiger Service stehen bei uns im
              Mittelpunkt. Mit Erfahrung, Sorgfalt und einem geschulten Blick für
              Qualität sorgen wir dafür, dass Immobilien professionell betreut und
              dauerhaft gepflegt bleiben.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#leistungen"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[color:var(--brand-deep)] shadow-xl shadow-black/20 transition-all hover:shadow-2xl hover:shadow-black/30"
              >
                Unsere Leistungen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${contact.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                {contact.phone}
              </a>
            </div>

            <div className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: CheckCircle2, label: "8 Leistungen aus einer Hand" },
                { icon: ShieldCheck, label: "Versichert & zertifiziert" },
                { icon: Clock, label: "Termintreu und zuverlässig" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md"
                >
                  <Icon className="h-5 w-5 shrink-0 text-[color:var(--brand-drop)]" />
                  <span className="text-sm font-medium text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10">
            <WaveDivider color="#ffffff" />
          </div>
        </ShaderBackground>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
              Unsere Leistungen
            </span>
            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-5xl">
              Leistungen
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Acht Leistungen aus einer Hand — von der täglichen Büroreinigung bis
              zum ganzheitlichen Gebäudemanagement. Wir decken das gesamte Spektrum
              moderner Facility Services ab.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.slug}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--brand-soft)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-drop)]/40 hover:shadow-2xl hover:shadow-[color:var(--brand)]/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-deep)]/85 via-[color:var(--brand-deep)]/20 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 shadow-lg backdrop-blur-md">
                      <Icon className="h-5 w-5 text-[color:var(--brand)]" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-xs font-medium uppercase tracking-wider text-[color:var(--brand-drop)]">
                        {service.tagline}
                      </p>
                      <h3 className="mt-1 text-xl font-bold leading-tight text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.shortDescription}
                    </p>
                    <a
                      href="#angebot"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)] transition-all hover:gap-3"
                    >
                      Angebot anfragen
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <StatsBar />

      {/* ÜBER UNS */}
      <section id="ueber-uns" className="relative overflow-hidden bg-[color:var(--brand-soft)] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
              Über fedox
            </span>
            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-5xl">
              Sauberkeit ist Vertrauenssache
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Als erfahrener Dienstleister für Gebäudemanagement und
              Reinigungsservices betreuen wir Büros, Praxen, Industriebetriebe und
              Wohnanlagen mit höchstem Qualitätsanspruch. Unser Team arbeitet
              termintreu, diskret und immer mit Blick auf den Gesamtzustand Ihrer
              Immobilie.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Geschultes Fachpersonal",
                "Feste Ansprechpartner",
                "Transparente Abläufe",
                "Zertifizierte Qualität",
                "Moderne Technik",
                "Faire Preise",
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
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--brand-deep)] to-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand)]/20 transition-all hover:shadow-xl"
              >
                Angebot anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero-facility-manager.jpg"
                alt="fedox Team vor Ort"
                fill
                sizes="(min-width: 768px) 500px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-60 rounded-2xl border border-[color:var(--brand-soft)] bg-white p-5 shadow-xl sm:block">
              <p className="text-3xl font-bold text-[color:var(--brand)]">100%</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Zuverlässigkeit & Termintreue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REFERENZEN */}
      <section id="referenzen" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
              Vertrauen seit Tag 1
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
              Unternehmen, die auf uns vertrauen
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex h-24 items-center justify-center rounded-2xl border border-[color:var(--brand-soft)] bg-[color:var(--brand-soft)]/40 p-4 transition-all hover:border-[color:var(--brand)]/30 hover:bg-white"
              >
                <Image
                  src={`/referenzen/ref-${i}.jpg`}
                  alt={`Referenzkunde ${i}`}
                  width={160}
                  height={80}
                  className="max-h-14 w-auto object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <ShaderBackground variant="hero" className="min-h-[420px]">
          <div className="relative z-10 mx-auto flex min-h-[420px] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Bereit für saubere Ergebnisse?
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-white/80">
              Kontaktieren Sie uns für ein unverbindliches Angebot. Wir melden uns
              innerhalb von 24 Stunden.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[color:var(--brand-deep)] shadow-xl transition-all hover:shadow-2xl"
              >
                Angebot anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+4900000000000"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                +49 000 0000000
              </a>
            </div>
          </div>
        </ShaderBackground>
      </section>
    </>
  )
}
