"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

const GTAG_ID = "AW-18194336713"
const PHONE_LABEL = "f-wPCJG51LscEMmX3uND"
const WHATSAPP_LABEL = "sBokCI___rkcEMmX3uND"

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

  useEffect(() => {
    if (!allowed) return
    const handler = (e: MouseEvent) => {
      if (e.defaultPrevented) return
      if (e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const target = e.target as HTMLElement | null
      const link = target?.closest('a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href*="web.whatsapp.com"]') as HTMLAnchorElement | null
      if (!link) return
      if (typeof window === "undefined" || !window.gtag) return

      e.preventDefault()
      const href = link.href
      const openInNewTab = link.target === "_blank"
      let done = false
      const navigate = () => {
        if (done) return
        done = true
        if (openInNewTab) {
          window.open(href, "_blank", "noopener,noreferrer")
        } else {
          window.location.href = href
        }
      }

      window.gtag("event", "conversion", {
        send_to: `${GTAG_ID}/${WHATSAPP_LABEL}`,
        event_callback: navigate,
      })
      window.setTimeout(navigate, 800)
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
