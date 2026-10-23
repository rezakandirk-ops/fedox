import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Home,
  ListChecks,
  MapPin,
  Phone,
  Route,
  Sparkles,
} from "lucide-react"
import { getServiceBySlug } from "@/lib/services"
import { getAllPageSlugs, getCityPage, getAllCityPages, getAllKeywordPages, pageKeyword, citySlugFor } from "@/lib/city-pages"
import { contact } from "@/lib/contact"
import { QuoteForm } from "@/components/quote-form"

type PageProps = {
  params: Promise<{ stadtseite: string }>
}

// Nur die zwoelf Staedteseiten, alles andere ist 404
export const dynamicParams = false

export function generateStaticParams() {
  return getAllPageSlugs().map((s) => ({ stadtseite: s }))
}

const BASE_URL = "https://www.fedox-facilityservices.de"

// Hero-Bild je Stadt wechseln, damit nicht alle Seiten gleich aussehen
const HERO_IMAGES = [
  "/images/services/unterhalts-buerorein.png",
  "/images/services/treppenhausreinigung.png",
  "/images/services/glas-rahmenreinigung.png",
  "/images/services/fassadenreinigung.png",
  "/images/services/gebaeudemanagement.png",
  "/images/services/industriereinigung.png",
]

// Bild je Seite stabil aus dem Slug ableiten
function heroFor(slug: string, leistungSlug?: string) {
  if (leistungSlug) return `/images/services/${leistungSlug}.png`
  const n = [...slug].reduce((a, c) => a + c.charCodeAt(0), 0)
  return HERO_IMAGES[n % HERO_IMAGES.length]
}

// Fussnoten: im JSON steht [^n] mit n = Position in quellen.eintraege.
// Angezeigt wird eine durchlaufende Nummer in Lesereihenfolge (seo-bau, Quellenblock).
type Footnotes = { num: Map<number, number>; seen: Set<number> }

function buildFootnotes(texts: string[]): Footnotes {
  const num = new Map<number, number>()
  for (const t of texts) {
    for (const m of t.matchAll(/\[\^(\d+)\]/g)) {
      const src = Number(m[1])
      if (!num.has(src)) num.set(src, num.size + 1)
    }
  }
  return { num, seen: new Set() }
}

// **fett** und [^n] aus den Inhaltsdateien ausgeben
function rich(text: string, fn?: Footnotes): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[\^\d+\])/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-[color:var(--brand-deep)]">
          {part.slice(2, -2)}
        </strong>
      )
    }
    const m = part.match(/^\[\^(\d+)\]$/)
    if (m) {
      const n = fn?.num.get(Number(m[1]))
      if (!n) return null
      const first = !fn!.seen.has(n)
      fn!.seen.add(n)
      return (
        <sup key={i} className="ml-0.5 text-[0.7em] font-semibold">
          <a
            href={`#q${n}`}
            id={first ? `fn${n}` : undefined}
            aria-describedby="quellen-titel"
            className="text-[color:var(--brand)] no-underline hover:underline"
          >
            {n}
          </a>
        </sup>
      )
    }
    return part
  })
}

function plain(text: string) {
  return text.replace(/\*\*/g, "").replace(/\[\^\d+\]/g, "")
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stadtseite } = await params
  const page = getCityPage(stadtseite)
  if (!page) return {}
  const url = `${BASE_URL}/${page.slug}`
  const ogImage = `${BASE_URL}${page.bilder?.[0] ? `/images/staedte/${page.bilder[0].datei}` : heroFor(page.slug, page.leistungSlug)}`

  return {
    title: { absolute: page.seoTitle },
    description: page.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: page.seoTitle,
      description: page.seoDescription,
      locale: "de_DE",
      siteName: "Fedox Facility Services",
      images: [{ url: ogImage, width: 1344, height: 768, alt: pageKeyword(page) }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.seoDescription,
      images: [ogImage],
    },
  }
}

