import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { CookieControls } from "@/components/cookie-banner"

export const metadata: Metadata = {
  title: "Cookie-Einstellungen",
  description:
    "Übersicht über die auf der Website der Fedox Facility Services verwendeten Cookies und Verwaltung Ihrer Einwilligung.",
  alternates: { canonical: "https://fedox-facilityservices.de/cookies" },
  robots: { index: true, follow: true },
}

const categories = [
  {
    name: "Essenziell",
    badge: "Immer aktiv",
    color: "bg-[color:var(--brand-soft)] text-[color:var(--brand-deep)]",
    description:
      "Erforderlich für die grundlegende Funktion der Website. Diese Cookies können nicht deaktiviert werden.",
    cookies: [
      {
        name: "fedox-cookie-consent",
        provider: "Fedox Facility Services",
        purpose: "Speicherung Ihrer Cookie-Auswahl",
        duration: "12 Monate",
      },
    ],
  },
  {
    name: "Statistik",
    badge: "Optional",
    color: "bg-white text-[color:var(--brand)] ring-1 ring-[color:var(--brand)]/20",
    description:
      "Helfen uns zu verstehen, wie Besucher unsere Website nutzen, indem sie Daten anonymisiert sammeln.",
    cookies: [],
  },
  {
    name: "Marketing",
    badge: "Optional",
    color: "bg-white text-[color:var(--brand)] ring-1 ring-[color:var(--brand)]/20",
    description:
      "Werden eingesetzt, um Besuchern relevante Inhalte und Werbeanzeigen zu zeigen sowie externe Inhalte einzubetten.",
    cookies: [],
  },
]

export default function CookiesPage() {
  return (
    <>
      <section className="bg-[color:var(--brand-soft)]/50 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[color:var(--brand-deep)]/70">
            <Link href="/" className="inline-flex items-center gap-1 transition-colors hover:text-[color:var(--brand)]">
              <Home className="h-3.5 w-3.5" />
              Startseite
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-[color:var(--brand-deep)]">Cookies</span>
          </nav>

          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-5xl">
            Cookies & Einwilligung
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Übersicht über die eingesetzten Cookies und Verwaltung Ihrer Einwilligung. Sie können Ihre Auswahl jederzeit
            ändern oder widerrufen.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <CookieControls />

          <article className="prose prose-slate mt-16 max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-[color:var(--brand-deep)] [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:my-3">
            <section>
              <h2>Was sind Cookies?</h2>
              <p>
                Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät gespeichert werden.
                Sie ermöglichen es, Ihre Auswahl zu speichern oder die Nutzung der Seite zu analysieren. Auf dieser
                Website werden ausschließlich technisch notwendige Cookies gesetzt, sofern Sie keine weiteren
                Kategorien aktiv freigeben.
              </p>
            </section>

            <section>
              <h2>Cookie-Kategorien im Detail</h2>
              <div className="not-prose mt-6 space-y-6">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="rounded-3xl border border-[color:var(--brand-soft)] bg-white p-6 shadow-sm sm:p-8"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-bold text-[color:var(--brand-deep)]">{cat.name}</h3>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${cat.color}`}
                      >
                        {cat.badge}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>

                    {cat.cookies.length > 0 ? (
                      <div className="mt-5 overflow-x-auto rounded-2xl border border-[color:var(--brand-soft)]">
                        <table className="w-full text-sm">
                          <thead className="bg-[color:var(--brand-soft)]/50 text-left">
                            <tr>
                              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]/70">
                                Name
                              </th>
                              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]/70">
                                Anbieter
                              </th>
                              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]/70">
                                Zweck
                              </th>
                              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]/70">
                                Speicherdauer
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {cat.cookies.map((c) => (
                              <tr key={c.name} className="border-t border-[color:var(--brand-soft)]">
                                <td className="px-4 py-3 font-mono text-xs text-[color:var(--brand-deep)]">
                                  {c.name}
                                </td>
                                <td className="px-4 py-3 text-muted-foreground">{c.provider}</td>
                                <td className="px-4 py-3 text-muted-foreground">{c.purpose}</td>
                                <td className="px-4 py-3 text-muted-foreground">{c.duration}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="mt-4 text-xs italic text-muted-foreground">
                        Aktuell setzen wir in dieser Kategorie keine Cookies.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2>Cookies im Browser löschen</h2>
              <p>
                Sie können Cookies jederzeit über die Einstellungen Ihres Browsers löschen oder die Speicherung
                generell unterbinden. Beachten Sie, dass die Funktionalität der Website dadurch eingeschränkt sein
                kann. Anleitungen finden Sie in der Hilfe Ihres Browsers (z. B. Chrome, Firefox, Safari, Edge).
              </p>
            </section>

            <section>
              <h2>Weitere Informationen</h2>
              <p>
                Detaillierte Hinweise zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer{" "}
                <Link href="/datenschutz" className="text-[color:var(--brand)] underline-offset-2 hover:underline">
                  Datenschutzerklärung
                </Link>
                . Bei Fragen erreichen Sie uns über die Angaben im{" "}
                <Link href="/impressum" className="text-[color:var(--brand)] underline-offset-2 hover:underline">
                  Impressum
                </Link>
                .
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  )
}
