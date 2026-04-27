import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { contact } from "@/lib/contact"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Fedox Facility Services nach DSGVO und BDSG. Informationen zur Verarbeitung personenbezogener Daten, Cookies und Ihren Rechten.",
  alternates: { canonical: "https://fedox-facilityservices.de/datenschutz" },
  robots: { index: true, follow: true },
}

const owner = {
  company: "Fedox Facility Services",
  name: "Mohamed Lamghizarti",
  street: "Güntherstraße 42",
  zip: "44143",
  city: "Dortmund",
  country: "Deutschland",
}

const sections = [
  { id: "verantwortlicher", label: "Verantwortlicher" },
  { id: "allgemeines", label: "Allgemeines" },
  { id: "server-logs", label: "Server-Logs" },
  { id: "kontakt", label: "Kontaktaufnahme" },
  { id: "angebot", label: "Angebotsformular" },
  { id: "cookies", label: "Cookies" },
  { id: "externe-dienste", label: "Externe Dienste" },
  { id: "rechte", label: "Ihre Rechte" },
  { id: "beschwerde", label: "Beschwerderecht" },
  { id: "aenderungen", label: "Änderungen" },
]

export default function DatenschutzPage() {
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
            <span className="font-medium text-[color:var(--brand-deep)]">Datenschutz</span>
          </nav>

          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-5xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 DSGVO.
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

          <article className="prose prose-slate max-w-none [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-[color:var(--brand-deep)] [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[color:var(--brand-deep)] [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:my-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-muted-foreground [&_li]:my-1">
            <section id="verantwortlicher">
              <h2>1. Verantwortlicher</h2>
              <p>
                Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <p>
                <strong>{owner.company}</strong>
                <br />
                Inhaber: {owner.name}
                <br />
                {owner.street}
                <br />
                {owner.zip} {owner.city}, {owner.country}
                <br />
                E-Mail:{" "}
                <a href={`mailto:${contact.email}`} className="text-[color:var(--brand)] underline-offset-2 hover:underline">
                  {contact.email}
                </a>
                <br />
                Telefon: {contact.phone}
              </p>
            </section>

            <section id="allgemeines">
              <h2>2. Allgemeines zur Datenverarbeitung</h2>
              <p>
                Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung
                einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung
                erfolgt regelmäßig nur nach Einwilligung des Nutzers oder wenn die Verarbeitung durch gesetzliche
                Vorschriften gestattet ist.
              </p>
              <h3>Rechtsgrundlagen</h3>
              <ul>
                <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</li>
                <li>Art. 6 Abs. 1 lit. b DSGVO – Vertragsanbahnung und -erfüllung</li>
                <li>Art. 6 Abs. 1 lit. c DSGVO – rechtliche Verpflichtung</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse</li>
              </ul>
            </section>

            <section id="server-logs">
              <h2>3. Bereitstellung der Website / Server-Logs</h2>
              <p>
                Beim Aufruf unserer Website werden durch den Browser Ihres Endgeräts automatisch Daten an den Server
                unserer Website gesendet. Diese Daten werden temporär in einem sogenannten Logfile gespeichert. Folgende
                Daten werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
              </p>
              <ul>
                <li>IP-Adresse des anfragenden Rechners (anonymisiert)</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer)</li>
                <li>Browser-Typ und ggf. das Betriebssystem Ihres Rechners</li>
              </ul>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im stabilen,
                sicheren Betrieb der Website. Die Daten werden spätestens nach 7 Tagen gelöscht.
              </p>
            </section>

            <section id="kontakt">
              <h2>4. Kontaktaufnahme per E-Mail oder Telefon</h2>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben (Name, Kontaktdaten, Inhalt der
                Anfrage) zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen gespeichert.
                Rechtsgrundlage ist bei vorvertraglichen Anfragen Art. 6 Abs. 1 lit. b DSGVO, im Übrigen Art. 6 Abs. 1
                lit. f DSGVO.
              </p>
              <p>
                Wir geben diese Daten nicht ohne Ihre Einwilligung weiter. Die Löschung erfolgt nach Wegfall des
                Speicherzwecks oder nach Ablauf gesetzlicher Aufbewahrungsfristen.
              </p>
            </section>

            <section id="angebot">
              <h2>5. Angebotsformular</h2>
              <p>
                Über unser Angebotsformular können Sie eine kostenlose und unverbindliche Anfrage stellen. Das Formular
                versendet die eingegebenen Daten direkt aus Ihrem E-Mail-Programm an unsere Kontakt-Adresse. Es findet
                keine Speicherung auf unseren Servern statt.
              </p>
              <p>
                Verarbeitete Daten: Name, E-Mail, Telefon, Ort, Dienstleistungs-Anfrage, ggf. Firmenname und
                Erläuterung. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
              </p>
            </section>

            <section id="cookies">
              <h2>6. Cookies</h2>
              <p>
                Unsere Website verwendet ausschließlich technisch notwendige Cookies zur Speicherung Ihrer
                Cookie-Auswahl. Optionale Statistik- und Marketing-Cookies werden nur mit Ihrer Einwilligung gesetzt.
                Details und Einstellungsmöglichkeiten finden Sie auf unserer{" "}
                <Link href="/cookies" className="text-[color:var(--brand)] underline-offset-2 hover:underline">
                  Cookie-Seite
                </Link>
                .
              </p>
              <p>
                Rechtsgrundlage für technisch notwendige Cookies: Art. 6 Abs. 1 lit. f DSGVO. Für optionale Cookies:
                Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), die jederzeit widerrufen werden kann.
              </p>
            </section>

            <section id="externe-dienste">
              <h2>7. Externe Dienste und Verlinkungen</h2>
              <h3>Verlinkungen zu sozialen Netzwerken</h3>
              <p>
                Auf unserer Website befinden sich Verlinkungen zu Instagram und WhatsApp. Es handelt sich dabei um
                einfache Hyperlinks – es werden keine Daten an die Anbieter übertragen, solange Sie den Link nicht
                aktiv anklicken. Beim Klick gelangen Sie auf die jeweilige externe Plattform; dort gelten deren
                Datenschutzbestimmungen.
              </p>
              <h3>Hosting</h3>
              <p>
                Die Website wird bei einem Auftragsverarbeiter gehostet. Mit dem Hoster wurde ein
                Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO geschlossen.
              </p>
            </section>

            <section id="rechte">
              <h2>8. Ihre Rechte</h2>
              <p>Sie haben gegenüber uns als Verantwortlichem folgende Rechte:</p>
              <ul>
                <li>
                  <strong>Auskunftsrecht</strong> (Art. 15 DSGVO) – Sie können Auskunft über Ihre verarbeiteten Daten
                  verlangen.
                </li>
                <li>
                  <strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO) – Sie können die Korrektur unrichtiger Daten
                  verlangen.
                </li>
                <li>
                  <strong>Recht auf Löschung</strong> (Art. 17 DSGVO) – Sie können die Löschung Ihrer Daten verlangen,
                  sofern keine Aufbewahrungspflichten entgegenstehen.
                </li>
                <li>
                  <strong>Recht auf Einschränkung</strong> (Art. 18 DSGVO) – Sie können die Einschränkung der
                  Verarbeitung verlangen.
                </li>
                <li>
                  <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO) – Sie können der Verarbeitung aus Gründen Ihrer
                  besonderen Situation widersprechen.
                </li>
                <li>
                  <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO) – Sie können Ihre Daten in einem strukturierten,
                  gängigen Format erhalten.
                </li>
                <li>
                  <strong>Widerruf von Einwilligungen</strong> (Art. 7 Abs. 3 DSGVO) – Erteilte Einwilligungen können
                  jederzeit mit Wirkung für die Zukunft widerrufen werden.
                </li>
              </ul>
              <p>
                Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung per E-Mail an{" "}
                <a href={`mailto:${contact.email}`} className="text-[color:var(--brand)] underline-offset-2 hover:underline">
                  {contact.email}
                </a>
                .
              </p>
            </section>

            <section id="beschwerde">
              <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p>
                Unbeschadet anderer Rechtsbehelfe steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde
                zu. Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen,
                Kavalleriestraße 2–4, 40213 Düsseldorf.
              </p>
            </section>

            <section id="aenderungen">
              <h2>10. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
                Anforderungen entspricht oder Änderungen unserer Leistungen umgesetzt werden, z. B. bei Einführung
                neuer Services. Für den erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
              <p>
                Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long" })}
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  )
}
