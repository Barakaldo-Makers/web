import { LegalPage, legalMetadata } from "@/components/site/legal-page"

export function generateMetadata({ params }: PageProps<"/[lang]/cookies">) {
  return legalMetadata(params, "cookies")
}

export default function CookiesPage({ params }: PageProps<"/[lang]/cookies">) {
  return <LegalPage params={params} doc="cookies" />
}
