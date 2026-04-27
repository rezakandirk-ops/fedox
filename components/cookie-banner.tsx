"use client"

import Link from "next/link"
import { useEffect, useState, useCallback } from "react"
import { Cookie, Settings, X, Check } from "lucide-react"

type Consent = {
  essential: true
  analytics: boolean
  marketing: boolean
  ts: string
  v: number
}

const STORAGE_KEY = "fedox-cookie-consent"
const VERSION = 1
const EVENT = "fedox-consent-change"

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Consent
    if (parsed.v !== VERSION) return null
    return parsed
  } catch {
    return null
  }
}

function writeConsent(partial: { analytics: boolean; marketing: boolean }) {
  const consent: Consent = {
    essential: true,
    analytics: partial.analytics,
    marketing: partial.marketing,
    ts: new Date().toISOString(),
    v: VERSION,
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
  window.dispatchEvent(new CustomEvent(EVENT, { detail: consent }))
}

function useConsent() {
  const [consent, setConsent] = useState<Consent | null>(null)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setConsent(readConsent())
    setHydrated(true)
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<Consent>).detail
      setConsent(detail)
    }
    window.addEventListener(EVENT, handler)
    return () => window.removeEventListener(EVENT, handler)
  }, [])

  const save = useCallback((partial: { analytics: boolean; marketing: boolean }) => {
    writeConsent(partial)
  }, [])

  const reopen = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setConsent(null)
    window.dispatchEvent(new CustomEvent(EVENT, { detail: null }))
  }, [])

  return { consent, hydrated, save, reopen }
}

export function CookieBanner() {
  const { consent, hydrated, save } = useConsent()
  const [expanded, setExpanded] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  if (!hydrated || consent) return null

  const acceptAll = () => save({ analytics: true, marketing: true })
  const rejectAll = () => save({ analytics: false, marketing: false })
  const saveSelected = () => save({ analytics, marketing })

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-3xl border border-[color:var(--brand-soft)] bg-white p-6 shadow-2xl shadow-[color:var(--brand-deep)]/20 ring-1 ring-black/5 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
            <Cookie className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-bold text-[color:var(--brand-deep)] sm:text-lg">
              Wir verwenden Cookies
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Essenzielle Cookies sind für den Betrieb der Seite notwendig. Optional helfen
              uns Statistik- und Marketing-Cookies, unsere Inhalte zu verbessern. Mehr in
              der{" "}
              <Link
                href="/datenschutz"
                className="font-medium text-[color:var(--brand)] underline-offset-2 hover:underline"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>

            {expanded && (
              <ul className="mt-5 space-y-3 rounded-2xl bg-[color:var(--brand-soft)]/40 p-4">
                <ConsentToggle
                  label="Essenziell"
                  description="Erforderlich für den Betrieb (z. B. Cookie-Auswahl)."
                  checked
                  disabled
                />
                <ConsentToggle
                  label="Statistik"
                  description="Anonymisierte Nutzungsstatistiken zur Verbesserung der Seite."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <ConsentToggle
                  label="Marketing"
                  description="Personalisierte Inhalte und externe Einbettungen."
                  checked={marketing}
                  onChange={setMarketing}
                />
              </ul>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          {!expanded && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--brand-soft)] bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-deep)] transition-colors hover:bg-[color:var(--brand-soft)]"
            >
              <Settings className="h-4 w-4" />
              Anpassen
            </button>
          )}
          <button
            type="button"
            onClick={rejectAll}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-deep)] transition-colors hover:bg-white hover:shadow-sm"
          >
            <X className="h-4 w-4" />
            Nur essenzielle
          </button>
          {expanded && (
            <button
              type="button"
              onClick={saveSelected}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--brand)]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--brand)] transition-colors hover:bg-[color:var(--brand-soft)]"
            >
              <Check className="h-4 w-4" />
              Auswahl speichern
            </button>
          )}
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[color:var(--brand)]/20 transition-all hover:bg-[color:var(--brand-deep)] hover:shadow-lg"
          >
            <Check className="h-4 w-4" />
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}

function ConsentToggle({
  label,
  description,
  checked,
  onChange,
  disabled,
}: {
  label: string
  description: string
  checked: boolean
  onChange?: (v: boolean) => void
  disabled?: boolean
}) {
  return (
    <li className="flex items-start gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative mt-0.5 inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
          checked ? "bg-[color:var(--brand)]" : "bg-[color:var(--brand-deep)]/15"
        } ${disabled ? "opacity-60" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[color:var(--brand-deep)]">
          {label}
          {disabled && (
            <span className="ml-2 text-xs font-medium text-muted-foreground">(immer aktiv)</span>
          )}
        </p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </li>
  )
}

export function CookieControls() {
  const { consent, hydrated, save, reopen } = useConsent()
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [savedFlash, setSavedFlash] = useState(false)

  useEffect(() => {
    if (consent) {
      setAnalytics(consent.analytics)
      setMarketing(consent.marketing)
    }
  }, [consent])

  if (!hydrated) {
    return (
      <div className="rounded-3xl border border-[color:var(--brand-soft)] bg-white p-6 text-sm text-muted-foreground">
        Cookie-Einstellungen werden geladen…
      </div>
    )
  }

  const onSave = () => {
    save({ analytics, marketing })
    setSavedFlash(true)
    setTimeout(() => setSavedFlash(false), 2000)
  }

  return (
    <div className="rounded-3xl border border-[color:var(--brand-soft)] bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
          <Cookie className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-[color:var(--brand-deep)]">
            Ihre Cookie-Einstellungen
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {consent
              ? `Stand: ${new Date(consent.ts).toLocaleString("de-DE", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}`
              : "Sie haben noch keine Einstellung gespeichert."}
          </p>
        </div>
      </div>

      <ul className="mt-6 space-y-4">
        <ConsentToggle
          label="Essenziell"
          description="Notwendig für den Betrieb der Seite (z. B. Speicherung dieser Einstellung)."
          checked
          disabled
        />
        <ConsentToggle
          label="Statistik"
          description="Anonymisierte Nutzungsdaten zur Verbesserung der Seite."
          checked={analytics}
          onChange={setAnalytics}
        />
        <ConsentToggle
          label="Marketing"
          description="Personalisierte Inhalte und externe Einbettungen."
          checked={marketing}
          onChange={setMarketing}
        />
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onSave}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[color:var(--brand-deep)] hover:shadow-lg"
        >
          <Check className="h-4 w-4" />
          Speichern
        </button>
        <button
          type="button"
          onClick={reopen}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--brand-soft)] bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-deep)] transition-colors hover:bg-[color:var(--brand-soft)]"
        >
          Einwilligung widerrufen
        </button>
        {savedFlash && (
          <span className="text-sm font-medium text-[color:var(--brand)]">Gespeichert ✓</span>
        )}
      </div>
    </div>
  )
}
