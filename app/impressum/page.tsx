import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Home, Mail, Phone, Smartphone, MapPin, User, Building2, Hash } from "lucide-react"

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und gesetzliche Anbieterkennzeichnung der Fedox Facility Services aus Dortmund nach § 5 TMG.",
  alternates: { canonical: "https://fedox-facilityservices.de/impressum" },
  robots: { index: true, follow: true },
}

const owner = {
  company: "Fedox Facility Services",
  name: "Mohamed Lamghizarti",
  street: "Güntherstraße 42",
  zip: "44143",
  city: "Dortmund",
  country: "Deutschland",
  email: "kontakt.fedox@outlook.de",
  phone: "0231 53035483",
  phoneTel: "+492315303548",
  mobile: "0163 8672944",
  mobileTel: "+491638672944",
  ustId: "DE335528211",
  taxNumber: "317/5020/7062",
}

export default function ImpressumPage() {
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
            <span className="font-medium text-[color:var(--brand-deep)]">Impressum</span>
          </nav>

          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-5xl">
            Impressum
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Anbieterkennzeichnung gemäß § 5 TMG
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          {/* Anbieter-Karte */}
          <div className="rounded-3xl border border-[color:var(--brand-soft)] bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand)]">
              Diensteanbieter
            </h2>
            <p className="mt-3 text-2xl font-bold text-[color:var(--brand-deep)]">
              {owner.company}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Inhaber: {owner.name}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <InfoRow icon={MapPin} label="Anschrift">
                {owner.street}
                <br />
                {owner.zip} {owner.city}
                <br />
                {owner.country}
              </InfoRow>

              <InfoRow icon={User} label="Vertretungsberechtigt">
                {owner.name}
              </InfoRow>

              <InfoRow icon={Phone} label="Telefon">
                <a href={`tel:${owner.phoneTel}`} className="hover:text-[color:var(--brand)]">
                  {owner.phone}
                </a>
              </InfoRow>

              <InfoRow icon={Smartphone} label="Mobil">
                <a href={`tel:${owner.mobileTel}`} className="hover:text-[color:var(--brand)]">
                  {owner.mobile}
                </a>
              </InfoRow>

              <InfoRow icon={Mail} label="E-Mail" className="sm:col-span-2">
                <a href={`mailto:${owner.email}`} className="hover:text-[color:var(--brand)]">
                  {owner.email}
                </a>
              </InfoRow>
            </div>
          </div>

          {/* Steuer-Karte */}
          <div className="mt-6 rounded-3xl border border-[color:var(--brand-soft)] bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand)]">
              Steuerliche Angaben
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <InfoRow icon={Hash} label="Umsatzsteuer-ID">
                <span className="font-mono">{owner.ustId}</span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  gemäß § 27 a UStG
                </span>
              </InfoRow>

              <InfoRow icon={Building2} label="Steuernummer">
                <span className="font-mono">{owner.taxNumber}</span>
              </InfoRow>
            </div>
          </div>

          {/* Verantwortlicher */}
          <div className="mt-6 rounded-3xl border border-[color:var(--brand-soft)] bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand)]">
              Inhaltlich verantwortlich
            </h2>
            <p className="mt-3 text-base text-[color:var(--brand-deep)]">
              {owner.name}
              <br />
              <span className="text-sm text-muted-foreground">
                {owner.street}, {owner.zip} {owner.city}
              </span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV.
            </p>
          </div>

          {/* Streitschlichtung */}
          <div className="mt-12 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h3 className="mb-2 text-base font-semibold text-[color:var(--brand-deep)]">
                EU-Streitschlichtung
              </h3>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--brand)] underline-offset-2 hover:underline"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-[color:var(--brand-deep)]">
                Verbraucherstreitbeilegung
              </h3>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-[color:var(--brand-deep)]">
                Haftung für Inhalte
              </h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
                Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
                eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-[color:var(--brand-deep)]">
                Haftung für Links
              </h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-[color:var(--brand-deep)]">
                Urheberrecht
              </h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
                des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function InfoRow({
  icon: Icon,
  label,
  children,
  className = "",
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex gap-3 ${className}`}>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]/60">
          {label}
        </p>
        <div className="mt-1 text-sm leading-relaxed text-[color:var(--brand-deep)]">
          {children}
        </div>
      </div>
    </div>
  )
}
