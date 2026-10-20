# Ahora Web — sitio de desarrollo web

Landing de conversión para el servicio de desarrollo web de Ahora Web. Página
única en español (es-AR) con formulario de presupuesto en tres pasos.

## Stack

- Next.js 16 (App Router, Turbopack, Cache Components)
- React 19
- Tailwind CSS 4
- Framer Motion + Radix Accordion + Lucide
- TypeScript estricto

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
    page.tsx                   # landing
    globals.css                # tokens, animaciones, reduced motion
    robots.ts / sitemap.ts     # SEO técnico
    politica-de-privacidad/    # página legal
    api/save-lead/             # recepción de leads
    api/track-event/           # eventos (pendiente de integración)
  components/                  # una sección por archivo
  lib/                         # site config, consentimiento, utils
public/
  portfolio/                   # capturas de proyectos
  stack/                       # logos del stack
  og/                          # imagen Open Graph 1200x630
```

## Prototipo `/prototipo`

El prototipo de la web propia vive en `src/app/prototipo/` y se puede ver en
`http://localhost:3000/prototipo`. Usa un mundo visual distinto (plano técnico:
papel, azul tinta, Archivo + Martian Mono) para comparar contra la landing
actual sin reemplazarla.

- Está marcado `noindex, nofollow` y no carga el consentimiento ni Clarity.
- Todo el contenido editable está en `src/content/prototipo.ts`: marca
  provisoria (**Cota**), contacto, precios, trabajos, proceso, reseñas y FAQ.
- Los datos de contacto, las reseñas y los trabajos son de ejemplo. El
  formulario no envía ni persiste nada; solo muestra el estado de confirmación.
- Los componentes están en `src/components/prototipo/` y los estilos en
  `src/app/prototipo/prototipo.css`.

Para convertirlo en el sitio principal, mover la página a `/`, reemplazar los
datos de ejemplo y decidir si se conserva la landing actual como historial.

## Capa de producción

- **Metadata**: title con marca, description, canonical, Open Graph y Twitter
  Card. La imagen OG vive en `public/og/desarrollo-web.jpg`.
- **SEO técnico**: `robots.ts`, `sitemap.ts` y JSON-LD (`Organization` +
  `WebSite`) en el layout raíz.
- **Consentimiento**: `CookieConsent` guarda la elección en `localStorage`.
  Microsoft Clarity solo se carga con consentimiento explícito
  (`Analytics.tsx`). "Preferencias de cookies" en el footer reabre el banner.
- **Resiliencia sin JS**: `ScrollReveal` agrega `data-reveal` y el layout
  incluye un `<noscript>` que fuerza el estado final. Sin JavaScript la página
  se ve completa.
- **Accesibilidad de movimiento**: `ScrollReveal` respeta
  `prefers-reduced-motion` y `globals.css` desactiva ticker, transiciones y
  scroll suave cuando corresponde.

## Pendiente (fase 2)

1. **Persistencia de leads**: `api/save-lead` solo hace `console.log`. Hay que
   escribirlos en una base (Supabase) y notificar por email/WhatsApp.
2. **`leadId`**: los envíos parciales de cada paso no se pueden unir.
3. **Contenido centralizado**: los precios están duplicados en `Pricing`,
   `LeadForm` y `Hero`; mover a `src/content/`.
4. **Paridad de contenido**: restaurar "Mateo, el dueño del estudio", las citas
   del showcase y el CTA faltante.
5. **Imágenes**: `public/portfolio` pesa 14 MB en PNG; convertir a WebP/AVIF.
6. **Tests**: no hay cobertura del flujo de leads ni del formulario.
