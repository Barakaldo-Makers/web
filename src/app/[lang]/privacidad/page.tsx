import { LegalPage, legalMetadata } from "@/components/site/legal-page"

export function generateMetadata({ params }: PageProps<"/[lang]/privacidad">) {
  return legalMetadata(params, "privacidad")
}

export default function PrivacidadPage({ params }: PageProps<"/[lang]/privacidad">) {
  return <LegalPage params={params} doc="privacidad" />
}
