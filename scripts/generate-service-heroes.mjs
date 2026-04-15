// Runway-Batch: 14 Hero-Bilder fuer Fedox-Leistungsseiten
// Aufruf: RUNWAY_API_KEY=key_... node scripts/generate-service-heroes.mjs
import fs from "node:fs"
import path from "node:path"

const API = "https://api.dev.runwayml.com/v1"
const HEADERS = {
  Authorization: `Bearer ${process.env.RUNWAY_API_KEY}`,
  "X-Runway-Version": "2024-11-06",
  "Content-Type": "application/json",
}

const OUT_DIR = path.resolve(process.cwd(), "public/images/services")
fs.mkdirSync(OUT_DIR, { recursive: true })

// Einheitlicher Style-Block: Fedox-Kleidung, Dortmund-Feel, Brand-Farben
const UNIFORM =
  "wearing a dark navy blue softshell work jacket with a small white 'fedox' wordmark and water-drop logo on the left chest, professional facility services worker"
const STYLE =
  "editorial documentary photography, natural daylight, shallow depth of field, authentic and trustworthy mood, cool blue color grading with accents of deep navy and bright cyan, high detail, sharp focus, 8k, no text overlays, no watermarks"

const services = [
  {
    slug: "unterhalts-buerorein",
    prompt: `Friendly German male cleaner ${UNIFORM}, wiping a modern office desk with a microfiber cloth in a bright contemporary open-plan office in Dortmund, large windows, plants in background, early morning light, ${STYLE}`,
  },
  {
    slug: "glas-rahmenreinigung",
    prompt: `Professional window cleaner ${UNIFORM}, cleaning a large glass facade panel with a squeegee, reflection of a modern Dortmund office building visible in the glass, crisp streak-free result, ${STYLE}`,
  },
  {
    slug: "treppenhausreinigung",
    prompt: `Diligent cleaner ${UNIFORM}, mopping a bright staircase in a clean German residential apartment building, polished handrail, daylight streaming through a staircase window, calm and inviting atmosphere, ${STYLE}`,
  },
  {
    slug: "hygiene-desinfektion",
    prompt: `Hygiene specialist ${UNIFORM}, wearing nitrile gloves, disinfecting a stainless steel surface in a modern medical office or sanitary area with a professional spray bottle, clinical cleanliness, calm trustworthy mood, ${STYLE}`,
  },
  {
    slug: "fassadenreinigung",
    prompt: `Facade cleaner ${UNIFORM}, using a low-pressure telescopic brush system to clean the plaster facade of a German apartment building, water droplets in the air catching sunlight, scaffolding faintly visible, ${STYLE}`,
  },
  {
    slug: "sonderreinigung",
    prompt: `Specialist cleaner ${UNIFORM}, holding a professional extraction machine and deep-cleaning a carpet in a commercial space, focused and skilled expression, steam visible, ${STYLE}`,
  },
  {
    slug: "photovoltaikreinigung",
    prompt: `Technician ${UNIFORM}, gently cleaning a row of solar PV panels on a flat industrial roof with a soft telescopic brush and pure water, blue sky reflecting on panels, German industrial park in background, ${STYLE}`,
  },
  {
    slug: "gebaeudemanagement",
    prompt: `Confident facility manager ${UNIFORM}, holding a tablet and inspecting a modern commercial building entrance in Dortmund, glass doors and company signage softly blurred behind, competent and reliable vibe, ${STYLE}`,
  },
  {
    slug: "industriereinigung",
    prompt: `Industrial cleaner ${UNIFORM}, operating a ride-on floor scrubber machine in a vast clean industrial warehouse with high ceilings, epoxy floor, safety lines, ${STYLE}`,
  },
  {
    slug: "baustellenreinigung",
    prompt: `Construction cleaning specialist ${UNIFORM} plus protective hard hat, vacuuming fine dust from a freshly renovated interior of a German new-build apartment, tools and construction dust slightly visible, ${STYLE}`,
  },
  {
    slug: "stein-pflasterreinigung",
    prompt: `Outdoor cleaner ${UNIFORM}, operating a professional hot-water high-pressure cleaner on a cobblestone driveway in front of a German residential property, visible contrast between cleaned and dirty stone, water mist in the air, ${STYLE}`,
  },
  {
    slug: "gartenpflege",
    prompt: `Gardener ${UNIFORM}, trimming a neatly shaped hedge with professional hedge trimmers in a well-kept German garden in front of a commercial property, green lawn, sunny day, ${STYLE}`,
  },
  {
    slug: "winterdienst",
    prompt: `Winter service worker ${UNIFORM}, clearing snow with a professional snow blower on a walkway in front of a German office building, early winter morning, fresh snow, breath visible, ${STYLE}`,
  },
  {
    slug: "entruempelung",
    prompt: `Clearance worker ${UNIFORM}, carrying a moving box out of an empty apartment into a waiting transporter van, clean empty rooms visible behind, focused and efficient, ${STYLE}`,
  },
]

const RATIO = "1344:768" // 16:9 Hero

async function createTask(promptText) {
  const r = await fetch(`${API}/text_to_image`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({
      promptText,
      ratio: RATIO,
      model: "gemini_2.5_flash",
    }),
  })
  if (!r.ok) {
    const t = await r.text()
    throw new Error(`create failed ${r.status}: ${t}`)
  }
  const j = await r.json()
  return j.id
}

async function pollTask(id) {
  for (let i = 0; i < 90; i++) {
    await new Promise((res) => setTimeout(res, 3000))
    const r = await fetch(`${API}/tasks/${id}`, { headers: HEADERS })
    if (!r.ok) continue
    const j = await r.json()
    if (j.status === "SUCCEEDED") return j.output?.[0]
    if (j.status === "FAILED") throw new Error(`task failed: ${JSON.stringify(j)}`)
  }
  throw new Error("timeout")
}

async function download(url, outPath) {
  const r = await fetch(url)
  if (!r.ok) throw new Error(`download failed ${r.status}`)
  const buf = Buffer.from(await r.arrayBuffer())
  fs.writeFileSync(outPath, buf)
}

async function generateOne(svc) {
  const outFile = path.join(OUT_DIR, `${svc.slug}.png`)
  if (fs.existsSync(outFile)) {
    console.log(`[skip] ${svc.slug} already exists`)
    return { slug: svc.slug, status: "skipped" }
  }
  try {
    console.log(`[start] ${svc.slug}`)
    const id = await createTask(svc.prompt)
    const url = await pollTask(id)
    if (!url) throw new Error("no output url")
    await download(url, outFile)
    console.log(`[done]  ${svc.slug} -> ${outFile}`)
    return { slug: svc.slug, status: "ok", file: outFile }
  } catch (e) {
    console.error(`[fail]  ${svc.slug}: ${e.message}`)
    return { slug: svc.slug, status: "fail", error: e.message }
  }
}

const CONCURRENCY = 3
const queue = [...services]
const results = []

async function worker() {
  while (queue.length) {
    const svc = queue.shift()
    if (!svc) return
    results.push(await generateOne(svc))
  }
}

const workers = Array.from({ length: CONCURRENCY }, () => worker())
await Promise.all(workers)

console.log("\n=== Summary ===")
for (const r of results) console.log(`${r.status.padEnd(8)} ${r.slug}`)
const okCount = results.filter((r) => r.status === "ok").length
const skipCount = results.filter((r) => r.status === "skipped").length
const failCount = results.filter((r) => r.status === "fail").length
console.log(`\nOK: ${okCount}  SKIP: ${skipCount}  FAIL: ${failCount}`)
process.exit(failCount ? 1 : 0)
