import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Home,
  ListChecks,
  Phone,
  Sparkles,
} from "lucide-react"
import { services, getServiceBySlug } from "@/lib/services"
import { getServiceDetail } from "@/lib/service-details"
import { contact } from "@/lib/contact"
import { QuoteForm } from "@/components/quote-form"
import { WaveDivider } from "@/components/wave-divider"
import { ShaderBackground } from "@/components/ui/hero-shader"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

const BASE_URL = "https://fedox-facilityservices.de"

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  const detail = getServiceDetail(slug)
  if (!service || !detail) return {}

  const url = `${BASE_URL}/leistungen/${slug}`
  const ogImage = `${BASE_URL}${service.heroImage}`

  return {
    title: detail.seoTitle,
    description: detail.seoDescription,
    keywords: detail.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: detail.seoTitle,
      description: detail.seoDescription,
      locale: "de_DE",
      siteName: "fedox Facility Services",
      images: [{ url: ogImage, width: 1344, height: 768, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: detail.seoTitle,
      description: detail.seoDescription,
      images: [ogImage],
    },
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  const detail = getServiceDetail(slug)
  if (!service || !detail) notFound()

  const related = services.filter((s) => s.slug !== slug).slice(0, 3)
  const url = `${BASE_URL}/leistungen/${slug}`
  const image = `${BASE_URL}${service.heroImage}`

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      provider: {
        "@type": "LocalBusiness",
        name: "fedox Facility Services",
        telephone: contact.phoneTel,
        email: contact.email,
        url: contact.website,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dortmund",
          addressRegion: "NRW",
          addressCountry: "DE",
        },
        areaServed: { "@type": "City", name: "Dortmund" },
      },
      areaServed: { "@type": "City", name: "Dortmund" },
      description: detail.seoDescription,
      image,
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Startseite",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Leistungen",
          item: `${BASE_URL}/#leistungen`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: detail.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ]

  const toc = [
    { href: "#ueberblick", label: "Überblick" },
    { href: "#leistungen-details", label: "Leistungen im Detail" },
    { href: "#vorteile", label: "Ihre Vorteile" },
    { href: "#ablauf", label: "So läuft es ab" },
    { href: "#dortmund", label: "Einsatzgebiete in Dortmund" },
    { href: "#faq", label: "Häufige Fragen" },
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
      <section className="relative">
        <ShaderBackground className="relative">
          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-32 lg:pt-16 lg:pb-40">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-white/70">
              <Link href="/" className="inline-flex items-center gap-1 transition-colors hover:text-white">
                <Home className="h-3.5 w-3.5" />
                Startseite
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/#leistungen" className="transition-colors hover:text-white">
                Leistungen
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="font-medium text-white">{service.title}</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="min-w-0">
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md"
                  style={{ filter: "url(#glass-effect)" }}
                >
                  <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-drop)]" />
                  {service.tagline}
                </span>

                <h1
                  lang="de"
                  className="mt-5 hyphens-auto break-words text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem] xl:text-5xl"
                >
                  {service.title}
                  <span className="mt-1 block bg-gradient-to-r from-[color:var(--brand-drop)] via-white to-[color:var(--brand-drop)] bg-clip-text text-2xl text-transparent sm:text-3xl lg:text-[2rem] xl:text-4xl">
                    in Dortmund
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/85">
                  {detail.intro}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="#angebot"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--brand-deep)] shadow-xl shadow-black/20 transition-all hover:shadow-2xl hover:shadow-black/30"
                  >
                    Kostenloses Angebot
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={`tel:${contact.phoneTel}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
                  >
                    <Phone className="h-4 w-4" />
                    {contact.phone}
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-white/80">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-drop)]" />
                    Versichert &amp; zertifiziert
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-drop)]" />
                    Termintreu
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-drop)]" />
                    Aus Dortmund für Dortmund
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/30">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} in Dortmund | fedox Facility Services`}
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--brand-deep)]/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden w-64 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-md lg:block">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand)]">
                    fedox in Dortmund
                  </p>
                  <p className="mt-1 text-sm leading-snug text-[color:var(--brand-deep)]">
                    Zuverlässig, termintreu und mit festem Ansprechpartner seit 2020.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10">
            <WaveDivider color="#ffffff" />
          </div>
        </ShaderBackground>
      </section>

      {/* MAIN CONTENT MIT TOC */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
            {/* TOC — sticky Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-[color:var(--brand-soft)] bg-[color:var(--brand-soft)]/40 p-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
                  <ListChecks className="h-4 w-4 text-[color:var(--brand)]" />
                  Inhaltsverzeichnis
                </p>
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
              </div>
            </aside>

            {/* CONTENT */}
            <article className="max-w-3xl">
              {/* ÜBERBLICK */}
              <section id="ueberblick" className="scroll-mt-24">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
                  {service.title} Dortmund: Ihr Partner für sichtbare Ergebnisse
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {detail.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>

              {/* LEISTUNGEN IM DETAIL */}
              <section id="leistungen-details" className="mt-16 scroll-mt-24">
                <h2 className="text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
                  Leistungen im Detail
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Diese Punkte sind bei jeder {service.title} in Dortmund fester Bestandteil unseres Leistungsumfangs:
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 rounded-2xl border border-[color:var(--brand-soft)] bg-white p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--brand)]" />
                      <span className="text-sm font-medium text-[color:var(--brand-deep)]">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* VORTEILE */}
              <section id="vorteile" className="mt-16 scroll-mt-24">
                <h2 className="text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
                  Ihre Vorteile mit fedox
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Warum Kunden in Dortmund für diese Leistung auf fedox setzen:
                </p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {detail.benefits.map((b) => (
                    <div
                      key={b.title}
                      className="rounded-2xl border border-[color:var(--brand-soft)] bg-gradient-to-br from-white to-[color:var(--brand-soft)]/30 p-6 transition-shadow hover:shadow-md"
                    >
                      <h3 className="text-base font-bold text-[color:var(--brand-deep)]">
                        {b.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {b.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ABLAUF */}
              <section id="ablauf" className="mt-16 scroll-mt-24">
                <h2 className="text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
                  So läuft Ihr Auftrag ab
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Von der ersten Anfrage bis zur Abnahme vor Ort: ein klarer Prozess für Ihre {service.title.toLowerCase()} in Dortmund.
                </p>
                <ol className="mt-8 space-y-4">
                  {detail.process.map((p, i) => (
                    <li
                      key={p.title}
                      className="flex gap-5 rounded-2xl border border-[color:var(--brand-soft)] bg-white p-6"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--brand-deep)] to-[color:var(--brand)] text-sm font-bold text-white shadow-md">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[color:var(--brand-deep)]">
                          {p.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {p.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* DORTMUND EINSATZGEBIETE */}
              <section id="dortmund" className="mt-16 scroll-mt-24">
                <h2 className="text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
                  Einsatzgebiete in Dortmund und Umgebung
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Wir sind für {service.title} in ganz Dortmund und im direkten Umland unterwegs. Unsere Teams kennen die Wege, die Stadtteile und die typischen Objekte vor Ort.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Innenstadt",
                    "Hörde",
                    "Aplerbeck",
                    "Hombruch",
                    "Brackel",
                    "Huckarde",
                    "Nordstadt",
                    "Eving",
                    "Mengede",
                    "Lütgendortmund",
                    "Scharnhorst",
                    "Phoenix-See",
                    "Kaiserviertel",
                    "Kreuzviertel",
                  ].map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--brand-soft)] bg-white px-3.5 py-1.5 text-xs font-medium text-[color:var(--brand-deep)]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand)]" />
                      Dortmund-{d}
                    </span>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <h2 className="text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
                  Häufige Fragen zur {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Die wichtigsten Fragen, die uns Dortmunder Kunden zu dieser Leistung stellen:
                </p>
                <div className="mt-8 space-y-3">
                  {detail.faq.map((f, i) => (
                    <details
                      key={i}
                      className="group rounded-2xl border border-[color:var(--brand-soft)] bg-white p-6 transition-colors open:border-[color:var(--brand)]/40"
                    >
                      <summary className="flex cursor-pointer items-start justify-between gap-4 text-left font-semibold text-[color:var(--brand-deep)] marker:hidden">
                        <h3 className="text-base">{f.question}</h3>
                        <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--brand)] transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {f.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      {/* VERWANDTE LEISTUNGEN */}
      <section className="bg-[color:var(--brand-soft)]/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
            Weitere Leistungen aus einer Hand
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Für unsere Dortmunder Kunden bündeln wir gerne mehrere Leistungen zu einem Gesamtpaket. Das spart Zeit, Koordination und am Ende auch Geld.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.slug}
                  href={`/leistungen/${s.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--brand-soft)] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.heroImage}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 400px, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-deep)]/70 via-[color:var(--brand-deep)]/10 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 shadow-md">
                      <Icon className="h-4 w-4 text-[color:var(--brand)]" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-lg font-bold leading-tight text-[color:var(--brand-deep)]">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {s.shortDescription}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand)]">
                      Details ansehen
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ANGEBOT */}
      <QuoteForm />
    </>
  )
}
