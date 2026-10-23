import type { MetadataRoute } from "next"
import { services } from "@/lib/services"
import { getAllCityPages, getAllKeywordPages } from "@/lib/city-pages"

const BASE_URL = "https://www.fedox-facilityservices.de"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ]
  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/leistungen/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))
  const cityUrls: MetadataRoute.Sitemap = [...getAllCityPages(), ...getAllKeywordPages()].map((p) => ({
    url: `${BASE_URL}/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))
  return [...staticUrls, ...serviceUrls, ...cityUrls]
}
