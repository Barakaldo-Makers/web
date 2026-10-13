import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight, Mail } from "lucide-react"
import { ContactForm } from "@/components/site/contact-form"
import { ProjectVisual } from "@/components/site/project-visuals"
import { Reveal } from "@/components/site/reveal"
import { SocialIcon } from "@/components/site/social-icons"
import { getDictionary, isLocale, links } from "@/lib/dictionaries"
import { SITE_URL, asset } from "@/lib/site"

const hoverOnly = "[@media(hover:hover)_and_(pointer:fine)]"

function Eyebrow({ children, tone = "ink" }: { children: React.ReactNode; tone?: "ink" | "light" }) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] ${
        tone === "light" ? "text-background/70" : "text-muted-foreground"
      }`}
    >
      <span aria-hidden="true" className="size-2.5 bg-accent ring-1 ring-foreground" />
      {children}
    </p>
  )
}

function ExternalLink({
  href,
  children,
  newTab,
  className = "",
}: {
  href: string
  children: React.ReactNode
  newTab: string
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-11 items-center gap-2 font-medium underline decoration-foreground/30 decoration-2 underline-offset-[6px] transition-[text-decoration-color] duration-200 ${hoverOnly}:hover:decoration-accent ${className}`}
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        className={`size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${hoverOnly}:group-hover:translate-x-0.5 ${hoverOnly}:group-hover:-translate-y-0.5`}
      />
      <span className="sr-only">{newTab}</span>
    </a>
  )
}

function InternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center gap-2 font-medium underline decoration-foreground/30 decoration-2 underline-offset-[6px] transition-[text-decoration-color] duration-200 ${hoverOnly}:hover:decoration-accent`}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className={`size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${hoverOnly}:group-hover:translate-x-0.5`}
      />
    </Link>
  )
}


export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Barakaldo Makers",
    alternateName: "Asociación Tecnológica Barakaldo Makers",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/images/logo-brk.png`,
    email: links.email,
    foundingDate: "2020-06-11",
    description: t.meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barakaldo",
      addressRegion: "Bizkaia",
      addressCountry: "ES",
    },
    sameAs: Object.values(links.social),
  }

  return (
    <>
      <main id="main" className="flex-1">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section aria-labelledby="hero-title" className="lab-grid border-b border-foreground/10">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center lg:col-span-7">
              <div className="hero-rise" style={{ "--i": 0 } as React.CSSProperties}>
                <Eyebrow>{t.hero.kicker}</Eyebrow>
              </div>
              <h1
                id="hero-title"
                className="font-display hero-rise mt-6 text-step-5 font-black leading-[0.95] text-balance"
                style={{ "--i": 0 } as React.CSSProperties}
              >
                {t.hero.titleLead}{" "}
                <span className="box-decoration-clone bg-accent px-2 [-webkit-box-decoration-break:clone]">
                  {t.hero.titleMark}
                </span>
              </h1>
              <p
                className="hero-rise mt-8 max-w-[58ch] text-step-1 leading-relaxed text-muted-foreground"
                style={{ "--i": 2 } as React.CSSProperties}
              >
                {t.hero.lead}
              </p>
              <div
                className="hero-rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
                style={{ "--i": 3 } as React.CSSProperties}
              >
                <a
                  href="#proyectos"
                  className={`btn-press group inline-flex h-14 items-center gap-3 rounded-sm border-2 border-foreground bg-accent px-7 text-base font-semibold text-foreground shadow-[4px_4px_0_0_var(--foreground)] ${hoverOnly}:hover:bg-foreground ${hoverOnly}:hover:text-accent`}
                >
                  {t.hero.cta}
                  <ArrowDown
                    aria-hidden="true"
                    className={`size-5 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${hoverOnly}:group-hover:translate-y-0.5`}
                  />
                </a>
                <a
                  href="#contacto"
                  className={`inline-flex min-h-11 items-center font-medium underline decoration-foreground/30 decoration-2 underline-offset-[6px] transition-[text-decoration-color] duration-200 ${hoverOnly}:hover:decoration-accent`}
                >
                  {t.hero.secondary}
                </a>
              </div>
              <dl
                className="hero-rise mt-14 grid grid-cols-2 gap-3 border-t border-foreground/15 pt-6 sm:grid-cols-4"
                style={{ "--i": 4 } as React.CSSProperties}
              >
                {t.hero.facts.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </dt>
                    <dd className="font-display text-step-3 font-black">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <figure className="hero-wipe crop-marks mx-auto w-full max-w-md self-center border border-foreground/20 bg-card p-3 lg:col-span-5 lg:max-w-none">
              <div className="flex items-center justify-between border-b border-foreground/15 pb-3 font-mono text-[11px] uppercase tracking-widest">
                <span>{t.hero.specCode}</span>
                <span aria-hidden="true" className="bg-foreground px-1.5 py-0.5 text-accent">
                  BRK/MK
                </span>
              </div>
              <div className="relative mt-3 aspect-square overflow-hidden bg-muted">
                <Image
                  src={asset("/images/openflexure.jpg")}
                  alt={t.hero.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="pt-4">
                <p className="font-display text-step-1 font-extrabold">{t.hero.specName}</p>
                <ol className="mt-3 grid gap-1.5 font-mono text-xs text-muted-foreground">
                  {t.hero.annotations.map((note, i) => (
                    <li key={note} className="flex gap-3">
                      <span className="w-4 font-medium text-foreground">{String.fromCharCode(65 + i)}</span>
                      {note}
                    </li>
                  ))}
                </ol>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── Proyectos ────────────────────────────────────── */}
        <section id="proyectos" aria-labelledby="proyectos-title" className="lab-grid scroll-mt-16 border-b border-foreground/10">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <Eyebrow>{t.projects.eyebrow}</Eyebrow>
                <h2 id="proyectos-title" className="font-display mt-4 text-step-4 font-black leading-none">
                  {t.projects.title}
                </h2>
              </div>
              <p className="max-w-[52ch] text-step-0 leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">
                {t.projects.intro}
              </p>
            </Reveal>

            <ol className="mt-16">
              {t.projects.items.map((project) => (
                <Reveal
                  as="li"
                  key={project.code}
                  className="grid gap-8 border-t-2 border-foreground py-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-14"
                >
                  <div className="flex flex-col gap-3 md:col-span-2 lg:col-span-3">
                    <p className="font-mono text-step-1 font-medium">{project.code}</p>
                    <p className="w-fit bg-foreground px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-background">
                      {project.tag}
                    </p>
                  </div>
                  <article className="flex flex-col lg:col-span-5">
                    <h3 className="font-display text-step-3 font-black leading-tight">{project.name}</h3>
                    <p className="mt-3 text-step-1 font-medium leading-snug">{project.summary}</p>
                    <p className="mt-4 max-w-[60ch] leading-relaxed text-muted-foreground">{project.body}</p>
                    {project.href && (
                      <div className="mt-6">
                        {project.href.startsWith("/") ? (
                          <InternalLink href={`/${lang}${project.href}/`}>{project.linkLabel}</InternalLink>
                        ) : (
                          <ExternalLink href={project.href} newTab={t.ui.newTab}>
                            {project.linkLabel}
                          </ExternalLink>
                        )}
                      </div>
                    )}
                  </article>
                  <div className="relative aspect-[4/3] overflow-hidden border border-foreground/20 bg-card lg:col-span-4">
                    {project.image ? (
                      <Image src={asset(project.image)} alt={project.imageAlt ?? project.name} fill sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                    ) : (
                      <ProjectVisual kind={project.visual} alt={t.projects.visualAlt[project.visual]} />
                    )}
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Para quién ───────────────────────────────────── */}
        <section aria-labelledby="audiencias-title" className="bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <Reveal className="max-w-3xl">
              <Eyebrow tone="light">{t.audiences.eyebrow}</Eyebrow>
              <h2 id="audiencias-title" className="font-display mt-4 text-step-4 font-black leading-none">
                {t.audiences.title}
              </h2>
            </Reveal>
            <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
              {t.audiences.items.map((item, i) => (
                <Reveal as="li" key={item.title} index={i} className="border-t-4 border-accent pt-6">
                  <p className="font-mono text-xs text-accent">0{i + 1}</p>
                  <h3 className="font-display mt-3 text-step-2 font-extrabold leading-tight">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-background/80">{item.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Quiénes somos ────────────────────────────────── */}
        <section id="quienes-somos" aria-labelledby="quienes-title" className="lab-grid scroll-mt-16 border-b border-foreground/10">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:px-8">
            <Reveal className="lg:col-span-6">
              <Eyebrow>{t.about.eyebrow}</Eyebrow>
              <h2 id="quienes-title" className="font-display mt-4 text-step-3 font-black leading-tight text-balance">
                {t.about.title}
              </h2>
              <div className="mt-8 grid gap-5 text-step-0 leading-relaxed text-muted-foreground">
                {t.about.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <InternalLink href={`/${lang}${links.sobreNosotros}/`}>{t.about.link}</InternalLink>
              </div>
            </Reveal>
            <Reveal index={1} className="lg:col-span-5 lg:col-start-8 lg:self-end">
              <figure className="relative aspect-[4/3] overflow-hidden border border-foreground/20 bg-card">
                <Image src={asset(t.about.teamImage)} alt={t.about.teamImageAlt} fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-foreground px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-background">
                  {t.about.teamCaption}
                </figcaption>
              </figure>
              <dl className="border-2 border-foreground bg-card">
                {t.about.facts.map((fact) => (
                  <div key={fact.label} className="border-b border-foreground/15 p-5 last:border-b-0">
                    <dt className="font-mono text-sm font-medium">
                      <span className="bg-accent px-1">{fact.label}</span>
                    </dt>
                    <dd className="mt-2 text-muted-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {t.about.collaboratorsLabel}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {t.about.collaborators.map((c) => (
                    <li
                      key={c}
                      className="border border-foreground/20 px-3 py-1.5 font-mono text-xs"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Actividades ──────────────────────────────────── */}
        <section id="actividades" aria-labelledby="actividades-title" className="lab-grid scroll-mt-16 border-b border-foreground/10">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <Reveal className="max-w-3xl">
              <Eyebrow>{t.activities.eyebrow}</Eyebrow>
              <h2 id="actividades-title" className="font-display mt-4 text-step-4 font-black leading-none">
                {t.activities.title}
              </h2>
            </Reveal>
            <ol className="mt-16 space-y-0">
              {t.activities.items.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  index={i}
                  className="group grid gap-4 border-t-2 border-foreground py-8 md:grid-cols-12 md:gap-6"
                >
                  <div className="md:col-span-2">
                    <span className="inline-block bg-foreground px-2 py-1 font-mono text-xs font-medium text-background">
                      {item.year}
                    </span>
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="font-display text-step-2 font-extrabold leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[60ch] leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                  {item.image && (
                    <div className="relative aspect-[4/3] overflow-hidden border border-foreground/20 bg-card md:col-span-3">
                      <Image src={asset(item.image)} alt={item.imageAlt ?? item.title} fill sizes="(min-width: 768px) 24vw, 100vw" className="object-cover" />
                    </div>
                  )}
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Formación ────────────────────────────────────── */}
        <section id="formacion" aria-labelledby="formacion-title" className="scroll-mt-16 border-b-2 border-foreground bg-accent">
          <Reveal className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-12 lg:items-end lg:px-8">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
                <span aria-hidden="true" className="size-2.5 bg-foreground" />
                {t.training.eyebrow}
              </p>
              <h2 id="formacion-title" className="font-display mt-4 text-step-4 font-black leading-none">
                {t.training.title}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-step-0 leading-relaxed">{t.training.body}</p>
              <div className="mt-4">
                <ExternalLink href={links.formacion} newTab={t.ui.newTab}>
                  {t.training.link}
                </ExternalLink>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Contacto ─────────────────────────────────────── */}
        <section id="contacto" aria-labelledby="contacto-title" className="lab-grid scroll-mt-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:px-8">
            <Reveal className="lg:col-span-5">
              <Eyebrow>{t.contact.eyebrow}</Eyebrow>
              <h2 id="contacto-title" className="font-display mt-4 text-step-4 font-black leading-none text-balance">
                {t.contact.title}
              </h2>
              <p className="mt-6 max-w-[48ch] text-step-0 leading-relaxed text-muted-foreground">{t.contact.body}</p>
              <div className="mt-10 grid gap-4">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{t.contact.direct}</p>
                <a
                  href={`mailto:${links.email}`}
                  className={`inline-flex min-h-11 items-center gap-3 break-all font-medium underline decoration-foreground/30 decoration-2 underline-offset-[6px] ${hoverOnly}:hover:decoration-accent`}
                >
                  <Mail aria-hidden="true" className="size-5 shrink-0" />
                  {links.email}
                </a>
                <a
                  href={links.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-press inline-flex h-12 w-fit items-center gap-3 rounded-sm border-2 border-foreground px-5 font-medium ${hoverOnly}:hover:bg-foreground ${hoverOnly}:hover:text-background`}
                >
                  <SocialIcon network="telegram" className="size-5" />
                  {t.contact.telegram}
                  <span className="sr-only">{t.ui.newTab}</span>
                </a>
              </div>
            </Reveal>
            <Reveal index={1} className="crop-marks border border-foreground/20 bg-card p-6 sm:p-8 lg:col-span-6 lg:col-start-7">
              <ContactForm t={t.contact.form} email={links.email} privacyHref={`/${lang}/privacidad/`} />
            </Reveal>
          </div>
        </section>
      </main>



      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  )
}
