import type { MetadataRoute } from "next"
import { locales } from "@/lib/dictionaries"
import { projectSlugs } from "@/lib/project-photos"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

const pages = [
  "",
  "/sobre-nosotros",
  ...projectSlugs.map((slug) => `/proyectos/${slug}`),
  "/galeria",
  "/aviso-legal",
  "/privacidad",
  "/cookies",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((path) =>
    locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${path}/`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : ["/aviso-legal", "/privacidad", "/cookies"].includes(path) ? 0.2 : 0.6,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}/`])),
      },
    }))
  )
}
