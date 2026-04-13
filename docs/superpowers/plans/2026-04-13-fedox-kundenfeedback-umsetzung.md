# fedox Kundenfeedback Umsetzung — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Setze das gesamte WhatsApp-Feedback des Kunden für die fedox-Landingpage um — neue Texte, Service-Reihenfolge, Stats-Bar, Referenzen-Marquee, Angebotsformular, Floating Sidebar, SEO-Städte und neue Kontaktdaten.

**Architecture:** Single-Page Landing (Paket 1, 299 €). Alle Inhalte leben in [app/page.tsx](app/page.tsx). Die bisherigen Sub-Routen (`/leistungen/[slug]`, `/kontakt`) werden entfernt; der Content wird in Sektionen auf der Startseite konsolidiert. Neue UI-Bausteine kommen als fokussierte Komponenten unter [components/](components/).

**Tech Stack:** Next.js 16.2 (Turbopack, App Router), React 19, Tailwind v4, framer-motion, lucide-react, shadcn-ui Bausteine.

**WICHTIG (siehe AGENTS.md):** Dies ist eine Breaking-Changes-Version von Next.js. Vor jeder neuen API/Konvention den Guide in `node_modules/next/dist/docs/` lesen. Keine bekannten Patterns aus Next 14/15 raten.

---

## Kontext: Was der Kunde will (Quelle: WhatsApp-Chat 12./13.04.2026)

**Globales:**
- Farbschema des aktuellen Entwurfs ist OK
- Hero-Bild: mehr aus Tropfen-Effekt + Animation rausholen
- **Alles auf EINE Seite** (Paket 1) — keine Unterseiten
- Logo-Farbe als Akzent für die Stats-Box

**Hero:**
- Headline neu: „Ihr Partner für Sauberkeit und Werterhalt" (statt „Facility Services")
- Neuer Einleitungstext: „Sauberkeit, Werterhalt und zuverlässiger Service stehen bei uns im Mittelpunkt. Mit Erfahrung, Sorgfalt und einem geschulten Blick für Qualität sorgen wir dafür, dass Immobilien professionell betreut und dauerhaft gepflegt bleiben."
- Header oben: zwei Buttons „Anrufen" und „Angebot" (Wahl-Buttons)

**Leistungen-Sektion** mit Überschrift „Leistungen". Reihenfolge **exakt** wie im Chat:
1. Unterhalts- & Büroreinigung
2. Glas- & Rahmenreinigung *(getrennt von Fassade!)*
3. Treppenhausreinigung
4. Hygiene & Desinfektionsreinigung
5. Fassadenreinigung *(eigener Eintrag)*
6. Allgemeine Sonderreinigung
7. Photovoltaikanlagenreinigung
8. Gebäudemanagement *(inkl. Winterdienst, Grünpflege, Entrümpelung als Bullet-Points — keine eigenen Services mehr)*

**Stats-Bar (nach Leistungen):**
- „Seit 2020"
- „Über 98 % Kundenzufriedenheit"
- „Mehr als 740 zufriedene Kunden"
- „Erreichbar an 365 Tagen im Jahr"
- Farbe passend zum Logo

**Über uns:** „SEIT 2020 — Kompetenz und Sauberkeit aus einer Hand" mit Teamfoto-Slot.

**Referenzen:** Logos als langsam laufendes **Marquee/Fließband** (automatisch, am unteren Bereich). Zusätzliche Zeichen einfügen:
- BG BAU Berufsgenossenschaft
- Handwerkskammer Dortmund
- Industrie- und Handelskammer Dortmund
- Die Gebäudereiniger-Innung Dortmund

