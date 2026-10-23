// lib/city-pages.ts
// Staedteseiten "Gebaeudereinigung <Stadt>" fuer /gebaeudereinigung-<stadt>.
// Inhalte liegen je Stadt als JSON unter content/staedte/, jede Ortsangabe mit Quelle.
import fs from "node:fs"
import path from "node:path"

export type CityParagraphBlock = { h3: string; absaetze: string[] }
export type CitySection = {
  id: string
  h2: string
  absaetze: string[]
  unterabschnitte?: CityParagraphBlock[]
}
export type CityServiceEntry = { slug: string; text: string }
export type CityFaq = { frage: string; antwort: string }
export type CitySource = { text: string; quelle: string; url?: string }
export type CityImage = { datei: string; alt: string; motiv: string }

export type CityPage = {
  slug: string
  stadt: string
  // nur bei Suchbegriff-Seiten wie "Büroreinigung Bochum"
  keyword?: string
  leistung?: string
  leistungSlug?: string
  // zwei eigene Motive je Seite, Dateien unter public/images/staedte/
  bilder?: CityImage[]
  seoTitle: string
  seoDescription: string
  h1: string
  heroKicker: string
  intro: string
  abschnitte: CitySection[]
  stadtteile: string[]
  leistungen: { h2: string; lead: string; eintraege: CityServiceEntry[] }
  anfahrt: { h2: string; absaetze: string[]; km: number; minuten: number }
  faq: CityFaq[]
  quellen: { stand: string; eintraege: CitySource[] }
}

// Reihenfolge wie in der Fusszeile der Website
export const citySlugs = [
  "gebaeudereinigung-dortmund",
  "gebaeudereinigung-recklinghausen",
  "gebaeudereinigung-dorsten",
  "gebaeudereinigung-luedinghausen",
  "gebaeudereinigung-waltrop",
  "gebaeudereinigung-castrop-rauxel",
  "gebaeudereinigung-herne",
  "gebaeudereinigung-bochum",
  "gebaeudereinigung-witten",
  "gebaeudereinigung-luenen",
  "gebaeudereinigung-schwerte",
  "gebaeudereinigung-unna",
] as const

// Suchbegriff-Seiten (Leistung + Stadt), Auftrag vom 20.10.2026
export const keywordSlugs = [
  "bueroreinigung-dortmund",
  "bueroreinigung-bochum",
  "bueroreinigung-luenen",
  "bueroreinigung-witten",
  "treppenhausreinigung-luedinghausen",
  "treppenhausreinigung-waltrop",
  "entruempelung-dortmund",
] as const

const allSlugs: readonly string[] = [...citySlugs, ...keywordSlugs]

const CONTENT_DIR = path.join(process.cwd(), "content", "staedte")

export function getCityPage(slug: string): CityPage | undefined {
  if (!allSlugs.includes(slug)) return undefined
  const file = path.join(CONTENT_DIR, `${slug}.json`)
  if (!fs.existsSync(file)) return undefined
  return JSON.parse(fs.readFileSync(file, "utf8")) as CityPage
}

export function getAllCityPages(): CityPage[] {
  return citySlugs.map((s) => getCityPage(s)).filter((p): p is CityPage => Boolean(p))
}

export function getAllKeywordPages(): CityPage[] {
  return keywordSlugs.map((s) => getCityPage(s)).filter((p): p is CityPage => Boolean(p))
}

export function getAllPageSlugs(): string[] {
  return allSlugs.filter((s) => getCityPage(s))
}

// Suchbegriff, auf den die Seite zielt
export function pageKeyword(p: CityPage): string {
  return p.keyword ?? `Gebäudereinigung ${p.stadt}`
}

export function citySlugFor(stadt: string): string | undefined {
  return getAllCityPages().find((p) => p.stadt === stadt)?.slug
}
