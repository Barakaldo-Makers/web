/** Diarios de montaje: fotos rescatadas de la web WordPress antigua (nov. 2020). */

export type ProjectSlug = "openflexure" | "mini-cnc-pcb"

type Photo = { src: string; width: number; height: number }

export const projectPages: Record<
  ProjectSlug,
  { code: string; original?: string; photos: Photo[] }
> = {
  openflexure: {
    code: "PRY-03",
    original: "https://openflexure.org",
    photos: [
      { src: "/images/proyectos/openflexure/micro3.jpg", width: 675, height: 1200 },
      { src: "/images/proyectos/openflexure/micro2-1.jpg", width: 675, height: 1200 },
      { src: "/images/proyectos/openflexure/micro1.jpg", width: 675, height: 1200 },
      { src: "/images/proyectos/openflexure/micro5.jpg", width: 675, height: 1200 },
      { src: "/images/proyectos/openflexure/micro7.jpg", width: 900, height: 1200 },
      { src: "/images/proyectos/openflexure/micro8.jpg", width: 900, height: 1200 },
      { src: "/images/proyectos/openflexure/micro6.jpg", width: 675, height: 1200 },
      { src: "/images/proyectos/openflexure/micro10.jpg", width: 900, height: 1200 },
      { src: "/images/proyectos/openflexure/micro12.jpg", width: 1200, height: 770 },
      { src: "/images/proyectos/openflexure/micro4.jpg", width: 1200, height: 981 },
    ],
  },
  "mini-cnc-pcb": {
    code: "PRY-04",
    photos: [
      { src: "/images/proyectos/mini-cnc-pcb/minicnc7.jpg", width: 1160, height: 1200 },
      { src: "/images/proyectos/mini-cnc-pcb/minicnc6.jpg", width: 900, height: 1200 },
      { src: "/images/proyectos/mini-cnc-pcb/minicnc5.jpg", width: 900, height: 1200 },
      { src: "/images/proyectos/mini-cnc-pcb/minicnc4.jpg", width: 900, height: 1200 },
      { src: "/images/proyectos/mini-cnc-pcb/minicnc1.jpg", width: 1200, height: 900 },
      { src: "/images/proyectos/mini-cnc-pcb/minicnc8.jpg", width: 1200, height: 900 },
      { src: "/images/proyectos/mini-cnc-pcb/minicnc9.jpg", width: 1200, height: 900 },
      { src: "/images/proyectos/mini-cnc-pcb/minicnc10.jpg", width: 1200, height: 900 },
    ],
  },
}

export const projectSlugs = Object.keys(projectPages) as ProjectSlug[]
