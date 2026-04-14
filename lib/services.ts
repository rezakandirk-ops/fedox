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
  Factory,
  HardHat,
  Droplets,
  Leaf,
  Snowflake,
  Truck,
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
  {
    slug: "industriereinigung",
    title: "Industriereinigung",
    tagline: "Sauberkeit für Produktion & Halle",
    shortDescription:
      "Fachgerechte Reinigung für Produktions-, Hallen- und Industrieflächen — abgestimmt auf Ihren Betrieb.",
    longDescription:
      "In Industrie- und Produktionsbereichen sind Sauberkeit, Struktur und Funktionalität von besonderer Bedeutung. Mit unserer Industriereinigung sorgen wir für fachgerechte Reinigungslösungen, die auf die Anforderungen von Betriebs- und Produktionsflächen abgestimmt sind. Dazu gehören Hallenböden, Industrieflächen, Decken, Leuchten sowie weitere stark beanspruchte Bereiche innerhalb von Hallen und gewerblichen Objekten.",
    bullets: [
      "Hallenböden und Produktionsflächen",
      "Decken, Leuchten und Traversen",
      "Stark beanspruchte Gewerbebereiche",
      "Abgestimmt auf Ihren Betriebsablauf",
    ],
    image: "/images/industrie.jpg",
    icon: Factory,
  },
  {
    slug: "baustellenreinigung",
    title: "Baustellen- & Bauendreinigung",
    tagline: "Bezugsfertig übergeben",
    shortDescription:
      "Zuverlässige Grob- und Feinreinigung nach Neubau, Umbau oder Renovierung — sauber, schnell, professionell.",
    longDescription:
      "Wir bieten zuverlässige und gründliche Baustellenreinigung nach Neubau, Umbau oder Renovierung. Dazu gehören die Entfernung von Staub, Schmutz, Bauschutt und Bauresten sowie die sorgfältige Bauendreinigung und Feinreinigung von Böden, Fenstern, Oberflächen und Sanitärbereichen. Sauber, schnell und professionell — für eine bezugsfertige Übergabe.",
    bullets: [
      "Entfernung von Staub und Bauschutt",
      "Feinreinigung von Böden und Fenstern",
      "Oberflächen und Sanitärbereiche",
      "Bezugsfertige Übergabe",
    ],
    image: "/images/baustelle.jpg",
    icon: HardHat,
  },
  {
    slug: "stein-pflasterreinigung",
    title: "Stein- & Pflasterreinigung",
    tagline: "Heißwasser bis 100 °C",
    shortDescription:
      "Moos, Algen und Schmutz gründlich entfernen — inkl. Fugenpflege, Neuverfugung und Versiegelung.",
    longDescription:
      "Mit unserer Heißwasserreinigung bis zu 100 °C entfernen wir Moos, Grünbelag, Algen und hartnäckigen Schmutz gründlich und materialschonend. Anschließend kümmern wir uns um die mechanische Unkrautentfernung sowie die Reinigung der Fugen und führen auf Wunsch eine Neuverfugung mit Quarzsand oder Polymer-Fugensand durch. Eine abschließende Imprägnierung bzw. Versiegelung schützt die Fläche vor Wasser und Schmutz, reduziert neuen Bewuchs und sorgt für ein gepflegtes Erscheinungsbild — mit Schutzwirkung von bis zu 2 bis 5 Jahren.",
    bullets: [
      "Heißwasserreinigung bis 100 °C",
      "Mechanische Unkrautentfernung",
      "Neuverfugung mit Quarz- oder Polymer-Fugensand",
      "Imprägnierung mit 2 bis 5 Jahren Schutz",
    ],
    image: "/images/stein-pflaster.jpg",
    icon: Droplets,
  },
  {
    slug: "gartenpflege",
    title: "Gartenpflege",
    tagline: "Gepflegte Außenanlagen",
    shortDescription:
      "Professionelle Pflege von Rasen, Hecken, Sträuchern und Außenbereichen für ein ansprechendes Erscheinungsbild.",
    longDescription:
      "Professionelle Gartenpflege für gepflegte Grünflächen, Außenanlagen und ein ansprechendes Erscheinungsbild Ihrer Immobilie. Wir kümmern uns zuverlässig um Rasenpflege, Hecken- und Strauchschnitt sowie die regelmäßige Pflege Ihrer Außenbereiche.",
    bullets: [
      "Rasenpflege und Mäharbeiten",
      "Hecken- und Strauchschnitt",
      "Regelmäßige Pflegeintervalle",
      "Privat und Gewerbe",
    ],
    image: "/images/gartenpflege.jpg",
    icon: Leaf,
  },
  {
    slug: "winterdienst",
    title: "Winterdienst",
    tagline: "Sicher durch die Wintersaison",
    shortDescription:
      "Zuverlässige Schneeräumung und Glättebekämpfung für Wege, Zufahrten und Außenflächen.",
    longDescription:
      "Wir sorgen im Winter für sichere und geräumte Wege, Zufahrten und Flächen — zuverlässig für Gewerbe- und Privatkunden. Ob Schneeräumung oder Glättebekämpfung, mit fedox Facility Service bleiben Ihre Außenbereiche sicher und gepflegt.",
    bullets: [
      "Schneeräumung und Glättebekämpfung",
      "Wege, Zufahrten und Parkplätze",
      "Rufbereitschaft in der Saison",
      "Gewerbe und Privatkunden",
    ],
    image: "/images/winterdienst.jpg",
    icon: Snowflake,
  },
  {
    slug: "entruempelung",
    title: "Entrümpelung & Räumung",
    tagline: "Schnell, sauber, unkompliziert",
    shortDescription:
      "Fachgerechte Entrümpelung von Wohnungen, Häusern, Kellern, Garagen, Büros und Gewerbeflächen.",
    longDescription:
      "Schnell, sauber und unkompliziert. Wir übernehmen die fachgerechte Entrümpelung von Wohnungen, Häusern, Kellern, Garagen, Büros und Gewerbeflächen — inklusive sortengerechter Entsorgung und besenreiner Übergabe.",
    bullets: [
      "Wohnungen, Häuser und Keller",
      "Garagen, Büros und Gewerbeflächen",
      "Sortengerechte Entsorgung",
      "Besenreine Übergabe",
    ],
    image: "/images/entruempelung.jpg",
    icon: Truck,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
