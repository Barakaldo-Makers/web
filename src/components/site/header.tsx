"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { Dictionary, Locale } from "@/lib/dictionaries"
import { locales } from "@/lib/dictionaries"

function LanguageSwitch({ lang, label }: { lang: Locale; label: string }) {
  return (
    <nav aria-label={label} className="flex items-center font-mono text-xs">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="px-1 text-muted-foreground">/</span>}
          <Link
            href={`/${l}`}
            hrefLang={l}
            lang={l}
            aria-current={l === lang ? "true" : undefined}
            className="btn-press inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm uppercase tracking-wider text-muted-foreground aria-[current=true]:bg-foreground aria-[current=true]:text-background [@media(hover:hover)_and_(pointer:fine)]:hover:text-foreground [@media(hover:hover)_and_(pointer:fine)]:aria-[current=true]:hover:text-background"
          >
            {l}
          </Link>
        </span>
      ))}
    </nav>
  )
}

export function SiteHeader({ lang, t }: { lang: Locale; t: Dictionary }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:font-medium"
      >
        {t.ui.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}`} aria-label={t.ui.home} className="flex items-center gap-3">
          <Image src="/images/logo-brk.png" alt="" width={46} height={38} priority className="h-9 w-auto" />
          <span className="font-display hidden whitespace-nowrap text-lg font-extrabold leading-none sm:block">
            Barakaldo Makers
          </span>
        </Link>

        <nav aria-label={t.ui.menu} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {t.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={`/${lang}${item.href}`}
                  className="relative inline-flex min-h-11 items-center whitespace-nowrap px-3 text-sm font-medium after:absolute after:inset-x-3 after:bottom-2 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:after:scale-x-100 [@media(hover:hover)_and_(pointer:fine)]:hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch lang={lang} label={t.ui.language} />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={t.ui.openMenu}
                className="btn-press inline-flex size-11 items-center justify-center rounded-sm border border-foreground/15 lg:hidden"
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" closeLabel={t.ui.closeMenu} className="bg-background px-6 pt-16">
              <SheetTitle className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t.ui.menu}
              </SheetTitle>
              <ul className="flex flex-col border-t border-foreground/10">
                {t.nav.map((item, i) => (
                  <li key={item.href} className="border-b border-foreground/10">
                    <a
                      href={`/${lang}${item.href}`}
                      onClick={() => setOpen(false)}
                      className="flex min-h-14 items-baseline gap-4 py-3"
                    >
                      <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                      <span className="font-display text-2xl font-extrabold">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
