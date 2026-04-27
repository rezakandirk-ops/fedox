import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB)",
  description:
    "Allgemeine Geschäftsbedingungen der Fedox Facility Services für Gebäudereinigung, Hausmeisterdienste, Garten- und Außenanlagenpflege, Winterdienst und technische Objektbetreuung in Dortmund.",
  alternates: { canonical: "https://fedox-facilityservices.de/agb" },
  robots: { index: true, follow: true },
}

const services = [
  "Gebäudereinigung",
  "Hausmeisterdienste",
  "Garten- und Außenanlagenpflege",
  "Winterdienst",
  "Technische Objektbetreuung",
  "Instandsetzung und Reparaturarbeiten",
  "Renovierungsarbeiten",
  "Sanierungsarbeiten und Wiederherstellung nach Wasserschaden",
]

const sections = [
  { id: "geltungsbereich", label: "Geltungsbereich" },
  { id: "leistungen", label: "Leistungen" },
  { id: "vertragsschluss", label: "Vertragsschluss" },
  { id: "preise", label: "Preise und Zahlungsbedingungen" },
  { id: "mitwirkung", label: "Mitwirkungspflichten" },
  { id: "leistungszeit", label: "Leistungszeit und Verzögerungen" },
  { id: "haftung", label: "Haftung" },
  { id: "gewaehrleistung", label: "Gewährleistung" },
  { id: "laufzeit", label: "Vertragslaufzeit und Kündigung" },
  { id: "datenschutz", label: "Datenschutz" },
  { id: "schluss", label: "Schlussbestimmungen" },
]

export default function AGBPage() {
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
            <span className="font-medium text-[color:var(--brand-deep)]">AGB</span>
          </nav>

          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-5xl">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Geltungsbereich, Leistungen, Preise, Haftung und Schlussbestimmungen der Fedox Facility Services.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[260px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-[color:var(--brand-soft)] bg-[color:var(--brand-soft)]/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
                Inhalt
              </p>
              <ol className="mt-4 space-y-2 text-sm">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex items-start gap-2 text-muted-foreground transition-colors hover:text-[color:var(--brand)]"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[color:var(--brand)] shadow-sm">
                        {i + 1}
                      </span>
                      <span className="leading-snug">{s.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className="prose prose-slate max-w-none [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-[color:var(--brand-deep)] [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-muted-foreground [&_li]:my-1 [&_ol]:my-4 [&_ol]:space-y-3 [&_ol>li]:pl-1">
            <section id="geltungsbereich">
              <h2>1. Geltungsbereich</h2>
              <ol>
                <li>
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen{" "}
                  <strong>Fedox Facility Services</strong>, nachfolgend „Dienstleister" genannt, und seinen Kunden,
                  nachfolgend „Auftraggeber" genannt.
                </li>
                <li>
                  Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Dienstleister stimmt
                  ihrer Geltung ausdrücklich schriftlich zu.
                </li>
              </ol>
            </section>

            <section id="leistungen">
              <h2>2. Leistungen</h2>
              <ol>
                <li>
                  Der Dienstleister erbringt Facility-Services, insbesondere:
                  <ul>
                    {services.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </li>
                <li>Art und Umfang der Leistungen ergeben sich aus dem jeweiligen Vertrag oder Angebot.</li>
                <li>Der Dienstleister ist berechtigt, zur Leistungserbringung Subunternehmer einzusetzen.</li>
              </ol>
            </section>

            <section id="vertragsschluss">
              <h2>3. Vertragsschluss</h2>
              <ol>
                <li>Angebote des Dienstleisters sind freibleibend und unverbindlich.</li>
                <li>
                  Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung oder durch tatsächliche
                  Leistungserbringung zustande.
                </li>
              </ol>
            </section>

            <section id="preise">
              <h2>4. Preise und Zahlungsbedingungen</h2>
              <ol>
                <li>Alle Preise verstehen sich netto zuzüglich der gesetzlichen Mehrwertsteuer.</li>
                <li>Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar.</li>
                <li>
                  Bei Zahlungsverzug ist der Dienstleister berechtigt, Verzugszinsen in gesetzlicher Höhe zu verlangen.
                </li>
              </ol>
            </section>

            <section id="mitwirkung">
              <h2>5. Mitwirkungspflichten des Auftraggebers</h2>
              <ol>
                <li>
                  Der Auftraggeber stellt sicher, dass alle notwendigen Voraussetzungen zur Leistungserbringung gegeben
                  sind.
                </li>
                <li>
                  Insbesondere hat der Auftraggeber:
                  <ul>
                    <li>Zugang zu den zu betreuenden Objekten zu gewähren</li>
                    <li>notwendige Informationen bereitzustellen</li>
                    <li>Gefahrenquellen mitzuteilen</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section id="leistungszeit">
              <h2>6. Leistungszeit und Verzögerungen</h2>
              <ol>
                <li>Termine und Fristen sind nur verbindlich, wenn sie ausdrücklich schriftlich vereinbart wurden.</li>
                <li>
                  Verzögerungen aufgrund höherer Gewalt oder unvorhersehbarer Ereignisse berechtigen den Dienstleister
                  zur angemessenen Fristverlängerung.
                </li>
              </ol>
            </section>

            <section id="haftung">
              <h2>7. Haftung</h2>
              <ol>
                <li>
                  Der Dienstleister haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten
                  beruhen.
                </li>
                <li>
                  Bei leichter Fahrlässigkeit haftet der Dienstleister nur bei Verletzung wesentlicher Vertragspflichten
                  (Kardinalpflichten).
                </li>
                <li>Die Haftung ist auf den vertragstypischen, vorhersehbaren Schaden begrenzt.</li>
              </ol>
            </section>

            <section id="gewaehrleistung">
              <h2>8. Gewährleistung</h2>
              <ol>
                <li>Mängel sind vom Auftraggeber unverzüglich schriftlich anzuzeigen.</li>
                <li>Der Dienstleister hat das Recht zur Nachbesserung.</li>
              </ol>
            </section>

            <section id="laufzeit">
              <h2>9. Vertragslaufzeit und Kündigung</h2>
              <ol>
                <li>Die Vertragslaufzeit ergibt sich aus dem jeweiligen Vertrag.</li>
                <li>
                  Eine ordentliche Kündigung ist mit einer Frist von 4 Wochen zum Monatsende möglich, sofern nichts
                  anderes vereinbart wurde.
                </li>
              </ol>
            </section>

            <section id="datenschutz">
              <h2>10. Datenschutz</h2>
              <ol>
                <li>
                  Der Dienstleister verarbeitet personenbezogene Daten ausschließlich im Rahmen der gesetzlichen
                  Bestimmungen.
                </li>
                <li>
                  Weitere Informationen sind in der{" "}
                  <Link href="/datenschutz" className="font-medium text-[color:var(--brand)] underline-offset-2 hover:underline">
                    Datenschutzerklärung
                  </Link>{" "}
                  geregelt.
                </li>
              </ol>
            </section>

            <section id="schluss">
              <h2>11. Schlussbestimmungen</h2>
              <ol>
                <li>Es gilt das Recht der Bundesrepublik Deutschland.</li>
                <li>Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz des Dienstleisters.</li>
                <li>
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen
                  Bestimmungen unberührt.
                </li>
              </ol>
            </section>

            <p className="mt-12 text-sm text-muted-foreground">
              Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long" })}
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
