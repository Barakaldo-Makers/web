import Image from "next/image"
import type { ProjectVisual as Kind } from "@/lib/dictionaries"

const INK = "#111111"
const YELLOW = "#ffe100"
const STEEL = "#5c5c57"

function GridBackdrop({ id }: { id: string }) {
  return (
    <>
      <defs>
        <pattern id={`${id}-minor`} width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M10 0H0V10" fill="none" stroke={INK} strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
        <pattern id={`${id}-major`} width="50" height="50" patternUnits="userSpaceOnUse">
          <rect width="50" height="50" fill={`url(#${id}-minor)`} />
          <path d="M50 0H0V50" fill="none" stroke={INK} strokeOpacity="0.12" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="#fbfbf8" />
      <rect width="400" height="300" fill={`url(#${id}-major)`} />
    </>
  )
}

/** Mapa esquemático: sensores repartidos, el tamaño del anillo indica la lectura */
function CanairioDiagram({ alt }: { alt: string }) {
  const sensors: [number, number, number][] = [
    [62, 70, 10], [118, 112, 16], [170, 64, 8], [214, 150, 22], [262, 96, 12],
    [318, 140, 9], [96, 196, 13], [150, 232, 8], [238, 228, 18], [300, 210, 11], [352, 74, 7],
  ]
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={alt} className="h-full w-full">
      <GridBackdrop id="cn" />
      {/* Ría */}
      <path
        d="M-10 262 C 70 250, 120 286, 200 268 S 330 236, 410 252"
        fill="none"
        stroke={INK}
        strokeOpacity="0.18"
        strokeWidth="14"
        strokeLinecap="round"
      />
      {/* Calles */}
      <g stroke={INK} strokeOpacity="0.35" strokeWidth="1.5" fill="none">
        <path d="M20 40 L 380 180" />
        <path d="M40 240 L 360 30" />
        <path d="M200 10 L 230 290" />
      </g>
      {sensors.map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} fill={YELLOW} fillOpacity="0.55" stroke={INK} strokeWidth="1" />
          <circle cx={x} cy={y} r="2.5" fill={INK} />
        </g>
      ))}
      <g fontFamily="var(--font-mono-jb), monospace" fontSize="10" fill={INK}>
        <rect x="12" y="12" width="104" height="22" fill={INK} />
        <text x="20" y="27" fill="#f5f5f0">
          PM2.5 · µg/m³
        </text>
        <text x="370" y="290" fill={STEEL}>
          N ↑
        </text>
      </g>
    </svg>
  )
}

/** Malla de nodos LoRa; el trazo amarillo es un mensaje saltando de nodo en nodo */
function MeshtasticDiagram({ alt }: { alt: string }) {
  const nodes: [number, number][] = [
    [56, 220], [120, 130], [190, 200], [236, 92], [300, 170], [352, 70], [92, 52], [330, 254],
  ]
  const links: [number, number][] = [
    [0, 1], [0, 2], [1, 2], [1, 3], [1, 6], [2, 4], [3, 4], [3, 5], [4, 5], [4, 7], [2, 7], [6, 3],
  ]
  const route = [0, 2, 4, 5]
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={alt} className="h-full w-full">
      <GridBackdrop id="mt" />
      <g stroke={INK} strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 4">
        {links.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      <polyline
        points={route.map((n) => nodes[n].join(",")).join(" ")}
        fill="none"
        pathLength={1}
        className="mesh-route"
        stroke={INK}
        strokeWidth="7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <polyline
        points={route.map((n) => nodes[n].join(",")).join(" ")}
        fill="none"
        pathLength={1}
        className="mesh-route"
        stroke={YELLOW}
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="18" fill="none" stroke={INK} strokeOpacity="0.15" />
          <rect x={x - 7} y={y - 7} width="14" height="14" fill={route.includes(i) ? INK : "#fbfbf8"} stroke={INK} strokeWidth="1.5" />
          <text
            x={x + 12}
            y={y - 10}
            fontFamily="var(--font-mono-jb), monospace"
            fontSize="10"
            fill={INK}
          >
            N{i + 1}
          </text>
        </g>
      ))}
      <g fontFamily="var(--font-mono-jb), monospace" fontSize="10">
        <rect x="12" y="12" width="118" height="22" fill={INK} />
        <text x="20" y="27" fill="#f5f5f0">
          LoRa · 868 MHz
        </text>
      </g>
    </svg>
  )
}

export function ProjectVisual({ kind, alt }: { kind: Kind; alt: string }) {
  if (kind === "canairio") return <CanairioDiagram alt={alt} />
  if (kind === "meshtastic") return <MeshtasticDiagram alt={alt} />
  const src = kind === "openflexure" ? "/images/openflexure.jpg" : "/images/minicnc.jpg"
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
      className="object-cover"
    />
  )
}