export default async function CityPage({ params }: PageProps) {
  const { stadtseite } = await params
  const page = getCityPage(stadtseite)
  if (!page) notFound()

  const url = `${BASE_URL}/${page.slug}`
  const kw = pageKeyword(page)
  const isKeywordPage = Boolean(page.keyword)
  const heroBild = page.bilder?.[0]
  const zweitBild = page.bilder?.[1]
  const heroImage = heroBild ? `/images/staedte/${heroBild.datei}` : heroFor(page.slug, page.leistungSlug)
  const heroAlt = heroBild?.alt ?? `${kw} | Fedox Facility Services`
  const fn = buildFootnotes([
    page.intro,
    ...page.abschnitte.flatMap((a) => [...a.absaetze, ...(a.unterabschnitte ?? []).flatMap((u) => u.absaetze)]),
    page.leistungen.lead,
    ...page.leistungen.eintraege.map((e) => e.text),
    ...page.anfahrt.absaetze,
    ...page.faq.map((f) => f.antwort),
  ])
  // Quellen in Fussnoten-Reihenfolge, nicht zitierte hinten dran
  const quellenSortiert = page.quellen.eintraege
    .map((q, i) => ({ ...q, src: i + 1, nr: fn.num.get(i + 1) }))
    .sort((a, b) => (a.nr ?? 1000 + a.src) - (b.nr ?? 1000 + b.src))
    .map((q, i) => ({ ...q, nr: q.nr ?? i + 1 }))
  const cityPageSlug = citySlugFor(page.stadt)
  const mainService = page.leistungSlug ? getServiceBySlug(page.leistungSlug) : undefined
  // Verwandte Seiten: Stadtseiten untereinander, Suchbegriff-Seiten zur Stadtseite und zu den anderen Suchbegriffen
  const otherCities = getAllCityPages().filter((p) => p.slug !== page.slug)
  const relatedKeywords = getAllKeywordPages().filter(
    (p) => p.slug !== page.slug && (isKeywordPage || p.stadt === page.stadt),
  )
  const services = page.leistungen.eintraege
    .map((e) => ({ ...e, service: getServiceBySlug(e.slug) }))
    .filter((e) => e.service)

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: kw,
      serviceType: page.leistung ?? "Gebäudereinigung",
      provider: {
        "@type": "LocalBusiness",
        name: "Fedox Facility Services",
        telephone: contact.phoneTel,
        email: contact.email,
        url: contact.website,
        address: {
          "@type": "PostalAddress",
          streetAddress: contact.address.street,
          postalCode: contact.address.zip,
          addressLocality: contact.address.city,
          addressRegion: "NRW",
          addressCountry: "DE",
        },
      },
      areaServed: { "@type": "City", name: page.stadt },
      description: page.seoDescription,
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: kw, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((f) => ({
        "@type": "Question",
        name: f.frage,
        acceptedAnswer: { "@type": "Answer", text: plain(f.antwort) },
      })),
    },
  ]

  const toc = [
    ...page.abschnitte.map((a) => ({ href: `#${a.id}`, label: a.h2 })),
    { href: "#leistungen-stadt", label: page.leistungen.h2 },
    { href: "#anfahrt", label: page.anfahrt.h2 },
    { href: "#faq", label: `Häufige Fragen: ${kw}` },
    { href: "#quellen", label: "Quellen" },
    { href: "#angebot", label: "Angebot anfragen" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative bg-[color:var(--brand-soft)]/50">
        <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-20 lg:pt-16 lg:pb-24">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-[color:var(--brand-deep)]/70">
            <Link href="/" className="inline-flex items-center gap-1 transition-colors hover:text-[color:var(--brand)]">
              <Home className="h-3.5 w-3.5" />
              Startseite
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-[color:var(--brand-deep)]">{kw}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)] shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand)]" />
                {page.heroKicker}
              </span>

              <h1
                lang="de"
                className="mt-5 hyphens-auto break-words text-balance text-3xl font-bold leading-[1.15] tracking-tight text-[color:var(--brand-deep)] sm:text-4xl lg:text-[2.5rem] xl:text-5xl"
              >
                {page.h1}
              </h1>

              <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
                {rich(page.intro, fn)}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="#angebot"
                  className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand)]/30 transition-all hover:bg-[color:var(--brand-deep)] hover:shadow-xl"
                >
                  Kostenloses Angebot
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--brand-deep)] shadow-sm transition-all hover:shadow-md"
                >
                  <Phone className="h-4 w-4 text-[color:var(--brand)]" />
                  {contact.phone}
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[color:var(--brand-deep)]/80">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--brand)]" />
                  Antwort innerhalb von 24 Stunden
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--brand)]" />
                  15 % Neukundenrabatt
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--brand)]" />
                  Inhabergeführt seit 2020
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={heroImage}
                  alt={heroAlt}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden w-64 rounded-2xl border border-[color:var(--brand-soft)] bg-white p-5 shadow-xl lg:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand)]">
                  Einsatzort {page.stadt}
                </p>
                <p className="mt-1 text-sm leading-snug text-[color:var(--brand-deep)]">
                  {page.anfahrt.km > 0
                    ? `Rund ${page.anfahrt.km} km von unserem Sitz in Dortmund, laut Routenplaner etwa ${page.anfahrt.minuten} Minuten.`
                    : "Direkt von unserem Sitz in Dortmund aus."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INHALT MIT INHALTSVERZEICHNIS */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              {/* Handy: aufklappbar, damit der Text nicht hinter einer langen Liste verschwindet */}
              <details className="group rounded-2xl border border-[color:var(--brand-soft)] bg-[color:var(--brand-soft)]/40 p-5 lg:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)] marker:hidden">
                  <span className="flex items-center gap-2">
                    <ListChecks className="h-4 w-4 text-[color:var(--brand)]" />
                    Inhaltsverzeichnis
                  </span>
                  <ChevronRight className="h-4 w-4 text-[color:var(--brand)] transition-transform group-open:rotate-90" />
                </summary>
                <nav aria-label="Inhaltsverzeichnis" className="mt-4">
                  <ol className="space-y-2 text-sm">
                    {toc.map((t, i) => (
                      <li key={t.href}>
                        <a
                          href={t.href}
                          className="group flex items-start gap-2 text-muted-foreground transition-colors hover:text-[color:var(--brand)]"
                        >
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[color:var(--brand)] shadow-sm">
                            {i + 1}
                          </span>
                          <span className="leading-snug">{t.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </details>
              <div className="hidden rounded-2xl border border-[color:var(--brand-soft)] bg-[color:var(--brand-soft)]/40 p-6 lg:block">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
                  <ListChecks className="h-4 w-4 text-[color:var(--brand)]" />
                  Inhaltsverzeichnis
                </p>
                <nav aria-label="Inhaltsverzeichnis Desktop" className="mt-4">
                  <ol className="space-y-2 text-sm">
                    {toc.map((t, i) => (
                      <li key={t.href}>
                        <a
                          href={t.href}
                          className="group flex items-start gap-2 text-muted-foreground transition-colors hover:text-[color:var(--brand)]"
                        >
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[color:var(--brand)] shadow-sm">
                            {i + 1}
                          </span>
                          <span className="leading-snug">{t.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            <article className="min-w-0 max-w-3xl hyphens-auto [overflow-wrap:anywhere]">
              {page.abschnitte.map((a, i) => (
                <section key={a.id} id={a.id} className={`${i > 0 ? "mt-16" : ""} scroll-mt-24`}>
                  <h2 className="text-balance hyphens-auto break-words text-2xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-3xl lg:text-4xl">
                    {a.h2}
                  </h2>
                  <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {a.absaetze.map((p, j) => (
                      <p key={j}>{rich(p, fn)}</p>
                    ))}
                  </div>
                  {a.unterabschnitte?.map((u) => (
                    <div key={u.h3} className="mt-8">
                      <h3 className="hyphens-auto break-words text-xl font-bold text-[color:var(--brand-deep)]">{u.h3}</h3>
                      <div className="mt-3 space-y-4 text-base leading-relaxed text-muted-foreground">
                        {u.absaetze.map((p, j) => (
                          <p key={j}>{rich(p, fn)}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                  {i === 1 && zweitBild && (
                    <figure className="mt-10">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-lg">
                        <Image
                          src={`/images/staedte/${zweitBild.datei}`}
                          alt={zweitBild.alt}
                          fill
                          sizes="(min-width: 1024px) 768px, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </figure>
                  )}
                </section>
              ))}

              {/* LEISTUNGEN IN DER STADT */}
              <section id="leistungen-stadt" className="mt-16 scroll-mt-24">
                <h2 className="text-balance hyphens-auto break-words text-2xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-3xl lg:text-4xl">
                  {page.leistungen.h2}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {rich(page.leistungen.lead, fn)}
                </p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {services.map((e) => (
                    <Link
                      key={e.slug}
                      href={`/leistungen/${e.slug}`}
                      className="group flex flex-col rounded-2xl border border-[color:var(--brand-soft)] bg-gradient-to-br from-white to-[color:var(--brand-soft)]/30 p-6 transition-shadow hover:shadow-md"
                    >
                      <h3 className="hyphens-auto break-words text-base font-bold text-[color:var(--brand-deep)]">
                        {e.service!.title} in {page.stadt}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{rich(e.text, fn)}</p>
                      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-[color:var(--brand)]">
                        Zur Leistung
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* STADTTEILE */}
              {page.stadtteile.length > 0 && (
                <section className="mt-12">
                  <h3 className="hyphens-auto break-words text-xl font-bold text-[color:var(--brand-deep)]">
                    {isKeywordPage ? `${page.leistung} in allen Stadtteilen von ${page.stadt}` : `Gebäudereinigung in allen Stadtteilen von ${page.stadt}`}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {page.stadtteile.map((d) => (
                      <span
                        key={d}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--brand-soft)] bg-white px-3.5 py-1.5 text-xs font-medium text-[color:var(--brand-deep)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand)]" />
                        {d}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* ANFAHRT */}
              <section id="anfahrt" className="mt-16 scroll-mt-24">
                <h2 className="text-balance hyphens-auto break-words text-2xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-3xl lg:text-4xl">
                  {page.anfahrt.h2}
                </h2>
                {page.anfahrt.km > 0 && (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-4 rounded-2xl border border-[color:var(--brand-soft)] bg-white p-5">
                      <MapPin className="h-6 w-6 shrink-0 text-[color:var(--brand)]" />
                      <div>
                        <p className="text-2xl font-bold text-[color:var(--brand-deep)]">rund {page.anfahrt.km} km</p>
                        <p className="text-xs text-muted-foreground">Fahrstrecke ab Güntherstraße, Dortmund</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-2xl border border-[color:var(--brand-soft)] bg-white p-5">
                      <Route className="h-6 w-6 shrink-0 text-[color:var(--brand)]" />
                      <div>
                        <p className="text-2xl font-bold text-[color:var(--brand-deep)]">etwa {page.anfahrt.minuten} Min.</p>
                        <p className="text-xs text-muted-foreground">laut Routenplaner, ohne Verkehr</p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {page.anfahrt.absaetze.map((p, j) => (
                    <p key={j}>{rich(p, fn)}</p>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <h2 className="text-balance hyphens-auto break-words text-2xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-3xl lg:text-4xl">
                  Häufige Fragen: {kw}
                </h2>
                <div className="mt-8 space-y-3">
                  {page.faq.map((f, i) => (
                    <details
                      key={i}
                      className="group rounded-2xl border border-[color:var(--brand-soft)] bg-white p-6 transition-colors open:border-[color:var(--brand)]/40"
                    >
                      <summary className="flex cursor-pointer items-start justify-between gap-4 text-left font-semibold text-[color:var(--brand-deep)] marker:hidden">
                        <h3 className="hyphens-auto break-words text-base">{f.frage}</h3>
                        <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--brand)] transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{rich(f.antwort, fn)}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* QUELLEN: aufklappbar, Nummern = Fussnoten im Text */}
              <section id="quellen" aria-labelledby="quellen-titel" className="mt-16 scroll-mt-24">
                <details className="group rounded-2xl border border-[color:var(--brand-soft)] bg-[color:var(--brand-soft)]/30 p-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 marker:hidden">
                    <span className="flex items-baseline gap-3">
                      <span id="quellen-titel" className="text-lg font-bold text-[color:var(--brand-deep)]">Quellen</span>
                      <span className="text-xs text-muted-foreground">{quellenSortiert.length} Fundstellen</span>
                    </span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-[color:var(--brand)] transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-[color:var(--brand-deep)]">So ist diese Seite entstanden:</span>{" "}
                    Recherche aus öffentlichen Quellen, jede Zahl und Ortsangabe von Hand gegen die Fundstelle
                    geprüft, Stand {page.quellen.stand}. Angaben zu unseren Leistungen und zum Ablauf stammen von
                    Fedox Facility Services selbst.
                  </p>
                  <ol className="mt-4 space-y-2 text-xs leading-relaxed text-muted-foreground">
                    {quellenSortiert.map((q) => (
                      <li key={q.src} id={`q${q.nr}`} className="flex gap-2 break-words scroll-mt-28">
                        <span className="w-6 shrink-0 text-right font-semibold text-[color:var(--brand-deep)]">{q.nr}.</span>
                        <span>
                          {q.text}{" "}
                          <span className="text-[color:var(--brand-deep)]/70">
                            Quelle:{" "}
                            {q.url ? (
                              <a href={q.url} target="_blank" rel="noopener" className="underline hover:text-[color:var(--brand)]">
                                {q.quelle}
                              </a>
                            ) : (
                              q.quelle
                            )}
                          </span>
                          {fn.num.has(q.src) && (
                            <a href={`#fn${q.nr}`} aria-label="zurück zum Text" className="ml-1 text-[color:var(--brand)] no-underline">
                              &#8617;
                            </a>
                          )}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Fehlt eine Angabe oder hat sich eine Zahl geändert? <a href="#angebot" className="underline">Schreiben Sie uns</a>, wir korrigieren das.
                  </p>
                </details>
              </section>
            </article>
          </div>
        </div>
      </section>

      {/* VERWANDTE SEITEN */}
      <section className="bg-[color:var(--brand-soft)]/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {isKeywordPage && (
            <div className="mb-10 flex flex-wrap gap-3">
              {mainService && (
                <Link
                  href={`/leistungen/${mainService.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--brand-deep)]"
                >
                  Alles zur Leistung {mainService.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              {cityPageSlug && (
                <Link
                  href={`/${cityPageSlug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--brand)] bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-deep)] transition-colors hover:text-[color:var(--brand)]"
                >
                  Gebäudereinigung {page.stadt}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          )}

          {relatedKeywords.length > 0 && (
            <>
              <h2 className="text-2xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-3xl">
                {isKeywordPage ? "Weitere Reinigungsleistungen in der Region" : `Weitere Reinigungsleistungen in ${page.stadt}`}
              </h2>
              <ul className="mt-6 mb-10 flex flex-wrap gap-3">
                {relatedKeywords.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/${c.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--brand-soft)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--brand-deep)] transition-colors hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
                    >
                      {pageKeyword(c)}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          {!isKeywordPage && otherCities.length > 0 && (
            <>
              <h2 className="text-2xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-3xl">
                Gebäudereinigung in weiteren Städten der Region
              </h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {otherCities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/${c.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--brand-soft)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--brand-deep)] transition-colors hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
                    >
                      Gebäudereinigung {c.stadt}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <QuoteForm />
    </>
  )
}
