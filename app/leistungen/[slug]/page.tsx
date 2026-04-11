import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowLeft, CheckCircle2, Phone } from "lucide-react"
import { services, getServiceBySlug } from "@/lib/services"
import { ShaderBackground } from "@/components/ui/hero-shader"
import { WaveDivider } from "@/components/wave-divider"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: `${service.title} | fedox Facility Services`,
    description: service.shortDescription,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const Icon = service.icon
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <ShaderBackground className="min-h-[520px]">
          <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center px-6 pt-20 pb-28">
            <Link
              href="/#leistungen"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Alle Leistungen
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[color:var(--brand-drop)] backdrop-blur-md">
                {service.tagline}
              </span>
            </div>

            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              {service.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[color:var(--brand-deep)] shadow-xl transition-all hover:shadow-2xl"
              >
                Angebot anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+4900000000000"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                Jetzt anrufen
              </a>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10">
            <WaveDivider color="#ffffff" />
          </div>
        </ShaderBackground>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
              Das bieten wir
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
              Professionell, zuverlässig und auf Ihr Objekt abgestimmt
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {service.longDescription}
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 rounded-2xl border border-[color:var(--brand-soft)] bg-[color:var(--brand-soft)]/40 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--brand)]" />
                  <span className="text-sm font-medium text-[color:var(--brand-deep)]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 768px) 500px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROZESS */}
      <section className="bg-[color:var(--brand-soft)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
              So arbeiten wir
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
              In 4 Schritten zu sauberen Ergebnissen
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Anfrage", text: "Sie kontaktieren uns telefonisch oder per Formular." },
              { step: "02", title: "Besichtigung", text: "Wir besichtigen das Objekt und beraten Sie vor Ort." },
              { step: "03", title: "Angebot", text: "Sie erhalten ein transparentes, individuelles Angebot." },
              { step: "04", title: "Ausführung", text: "Unser Team übernimmt, termintreu und zuverlässig." },
            ].map(({ step, title, text }) => (
              <div
                key={step}
                className="rounded-3xl border border-white/60 bg-white p-6 shadow-sm"
              >
                <div className="text-4xl font-bold text-[color:var(--brand-drop)]/40">
                  {step}
                </div>
                <h3 className="mt-3 text-lg font-bold text-[color:var(--brand-deep)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEITERE LEISTUNGEN */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
                Weitere Leistungen
              </span>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
                Das könnte Sie auch interessieren
              </h2>
            </div>
            <Link
              href="/#leistungen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)]"
            >
              Alle Leistungen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {otherServices.map((s) => {
              const SIcon = s.icon
              return (
                <Link
                  key={s.slug}
                  href={`/leistungen/${s.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--brand-soft)] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 768px) 400px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-deep)]/80 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 shadow-lg">
                      <SIcon className="h-5 w-5 text-[color:var(--brand)]" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[color:var(--brand-deep)]">
                      {s.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {s.shortDescription}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
