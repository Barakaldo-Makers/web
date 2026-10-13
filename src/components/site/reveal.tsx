"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Orden dentro de un grupo; cada paso añade 60ms de retraso */
  index?: number
}

/** Revelado al entrar en pantalla. Se dispara una sola vez. */
export function Reveal({ children, as: Tag = "div", className, index = 0 }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={["reveal", className].filter(Boolean).join(" ")}
      data-visible={visible}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {children}
    </Tag>
  )
}
