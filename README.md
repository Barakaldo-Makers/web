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

> **Antes de sustituir la web WordPress:** "Sobre nosotros" y "Fotos del montaje" (Microscopio
> OpenFlexure y Mini CNC-PCB) enlazan a páginas de la web antigua. Al cambiar el dominio
> dejarán de existir: hay que migrar ese contenido o cambiar esos enlaces en
> `src/lib/dictionaries.ts` (constante `LEGACY`).

## Copia en GitHub

```bash
git remote add origin https://github.com/<cuenta>/<repo>.git
git push -u origin main
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
- **Fotos**: `public/images/`
- **Formulario de contacto**: ahora abre el programa de correo. Para recibir los mensajes
  sin depender de eso, crea un formulario en formspree.io y sigue el `TODO` de
  `src/components/site/contact-form.tsx`.
