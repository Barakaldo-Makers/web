import type { Locale } from "@/lib/dictionaries"

/** URL pública completa del sitio, incluida la ruta base si la hay. Sin barra final. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "")

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

/** Ruta a un archivo de /public. next/image no añade la ruta base por su cuenta. */
export function asset(path: string) {
  return `${BASE_PATH}${path}`
}

/** canonical + hreflang de una página que existe en los dos idiomas. `path` empieza por "/" o es "". */
export function pageAlternates(lang: Locale, path = "") {
  return {
    canonical: `/${lang}${path}/`,
    languages: {
      es: `/es${path}/`,
      eu: `/eu${path}/`,
      "x-default": `/es${path}/`,
    },
  }
}
