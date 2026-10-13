import Image from "next/image"
import { getDictionary, links, type Dictionary, type Locale } from "@/lib/dictionaries"
import { SocialIcon, socialNames, type SocialNetwork } from "@/components/site/social-icons"

const hoverOnly = "[@media(hover:hover)_and_(pointer:fine)]"

const socialOrder: SocialNetwork[] = ["telegram", "github", "gitlab", "facebook", "x"]

export async function SiteFooter({ lang }: { lang: Locale }) {
  const t = getDictionary(lang)

  return (
    <footer className="border-t-2 border-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="flex items-start gap-4 md:col-span-5">
          <Image src="/images/logo-brk.png" alt="Barakaldo Makers" width={72} height={60} className="h-14 w-auto" />
          <p className="max-w-[32ch] text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
        </div>
        <nav aria-label={t.footer.social} className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{t.footer.social}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {socialOrder.map((network) => (
              <li key={network}>
                <a
                  href={links.social[network]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${socialNames[network]} ${t.ui.newTab}`}
                  className={`btn-press inline-flex size-11 items-center justify-center rounded-sm border border-foreground/20 ${hoverOnly}:hover:border-foreground ${hoverOnly}:hover:bg-accent`}
                >
                  <SocialIcon network={network} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Legal" className="md:col-span-3">
          <ul className="grid gap-1 text-sm">
            {t.footer.legal.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`inline-flex min-h-11 items-center text-muted-foreground ${hoverOnly}:hover:text-foreground`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-foreground/10 px-4 py-5 text-center text-sm text-muted-foreground">
        Built with Claude Web Builder by{" "}
        <a href="https://tododeia.com" className="underline underline-offset-4 hover:text-foreground">
          Tododeia
        </a>
      </div>
    </footer>
  )
}
