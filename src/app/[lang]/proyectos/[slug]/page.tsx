import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { getDictionary, isLocale, type Locale } from "@/lib/dictionaries"
import { projectPages, projectSlugs, type ProjectSlug } from "@/lib/project-photos"
import { asset, pageAlternates } from "@/lib/site"
import { Reveal } from "@/components/site/reveal"

const hoverOnly = "[@media(hover:hover)_and_(pointer:fine)]"

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export const dynamicParams = false

function isSlug(value: string): value is ProjectSlug {
  return (projectSlugs as string[]).includes(value)
}

function load(lang: Locale, slug: ProjectSlug) {
  const t = getDictionary(lang)
  const page = projectPages[slug]
  const project = t.projects.items.find((p) => p.code === page.code)
  if (!project) throw new Error(`Falta el proyecto ${page.code} en el diccionario`)
  return { t, page, project, captions: t.projectPages.items[slug] }
}

export async function generateMetadata({ params }: PageProps<"/[lang]/proyectos/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isLocale(lang) || !isSlug(slug)) return {}
  const { t, page, project } = load(lang, slug)
  const title = `${project.name} · ${t.projectPages.logTitle} · Barakaldo Makers`
  return {
    title,
    description: project.summary,
    alternates: pageAlternates(lang, `/proyectos/${slug}`),
    openGraph: {
      title,
      description: project.summary,
      url: `/${lang}/proyectos/${slug}/`,
      images: [{ url: page.photos[page.photos.length - 3].src }],
    },
  }
}

export default async function Proyecto({ params }: PageProps<"/[lang]/proyectos/[slug]">) {
  const { lang, slug } = await params
  if (!isLocale(lang) || !isSlug(slug)) notFound()
  const { t, page, project, captions } = load(lang, slug)

  return (
    <main id="main" className="flex-1">
      <article className="lab-grid">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
          <Link
            href={`/${lang}/#proyectos`}
            className={`group inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground ${hoverOnly}:hover:text-foreground`}
          >
            <ArrowLeft
              aria-hidden="true"
              className={`size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${hoverOnly}:group-hover:-translate-x-0.5`}
            />
            {t.projectPages.back}
          </Link>

          <header className="mt-8 grid gap-8 border-t-2 border-foreground pt-10 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col gap-3 lg:col-span-3">
              <p className="font-mono text-step-1 font-medium">{page.code}</p>
              <p className="w-fit bg-foreground px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-background">
                {project.tag}
              </p>
            </div>
            <div className="lg:col-span-8">
              <h1 className="font-display text-step-5 font-black leading-[0.95] text-balance">{project.name}</h1>
              <p className="mt-6 text-step-1 font-medium leading-snug">{project.summary}</p>
              <p className="mt-4 max-w-[60ch] leading-relaxed text-muted-foreground">{project.body}</p>
              {page.original && (
                <a
                  href={page.original}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-6 inline-flex min-h-11 items-center gap-2 font-medium underline decoration-foreground/30 decoration-2 underline-offset-[6px] ${hoverOnly}:hover:decoration-accent`}
                >
                  {t.projectPages.original}: {new URL(page.original).host}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                  <span className="sr-only">{t.ui.newTab}</span>
                </a>
              )}
            </div>
          </header>

          <section aria-labelledby="diario-title" className="mt-16 md:mt-24">
            <div className="flex items-baseline justify-between gap-4 border-b border-foreground/15 pb-4">
              <h2 id="diario-title" className="font-display text-step-3 font-black leading-tight">
                {t.projectPages.logTitle}
              </h2>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {page.photos.length} {t.projectPages.photoCount}
              </p>
            </div>

            <ol className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
              {page.photos.map((photo, i) => (
                <Reveal as="li" key={photo.src} index={i % 3} className="mb-6 break-inside-avoid">
                  <figure className="border border-foreground/20 bg-card">
                    {/* El pie describe la foto; alt vacío para no leerlo dos veces */}
                    <Image
                      src={asset(photo.src)}
                      alt=""
                      width={photo.width}
                      height={photo.height}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-auto w-full"
                    />
                    <figcaption className="flex gap-3 border-t border-foreground/15 p-4 text-sm leading-relaxed">
                      <span className="font-mono text-xs font-medium leading-relaxed">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-muted-foreground">{captions[i]}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </main>
  )
}