**Angebotsformular** (auf der Startseite, „passend platziert"):
- Felder: Dienstleistung*, Turnus*, Reinigungsfläche in qm*, Ansprechpartner*, E-Mail*, Telefon, Ort*, Gewerblich/Privat*, Firmenname, Erläuterung
- Titel: „Kostenlose & unverbindliche Angebotsanfrage"
- Subtitel: „Sie erhalten innerhalb von 24 h eine Antwort"
- Bild der „netten Dame" links daneben
- Werbe-Hinweis: „15 % Rabatt für Neukunden — bis zu 500 € Ersparnis"
- Stil: kleiner und moderner als Bubans/Nellsonn (kein 1:1-Klon)

**Floating Sidebar (rechts, sticky, alle Seiten):**
- Mail, Telefon, Instagram, WhatsApp

**SEO-Städte (Footer, ganz unten):**
- „Gebäudereinigung Recklinghausen", „Gebäudereinigung Dorsten", „Gebäudereinigung Lüdinghausen", „Gebäudereinigung Waltrop" (erweiterbar)

**Kontaktdaten (überall ersetzen):**
- E-Mail: `fedox@outlook.de`
- Tel: `0231 53035483`
- Mobil: `0163 8672944`
- Website: `fedox-facilityservices.de`

---

## File Structure

**Modifizieren:**
- [app/page.tsx](app/page.tsx) — Hero-Texte, Service-Sektion, neue Sektionen einbinden
- [app/layout.tsx](app/layout.tsx) — `<FloatingActions />` global einhängen, Metadata
- [lib/services.ts](lib/services.ts) — auf 8 Services reduzieren, Reihenfolge neu, Bullets aktualisieren
- [components/site-header.tsx](components/site-header.tsx) — zwei CTA-Buttons („Anrufen" + „Angebot"), Nav-Links auf Sektionen-Anker
- [components/site-footer.tsx](components/site-footer.tsx) — neue Kontaktdaten, SEO-Städte-Block, Service-Links als Anker statt Sub-Routen

**Neu erstellen:**
- [components/stats-bar.tsx](components/stats-bar.tsx) — Stats-Sektion mit 4 Kennzahlen
- [components/reference-marquee.tsx](components/reference-marquee.tsx) — endlos laufende Logo-Reihe
- [components/quote-form.tsx](components/quote-form.tsx) — Angebotsformular (Client-Komponente)
- [components/floating-actions.tsx](components/floating-actions.tsx) — sticky Right-Rail FABs
- [components/seo-cities.tsx](components/seo-cities.tsx) — SEO-Städte-Block für Footer
- [lib/contact.ts](lib/contact.ts) — zentrale Konstanten (E-Mail, Tel, Mobil, Social Links)

**Löschen:**
- [app/leistungen/[slug]/page.tsx](app/leistungen/[slug]/page.tsx) — Sub-Route entfällt (alles auf eine Seite)
- [app/kontakt/page.tsx](app/kontakt/page.tsx) — Kontakt wird über Formular + Footer abgebildet

**Neue Bilder (vom User später nachzuliefern, vorerst Platzhalter aus `public/images/`):**
- `public/images/fassade.jpg` — separates Bild für „Fassadenreinigung" (vom Kunden geliefert)
- `public/images/quote-lady.jpg` — die nette Dame im fedox-Shirt für das Angebotsformular
- `public/logo/cert/bgbau.svg`, `hwk-dortmund.svg`, `ihk-dortmund.svg`, `gebaeudereiniger-innung.svg`

---

## Task 1: Zentrale Kontakt-Konstanten anlegen

**Files:**
- Create: `lib/contact.ts`

- [ ] **Step 1: Datei anlegen mit den vom Kunden gelieferten Daten**

```ts
// lib/contact.ts
export const contact = {
  email: "fedox@outlook.de",
  phone: "0231 53035483",
  phoneTel: "+492315303548",
  mobile: "0163 8672944",
  mobileTel: "+491638672944",
  website: "https://fedox-facilityservices.de",
  whatsapp: "https://wa.me/491638672944",
  instagram: "https://instagram.com/fedox.facility",
} as const

export type Contact = typeof contact
```

- [ ] **Step 2: Build prüfen**

Run: `npm run build`
Expected: kein TS-Fehler, Datei wird kompiliert.

- [ ] **Step 3: Commit**

```bash
git add lib/contact.ts
git commit -m "feat: zentrale fedox-kontaktdaten als modul"
```

---

## Task 2: Service-Datenmodell auf die 8 Wunsch-Leistungen umbauen

**Files:**
- Modify: [lib/services.ts](lib/services.ts)

Reihenfolge und Inhalte exakt nach Kundenangabe. Achtung: „Gebäudemanagement" enthält jetzt Winterdienst/Grünpflege/Entrümpelung als Bullets, eigene Services dafür entfallen. „Glas- & Rahmenreinigung" und „Fassadenreinigung" sind getrennt.

- [ ] **Step 1: Datei vollständig ersetzen**

```ts
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
```

- [ ] **Step 2: Type-Check & Build**

Run: `npm run build`
Expected: kein TS-Fehler. Etwaige Importe alter Slugs in Header/Footer brechen — wird in Task 9/10 gefixt.

- [ ] **Step 3: Commit**

```bash
git add lib/services.ts
git commit -m "feat(services): 8 wunschleistungen in vom kunden gewuenschter reihenfolge"
```

---

## Task 3: Hero-Texte aktualisieren (Headline, Intro, CTA)

**Files:**
- Modify: [app/page.tsx](app/page.tsx) (Hero-Block, Zeilen ~12-75)

- [ ] **Step 1: Headline ersetzen**

Ersetze den `<h1>`-Block:

```tsx
<h1 className="max-w-3xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
  Ihr Partner für
  <br />
  <span className="bg-gradient-to-r from-[color:var(--brand-drop)] via-white to-[color:var(--brand-drop)] bg-clip-text text-transparent">
    Sauberkeit und Werterhalt
  </span>
</h1>
```

- [ ] **Step 2: Einleitungsabsatz ersetzen**

```tsx
<p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/80">
  Sauberkeit, Werterhalt und zuverlässiger Service stehen bei uns im
  Mittelpunkt. Mit Erfahrung, Sorgfalt und einem geschulten Blick für
  Qualität sorgen wir dafür, dass Immobilien professionell betreut und
  dauerhaft gepflegt bleiben.
</p>
```

- [ ] **Step 3: Trust-Badges anpassen (13 → 8 Leistungen)**

```tsx
{ icon: CheckCircle2, label: "8 Leistungen aus einer Hand" },
```

- [ ] **Step 4: CTA-Buttons auf neue Anker (`#angebot` für das Formular)**

Ersetze den zweiten Button (Telefon) durch ein Pärchen, das gemeinsam zum Formular und zur Telefonnummer führt — Hero-Buttons bleiben sonst gleich:

```tsx
<a
  href={`tel:${contact.phoneTel}`}
  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
>
  <Phone className="h-4 w-4" />
  {contact.phone}
</a>
```

Dazu am Datei-Anfang importieren:

```tsx
import { contact } from "@/lib/contact"
```

- [ ] **Step 5: Visuell prüfen**

Run: `npm run dev`
Expected: Hero zeigt neue Headline, Intro, Phone-Number aus `contact.phone`, „8 Leistungen aus einer Hand" Badge.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx
git commit -m "feat(hero): neue headline, intro und kontakt-cta"
```

---

## Task 4: Header — Zwei CTA-Buttons „Anrufen" + „Angebot"

**Files:**
- Modify: [components/site-header.tsx](components/site-header.tsx)

- [ ] **Step 1: Imports erweitern**

```tsx
import { Menu, X, Phone, FileText } from "lucide-react"
import { contact } from "@/lib/contact"
```

- [ ] **Step 2: Nav-Links auf Anker statt Sub-Routen**

```tsx
const nav = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Referenzen", href: "/#referenzen" },
  { label: "Angebot", href: "/#angebot" },
]
```

- [ ] **Step 3: Desktop-CTA-Block durch zwei Buttons ersetzen**

Ersetze den `<div className="hidden items-center gap-3 md:flex">`-Block:

```tsx
<div className="hidden items-center gap-2 md:flex">
  <a
    href={`tel:${contact.phoneTel}`}
    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-deep)]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[color:var(--brand-deep)] transition-all hover:border-[color:var(--brand)]/40 hover:bg-[color:var(--brand-soft)]"
  >
    <Phone className="h-4 w-4" />
    Anrufen
  </a>
  <a
    href="#angebot"
    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--brand-deep)] to-[color:var(--brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand)]/20 transition-all hover:shadow-xl hover:shadow-[color:var(--brand)]/30"
  >
    <FileText className="h-4 w-4" />
    Angebot
  </a>
