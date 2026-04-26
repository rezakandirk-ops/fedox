import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingActions } from "@/components/floating-actions"

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

const siteTitle = "Fedox Facility Services | Sauberkeit und Werterhalt aus einer Hand"
const siteDescription =
  "Ihr Partner für Sauberkeit und Werterhalt in Dortmund und Umgebung. Unterhalts-, Glas-, Fassaden- und Sonderreinigung sowie Gebäudemanagement. Jetzt 15 % Neukundenrabatt sichern."

export const metadata: Metadata = {
  metadataBase: new URL("https://fedox-facilityservices.de"),
  title: {
    default: siteTitle,
    template: "%s | Fedox Facility Services",
  },
  description: siteDescription,
  applicationName: "Fedox Facility Services",
  authors: [{ name: "Fedox Facility Services" }],
  keywords: [
    "Gebäudereinigung Dortmund",
    "Facility Services",
    "Büroreinigung",
    "Fassadenreinigung",
    "Gebäudemanagement",
    "Winterdienst Dortmund",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://fedox-facilityservices.de",
    siteName: "Fedox Facility Services",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fedox Facility Services – Ihr Team für Gebäudereinigung in Dortmund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  )
}
