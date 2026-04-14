# Fedox — Fehlende Services ergänzen + Hero-Texte anpassen

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ergänze die 6 fehlenden Leistungen laut Kundeninfos in `lib/services.ts` (mit Tagline, Shortdescription, Longdescription, Bullets, Image, Icon) und passe die Hero-/Leistungs-Texte in `app/page.tsx` von "8 Leistungen" auf 14 an.

**Architecture:** Rein daten- und textgetriebene Änderung. Keine neuen Komponenten, keine Routing-Änderungen. `lib/services.ts` exportiert ein Array, das auf der Startseite gerendert wird; durch Hinzufügen neuer Einträge erscheinen die Karten automatisch im Grid. Die Hero-Badges und die Leistungs-Section enthalten hardcoded Zählungen ("8 Leistungen aus einer Hand", "Acht Leistungen aus einer Hand") die aktualisiert werden müssen.

**Tech Stack:** Next.js 16 (Turbopack), React 19, TypeScript, Tailwind v4, lucide-react v1.8.0

**Kontext / Quellen:**
- Kundeninfos: `C:\Users\rezakandi\Downloads\fedox\Infos über den Kunden.txt` — enthält den Originaltext aller Leistungen
- Vorhandene Bilder in `public/images/`: `industrie.jpg`, `baustelle.jpg`, `stein-pflaster.jpg`, `gartenpflege.jpg`, `winterdienst.jpg`, `entruempelung.jpg` — bereits da, keine Beschaffung nötig
- Kein Testframework installiert (nur `lint` + `build`). Verifikation erfolgt über `npx tsc --noEmit`, `npm run lint` und Browser-Check am laufenden Dev-Server (http://localhost:3000)

**Neue Gesamtanzahl:** 8 bestehende + 6 neue = **14 Leistungen**

---

## File Structure

**Zu ändern:**
- `lib/services.ts` — 6 neue Einträge am Ende des `services` Arrays anhängen, neue Icon-Imports aus `lucide-react`
- `app/page.tsx` — Zeile 61 (Trust-Badge) und Zeile 93 (Intro-Absatz) auf 14 Leistungen umstellen

**Nicht anfassen:**
- `components/stats-bar.tsx` — enthält keine Leistungszahl
- `components/site-header.tsx`, `site-footer.tsx` — kein Count
- `gebaeudemanagement`-Eintrag — Bullets bleiben, da Gebäudemanagement als Orchestrierungspaket Grünpflege/Winterdienst/Entrümpelung weiterhin umfasst (laut Kundentext Zeile 5)

---

## Task 1: Industriereinigung zu services.ts hinzufügen

**Files:**
- Modify: `lib/services.ts` (Icon-Import erweitern, neuen Service-Eintrag am Ende einfügen)

- [ ] **Step 1: Icon-Import erweitern**

Öffne `lib/services.ts` und ersetze den Import-Block (Zeilen 2-12):

```ts
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
```

- [ ] **Step 2: Industriereinigung-Eintrag einfügen**

Am Ende des `services`-Arrays, **vor** der schließenden `]` (aktuell Zeile 162), folgenden Eintrag hinzufügen. Achte darauf, nach dem vorherigen `gebaeudemanagement`-Objekt ein Komma zu setzen:

```ts
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
```

- [ ] **Step 3: Typecheck + Lint**

```bash
cd /c/Users/rezakandi/Documents/Claude/Projects/fedox && npx tsc --noEmit && npm run lint
```

Expected: Keine Fehler. Dev-Server HMR lädt automatisch neu.

- [ ] **Step 4: Commit**

```bash
git add lib/services.ts
git commit -m "feat(services): add Industriereinigung service entry"
```

---

## Task 2: Baustellen- / Bauendreinigung zu services.ts hinzufügen

**Files:**
- Modify: `lib/services.ts`

- [ ] **Step 1: Baustellen-Eintrag nach Industriereinigung anhängen**

Direkt nach dem Industriereinigung-Eintrag aus Task 1 einfügen:

```ts
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
```

- [ ] **Step 2: Typecheck**

```bash
cd /c/Users/rezakandi/Documents/Claude/Projects/fedox && npx tsc --noEmit
```

Expected: Keine Fehler.

- [ ] **Step 3: Commit**

```bash
git add lib/services.ts
git commit -m "feat(services): add Baustellen- & Bauendreinigung service entry"
```

---

## Task 3: Stein- & Pflasterreinigung zu services.ts hinzufügen

**Files:**
- Modify: `lib/services.ts`

- [ ] **Step 1: Stein-Pflaster-Eintrag anhängen**

Nach dem Baustellen-Eintrag einfügen:

```ts
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
```

- [ ] **Step 2: Typecheck**

```bash
cd /c/Users/rezakandi/Documents/Claude/Projects/fedox && npx tsc --noEmit
```

Expected: Keine Fehler.

- [ ] **Step 3: Commit**

```bash
git add lib/services.ts
git commit -m "feat(services): add Stein- & Pflasterreinigung service entry"
```

---

## Task 4: Gartenpflege zu services.ts hinzufügen

**Files:**
- Modify: `lib/services.ts`

- [ ] **Step 1: Gartenpflege-Eintrag anhängen**

Nach dem Stein-Pflaster-Eintrag einfügen:

```ts
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
```

- [ ] **Step 2: Typecheck**

```bash
cd /c/Users/rezakandi/Documents/Claude/Projects/fedox && npx tsc --noEmit
```

Expected: Keine Fehler.

- [ ] **Step 3: Commit**

```bash
git add lib/services.ts
git commit -m "feat(services): add Gartenpflege service entry"
```

---

## Task 5: Winterdienst zu services.ts hinzufügen

**Files:**
- Modify: `lib/services.ts`

- [ ] **Step 1: Winterdienst-Eintrag anhängen**

Nach dem Gartenpflege-Eintrag einfügen:

```ts
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
```

- [ ] **Step 2: Typecheck**

```bash
cd /c/Users/rezakandi/Documents/Claude/Projects/fedox && npx tsc --noEmit
```

Expected: Keine Fehler.

- [ ] **Step 3: Commit**

```bash
git add lib/services.ts
git commit -m "feat(services): add Winterdienst service entry"
```

---

## Task 6: Entrümpelung & Räumung zu services.ts hinzufügen

**Files:**
- Modify: `lib/services.ts`

- [ ] **Step 1: Entrümpelungs-Eintrag anhängen**

Nach dem Winterdienst-Eintrag einfügen (letzter neuer Eintrag vor dem schließenden `]` des Arrays):

```ts
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
```

- [ ] **Step 2: Typecheck + Lint + Build-Test**

```bash
cd /c/Users/rezakandi/Documents/Claude/Projects/fedox && npx tsc --noEmit && npm run lint
```

Expected: Keine Fehler. Alle 14 Services sind nun im Array.

- [ ] **Step 3: Commit**

```bash
git add lib/services.ts
git commit -m "feat(services): add Entrümpelung & Räumung service entry"
```

---

## Task 7: Hero-Texte in app/page.tsx auf 14 Leistungen anpassen

**Files:**
- Modify: `app/page.tsx:61` (Trust-Badge)
- Modify: `app/page.tsx:93-96` (Intro-Absatz der Leistungs-Section)

- [ ] **Step 1: Trust-Badge aktualisieren**

In `app/page.tsx`, Zeile 61, ersetze:

```tsx
{ icon: CheckCircle2, label: "8 Leistungen aus einer Hand" },
```

durch:

```tsx
{ icon: CheckCircle2, label: "14 Leistungen aus einer Hand" },
```

- [ ] **Step 2: Leistungs-Intro aktualisieren**

In `app/page.tsx`, Zeilen 92-96, ersetze den Absatz:

```tsx
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Acht Leistungen aus einer Hand — von der täglichen Büroreinigung bis
              zum ganzheitlichen Gebäudemanagement. Wir decken das gesamte Spektrum
              moderner Facility Services ab.
            </p>
```

durch:

```tsx
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Vierzehn Leistungen aus einer Hand — von der täglichen Büroreinigung
              über Winterdienst und Gartenpflege bis zum ganzheitlichen
              Gebäudemanagement. Wir decken das gesamte Spektrum moderner Facility
              Services ab.
            </p>
```

- [ ] **Step 3: Typecheck + Lint**

```bash
cd /c/Users/rezakandi/Documents/Claude/Projects/fedox && npx tsc --noEmit && npm run lint
```

Expected: Keine Fehler.

- [ ] **Step 4: Visuelle Verifikation im Browser**

Dev-Server läuft bereits auf http://localhost:3000 (Background-Task `b141kdw9e`).

Manuell prüfen:
- Hero-Badge zeigt "14 Leistungen aus einer Hand"
- Leistungs-Section zeigt im Intro "Vierzehn Leistungen aus einer Hand …"
- Leistungs-Grid rendert 14 Karten in 3 Spalten (letzte Reihe mit 2 Karten auf Desktop)
- Jede neue Karte zeigt Bild, Icon, Tagline, Titel, Shortdescription und "Angebot anfragen"-Link
- Keine Konsolen-Fehler (DevTools → Console)

Falls ein Bild fehlt oder das Icon nicht lädt: Screenshot machen und melden.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat(hero): update service count from 8 to 14"
```

---

## Self-Review

**Spec coverage:**
- Industriereinigung → Task 1 ✓
- Baustellen- / Bauendreinigung → Task 2 ✓
- Stein- & Pflasterreinigung → Task 3 ✓
- Gartenpflege → Task 4 ✓
- Winterdienst → Task 5 ✓
- Entrümpelung & Räumung → Task 6 ✓
- Hero-Texte "8 Leistungen" → Task 7 ✓

**Placeholder-Scan:** Keine TBD/TODO/"ähnlich zu"-Platzhalter. Jeder Service enthält kompletten Code-Block.

**Type-Konsistenz:** Alle neuen Einträge folgen dem bestehenden `Service`-Type (Zeilen 14-23 in `lib/services.ts`): `slug`, `title`, `tagline`, `shortDescription`, `longDescription`, `bullets`, `image`, `icon`. Alle Icon-Imports (`Factory`, `HardHat`, `Droplets`, `Leaf`, `Snowflake`, `Truck`) wurden in Task 1 Step 1 zentral hinzugefügt.

**Bilder:** Alle 6 Bilder existieren bereits in `public/images/` (verifiziert vor Plan-Erstellung).

**Commits:** 7 kleine Commits, einer pro Task. Ermöglicht einfaches Zurückrollen einzelner Services.
