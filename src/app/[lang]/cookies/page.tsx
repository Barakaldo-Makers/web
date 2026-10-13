import type { Metadata } from "next"
import { getDictionary, isLocale, links } from "@/lib/dictionaries"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang)
  return {
    title: `${t.footer.legal[2].label} · Barakaldo Makers`,
    description: t.footer.legal[2].label,
  }
}

export default async function CookiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) return null
  const t = getDictionary(lang)
  const { updated, sections } = t.legal.cookies

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <h1 className="font-display text-step-4 font-black leading-none text-balance">
        {t.footer.legal[2].label}
      </h1>
      <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {updated}
      </p>

      <div className="mt-10 space-y-8 text-step-0 leading-relaxed text-muted-foreground">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-step-1 font-bold text-foreground">{section.title}</h2>
            <p className="mt-3">
              {section.body.split("{email}").join(links.email)}
            </p>
          </section>
        ))}
      </div>
    </div>
  )
}
