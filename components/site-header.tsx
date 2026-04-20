"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { Menu, X, Phone, FileText, ChevronDown } from "lucide-react"
import { contact } from "@/lib/contact"
import { services, topLevelServices, getSubServices } from "@/lib/services"

const navBase = [
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Referenzen", href: "/#referenzen" },
  { label: "Angebot", href: "/#angebot" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

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
          {/* LEISTUNGEN MEGA-DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-[color:var(--brand-deep)] transition-colors hover:bg-[color:var(--brand-soft)]"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
            >
              Leistungen
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full z-50 mt-3 w-[720px] -translate-x-1/2 rounded-3xl border border-[color:var(--brand-soft)] bg-white/95 p-5 shadow-2xl shadow-[color:var(--brand)]/10 backdrop-blur-xl"
              >
                <div className="mb-4 flex items-center justify-between border-b border-[color:var(--brand-soft)] pb-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
                    Unsere Leistungen in Dortmund
                  </p>
                  <Link
                    href="/#leistungen"
                    className="text-xs font-medium text-[color:var(--brand)] hover:underline"
                    onClick={() => setServicesOpen(false)}
                  >
                    Alle ansehen →
                  </Link>
                </div>
                <ul className="grid grid-cols-2 gap-1">
                  {topLevelServices.map((s) => {
                    const Icon = s.icon
                    const subs = s.slug === "gebaeudemanagement" ? getSubServices(s.slug) : []
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/leistungen/${s.slug}`}
                          onClick={() => setServicesOpen(false)}
                          role="menuitem"
                          className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[color:var(--brand-soft)]"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[color:var(--brand-soft)] text-[color:var(--brand)] transition-colors group-hover:bg-white">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold leading-tight text-[color:var(--brand-deep)]">
                              {s.title}
                            </p>
                            <p className="mt-0.5 truncate text-xs text-muted-foreground">
                              {s.tagline}
                            </p>
                          </div>
                        </Link>
                        {subs.length > 0 && (
                          <ul className="mt-1 ml-12 flex flex-col gap-0.5 border-l border-[color:var(--brand-soft)] pl-3">
                            {subs.map((sub) => {
                              const SubIcon = sub.icon
                              return (
                                <li key={sub.slug}>
                                  <Link
                                    href={`/leistungen/${sub.slug}`}
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium text-[color:var(--brand-deep)]/80 transition-colors hover:bg-[color:var(--brand-soft)] hover:text-[color:var(--brand-deep)]"
                                  >
                                    <SubIcon className="h-3.5 w-3.5 text-[color:var(--brand)]" />
                                    {sub.title}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>

          {navBase.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[color:var(--brand-deep)] transition-colors hover:bg-[color:var(--brand-soft)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${contact.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-deep)] transition-all hover:bg-white hover:shadow-sm"
          >
            <Phone className="h-4 w-4 text-[color:var(--brand)]" />
            Anrufen
          </a>
          <Link
            href="/#angebot"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[color:var(--brand)]/20 transition-all hover:bg-[color:var(--brand-deep)] hover:shadow-lg"
          >
            <FileText className="h-4 w-4" />
            Angebot
          </Link>
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
            {/* MOBILE LEISTUNGEN */}
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-soft)]"
              aria-expanded={mobileServicesOpen}
            >
              <span>Leistungen</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <ul className="mb-2 ml-2 flex flex-col gap-1 border-l-2 border-[color:var(--brand-soft)] pl-3">
                {services.map((s) => {
                  const Icon = s.icon
                  return (
                    <li key={s.slug}>
                      <Link
                        href={`/leistungen/${s.slug}`}
                        onClick={() => {
                          setOpen(false)
                          setMobileServicesOpen(false)
                        }}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-soft)]"
                      >
                        <Icon className="h-4 w-4 text-[color:var(--brand)]" />
                        {s.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}

            {navBase.map((item) => (
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
              href={`tel:${contact.phoneTel}`}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--brand-deep)]/20 bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-deep)]"
            >
              <Phone className="h-4 w-4" />
              Anrufen
            </a>
            <Link
              href="/#angebot"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--brand-deep)] to-[color:var(--brand)] px-5 py-3 text-sm font-semibold text-white"
            >
              <FileText className="h-4 w-4" />
              Angebot
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
