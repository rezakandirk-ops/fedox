import {
  Building2,
  Sparkles,
  Construction,
  SunMedium,
  Wrench,
  Factory,
  ArrowUpDown,
  ShieldCheck,
  HardHat,
  Droplets,
  Leaf,
  Snowflake,
  Trash2,
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
    slug: "gebaeudemanagement",
    title: "Gebäudemanagement",
    tagline: "Werterhalt mit System",
    shortDescription:
      "Zuverlässige Betreuung, strukturierte Abläufe und ein geschulter Blick für den Gesamtzustand Ihrer Objekte.",
    longDescription:
      "Ein professionelles Gebäudemanagement trägt maßgeblich zum Werterhalt und zur langfristigen Pflege einer Immobilie bei. Wir unterstützen Sie mit zuverlässiger Betreuung, strukturierten Abläufen und einem geschulten Blick für den Gesamtzustand Ihrer Objekte.",
    bullets: [
      "Grünpflege und Winterdienst aus einer Hand",
      "Kleinere Reparaturen im Rahmen der Objektbetreuung",
      "Renovierungsarbeiten nach Absprache",
      "Strukturierte Abläufe und feste Ansprechpartner",
    ],
    image: "/images/gebaeudemanagement.jpg",
    icon: Building2,
  },
  {
    slug: "unterhalts-buerorein",
    title: "Unterhalts- & Büroreinigung",
    tagline: "Täglich frische Arbeitsumgebung",
    shortDescription:
      "Regelmäßige Sauberkeit in Büro-, Verwaltungs- und Gewerbeflächen, abgestimmt auf Ihre Nutzung.",
    longDescription:
      "Saubere und gepflegte Arbeitsumgebungen sind die Grundlage für einen professionellen Auftritt und ein angenehmes Umfeld. Mit unserer Unterhalts- und Büroreinigung sorgen wir für regelmäßige Sauberkeit in Büro-, Verwaltungs- und Gewerbeflächen, individuell abgestimmt auf Ihre Anforderungen, Reinigungsintervalle und Nutzung Ihrer Räumlichkeiten.",
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
    slug: "glas-fassadenreinigung",
    title: "Glas- & Fassadenreinigung",
    tagline: "Klare Sicht, starker Eindruck",
    shortDescription:
      "Professionelle Reinigung von Fenstern, Eingangsbereichen und großflächigen Fassaden.",
    longDescription:
      "Saubere Glasflächen und gepflegte Fassaden prägen den ersten Eindruck eines Gebäudes. Mit unserer professionellen Glas- und Fassadenreinigung sorgen wir für klare Sicht, ein repräsentatives Erscheinungsbild und eine nachhaltige Pflege Ihrer Immobilie.",
    bullets: [
      "Fenster- und Eingangsbereiche",
      "Großflächige Glas- und Fassadenelemente",
      "Schonende Reinigungsverfahren",
      "Fachgerechte Höhenarbeiten",
    ],
    image: "/images/glas-fassade.jpg",
    icon: ArrowUpDown,
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
      "Erhalt der Effizienz und Leistung",
      "Regelmäßige Wartungszyklen möglich",
      "Ausgebildete Höhenarbeiter",
    ],
    image: "/images/photovoltaik.jpg",
    icon: SunMedium,
  },
  {
    slug: "sonderreinigung",
    title: "Allgemeine Sonderreinigung",
    tagline: "Für alles, was nicht Standard ist",
    shortDescription:
      "Flexible und professionelle Sonderreinigungen, exakt abgestimmt auf Ihre Anforderungen.",
    longDescription:
      "Nicht jede Reinigung lässt sich in Standards einordnen. Für besondere Anforderungen, spezielle Einsatzbereiche oder individuelle Reinigungsbedarfe bieten wir flexible und professionelle Sonderreinigungen, die exakt auf Ihre Gegebenheiten abgestimmt sind. Gründlich, effizient und lösungsorientiert.",
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
    slug: "industriereinigung",
    title: "Industriereinigung",
    tagline: "Sauber trotz hoher Beanspruchung",
    shortDescription:
      "Fachgerechte Reinigungslösungen für Betriebs- und Produktionsflächen.",
    longDescription:
      "In Industrie- und Produktionsbereichen sind Sauberkeit, Struktur und Funktionalität von besonderer Bedeutung. Mit unserer Industriereinigung sorgen wir für fachgerechte Reinigungslösungen, die auf die Anforderungen von Betriebs- und Produktionsflächen abgestimmt sind.",
    bullets: [
      "Hallenböden und Industrieflächen",
      "Decken und Leuchten",
      "Stark beanspruchte Bereiche",
      "Abgestimmt auf Betriebsabläufe",
    ],
    image: "/images/industrie.jpg",
    icon: Factory,
  },
  {
    slug: "treppenhausreinigung",
    title: "Treppenhausreinigung",
    tagline: "Einladend ab der ersten Stufe",
    shortDescription:
      "Gepflegte, hygienische Eingangs- und Treppenbereiche für Ihre Immobilie.",
    longDescription:
      "Mit der professionellen Treppenhausreinigung sorgen wir für gepflegte, hygienische und einladende Eingangs- und Treppenbereiche. Ob Mehrfamilienhaus, Bürogebäude oder Gewerbeobjekt, wir reinigen zuverlässig Treppen, Geländer, Fensterbänke, Eingangsbereiche und alle stark frequentierten Flächen gründlich und termingerecht.",
    bullets: [
      "Treppen, Geländer und Fensterbänke",
      "Eingangsbereiche und Briefkastenanlagen",
      "Feste Intervalle und Termintreue",
      "Für Mehrfamilienhaus bis Gewerbeobjekt",
    ],
    image: "/images/treppenhaus.jpg",
    icon: ArrowUpDown,
  },
  {
    slug: "hygiene-desinfektion",
    title: "Hygiene & Desinfektionsreinigung",
    tagline: "Sauberkeit ist Vertrauenssache",
    shortDescription:
      "Hygienisch einwandfreie Räume für Büros, Praxen und Gemeinschaftsflächen.",
    longDescription:
      "Mit fedox Facility Service sorgen wir für hygienisch einwandfreie, gepflegte und sichere Räume. Zuverlässig, gründlich und mit höchstem Qualitätsanspruch. Ob Büros, Praxen, Sanitäranlagen, Gemeinschaftsflächen oder stark genutzte Bereiche: wir reinigen und desinfizieren sensible Flächen sorgfältig.",
    bullets: [
      "Sensible Bereiche wie Praxen",
      "Sanitär- und Gemeinschaftsflächen",
      "Zertifizierte Desinfektionsmittel",
      "Geschultes Fachpersonal",
    ],
    image: "/images/hygiene-desinfektion.jpg",
    icon: ShieldCheck,
  },
  {
    slug: "baustellenreinigung",
    title: "Baustellen- & Bauendreinigung",
    tagline: "Bezugsfertig übergeben",
    shortDescription:
      "Gründliche Reinigung nach Neubau, Umbau oder Renovierung. Schnell und professionell.",
    longDescription:
      "Wir bieten zuverlässige und gründliche Baustellenreinigung nach Neubau, Umbau oder Renovierung. Dazu gehören die Entfernung von Staub, Schmutz, Bauschutt und Bauresten sowie die sorgfältige Bauendreinigung von Böden, Fenstern, Oberflächen und Sanitärbereichen.",
    bullets: [
      "Staub-, Schmutz- und Bauschuttentfernung",
      "Feinreinigung von Böden und Fenstern",
      "Sanitärbereiche und Oberflächen",
      "Sauber, schnell und professionell",
    ],
    image: "/images/baustelle.jpg",
    icon: HardHat,
  },
  {
    slug: "stein-pflasterreinigung",
    title: "Stein- & Pflasterreinigung",
    tagline: "Heißwasser bis 100°C",
    shortDescription:
      "Entfernung von Moos, Algen und Grünbelag mit materialschonender Heißwassertechnik.",
    longDescription:
      "Mit unserer Heißwasserreinigung bis zu 100 °C entfernen wir Moos, Grünbelag, Algen und hartnäckigen Schmutz gründlich und materialschonend. Anschließend kümmern wir uns um die mechanische Unkrautentfernung sowie die Reinigung der Fugen und führen auf Wunsch eine Neuverfugung mit Quarzsand oder Polymer-Fugensand durch.",
    bullets: [
      "Heißwasserreinigung bis 100 °C",
      "Mechanische Unkrautentfernung",
      "Neuverfugung mit Quarz- oder Polymersand",
      "Imprägnierung bis zu 5 Jahren Schutz",
    ],
    image: "/images/stein-pflaster.jpg",
    icon: Droplets,
  },
  {
    slug: "gartenpflege",
    title: "Gartenpflege",
    tagline: "Gepflegte Außenanlagen",
    shortDescription:
      "Professionelle Pflege für gepflegte Grünflächen und ein ansprechendes Erscheinungsbild.",
    longDescription:
      "Professionelle Gartenpflege für gepflegte Grünflächen, Außenanlagen und ein ansprechendes Erscheinungsbild Ihrer Immobilie. Wir kümmern uns zuverlässig um Rasenpflege, Hecken- und Strauchschnitt sowie die regelmäßige Pflege Ihrer Außenbereiche.",
    bullets: [
      "Rasenpflege und Rasenmähen",
      "Hecken- und Strauchschnitt",
      "Regelmäßige Pflegeintervalle",
      "Grünabfall-Entsorgung",
    ],
    image: "/images/gartenpflege.jpg",
    icon: Leaf,
  },
  {
    slug: "winterdienst",
    title: "Winterdienst",
    tagline: "Sicher durch den Winter",
    shortDescription:
      "Zuverlässige Schneeräumung und Glättebekämpfung für Gewerbe und Privat.",
    longDescription:
      "Wir sorgen im Winter für sichere und geräumte Wege, Zufahrten und Flächen, zuverlässig für Gewerbe- und Privatkunden. Ob Schneeräumung oder Glättebekämpfung, mit Fedox Facility Service bleiben Ihre Außenbereiche sicher und gepflegt.",
    bullets: [
      "Wege, Zufahrten und Parkflächen",
      "Schneeräumung und Streuen",
      "Bereitschaft rund um die Uhr",
      "Für Gewerbe und Privat",
    ],
    image: "/images/winterdienst.jpg",
    icon: Snowflake,
  },
  {
    slug: "entruempelung",
    title: "Entrümpelung & Räumung",
    tagline: "Schnell, sauber, unkompliziert",
    shortDescription:
      "Fachgerechte Entrümpelung von Wohnungen, Häusern, Kellern, Büros und Gewerbeflächen.",
    longDescription:
      "Wir übernehmen die fachgerechte Entrümpelung von Wohnungen, Häusern, Kellern, Garagen, Büros und Gewerbeflächen. Schnell, sauber und unkompliziert, auf Wunsch inklusive besenreiner Übergabe.",
    bullets: [
      "Wohnungen und Häuser",
      "Keller und Dachböden",
      "Büros und Gewerbeflächen",
      "Besenreine Übergabe",
    ],
    image: "/images/entruempelung.jpg",
    icon: Trash2,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
