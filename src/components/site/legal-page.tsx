import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getDictionary, isLocale, links, type Dictionary } from "@/lib/dictionaries"
import { pageAlternates } from "@/lib/site"

type LegalKey = keyof Dictionary["legal"]

/** Ruta de cada documento, sin idioma. Coincide con las carpetas de app/[lang]. */
const paths: Record<LegalKey, string> = {
  avisoLegal: "/aviso-legal",
  privacidad: "/privacidad",
  cookies: "/cookies",
}

function fill(text: string, lang: "es" | "eu") {
  const nif = links.nif ? ` (${lang === "es" ? "NIF" : "IFZ"}: ${links.nif})` : ""
  return text.split("{email}").join(links.email).split("{nif}").join(nif)
}

export async function legalMetadata(params: Promise<{ lang: string }>, key: LegalKey): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const doc = getDictionary(lang).legal[key]
  const title = `${doc.title} · Barakaldo Makers`
  return {
    title,
    description: fill(doc.sections[0].body, lang).slice(0, 155),
    alternates: pageAlternates(lang, paths[key]),
    openGraph: { title, url: `/${lang}${paths[key]}/` },
  }
}

export async function LegalPage({ params, doc: key }: { params: Promise<{ lang: string }>; doc: LegalKey }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const { title, updated, sections } = getDictionary(lang).legal[key]

  return (
    <main id="main" className="flex-1">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <h1 className="font-display text-step-4 font-black leading-none text-balance">{title}</h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">{updated}</p>

        <div className="mt-10 space-y-8 text-step-0 leading-relaxed text-muted-foreground">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-step-1 font-bold text-foreground">{section.title}</h2>
              <p className="mt-3">{fill(section.body, lang)}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}
