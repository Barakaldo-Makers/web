import { LegalPage, legalMetadata } from "@/components/site/legal-page"

export function generateMetadata({ params }: PageProps<"/[lang]/aviso-legal">) {
  return legalMetadata(params, "avisoLegal")
}

export default function AvisoLegalPage({ params }: PageProps<"/[lang]/aviso-legal">) {
  return <LegalPage params={params} doc="avisoLegal" />
}
