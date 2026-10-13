import type { MetadataRoute } from "next"
import { locales } from "@/lib/dictionaries"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

const pages = ["", "/galeria", "/aviso-legal", "/privacidad", "/cookies"]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((path) =>
    locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${path}/`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/galeria" ? 0.6 : 0.2,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}/`])),
      },
    }))
  )
}