</div>
```

- [ ] **Step 4: Im Mobile-Menü beide Buttons spiegeln**

Ersetze den einzelnen `<a tel:..>` im `{open && ...}`-Block durch:

```tsx
<a
  href={`tel:${contact.phoneTel}`}
  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--brand-deep)]/20 bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-deep)]"
>
  <Phone className="h-4 w-4" />
  Anrufen
</a>
<a
  href="#angebot"
  onClick={() => setOpen(false)}
  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--brand-deep)] to-[color:var(--brand)] px-5 py-3 text-sm font-semibold text-white"
>
  <FileText className="h-4 w-4" />
  Angebot
</a>
```

- [ ] **Step 5: Visuell prüfen**

Run: `npm run dev`
Expected: Desktop-Header zeigt „Anrufen" + „Angebot" rechts; Mobile-Burger zeigt beide Buttons; Anker-Links scrollen zu Sektionen.

- [ ] **Step 6: Commit**

```bash
git add components/site-header.tsx
git commit -m "feat(header): zwei cta-buttons anrufen und angebot"
```

---

## Task 5: Leistungen-Sektion — Headline „Leistungen"

**Files:**
- Modify: [app/page.tsx](app/page.tsx) (Leistungen-Block, Zeilen ~78-138)

- [ ] **Step 1: Headline-Text anpassen**

```tsx
<h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-5xl">
  Leistungen
</h2>
<p className="mt-5 text-lg leading-relaxed text-muted-foreground">
  Acht Leistungen aus einer Hand — von der täglichen Büroreinigung bis zum
  ganzheitlichen Gebäudemanagement. Wir decken das gesamte Spektrum
  moderner Facility Services ab.
