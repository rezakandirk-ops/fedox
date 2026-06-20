import type { ComponentType, SVGProps } from "react"
import { Mail, Phone, MessageCircle } from "lucide-react"
import { contact } from "@/lib/contact"

function InstagramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

type Action = {
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  color: string
}

const actions: Action[] = [
  { href: `tel:${contact.phoneTel}`, icon: Phone, label: "Anrufen", color: "bg-[color:var(--brand)] hover:bg-[color:var(--brand-deep)]" },
  { href: `mailto:${contact.email}`, icon: Mail, label: "E-Mail", color: "bg-[color:var(--brand-drop)] hover:bg-[color:var(--brand)]" },
  { href: contact.whatsapp, icon: MessageCircle, label: "WhatsApp", color: "bg-[#25D366] hover:bg-[#1fae54]" },
  { href: contact.instagram, icon: InstagramGlyph, label: "Instagram", color: "bg-[color:var(--brand-deep)] hover:bg-[color:var(--brand)]" },
]

export function FloatingActions() {
  return (
    <div className="pointer-events-none fixed inset-y-0 right-0 z-40 hidden items-center pr-3 md:flex">
      <ul className="pointer-events-auto flex flex-col gap-2.5 rounded-full bg-white/90 p-2 shadow-xl ring-1 ring-[color:var(--brand-soft)] backdrop-blur-md">
        {actions.map(({ href, icon: Icon, label, color }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-md transition-all hover:scale-110 ${color}`}
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
