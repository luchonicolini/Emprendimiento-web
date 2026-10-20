# Cota — sitio de desarrollo web

Sitio de Cota, estudio de desarrollo web. Next.js 16 (App Router), React 19,
Tailwind CSS 4 y TypeScript estricto.

## Estado

Cota está en construcción. La home vive en `/` y el sitio está marcado
`noindex, nofollow` hasta que el contenido y el formulario estén listos para
publicarse. La antigua ruta `/prototipo` redirige a `/`.

## Scripts

```bash
npm run dev        # desarrollo
npm run build      # build de producción
npm run start      # servir el build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Variables de entorno

Copiá `.env.example` a `.env.local`:

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Dominio público. Alimenta canonical, Open Graph, `sitemap.xml`, `robots.txt` y JSON-LD. |
| `NEXT_PUBLIC_CLARITY_ID` | ID de Microsoft Clarity. Si está vacío no se carga analítica. |

## Estructura

```
src/
  app/
    layout.tsx                 # fuentes, metadata, JSON-LD, consentimiento
    page.tsx                   # home de Cota
    globals.css                # base Tailwind y movimiento reducido
    cota.css                   # sistema visual "plano técnico"
    robots.ts / sitemap.ts     # SEO técnico
    politica-de-privacidad/    # página legal
    api/save-lead/             # recepción de leads
    api/track-event/           # eventos (integración pendiente)
  components/
    prototipo/                 # secciones y primitivas de Cota
    Analytics.tsx              # Clarity condicionado al consentimiento
    CookieConsent.tsx          # banner de cookies
    CookiePreferences.tsx      # reapertura del banner
  content/
    prototipo.ts               # marca, precios, trabajos, proceso, reseñas y FAQ
  lib/
    site.ts                    # datos del sitio
    consent.ts / use-consent.ts
    utils.ts
public/
  portfolio/                   # capturas de proyectos
  stack/                       # logos de herramientas (referencia)
```

## Capa de producción

- **Metadata**: title con marca, description, canonical, Open Graph y Twitter
  Card.
- **SEO técnico**: `robots.ts`, `sitemap.ts` y JSON-LD (`Organization` +
  `WebSite`) en el layout raíz.
- **Consentimiento**: `CookieConsent` guarda la elección en `localStorage`.
  Microsoft Clarity solo se carga con consentimiento explícito.
- **Resiliencia sin JS**: `Reveal` agrega `data-reveal` y el layout incluye un
  `<noscript>` que fuerza el estado final.
- **Accesibilidad de movimiento**: `Reveal` y `cota.css` respetan
  `prefers-reduced-motion`.

## Pendiente antes de publicar

1. Reemplazar marca, contacto, disponibilidad, precios, trabajos y reseñas de
   ejemplo por datos reales de Cota.
2. Decidir si el portfolio actual se mantiene como trabajo de Cota.
3. Persistir los leads de `api/save-lead` (Supabase) y notificar por
   email/WhatsApp.
4. Crear una imagen Open Graph propia de Cota y activar la indexación
   (`robots.index`).
5. Convertir las capturas de `public/portfolio` a WebP/AVIF.
6. Agregar pruebas del flujo de leads y del formulario.