</p>
```

Den oberen Pill-Tag „Unsere Leistungen" beibehalten — das ist das Eyebrow.

- [ ] **Step 2: Karten-Loop unverändert lassen**

Die `services.map(...)`-Schleife funktioniert mit dem neuen 8-Item-Array automatisch. Sicherstellen, dass `Link href={\`/leistungen/${service.slug}\`}` durch ein `<div>` ersetzt wird (kein Klick mehr → keine Sub-Page):

```tsx
<div
  key={service.slug}
  className="group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--brand-soft)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-drop)]/40 hover:shadow-2xl hover:shadow-[color:var(--brand)]/10"
>
```

Den Import `Link` belassen (wird weiter unten noch genutzt). Den Link-Block am Ende der Karte (`Mehr erfahren`) entfernen oder durch einen Anker zum Angebotsformular ersetzen:

```tsx
<a
  href="#angebot"
  className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)] transition-all hover:gap-3"
>
  Angebot anfragen
  <ArrowRight className="h-4 w-4" />
</a>
```

- [ ] **Step 3: Visuell prüfen**

Run: `npm run dev`
Expected: 8 Karten in der Wunsch-Reihenfolge, Headline „Leistungen", keine 404 mehr beim Klick.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat(leistungen): headline leistungen, karten ohne sub-route"
```

---

## Task 6: Stats-Bar Komponente

**Files:**
- Create: `components/stats-bar.tsx`

- [ ] **Step 1: Komponente schreiben**

```tsx
// components/stats-bar.tsx
const stats = [
  { value: "Seit 2020", label: "Verlässlich am Markt" },
  { value: "98 %", label: "Kundenzufriedenheit" },
  { value: "740+", label: "Zufriedene Kunden" },
  { value: "365", label: "Tage im Jahr erreichbar" },
]

export function StatsBar() {
  return (
    <section className="relative bg-gradient-to-r from-[color:var(--brand-deep)] via-[color:var(--brand)] to-[color:var(--brand-deep)] py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center text-center text-white"
          >
            <span className="text-4xl font-bold tracking-tight sm:text-5xl">
              {s.value}
            </span>
            <span className="mt-2 text-sm font-medium text-white/80">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: In Startseite einbinden — direkt nach der Leistungen-Sektion**

In [app/page.tsx](app/page.tsx) importieren:

```tsx
import { StatsBar } from "@/components/stats-bar"
```

Direkt nach `</section>` der Leistungen einsetzen:

```tsx
<StatsBar />
```

- [ ] **Step 3: Visuell prüfen**

Run: `npm run dev`
Expected: Farbiger Balken in Brand-Farben mit 4 Kennzahlen unter der Leistungen-Sektion.

- [ ] **Step 4: Commit**

```bash
git add components/stats-bar.tsx app/page.tsx
git commit -m "feat: stats-bar mit 4 kennzahlen seit 2020"
```

---

## Task 7: Über-uns Sektion — „Seit 2020 — Kompetenz aus einer Hand"

**Files:**
- Modify: [app/page.tsx](app/page.tsx) (Über-uns-Block, Zeilen ~141-206)

- [ ] **Step 1: Eyebrow & Headline ersetzen**

```tsx
<span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
  Seit 2020
</span>
<h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-5xl">
  Kompetenz und Sauberkeit aus einer Hand
</h2>
<p className="mt-5 text-lg leading-relaxed text-muted-foreground">
  Mit unserer Fachkompetenz und langjährigen Erfahrung sind wir Ihr
  zuverlässiger Partner für Sauberkeit, Pflege und Werterhalt. Unser
  Anspruch geht über reine Reinigung hinaus: Wir schaffen saubere,
  hygienische und repräsentative Räume, in denen sich Mitarbeiter, Kunden,
  Besucher und Bewohner gleichermaßen wohlfühlen. Mit einem engagierten
  Team, hochwertiger Ausstattung und modernen Arbeitsmethoden liefern wir
  effiziente, flexible und auf Ihr Objekt abgestimmte Lösungen.
</p>
```

- [ ] **Step 2: Bullet-Liste leicht anpassen**

```tsx
{[
  "Inhabergeführt seit 2020",
  "Geschultes Fachpersonal",
  "Feste Ansprechpartner",
  "Transparente Abläufe",
  "Moderne Technik",
  "Umweltfreundliche Mittel",
]}
```

- [ ] **Step 3: CTA-Anker auf das Formular**

```tsx
<Link
  href="#angebot"
  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--brand-deep)] to-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand)]/20 transition-all hover:shadow-xl"
>
  Angebot anfragen
  <ArrowRight className="h-4 w-4" />
</Link>
```

- [ ] **Step 4: Stat-Karte unten links anpassen**

```tsx
<p className="text-3xl font-bold text-[color:var(--brand)]">Seit 2020</p>
<p className="mt-1 text-sm text-muted-foreground">
  Verlässlich am Markt
</p>
```

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat(ueber-uns): seit 2020 kompetenz aus einer hand"
```

---

## Task 8: Referenz-Marquee + Zertifikate

**Files:**
- Create: `components/reference-marquee.tsx`
- Modify: [app/page.tsx](app/page.tsx) (Referenzen-Sektion ersetzen)

- [ ] **Step 1: Komponente schreiben (CSS-Animation, kein JS-Loop)**

```tsx
// components/reference-marquee.tsx
import Image from "next/image"

type LogoItem = {
  src: string
  alt: string
  width?: number
  height?: number
}

const referenzen: LogoItem[] = [
  { src: "/referenzen/ref-1.jpg", alt: "Referenzkunde 1" },
  { src: "/referenzen/ref-2.jpg", alt: "Referenzkunde 2" },
  { src: "/referenzen/ref-3.jpg", alt: "Referenzkunde 3" },
  { src: "/referenzen/ref-4.jpg", alt: "Referenzkunde 4" },
  { src: "/referenzen/ref-5.jpg", alt: "Referenzkunde 5" },
]

const zertifikate: LogoItem[] = [
  { src: "/logo/cert/bgbau.svg", alt: "BG BAU Berufsgenossenschaft" },
  { src: "/logo/cert/hwk-dortmund.svg", alt: "Handwerkskammer Dortmund" },
  { src: "/logo/cert/ihk-dortmund.svg", alt: "IHK Dortmund" },
  { src: "/logo/cert/gebaeudereiniger-innung.svg", alt: "Gebäudereiniger-Innung Dortmund" },
]

function Track({ items }: { items: LogoItem[] }) {
  // duplizieren für nahtlose Schleife
  const loop = [...items, ...items]
  return (
    <div className="group relative overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-12 py-4 group-hover:[animation-play-state:paused]">
        {loop.map((logo, i) => (
          <div
            key={`${logo.src}-${i}`}
            className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl bg-white px-4"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={80}
              className="max-h-12 w-auto object-contain mix-blend-multiply"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ReferenceMarquee() {
  return (
    <section id="referenzen" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]">
            Vertrauen seit 2020
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
            Unternehmen, die auf uns vertrauen
          </h2>
        </div>
      </div>

      <div className="mt-12">
        <Track items={referenzen} />
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Mitglied & zertifiziert bei
        </p>
      </div>

      <div className="mt-6">
        <Track items={zertifikate} />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Marquee-Animation in `app/globals.css` hinzufügen**

Am Ende von [app/globals.css](app/globals.css) anhängen:

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 40s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee { animation: none; }
}
```

- [ ] **Step 3: Alte Referenzen-Sektion in `app/page.tsx` entfernen und Komponente einbinden**

Lösche den ganzen `<section id="referenzen" ...>`-Block (Zeilen ~209-237) und ersetze ihn durch:

```tsx
<ReferenceMarquee />
```

Import:

```tsx
import { ReferenceMarquee } from "@/components/reference-marquee"
```

- [ ] **Step 4: Visuelle Prüfung**

Run: `npm run dev`
Expected: zwei Reihen von Logos laufen langsam und endlos nach links; Hover pausiert. Bei fehlenden Zertifikat-SVGs zeigt Next.js 404 auf den Pfad — das ist OK, Bilder werden vom Kunden nachgereicht. Vorerst leere Platzhalter-SVGs anlegen, damit kein Layout-Shift entsteht (Step 5).

- [ ] **Step 5: Platzhalter-SVGs anlegen**

```bash
mkdir -p public/logo/cert
```

Jede der 4 Dateien als simples Inline-SVG schreiben (`bgbau.svg`, `hwk-dortmund.svg`, `ihk-dortmund.svg`, `gebaeudereiniger-innung.svg`):

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 60" width="160" height="60">
  <rect width="160" height="60" rx="8" fill="#f1f5f9"/>
  <text x="80" y="34" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">PLATZHALTER</text>
</svg>
```

- [ ] **Step 6: Commit**

```bash
git add components/reference-marquee.tsx app/page.tsx app/globals.css public/logo/cert
git commit -m "feat: referenz-marquee mit zertifikaten als endloses fliessband"
```

---

## Task 9: Angebotsformular-Komponente

**Files:**
- Create: `components/quote-form.tsx`
- Modify: [app/page.tsx](app/page.tsx) (Sektion einbinden)

Das Formular ist eine **Client-Komponente** (`"use client"`), submitet per `mailto:` an `contact.email` (Paket 1, kein Backend). Felder exakt wie im Bubans-Screenshot, Layout kompakt und modern.

- [ ] **Step 1: Komponente schreiben**

```tsx
// components/quote-form.tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import { Sparkles, ArrowRight } from "lucide-react"
import { contact } from "@/lib/contact"

const dienstleistungen = [
  "Unterhalts- & Büroreinigung",
  "Glas- & Rahmenreinigung",
  "Treppenhausreinigung",
  "Hygiene & Desinfektionsreinigung",
  "Fassadenreinigung",
  "Allgemeine Sonderreinigung",
  "Photovoltaikanlagenreinigung",
  "Gebäudemanagement",
]

const turnusOptionen = [
  "Einmalig",
  "Wöchentlich",
  "Zweiwöchentlich",
  "Monatlich",
  "Nach Absprache",
]

const kundenart = ["Gewerblich", "Privat"]

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const lines = [
      `Dienstleistung: ${data.get("dienstleistung")}`,
      `Turnus: ${data.get("turnus")}`,
      `Reinigungsfläche (qm): ${data.get("flaeche")}`,
      `Ansprechpartner: ${data.get("name")}`,
      `E-Mail: ${data.get("email")}`,
      `Telefon: ${data.get("telefon")}`,
      `Ort: ${data.get("ort")}`,
      `Gewerblich/Privat: ${data.get("kundenart")}`,
      `Firmenname: ${data.get("firma")}`,
      ``,
      `Erläuterung:`,
      `${data.get("erlaeuterung") ?? ""}`,
    ]
    const subject = encodeURIComponent("Angebotsanfrage über fedox-facilityservices.de")
    const body = encodeURIComponent(lines.join("\n"))
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section
      id="angebot"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[color:var(--brand-soft)] py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[420px_1fr] lg:items-start">
        {/* Linke Spalte: Bild + Marketing */}
        <aside className="flex flex-col gap-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/quote-lady.jpg"
              alt="Ihre Ansprechpartnerin bei fedox"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="rounded-3xl border border-[color:var(--brand-soft)] bg-white p-6 shadow-lg">
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--brand-deep)]">
              <Sparkles className="h-3.5 w-3.5" />
              Neukundenrabatt
            </span>
            <p className="mt-4 text-2xl font-bold text-[color:var(--brand-deep)]">
              15 % Rabatt für Neukunden
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Profitieren Sie von bis zu <strong>500 € Ersparnis</strong> auf
              alle Reinigungsleistungen — gültig für die erste Beauftragung.
            </p>
          </div>
        </aside>

        {/* Rechte Spalte: Formular */}
        <div className="rounded-3xl border border-[color:var(--brand-soft)] bg-white p-8 shadow-xl sm:p-10">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[color:var(--brand-deep)] sm:text-4xl">
            Kostenlose & unverbindliche Angebotsanfrage
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sie erhalten innerhalb von 24 Stunden eine Antwort.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-[color:var(--brand-soft)] p-6 text-sm text-[color:var(--brand-deep)]">
              Vielen Dank! Ihre E-Mail-App sollte jetzt geöffnet sein. Falls
              nicht, schreiben Sie uns direkt an{" "}
              <a className="font-semibold underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              .
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Dienstleistung *" name="dienstleistung" type="select" options={dienstleistungen} required />
              <Field label="Turnus *" name="turnus" type="select" options={turnusOptionen} required />
              <Field label="Reinigungsfläche in qm *" name="flaeche" placeholder="ca. 250 qm" required />
              <Field label="Ansprechpartner *" name="name" placeholder="Max Mustermann" required />
              <Field label="E-Mail-Adresse *" name="email" type="email" placeholder="max@email.de" required />
              <Field label="Telefonnummer" name="telefon" type="tel" placeholder="0151 123 456" />
              <Field label="Ort *" name="ort" placeholder="Dortmund" required />
              <Field label="Gewerblich oder Privat *" name="kundenart" type="select" options={kundenart} required />
              <Field label="Firmenname" name="firma" placeholder="Musterfirma GmbH" className="sm:col-span-2" />
              <Field label="Erläuterung" name="erlaeuterung" type="textarea" className="sm:col-span-2" />

              <div className="sm:col-span-2 flex items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">* Pflichtfeld</p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--brand-deep)] to-[color:var(--brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand)]/20 transition-all hover:shadow-xl"
                >
                  Anfrage senden
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  name: string
  type?: "text" | "email" | "tel" | "select" | "textarea"
  placeholder?: string
  required?: boolean
  options?: string[]
  className?: string
}

function Field({ label, name, type = "text", placeholder, required, options, className }: FieldProps) {
  const base =
    "mt-1.5 w-full rounded-xl border border-[color:var(--brand-soft)] bg-white px-4 py-3 text-sm text-[color:var(--brand-deep)] outline-none transition-colors focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]/70">
        {label}
      </span>
      {type === "select" ? (
        <select name={name} required={required} defaultValue="" className={base}>
          <option value="" disabled>
            Bitte wählen…
          </option>
          {options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea name={name} required={required} rows={5} placeholder={placeholder} className={base} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={base} />
      )}
    </label>
  )
}
```

- [ ] **Step 2: Komponente in `app/page.tsx` einbinden — direkt nach Über-uns-Sektion**

```tsx
import { QuoteForm } from "@/components/quote-form"

// ... innerhalb des Returns nach </section> der Über-uns:
<QuoteForm />
```

- [ ] **Step 3: Platzhalter-Bild für die Dame**

Da das echte Bild noch nicht geliefert ist, vorübergehend einen vorhandenen Asset wiederverwenden:

```bash
cp public/images/hero-facility-manager.jpg public/images/quote-lady.jpg
```

Im Plan-Output an den Kunden anmerken: **„Bild der netten Dame bitte als `quote-lady.jpg` (4:5 Hochformat) liefern."**

- [ ] **Step 4: Visuelle Prüfung**

Run: `npm run dev`
Expected: Sektion `#angebot` zeigt links die Dame + Rabatt-Karte, rechts das Formular mit allen Feldern; Submit öffnet `mailto:fedox@outlook.de` mit vorbefülltem Body.

- [ ] **Step 5: Commit**

```bash
git add components/quote-form.tsx app/page.tsx public/images/quote-lady.jpg
git commit -m "feat: angebotsformular mit mailto-handoff und neukundenrabatt"
```

---

## Task 10: Floating Sidebar (FABs rechts)

**Files:**
- Create: `components/floating-actions.tsx`
- Modify: [app/layout.tsx](app/layout.tsx)

- [ ] **Step 1: Komponente schreiben**

```tsx
// components/floating-actions.tsx
import { Mail, Phone, Instagram, MessageCircle } from "lucide-react"
import { contact } from "@/lib/contact"

const actions = [
  { href: `mailto:${contact.email}`, icon: Mail, label: "E-Mail", color: "bg-[color:var(--brand-deep)]" },
  { href: `tel:${contact.phoneTel}`, icon: Phone, label: "Anrufen", color: "bg-[color:var(--brand)]" },
  { href: contact.instagram, icon: Instagram, label: "Instagram", color: "bg-pink-500" },
  { href: contact.whatsapp, icon: MessageCircle, label: "WhatsApp", color: "bg-green-500" },
]

export function FloatingActions() {
  return (
    <div className="pointer-events-none fixed inset-y-0 right-0 z-40 hidden items-center pr-3 md:flex">
      <ul className="pointer-events-auto flex flex-col gap-3 rounded-full bg-white/80 p-2 shadow-xl ring-1 ring-black/5 backdrop-blur-md">
        {actions.map(({ href, icon: Icon, label, color }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-md transition-transform hover:scale-110 ${color}`}
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

- [ ] **Step 2: In Layout einhängen**

In [app/layout.tsx](app/layout.tsx) importieren und vor `</body>` einfügen:

```tsx
import { FloatingActions } from "@/components/floating-actions"

// ...
<body className="flex min-h-full flex-col bg-background font-sans text-foreground">
  <SiteHeader />
  <main className="flex-1">{children}</main>
  <SiteFooter />
  <FloatingActions />
</body>
```

- [ ] **Step 3: Visuell prüfen**

Run: `npm run dev`
Expected: Auf Desktop schwebt rechts mittig eine kleine Pille mit 4 farbigen Icons. Mobile: nicht sichtbar (kollidiert mit Daumen/UI).

- [ ] **Step 4: Commit**

```bash
git add components/floating-actions.tsx app/layout.tsx
git commit -m "feat: sticky floating actions mail tel insta whatsapp"
```

---

## Task 11: SEO-Städte Block für Footer

**Files:**
- Create: `components/seo-cities.tsx`
- Modify: [components/site-footer.tsx](components/site-footer.tsx)

- [ ] **Step 1: Komponente schreiben**

```tsx
// components/seo-cities.tsx
const cities = [
  "Dortmund",
  "Recklinghausen",
  "Dorsten",
  "Lüdinghausen",
  "Waltrop",
  "Castrop-Rauxel",
  "Herne",
  "Bochum",
  "Witten",
  "Lünen",
  "Schwerte",
  "Unna",
]

export function SeoCities() {
  return (
    <div className="border-t border-white/10 pt-10">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-white/80">
        Gebäudereinigung in Ihrer Region
      </h3>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60">
        {cities.map((city) => (
          <li key={city}>Gebäudereinigung {city}</li>
        ))}
      </ul>
    </div>
  )
}
```

- [ ] **Step 2: Footer anpassen — Kontaktdaten ersetzen, Service-Links auf Anker, SEO-Block einfügen**

Komplett-Ersatz für [components/site-footer.tsx](components/site-footer.tsx):

```tsx
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Smartphone, MapPin } from "lucide-react"
import { services } from "@/lib/services"
import { contact } from "@/lib/contact"
import { SeoCities } from "@/components/seo-cities"

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[color:var(--brand-deep)] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(600px circle at 20% 0%, rgba(63,169,245,0.35), transparent 60%), radial-gradient(800px circle at 80% 100%, rgba(63,169,245,0.2), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Image
              src="/logo/fedox-logo.png"
              alt="fedox Facility Services"
              width={720}
              height={216}
              className="-ml-2 h-48 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
              Sauberkeit und Hygiene in Perfektion. Ihr verlässlicher Partner
              für Gebäudemanagement und Reinigungsdienstleistungen.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Leistungen
            </h3>
            <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/#leistungen"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Kontakt
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-drop)]" />
                <a href={`tel:${contact.phoneTel}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-drop)]" />
                <a href={`tel:${contact.mobileTel}`} className="hover:text-white">
                  {contact.mobile}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-drop)]" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-drop)]" />
                <span>Dortmund<br />Nordrhein-Westfalen</span>
              </li>
            </ul>
          </div>
        </div>

        <SeoCities />

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} fedox Facility Services. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Visuelle Prüfung**

Run: `npm run dev`
Expected: Footer zeigt neue Kontaktdaten (`fedox@outlook.de`, `0231 53035483`, `0163 8672944`), Service-Links scrollen zu `#leistungen`, SEO-Städte-Liste sichtbar.

- [ ] **Step 4: Commit**

```bash
git add components/seo-cities.tsx components/site-footer.tsx
git commit -m "feat(footer): neue kontaktdaten, anker-links, seo-staedte"
```

---

## Task 12: Sub-Routen entfernen (Single-Page-Vorgabe)

**Files:**
- Delete: `app/leistungen/` (ganzer Ordner inkl. `[slug]/page.tsx`)
- Delete: `app/kontakt/` (ganzer Ordner inkl. `page.tsx`)

- [ ] **Step 1: Sub-Routen löschen**

```bash
rm -r app/leistungen
rm -r app/kontakt
```

- [ ] **Step 2: Build prüfen**

Run: `npm run build`
Expected: Build läuft durch. Falls noch Importe auf gelöschte Dateien zeigen → finden und fixen:

```bash
npm run build 2>&1 | tee /tmp/build.log
```

- [ ] **Step 3: Type-Check + Lint**

Run: `npm run lint`
Expected: kein Fehler.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "refactor: sub-routen entfernen, alles auf eine landing page"
```

---

## Task 13: Metadata aktualisieren

**Files:**
- Modify: [app/layout.tsx](app/layout.tsx)

- [ ] **Step 1: Metadata mit neuen Texten und Kontakt**

```tsx
export const metadata: Metadata = {
  title: "fedox Facility Services | Sauberkeit und Werterhalt aus einer Hand",
  description:
    "Ihr Partner für Sauberkeit und Werterhalt in Dortmund und Umgebung. Unterhalts-, Glas-, Fassaden- und Sonderreinigung sowie Gebäudemanagement. Jetzt 15 % Neukundenrabatt sichern.",
  metadataBase: new URL("https://fedox-facilityservices.de"),
}
```

- [ ] **Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat(seo): metadata mit neuen kunden-keywords"
```

---

## Task 14: Hero-Tropfen-Animation aufpolieren

**Files:**
- Modify: [components/ui/hero-shader.tsx](components/ui/hero-shader.tsx)

Der Kunde will am Hero-Bild „mit Tropfen und Animation noch was rausholen". Das ist Feintuning, kein Rebuild.

- [ ] **Step 1: Datei lesen, Shader-Parameter identifizieren**

```bash
# Im Editor öffnen — kein automatischer Step, da das Tuning visuell ist
```

- [ ] **Step 2: Parameter testen**

Im Dev-Server schrittweise:
- Drop-Anzahl/-Geschwindigkeit erhöhen
- Sekundären Glow stärker
- ggf. eine subtile Float-Animation (`framer-motion`) auf das Logo-Pill hinzufügen

Konkrete Werte hängen vom aktuellen Shader-Setup ab — nach dem Lesen der Datei festlegen, **bevor** Code geändert wird. Wenn das Tuning länger als 30 min dauert, an User zurückspielen mit Screenshot.

- [ ] **Step 3: Vor/Nach-Screenshot mit dem Kunden abstimmen**

Optional via Vercel-Preview-Deploy.

- [ ] **Step 4: Commit**

```bash
git add components/ui/hero-shader.tsx
git commit -m "feat(hero): tropfen-shader aufpoliert"
```

---

## Task 15: Endabnahme-Checkliste

- [ ] **Step 1: Build & Lint sauber**

```bash
npm run build
npm run lint
```

Expected: beides ohne Fehler.

- [ ] **Step 2: Klick-Test der Landingpage**

Manuell prüfen:
- Header: Logo führt zu `/`, Nav-Anker scrollen zu Sektionen, „Anrufen" öffnet `tel:`, „Angebot" scrollt zu `#angebot`.
- Hero: neue Headline + Intro sichtbar, Telefon-CTA zeigt `0231 53035483`.
- Leistungen: 8 Karten in der vom Kunden gewünschten Reihenfolge.
- Stats-Bar: 4 Werte, Brand-Farben.
- Über-uns: „Seit 2020" + neue Bullets.
- Quote-Form: alle Felder vorhanden, Submit öffnet `mailto:fedox@outlook.de` mit korrektem Body.
- Marquee: Logos laufen, Hover pausiert.
- Floating Actions: alle 4 Icons reagieren.
- Footer: neue Kontaktdaten, SEO-Städte sichtbar.
- Keine 404 (alte `/leistungen/...`-Links müssen weg sein).

- [ ] **Step 3: Offene Punkte an den Kunden zurückspielen**

E-Mail- oder WhatsApp-Notiz mit:
1. „Bitte liefere uns das Foto der Dame für das Angebotsformular (4:5 Hochformat)."
2. „Bitte liefere die finalen Logos für BG BAU, HWK Dortmund, IHK Dortmund und Gebäudereiniger-Innung Dortmund (SVG bevorzugt)."
3. „Bitte sende ein separates Foto für die Sektion `Fassadenreinigung` — aktuell wird das Glas/Fassade-Bild geteilt."
4. „Bitte bestätige Instagram-Handle und WhatsApp-Nummer für die Floating-Actions."

---

## Self-Review

**Spec coverage:**
- Hero-Headline + Intro ✓ (Task 3)
- Hero-Bild Tropfen-Tuning ✓ (Task 14)
- Header zwei Buttons ✓ (Task 4)
- Leistungen-Headline + Reihenfolge + 8 Services ✓ (Task 2, 5)
- Service-Texte (Unterhalts, Glas, Treppe, Hygiene, Fassade, Sonder, PV, Gebäude) ✓ (Task 2)
- Winterdienst/Grünpflege/Entrümpelung in Gebäudemanagement ✓ (Task 2)
- Stats-Bar Seit 2020 / 98 % / 740+ / 365 ✓ (Task 6)
- Über uns „Seit 2020 — Kompetenz aus einer Hand" ✓ (Task 7)
- Referenz-Marquee + 4 Zertifikate ✓ (Task 8)
- Angebotsformular mit allen Feldern + Dame + Rabatt ✓ (Task 9)
- Floating Sidebar Mail/Tel/Insta/WA ✓ (Task 10)
- SEO-Städte im Footer ✓ (Task 11)
- Kontaktdaten überall ersetzt ✓ (Task 1, 4, 11)
- Single-Page (Sub-Routen weg) ✓ (Task 12)
- Metadata Update ✓ (Task 13)
- Endabnahme & Open-Items ✓ (Task 15)

**Placeholder-Scan:** Keine TBDs, keine „implement later", keine vagen „handle edge cases". Asset-Platzhalter sind explizit als solche markiert mit Folgemaßnahme in Task 15.

**Type-Konsistenz:** `Service`-Type bleibt unverändert, `services`-Array konsistent. `contact`-Objekt-Felder werden überall identisch referenziert (`phone`, `phoneTel`, `email`, `mobile`, `mobileTel`, `whatsapp`, `instagram`).
