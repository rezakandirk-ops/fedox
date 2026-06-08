"use server"

import nodemailer from "nodemailer"

export type QuoteResult =
  | { ok: true }
  | { ok: false; error: string }

const REQUIRED = ["dienstleistung", "turnus", "flaeche", "name", "email", "ort", "kundenart"] as const

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function sendQuote(_prev: QuoteResult | null, formData: FormData): Promise<QuoteResult> {
  // Honeypot — Bots füllen oft alle Felder, echte Nutzer nicht
  if (formData.get("website")) {
    return { ok: true } // still leise erfolgreich tun für Bots
  }

  const fields = {
    dienstleistung: String(formData.get("dienstleistung") ?? "").trim(),
    turnus: String(formData.get("turnus") ?? "").trim(),
    flaeche: String(formData.get("flaeche") ?? "").trim(),
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    telefon: String(formData.get("telefon") ?? "").trim(),
    ort: String(formData.get("ort") ?? "").trim(),
    kundenart: String(formData.get("kundenart") ?? "").trim(),
    firma: String(formData.get("firma") ?? "").trim(),
    erlaeuterung: String(formData.get("erlaeuterung") ?? "").trim(),
  }

  for (const key of REQUIRED) {
    if (!fields[key]) return { ok: false, error: `Bitte füllen Sie das Feld "${key}" aus.` }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return { ok: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT ?? 465)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.MAIL_TO ?? user
  const from = process.env.MAIL_FROM ?? user

  if (!host || !user || !pass || !to || !from) {
    console.error("[send-quote] SMTP env vars missing")
    return { ok: false, error: "Versand aktuell nicht möglich. Bitte später erneut versuchen oder direkt anrufen." }
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  const subject = `Angebotsanfrage – ${fields.dienstleistung} (${fields.ort})`

  const textLines = [
    `Neue Angebotsanfrage über fedox-facilityservices.de`,
    ``,
    `Dienstleistung: ${fields.dienstleistung}`,
    `Turnus: ${fields.turnus}`,
    `Reinigungsfläche (qm): ${fields.flaeche}`,
    `Gewerblich/Privat: ${fields.kundenart}`,
    ``,
    `Ansprechpartner: ${fields.name}`,
    `E-Mail: ${fields.email}`,
    `Telefon: ${fields.telefon || "—"}`,
    `Ort: ${fields.ort}`,
    `Firmenname: ${fields.firma || "—"}`,
    ``,
    `Erläuterung:`,
    fields.erlaeuterung || "—",
  ]

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:600px;color:#0B3B6F">
      <h2 style="color:#1E6BB8;margin:0 0 16px">Neue Angebotsanfrage</h2>
      <p style="color:#555;margin:0 0 24px">über fedox-facilityservices.de</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${[
          ["Dienstleistung", fields.dienstleistung],
          ["Turnus", fields.turnus],
          ["Reinigungsfläche", fields.flaeche + " qm"],
          ["Gewerblich/Privat", fields.kundenart],
          ["Ansprechpartner", fields.name],
          ["E-Mail", `<a href="mailto:${escapeHtml(fields.email)}" style="color:#1E6BB8">${escapeHtml(fields.email)}</a>`],
          ["Telefon", fields.telefon ? `<a href="tel:${escapeHtml(fields.telefon)}" style="color:#1E6BB8">${escapeHtml(fields.telefon)}</a>` : "—"],
          ["Ort", fields.ort],
          ["Firmenname", fields.firma || "—"],
        ]
          .map(
            ([label, value]) =>
              `<tr><td style="padding:8px 0;border-bottom:1px solid #E8F2FB;color:#0B3B6F;font-weight:600;width:160px">${label}</td><td style="padding:8px 0;border-bottom:1px solid #E8F2FB">${typeof value === "string" && !value.includes("<a ") ? escapeHtml(value) : value}</td></tr>`,
          )
          .join("")}
      </table>
      ${
        fields.erlaeuterung
          ? `<div style="margin-top:24px"><p style="color:#0B3B6F;font-weight:600;margin:0 0 8px">Erläuterung</p><p style="white-space:pre-wrap;margin:0;color:#333;line-height:1.5">${escapeHtml(fields.erlaeuterung)}</p></div>`
          : ""
      }
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"Fedox Website" <${from}>`,
      to,
      replyTo: fields.email,
      subject,
      text: textLines.join("\n"),
      html,
    })
    return { ok: true }
  } catch (err) {
    console.error("[send-quote] SMTP error:", err)
    return {
      ok: false,
      error: "Versand fehlgeschlagen. Bitte später erneut versuchen oder rufen Sie uns an.",
    }
  }
}
