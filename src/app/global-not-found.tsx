import type { Metadata } from "next"
import { Archivo, IBM_Plex_Sans } from "next/font/google"
import { getDictionary, locales } from "@/lib/dictionaries"
import { asset } from "@/lib/site"
import "./globals.css"

const display = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-display", display: "swap" })
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-body", display: "swap" })

export const metadata: Metadata = {
  title: "404 · Barakaldo Makers",
  robots: { index: false },
}

// Sin idioma en la URL no sabemos cuál mostrar: se muestran los dos.
export default function GlobalNotFound() {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="lab-grid flex min-h-full items-center">
        <main id="main" className="mx-auto grid w-full max-w-5xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
          <h1 className="font-display text-step-5 font-black leading-none md:col-span-2">
            <span className="bg-accent px-2">404</span>
          </h1>
          {locales.map((lang) => {
            const t = getDictionary(lang).notFound
            return (
              <section key={lang} lang={lang} className="border-t-2 border-foreground pt-6">
                <h2 className="font-display text-step-3 font-black leading-tight">{t.title}</h2>
                <p className="mt-4 text-muted-foreground">{t.body}</p>
                <a
                  href={asset(`/${lang}/`)}
                  className="btn-press mt-6 inline-flex h-12 items-center rounded-sm border-2 border-foreground bg-accent px-6 font-semibold"
                >
                  {t.back}
                </a>
              </section>
            )
          })}
        </main>
      </body>
    </html>
  )
}
