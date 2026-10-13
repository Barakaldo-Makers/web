import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { getDictionary, isLocale } from "@/lib/dictionaries"
import { asset, pageAlternates } from "@/lib/site"

const hoverOnly = "[@media(hover:hover)_and_(pointer:fine)]"

export async function generateMetadata({ params }: PageProps<"/[lang]/sobre-nosotros">): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang)
  const title = `${t.aboutPage.title} · Barakaldo Makers`
  return {
    title,
    description: t.aboutPage.body[0],
    alternates: pageAlternates(lang, "/sobre-nosotros"),
    openGraph: { title, description: t.aboutPage.body[0], url: `/${lang}/sobre-nosotros/` },
  }
}

export default async function SobreNosotros({ params }: PageProps<"/[lang]/sobre-nosotros">) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)
  const [lead, ...rest] = t.aboutPage.body

  return (
    <main id="main" className="flex-1">
      <article className="lab-grid">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:px-8">
          <header className="lg:col-span-7">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span aria-hidden="true" className="size-2.5 bg-accent ring-1 ring-foreground" />
              {t.aboutPage.eyebrow}
            </p>
            <h1 className="font-display mt-4 text-step-5 font-black leading-[0.95]">{t.aboutPage.title}</h1>
            <p className="mt-8 max-w-[52ch] text-step-1 leading-relaxed">{lead}</p>
          </header>

          <figure className="relative aspect-[4/3] self-end overflow-hidden border border-foreground/20 bg-card lg:col-span-5">
            <Image
              src={asset(t.about.teamImage)}
              alt={t.about.teamImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-foreground px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-background">
              {t.about.teamCaption}
            </figcaption>
          </figure>

          <div className="grid gap-6 text-step-0 leading-relaxed text-muted-foreground lg:col-span-7">
            {rest.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-[65ch]">
                {p}
              </p>
            ))}
            <div>
              <Link
                href={`/${lang}/#contacto`}
                className={`btn-press group mt-4 inline-flex h-14 items-center gap-3 rounded-sm border-2 border-foreground bg-accent px-7 text-base font-semibold text-foreground shadow-[4px_4px_0_0_var(--foreground)] ${hoverOnly}:hover:bg-foreground ${hoverOnly}:hover:text-accent`}
              >
                {t.aboutPage.cta}
                <ArrowRight
                  aria-hidden="true"
                  className={`size-5 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${hoverOnly}:group-hover:translate-x-0.5`}
                />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
