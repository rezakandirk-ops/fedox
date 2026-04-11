"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

const nav = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Referenzen", href: "/#referenzen" },
  { label: "Kontakt", href: "/kontakt" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-xl">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center"
        >
          <Image
            src="/logo/fedox-logo.png"
            alt="fedox Facility Services"
            width={720}
            height={216}
            className="pointer-events-none h-48 w-auto drop-shadow-sm"
            priority
          />
        </Link>
        <div aria-hidden className="h-10 w-64 shrink-0" />

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[color:var(--brand-deep)] transition-colors hover:bg-[color:var(--brand-soft)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+4900000000000"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--brand-deep)] to-[color:var(--brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand)]/20 transition-all hover:shadow-xl hover:shadow-[color:var(--brand)]/30"
          >
            <Phone className="h-4 w-4" />
            Jetzt anrufen
          </a>
        </div>

        <button
          type="button"
          className="md:hidden rounded-full p-2 text-[color:var(--brand-deep)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-white/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-soft)]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+4900000000000"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--brand-deep)] to-[color:var(--brand)] px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Jetzt anrufen
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
