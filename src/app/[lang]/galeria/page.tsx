import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getDictionary, isLocale } from "@/lib/dictionaries"
import { Reveal } from "@/components/site/reveal"
import { asset, pageAlternates } from "@/lib/site"

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
      <span aria-hidden="true" className="size-2.5 bg-accent ring-1 ring-foreground" />
      {children}
    </p>
  )
}

export async function generateMetadata({ params }: PageProps<"/[lang]/galeria">): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang)
  return {
    title: `${t.gallery.title} · Barakaldo Makers`,
    description: t.gallery.intro,
    alternates: pageAlternates(lang, "/galeria"),
    openGraph: { title: `${t.gallery.title} · Barakaldo Makers`, description: t.gallery.intro, url: `/${lang}/galeria/` },
  }
}

export default async function Galeria({ params }: PageProps<"/[lang]/galeria">) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)

  return (
    <main id="main" className="flex-1">
      <section aria-labelledby="galeria-title" className="lab-grid scroll-mt-16 border-b border-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>{t.gallery.eyebrow}</Eyebrow>
            <h1
              id="galeria-title"
              className="font-display mt-4 text-step-4 font-black leading-none text-balance"
            >
              {t.gallery.title}
            </h1>
            <p className="mt-6 max-w-[52ch] text-step-0 leading-relaxed text-muted-foreground">
              {t.gallery.intro}
            </p>
          </Reveal>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.gallery.items.map((item, i) => (
              <Reveal as="li" key={item.src} index={i}>
                <figure className="group border border-foreground/20 bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    {/* El pie de foto ya describe la imagen; alt vacío evita que se lea dos veces */}
                    <Image
                      src={asset(item.src)}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="border-t border-foreground/15 p-4">
                    <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                      {item.alt}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
