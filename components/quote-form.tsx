"use client"

import { useState } from "react"
import Image from "next/image"
import { Sparkles, ArrowRight } from "lucide-react"
import { contact } from "@/lib/contact"
import { services } from "@/lib/services"

const dienstleistungen = services.map((s) => s.title)

const turnusOptionen = [
  "Einmalig",
  "Wöchentlich",
  "Zweiwöchentlich",
  "Monatlich",
  "Nach Absprache",
]

const kundenart = ["Gewerblich", "Privat"]

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const lines = [
      `Dienstleistung: ${data.get("dienstleistung")}`,
      `Turnus: ${data.get("turnus")}`,
      `Reinigungsfläche (qm): ${data.get("flaeche")}`,
      `Ansprechpartner: ${data.get("name")}`,
      `E-Mail: ${data.get("email")}`,
      `Telefon: ${data.get("telefon")}`,
      `Ort: ${data.get("ort")}`,
      `Gewerblich/Privat: ${data.get("kundenart")}`,
      `Firmenname: ${data.get("firma")}`,
      ``,
      `Erläuterung:`,
      `${data.get("erlaeuterung") ?? ""}`,
    ]
    const subject = encodeURIComponent("Angebotsanfrage über fedox-facilityservices.de")
    const body = encodeURIComponent(lines.join("\n"))
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section
      id="angebot"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[color:var(--brand-soft)] py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[420px_1fr] lg:items-start">
        <aside className="flex flex-col gap-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/quote-lady.jpg"
              alt="Ihre Ansprechpartnerin bei fedox"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="rounded-3xl border border-[color:var(--brand-soft)] bg-white p-6 shadow-lg">
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--brand-deep)]">
              <Sparkles className="h-3.5 w-3.5" />
              Neukundenrabatt
            </span>
            <p className="mt-4 text-2xl font-bold text-[color:var(--brand-deep)]">
              15 % Rabatt für Neukunden
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Profitieren Sie von bis zu <strong>500 € Ersparnis</strong> auf
              alle Reinigungsleistungen — gültig für die erste Beauftragung.
            </p>
          </div>
        </aside>

        <div className="rounded-3xl border border-[color:var(--brand-soft)] bg-white p-8 shadow-xl sm:p-10">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
            Kostenlose & unverbindliche Angebotsanfrage
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sie erhalten innerhalb von 24 Stunden eine Antwort.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-[color:var(--brand-soft)] p-6 text-sm text-[color:var(--brand-deep)]">
              Vielen Dank! Ihre E-Mail-App sollte jetzt geöffnet sein. Falls
              nicht, schreiben Sie uns direkt an{" "}
              <a className="font-semibold underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              .
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Dienstleistung *" name="dienstleistung" type="select" options={dienstleistungen} required />
              <Field label="Turnus *" name="turnus" type="select" options={turnusOptionen} required />
              <Field label="Reinigungsfläche in qm *" name="flaeche" placeholder="ca. 250 qm" required />
              <Field label="Ansprechpartner *" name="name" placeholder="Max Mustermann" required />
              <Field label="E-Mail-Adresse *" name="email" type="email" placeholder="max@email.de" required />
              <Field label="Telefonnummer" name="telefon" type="tel" placeholder="0151 123 456" />
              <Field label="Ort *" name="ort" placeholder="Dortmund" required />
              <Field label="Gewerblich oder Privat *" name="kundenart" type="select" options={kundenart} required />
              <Field label="Firmenname" name="firma" placeholder="Musterfirma GmbH" className="sm:col-span-2" />
              <Field label="Erläuterung" name="erlaeuterung" type="textarea" className="sm:col-span-2" />

              <div className="sm:col-span-2 flex items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">* Pflichtfeld</p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--brand-deep)] to-[color:var(--brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand)]/20 transition-all hover:shadow-xl"
                >
                  Anfrage senden
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  name: string
  type?: "text" | "email" | "tel" | "select" | "textarea"
  placeholder?: string
  required?: boolean
  options?: string[]
  className?: string
}

function Field({ label, name, type = "text", placeholder, required, options, className }: FieldProps) {
  const base =
    "mt-1.5 w-full rounded-xl border border-[color:var(--brand-soft)] bg-white px-4 py-3 text-sm text-[color:var(--brand-deep)] outline-none transition-colors focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]/70">
        {label}
      </span>
      {type === "select" ? (
        <select name={name} required={required} defaultValue="" className={base}>
          <option value="" disabled>
            Bitte wählen…
          </option>
          {options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea name={name} required={required} rows={5} placeholder={placeholder} className={base} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={base} />
      )}
    </label>
  )
}
