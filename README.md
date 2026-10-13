# Barakaldo Makers · web

Web de la Asociación Tecnológica Barakaldo Makers, en castellano (`/es/`) y euskera (`/eu/`).
Next.js 16 exportado como sitio estático y publicado en GitHub Pages.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `Barakaldo-Makers/web`) y sube este proyecto:

   ```bash
   git remote add origin https://github.com/Barakaldo-Makers/web.git
   git push -u origin main
   ```

2. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

3. Cada push a `main` compila y publica la web (`.github/workflows/deploy.yml`).
   La primera vez tarda 2-3 minutos. La dirección aparece en la pestaña **Actions** y en
   **Settings → Pages**.

La ruta base se calcula sola:

| Repositorio | Dirección |
|---|---|
| `Barakaldo-Makers/web` | `https://barakaldo-makers.github.io/web/` |
| `Barakaldo-Makers/barakaldo-makers.github.io` | `https://barakaldo-makers.github.io/` |
| Con dominio propio | `https://www.barakaldomakers.org/` |

### Dominio propio (opcional)

Para servirla en `www.barakaldomakers.org`, añade el dominio en **Settings → Pages → Custom domain**
y crea en el DNS un registro `CNAME` de `www` a `barakaldo-makers.github.io`.
Mientras el dominio apunte a la web WordPress antigua, no lo cambies: varios enlaces
("Fotos del montaje", "Sobre nosotros", proyectos 5 y 7) todavía llevan allí.

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
- **NIF de la asociación**: `links.nif` en el mismo archivo. Mientras esté vacío, los textos
  legales no lo mencionan.
- **Fotos**: `public/images/`
- **Formulario de contacto**: ahora abre el programa de correo. Para recibir los mensajes
  sin depender de eso, crea un formulario en formspree.io y sigue el `TODO` de
  `src/components/site/contact-form.tsx`.
