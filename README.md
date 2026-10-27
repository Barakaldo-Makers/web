# Barakaldo Makers · web

Web de la Asociación Tecnológica Barakaldo Makers, en castellano (`/es/`) y euskera (`/eu/`).
Next.js 16 exportado como sitio estático. Dominio final: **https://barakaldomakers.org**.
El repositorio de GitHub es la copia de seguridad del código.

## Publicar en barakaldomakers.org

```bash
npm ci
npm run build      # genera la web completa en out/
```

`out/` son archivos estáticos (HTML, CSS, JS, imágenes): se suben tal cual a la carpeta de
barakaldomakers.org en IONOS, sin PHP ni base de datos. Ya va preparada para
`https://barakaldomakers.org` (canonical, sitemap, Open Graph).

### Subirla por FTP a IONOS

1. Coge la web compilada: en GitHub, **Actions → Web para FTP →** la última ejecución →
   **Artifacts → web-para-ftp** (se compila sola con cada push; mejor que compilar en Windows,
   ver más abajo). Descomprime el zip.
2. Con FileZilla (SFTP, puerto 22), entra en la carpeta a la que apunta barakaldomakers.org.
3. La primera vez, **descarga una copia del `.htaccess` que haya** (es el de WordPress).
4. Arrastra **el contenido** de la carpeta descomprimida (no la carpeta) y, si pregunta,
   elige **Sobrescribir**. Activa «Mostrar archivos ocultos» para ver el `.htaccess`.

Subir por FTP **no borra nada**: solo añade archivos o sustituye los que se llaman igual. Las
carpetas que no son de esta web (Moodle, `descargas/`…) no se tocan. No uses la
«sincronización» de FileZilla con borrado. El workflow comprueba que la web no tenga carpetas
que choquen con las del servidor (`moodle`, `descargas`, `formacion`, `wp-*`).

`public/.htaccess` sustituye al de WordPress: sirve `index.html` antes que `index.php`,
usa la página 404 de la web y lleva a `https://barakaldomakers.org` (sin www) solo las rutas de
esta web; las demás carpetas siguen como estaban.

Cada versión nueva deja en `_next/static/` archivos con otro nombre: los viejos no molestan.
Si algún día se quiere limpiar, se puede borrar `_next/` entero justo antes de subir.

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
