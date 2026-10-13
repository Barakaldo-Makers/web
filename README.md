# Barakaldo Makers · web

Web de la Asociación Tecnológica Barakaldo Makers, en castellano (`/es/`) y euskera (`/eu/`).
Next.js 16 exportado como sitio estático. Dominio final: **https://barakaldomakers.org**.
El repositorio de GitHub es la copia de seguridad del código.

## Publicar en barakaldomakers.org

```bash
npm ci
npm run build      # genera la web completa en out/
```

`out/` son archivos estáticos (HTML, CSS, JS, imágenes): se suben tal cual a la raíz del
alojamiento, sin PHP ni base de datos. Ya va preparada para `https://barakaldomakers.org`
(canonical, sitemap, Open Graph).

El contenido de la web WordPress antigua ya está migrado ("Sobre nosotros" y los diarios de
montaje del Microscopio OpenFlexure y la Mini CNC-PCB): la web nueva no enlaza a ella.
Las URL antiguas (`/sobre-nosotros/`, `/microscopio-openflexure/`, `/mini-cnc-pcb/`) siguen
funcionando: `public/` tiene una página en cada una que redirige a su versión nueva.

## Copia en GitHub

El código está en https://github.com/Barakaldo-Makers/web (privado). Para guardar cambios:

```bash
git add -A
git commit -m "Qué has cambiado"
git push
```

## Vista previa en GitHub Pages (opcional)

El workflow `.github/workflows/deploy.yml` publica una vista previa en
`https://<cuenta>.github.io/<repo>/`. No se lanza solo con cada push: actívalo en
**Settings → Pages → Source: GitHub Actions** y ejecútalo desde **Actions → Run workflow**.
La ruta base se ajusta sola.

## Trabajar en local

```bash
npm install
npm run dev        # http://localhost:3000/es/
npm run build      # genera la web estática en out/
```

> En Windows, `next build` guarda algunos archivos de precarga (`out/**/__next.*`) en
> subcarpetas en lugar de con puntos (fallo de Next 16.4 con las barras invertidas).
> La web funciona igual, solo se pierde la precarga. En GitHub Actions (Linux) no pasa.

## Dónde se cambia cada cosa

- **Textos** (los dos idiomas): `src/lib/dictionaries.ts`
- **NIF de la asociación**: `links.nif` en el mismo archivo (aparece en los textos legales).
- **Fotos**: `public/images/`. Las de los diarios de montaje, en `public/images/proyectos/`
  y listadas en `src/lib/project-photos.ts` (sus pies de foto, en `dictionaries.ts`).
- **Formulario de contacto**: ahora abre el programa de correo. Para recibir los mensajes
  sin depender de eso, crea un formulario en formspree.io y sigue el `TODO` de
  `src/components/site/contact-form.tsx`.
