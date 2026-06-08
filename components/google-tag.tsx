"use client"

import Script from "next/script"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const GTAG_ID = "AW-18194336713"
const PHONE_LABEL = "4N35CIz__rkcEMmX3uND"
const WHATSAPP_LABEL = "sBokCI___rkcEMmX3uND"
const PAGEVIEW_LABEL = "ON-xCJOwj7UcEMmX3uND"

const CONSENT_KEY = "fedox-cookie-consent"
const CONSENT_EVENT = "fedox-consent-change"

type GtagFn = (...args: unknown[]) => void

declare global {
  interface Window {
    gtag?: GtagFn
    dataLayer?: unknown[]
  }
}

function hasMarketingConsent(): boolean {
  if (typeof window === "undefined") return false
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return false
    const parsed = JSON.parse(raw) as { v?: number; marketing?: boolean }
    return parsed?.v === 1 && parsed?.marketing === true
  } catch {
    return false
  }
}

export function GoogleTag() {
  const [allowed, setAllowed] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setAllowed(hasMarketingConsent())
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ marketing?: boolean } | null>).detail
      setAllowed(Boolean(detail?.marketing))
    }
    window.addEventListener(CONSENT_EVENT, handler)
    return () => window.removeEventListener(CONSENT_EVENT, handler)
  }, [])

  useEffect(() => {
    if (!allowed) return
    if (typeof window === "undefined" || !window.gtag) return
    window.gtag("event", "conversion", {
      send_to: `${GTAG_ID}/${PAGEVIEW_LABEL}`,
      value: 1.0,
      currency: "EUR",
    })
  }, [allowed, pathname])

  useEffect(() => {
    if (!allowed) return
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const link = target?.closest('a[href^="tel:"]')
      if (!link) return
      if (typeof window === "undefined" || !window.gtag) return
      window.gtag("event", "conversion", {
        send_to: `${GTAG_ID}/${PHONE_LABEL}`,
      })
    }
    document.addEventListener("click", handler)
    return () => document.removeEventListener("click", handler)
  }, [allowed])

  if (!allowed) return null

  return (
    <>
      <Script
        id="gtag-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GTAG_ID}');
        `}
      </Script>
    </>
  )
}

export function trackWhatsAppClick() {
  if (typeof window === "undefined" || !window.gtag) return
  if (!hasMarketingConsent()) return
  window.gtag("event", "conversion", {
    send_to: `${GTAG_ID}/${WHATSAPP_LABEL}`,
  })
}
