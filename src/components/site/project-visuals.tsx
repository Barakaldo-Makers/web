import Image from "next/image"
import type { ProjectVisual as Kind } from "@/lib/dictionaries"
import { asset } from "@/lib/site"

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

/** Plano de una vivienda: el radar cubre el salón, nota a alguien caído y avisa por LoRa */
function HizkeraDiagram({ alt }: { alt: string }) {
  const radar = { x: 250, y: 74 }
  // Ondas de radio saliendo hacia el receptor (±35° a la derecha del radar)
  const waves = [26, 38, 50].map((r) => {
    const dx = (r * 0.819).toFixed(1)
    const dy = (r * 0.574).toFixed(1)
    return `M${radar.x + +dx} ${radar.y - +dy} A${r} ${r} 0 0 1 ${radar.x + +dx} ${radar.y + +dy}`
  })
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={alt} className="h-full w-full">
      <GridBackdrop id="hz" />
      {/* Zona que cubre el radar: un cuarto de círculo hacia el salón */}
      <path d="M250 74 L250 184 A110 110 0 0 1 140 74 Z" fill={YELLOW} fillOpacity="0.5" stroke={INK} strokeOpacity="0.4" />
      <g fill="none" stroke={INK} strokeOpacity="0.3" strokeDasharray="3 4">
        <path d="M250 114 A40 40 0 0 1 210 74" />
        <path d="M250 149 A75 75 0 0 1 175 74" />
      </g>
      {/* Muebles */}
      <g fill="none" stroke={INK} strokeOpacity="0.3" strokeWidth="1.5">
        <rect x="36" y="74" width="44" height="64" />
        <path d="M36 88 H80" />
        <rect x="146" y="246" width="84" height="24" />
        <rect x="36" y="244" width="30" height="26" />
      </g>
      {/* Muros: exterior con puerta de entrada, tabiques con puertas */}
      <g fill="none" stroke={INK} strokeLinecap="square">
        <path d="M170 284 H24 V60 H264 V284 H206" strokeWidth="4" />
        <path d="M120 60 V120 M120 146 V220 M120 246 V284 M24 160 H120" strokeWidth="3" />
      </g>
      {/* Persona en el suelo; los anillos son la respiración que detecta el radar */}
      <g fill="none" stroke={INK} strokeOpacity="0.35" strokeDasharray="2 4">
        <circle cx="195" cy="143" r="22" />
        <circle cx="195" cy="143" r="32" />
      </g>
      <circle cx="176" cy="140" r="6" fill={INK} />
      <path d="M186 141 L212 146" stroke={INK} strokeWidth="9" strokeLinecap="round" />
      {/* Radar y aviso por LoRa */}
      <rect x={radar.x - 7} y={radar.y - 7} width="14" height="14" fill={INK} />
      <g fill="none" stroke={INK} strokeWidth="1.5">
        {waves.map((d, i) => (
          <path key={d} d={d} strokeOpacity={0.75 - i * 0.2} />
        ))}
      </g>
      <path d="M298 74 H334" stroke={INK} strokeWidth="1.5" strokeDasharray="4 4" />
      <rect x="334" y="62" width="24" height="24" fill={INK} />
      <text x="346" y="80" textAnchor="middle" fontFamily="var(--font-mono-jb), monospace" fontSize="15" fontWeight="700" fill={YELLOW}>
        !
      </text>
      <g fontFamily="var(--font-mono-jb), monospace" fontSize="10" fill={INK}>
        <text x="304" y="64">LoRa</text>
        <text x="334" y="102">RX</text>
        {/* Escala */}
        <path d="M300 270 H360 M300 265 V275 M360 265 V275" stroke={INK} strokeWidth="1.5" />
        <text x="366" y="274" fill={STEEL}>2 m</text>
        <rect x="12" y="12" width="124" height="22" fill={INK} />
        <text x="20" y="27" fill="#f5f5f0">
          RADAR 60 GHz · CO₂
        </text>
      </g>
    </svg>
  )
}

export function ProjectVisual({ kind, alt }: { kind: Kind; alt: string }) {
  if (kind === "canairio") return <CanairioDiagram alt={alt} />
  if (kind === "meshtastic") return <MeshtasticDiagram alt={alt} />
  if (kind === "hizkera") return <HizkeraDiagram alt={alt} />
  const src = kind === "openflexure" ? "/images/openflexure.jpg" : "/images/minicnc.jpg"
  return (
    <Image
      src={asset(src)}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
      className="object-cover"
    />
  )
}
