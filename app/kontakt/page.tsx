import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { ShaderBackground } from "@/components/ui/hero-shader"
import { WaveDivider } from "@/components/wave-divider"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { services } from "@/lib/services"

export const metadata = {
  title: "Kontakt | fedox Facility Services",
  description:
    "Kontaktieren Sie fedox Facility Services für ein unverbindliches Angebot. Wir melden uns innerhalb von 24 Stunden.",
}

export default function KontaktPage() {
  return (
    <>
      <section className="relative">
        <ShaderBackground className="min-h-[420px]">
          <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col justify-center px-6 pt-20 pb-28">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              Kontakt
            </span>
            <h1 className="mt-5 max-w-3xl text-balance text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Sprechen wir über Ihr Objekt
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">
              Senden Sie uns Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden
              mit einem individuellen Angebot zurück.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10">
            <WaveDivider color="#ffffff" />
          </div>
        </ShaderBackground>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-[color:var(--brand-soft)] bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-2xl font-bold text-[color:var(--brand-deep)]">
                Anfrageformular
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Alle Felder mit * sind Pflichtfelder.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" placeholder="Max Mustermann" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Firma</Label>
                    <Input id="company" name="company" placeholder="Mustermann GmbH" />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="max@beispiel.de"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+49 …" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Gewünschte Leistung</Label>
                  <select
                    id="service"
                    name="service"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    defaultValue=""
                  >
                    <option value="">Bitte wählen</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Beschreiben Sie uns kurz Ihr Anliegen …"
                    rows={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--brand-deep)] to-[color:var(--brand)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand)]/20 transition-all hover:shadow-xl"
                >
                  Anfrage senden
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-[color:var(--brand-deep)] to-[color:var(--brand)] p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold">Direkter Draht</h3>
                <p className="mt-2 text-sm text-white/80">
                  Lieber persönlich? Rufen Sie uns jederzeit an.
                </p>

                <div className="mt-8 space-y-5">
                  <a
                    href="tel:+4900000000000"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md transition-colors group-hover:bg-white/25">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60">
                        Telefon
                      </p>
                      <p className="text-sm font-semibold">+49 000 0000000</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@fedox.de"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md transition-colors group-hover:bg-white/25">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60">
                        E-Mail
                      </p>
                      <p className="text-sm font-semibold">info@fedox.de</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60">
                        Adresse
                      </p>
                      <p className="text-sm font-semibold">
                        Musterstraße 1
                        <br />
                        12345 Musterstadt
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60">
                        Erreichbarkeit
                      </p>
                      <p className="text-sm font-semibold">Mo bis Fr, 8 bis 18 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[color:var(--brand-soft)] bg-[color:var(--brand-soft)]/40 p-6">
                <p className="text-sm leading-relaxed text-[color:var(--brand-deep)]">
                  <strong>Hinweis:</strong> Dies ist ein Entwurf. Die finalen
                  Kontaktdaten werden mit dem Kunden abgestimmt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
