"use client"

import type { FormEvent } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Dictionary } from "@/lib/dictionaries"

type Props = {
  t: Dictionary["contact"]["form"]
  email: string
  privacyHref: string
}

const field =
  "h-12 rounded-sm border-foreground/25 bg-card px-4 text-base focus-visible:border-foreground focus-visible:ring-accent/70"

// TODO: Replace with Formspree — cambiar a <form action="https://formspree.io/f/{form-id}" method="POST">
// cuando la asociación tenga su ID, y quitar el onSubmit.
export function ContactForm({ t, email, privacyHref }: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "")
    const from = String(data.get("email") ?? "")
    const message = String(data.get("message") ?? "")
    const body = `${message}\n\n— ${name} <${from}>`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `${t.subject}: ${name}`
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-sm font-medium">
            {t.name}
          </Label>
          <Input id="name" name="name" type="text" autoComplete="name" required className={field} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-sm font-medium">
            {t.email}
          </Label>
          <Input id="email" name="email" type="email" autoComplete="email" required className={field} />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message" className="text-sm font-medium">
          {t.message}
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${field} h-auto min-h-36 py-3`}
        />
      </div>
      <p className="text-sm text-muted-foreground">
        {t.privacyPrefix}{" "}
        <Link
          href={privacyHref}
          className="inline-flex min-h-11 items-center underline underline-offset-4 [@media(hover:hover)_and_(pointer:fine)]:hover:text-foreground"
        >
          {t.privacy}
        </Link>
        {t.privacySuffix}
      </p>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="btn-press group inline-flex h-12 items-center gap-3 rounded-sm bg-foreground px-6 font-medium text-background [@media(hover:hover)_and_(pointer:fine)]:hover:bg-accent [@media(hover:hover)_and_(pointer:fine)]:hover:text-foreground"
        >
          {t.submit}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1"
          />
        </button>
        <p className="font-mono text-xs text-muted-foreground">{t.note}</p>
      </div>
    </form>
  )
}
