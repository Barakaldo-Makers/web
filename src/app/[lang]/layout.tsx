import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { Archivo, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google"
import { getDictionary, isLocale, locales } from "@/lib/dictionaries"
import { SiteHeader } from "@/components/site/header"
import { SiteFooter } from "@/components/site/footer"
import { SITE_URL, pageAlternates } from "@/lib/site"
import "../globals.css"

const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
})

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-jb",
  display: "swap",
})

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

// Exportación estática: cualquier idioma fuera de la lista es un 404
export const dynamicParams = false

export const viewport: Viewport = {
  themeColor: "#ffe100",
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang)

  return {
    metadataBase: new URL(`${SITE_URL}/`),
    title: t.meta.title,
    description: t.meta.description,
    alternates: pageAlternates(lang),
    openGraph: {
      type: "website",
      siteName: "Barakaldo Makers",
      title: t.meta.title,
      description: t.meta.description,
      url: `/${lang}/`,
      locale: lang === "es" ? "es_ES" : "eu_ES",
      alternateLocale: lang === "es" ? ["eu_ES"] : ["es_ES"],
      images: [{ url: "/images/openflexure.jpg", width: 800, height: 778, alt: t.hero.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@BarakaldoMakers",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/images/openflexure.jpg"],
    },
  }
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)

  return (
    <html
      lang={lang}
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{".reveal{opacity:1;transform:none}.mesh-route{stroke-dashoffset:0}"}</style>
        </noscript>
        <SiteHeader lang={lang} t={{ ui: t.ui, nav: t.nav }} />
        {children}
        <SiteFooter lang={lang} />
      </body>
    </html>
  )
}
