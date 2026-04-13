// lib/services.ts
import {
  Sparkles,
  Square,
  ArrowUpDown,
  ShieldCheck,
  Building,
  Wrench,
  SunMedium,
  Building2,
  type LucideIcon,
} from "lucide-react"

export type Service = {
  slug: string
  title: string
  tagline: string
  shortDescription: string
  longDescription: string
  bullets: string[]
  image: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    slug: "unterhalts-buerorein",
    title: "Unterhalts- & Büroreinigung",
    tagline: "Täglich frische Arbeitsumgebung",
    shortDescription:
      "Regelmäßige Sauberkeit in Büro-, Verwaltungs- und Gewerbeflächen, abgestimmt auf Ihre Nutzung.",
    longDescription:
      "Saubere und gepflegte Arbeitsumgebungen sind die Grundlage für einen professionellen Auftritt und ein angenehmes Umfeld. Mit unserer Unterhalts- und Büroreinigung sorgen wir für regelmäßige Sauberkeit in Büro-, Verwaltungs- und Gewerbeflächen — individuell abgestimmt auf Ihre Anforderungen, Reinigungsintervalle und Nutzung Ihrer Räumlichkeiten.",
    bullets: [
      "Individuelle Reinigungsintervalle",
      "Abgestimmt auf Ihre Räumlichkeiten",
      "Geschulte und zuverlässige Teams",
      "Umweltfreundliche Reinigungsmittel",
    ],
    image: "/images/unterhalts-buero.jpg",
    icon: Sparkles,
  },
  {
    slug: "glas-rahmenreinigung",
    title: "Glas- & Rahmenreinigung",
    tagline: "Streifenfrei & zuverlässig",
    shortDescription:
      "Klare Sicht und ein gepflegtes Erscheinungsbild durch professionelle Glas- und Rahmenreinigung.",
    longDescription:
      "Professionelle Glas- und Rahmenreinigung für private und gewerbliche Objekte sorgt für klare Sicht und ein gepflegtes Erscheinungsbild. Schmutz, Staub und Ablagerungen werden gründlich und streifenfrei entfernt, während schonende Verfahren die Materialien schützen. Schnell, zuverlässig und effizient.",
    bullets: [
      "Fenster und Rahmen streifenfrei",
      "Innen- und Außenflächen",
      "Materialschonende Verfahren",
      "Privat und Gewerbe",
    ],
    image: "/images/glas-fassade.jpg",
    icon: Square,
  },
  {
    slug: "treppenhausreinigung",
    title: "Treppenhausreinigung",
    tagline: "Einladend ab der ersten Stufe",
    shortDescription:
      "Gepflegte, hygienische und einladende Eingangs- und Treppenbereiche.",
    longDescription:
      "Mit der professionellen Treppenhausreinigung sorgen wir für gepflegte, hygienische und einladende Eingangs- und Treppenbereiche. Ob Mehrfamilienhaus, Bürogebäude oder Gewerbeobjekt — wir reinigen zuverlässig Treppen, Geländer, Fensterbänke und alle stark frequentierten Flächen gründlich und termingerecht.",
    bullets: [
      "Treppen, Geländer, Fensterbänke",
      "Eingangsbereiche und Briefkastenanlagen",
      "Feste Intervalle und Termintreue",
      "Mehrfamilienhaus bis Gewerbeobjekt",
    ],
    image: "/images/treppenhaus.jpg",
    icon: ArrowUpDown,
  },
  {
    slug: "hygiene-desinfektion",
    title: "Hygiene & Desinfektionsreinigung",
    tagline: "Sauberkeit ist Vertrauenssache",
    shortDescription:
      "Hygienisch einwandfreie Räume für Büros, Praxen und sensible Bereiche.",
    longDescription:
      "Sauberkeit ist Vertrauenssache. Mit fedox Facility Service sorgen wir für hygienisch einwandfreie, gepflegte und sichere Räume — zuverlässig, gründlich und mit höchstem Qualitätsanspruch. Ob Büros, Praxen, Sanitäranlagen, Gemeinschaftsflächen oder stark genutzte Bereiche: Wir reinigen und desinfizieren sensible Flächen sorgfältig und schaffen ein Umfeld, in dem sich Mitarbeiter, Kunden und Besucher wohl und sicher fühlen.",
    bullets: [
      "Praxen, Sanitär- und Gemeinschaftsflächen",
      "Zertifizierte Desinfektionsmittel",
      "Höchste Hygienestandards",
      "Geschultes Fachpersonal",
    ],
    image: "/images/hygiene-desinfektion.jpg",
    icon: ShieldCheck,
  },
  {
    slug: "fassadenreinigung",
    title: "Fassadenreinigung",
    tagline: "Professionell & zuverlässig",
    shortDescription:
      "Saubere und gepflegte Optik für Häuser und Gewerbe — schonend und nachhaltig.",
    longDescription:
      "Professionelle Fassadenreinigung für Häuser und Gewerbe sorgt für eine saubere und gepflegte Optik. Schmutz, Algen und Moos werden effektiv entfernt, während schonende Verfahren die Oberfläche schützen und zum Werterhalt Ihrer Immobilie beitragen. Schnell, gründlich und zuverlässig.",
    bullets: [
      "Algen und Moos effektiv entfernen",
      "Materialschonende Verfahren",
      "Häuser und Gewerbeobjekte",
      "Beitrag zum Werterhalt",
    ],
    image: "/images/fassade.jpg",
    icon: Building,
  },
  {
    slug: "sonderreinigung",
    title: "Allgemeine Sonderreinigung",
    tagline: "Für alles, was nicht Standard ist",
    shortDescription:
      "Flexible und professionelle Sonderreinigungen, exakt abgestimmt auf Ihre Anforderungen.",
    longDescription:
      "Nicht jede Reinigung lässt sich in Standards einordnen. Für besondere Anforderungen, spezielle Einsatzbereiche oder individuelle Reinigungsbedarfe bieten wir flexible und professionelle Sonderreinigungen, die exakt auf Ihre Gegebenheiten abgestimmt sind — gründlich, effizient und lösungsorientiert.",
    bullets: [
      "Individuelle Lösungen",
      "Spezialeinsätze jeder Art",
      "Gründlich und lösungsorientiert",
      "Auf Wunsch kurzfristig verfügbar",
    ],
    image: "/images/sonder-reinigung.jpg",
    icon: Wrench,
  },
  {
    slug: "photovoltaikreinigung",
    title: "Photovoltaikanlagenreinigung",
    tagline: "Mehr Ertrag durch Sauberkeit",
    shortDescription:
      "Fachgerechte, schonende Reinigung für volle Leistungsfähigkeit Ihrer Anlagen.",
    longDescription:
      "Verschmutzte Photovoltaikanlagen können die Leistungsfähigkeit und Effizienz beeinträchtigen. Durch eine fachgerechte und schonende Reinigung unterstützen wir den langfristigen Werterhalt und tragen dazu bei, dass Ihre Anlagen dauerhaft in einem gepflegten und funktionsfähigen Zustand bleiben.",
    bullets: [
      "Materialschonende Reinigung",
      "Erhalt von Effizienz und Leistung",
      "Regelmäßige Wartungszyklen möglich",
      "Ausgebildete Höhenarbeiter",
    ],
    image: "/images/photovoltaik.jpg",
    icon: SunMedium,
  },
  {
    slug: "gebaeudemanagement",
    title: "Gebäudemanagement",
    tagline: "Werterhalt mit System",
    shortDescription:
      "Zuverlässige Betreuung, strukturierte Abläufe und ein geschulter Blick für den Gesamtzustand Ihrer Objekte.",
    longDescription:
      "Ein professionelles Gebäudemanagement trägt maßgeblich zum Werterhalt und zur langfristigen Pflege einer Immobilie bei. Wir unterstützen Sie mit zuverlässiger Betreuung, strukturierten Abläufen und einem geschulten Blick für den Gesamtzustand Ihrer Objekte. Dazu zählen Grünflächen, Winterdienst, Entrümpelung, kleinere Reparaturen und Renovierungsarbeiten im Rahmen der laufenden Objektbetreuung.",
    bullets: [
      "Grünpflege und Winterdienst",
      "Entrümpelung und Räumung",
      "Kleinere Reparaturen und Renovierungen",
      "Strukturierte Abläufe, feste Ansprechpartner",
    ],
    image: "/images/gebaeudemanagement.jpg",
    icon: Building2,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
