# Nicolini Design — Estudio de Desarrollo Web

Sitio oficial de **Nicolini Design**, estudio especializado en diseño y desarrollo web de alta precisión. Construido con arquitectura moderna, tipografía técnica editorial y rendimiento nativo.

---

## Concepto Visual: Plano Técnico (CAD Blueprint)

El sitio utiliza una metáfora de **plano técnico y arquitectura de ingeniería**:

* **Paleta:** Papel pergamino (`#e9e6dd`), tinta carbón (`#0d1418`), azul blueprint (`#16324f`) y naranja de marcación técnica (`#b83812`).
* **Tipografía:** `Figtree` (lectura y display) + `Martian Mono` (cotas numéricas, metadatos y etiquetas técnicas).
* **Grilla milimetrada:** Textura vectorial de fondo con líneas de medición exactas y marcadores de cota.
* **Transiciones de calibración:** Animación de velo CAD de alta precisión al alternar entre idiomas.

---

## Estructura de Secciones y Experiencia

1. **Navegación Técnica (`ProtoNav`):** Barra fija minimalista con acceso a secciones, enlace a catálogo y conmutador de idioma `ES | EN` con persistencia de sesión.
2. **Hero & Ficha Técnica CAD (`ProtoHero` + `HeroCadSheet`):** Propuesta de valor directa con lámina interactiva CAD de tres modos:
   * *01 Ficha de Obra:* Alcance, stack tecnológico, tiempos de entrega y garantía.
   * *02 Cotas CAD:* Wireframe interactivo con visualización de medidas y cotas dimensionales.
   * *03 Métricas:* Tiempos de carga reales (< 0.5s), Core Web Vitals y optimización SEO nativa.
3. **Alcance (`Scope`):** Cuatro etapas claras de ejecución técnica (Diseño & Arquitectura, Rendimiento & Accesibilidad, Conversión & Formularios, Despliegue & Dominio).
4. **Visor de Obras (`WorkIndex`):** Selector dividido entre proyectos entregados a clientes en producción y prototipos interactivos del laboratorio con inspector lateral.
5. **Proceso & Pliego de Garantía (`Process`):** Cronograma de obra en cuatro fases y pliego contractual con esquema de pago protegido (seña inicial y saldo contra entrega conforme).
6. **Presupuesto Transparente (`PricingTable`):** Precios cerrados para Landing Page, Web Multipágina y Tienda/Sistema a medida, con soporte para pagos locales e internacionales (Wise, PayPal, USDT).
7. **Preguntas Frecuentes (`Faq`):** Respuestas a dudas técnicas, propiedad del código fuente y mantenimiento.
8. **Formulario de Contacto (`Contact`):** Captura de consultas con protección anti-bot (honeypot + time-latch), notificación por correo y generación de ficha estructurada para WhatsApp.
9. **Cápsula Flotante de WhatsApp (`WhatsAppFloat`):** Botón de contacto directo con estilo obsidian dark, no invasivo y contextual al idioma activo.
10. **Catálogo Técnico Extendido (`/catalogo`):** Repositorio interactivo con 100 prototipos funcionales organizados por industria y estilo visual.

---

## Stack Tecnológico

* **Framework:** Next.js 16 (App Router + Turbopack)
* **Librería UI:** React 19
* **Estilos:** Tailwind CSS 4 + `cota.css` (tokens de variables CSS para el sistema visual plano técnico)
* **Componentes UI:** Radix UI primitives (`@radix-ui/react-accordion`)
* **Métricas & Rendimiento:** `@vercel/speed-insights` y `@vercel/analytics`
* **Analítica Opcional:** Microsoft Clarity (sujeto a consentimiento de cookies)
* **Seguridad:** Cabeceras HTTP estrictas (CSP, HSTS, X-Frame-Options, Permissions-Policy) y rate limiting en endpoints de API
* **Accesibilidad:** Soporte para `prefers-reduced-motion` y compatibilidad sin JavaScript vía `<noscript>`

---

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Chequeo estricto de tipos con TypeScript
npm run typecheck

# Linter de código
npm run lint

# Compilar build optimizado para producción
npm run build

# Servir build de producción localmente
npm run start
```

---

## Variables de Entorno

Creá el archivo `.env.local` a partir de `.env.example`:

```bash
cp .env.example .env.local
```

| Variable | Ámbito | Descripción |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Público | Dominio base del sitio (usado para canonicals, sitemap, Open Graph y JSON-LD). Por defecto: `https://nicolini.design`. |
| `NEXT_PUBLIC_CLARITY_ID` | Público | ID de proyecto de Microsoft Clarity (opcional; si está vacío no se carga). |
| `LEAD_NOTIFICATION_EMAIL` | Servidor | Correo de destino que recibe las consultas enviadas por el formulario técnico. |
| `RESEND_API_KEY` | Servidor | Clave API de Resend para envío transaccional de notificaciones de nuevos leads. |
| `WEB3FORMS_ACCESS_KEY` | Servidor | Clave alternativa de Web3Forms para respaldo en la recepción de formularios. |
| `LEAD_FROM_EMAIL` | Servidor | Dirección remitente autorizada para los correos salientes (ej. `notificaciones@nicolini.design`). |

---

## Estructura del Proyecto

```
src/
  app/
    layout.tsx                 # Fuentes, metadatos globales, OpenGraph, JSON-LD y Analytics
    page.tsx                   # Página principal en español (/)
    globals.css                # Configuración base de Tailwind CSS 4
    cota.css                   # Tokens de diseño, grilla CAD y animaciones técnicas
    robots.ts / sitemap.ts     # SEO técnico automatizado y soporte hreflang
    politica-de-privacidad/    # Política de privacidad y tratamiento de datos
    en/
      page.tsx                 # Página principal en inglés (/en)
    api/
      save-lead/               # Endpoint para registro y notificación de consultas técnicas
      track-event/             # Endpoint para telemetría interna y analítica de eventos
  components/
    brand/
      NicoliniLogo.tsx         # Isotipo y logotipo de Nicolini Design
    prototipo/
      ProtoNav.tsx             # Barra de navegación con conmutador de idioma ES|EN
      ProtoHero.tsx            # Hero con propuesta de valor y ficha técnica
      HeroCadSheet.tsx         # Lámina interactiva CAD (Ficha, Cotas, Métricas)
      Scope.tsx                # Alcance de obra y etapas de entrega
      WorkIndex.tsx            # Visor técnico de obras (Clientes / Laboratorio)
      Process.tsx              # Metodología y pliego de garantía contractual
      PricingTable.tsx         # Tabla de presupuestos cerrados y medios de pago
      Faq.tsx                  # Preguntas frecuentes con acordeón técnico
      Contact.tsx              # Formulario de consulta con anti-bot y enlace a WhatsApp
      ProtoFooter.tsx          # Pie de página y enlaces institucionales
      WhatsAppFloat.tsx        # Cápsula flotante minimalista de contacto
      LanguageTransition.tsx   # Efecto visual de calibración CAD al cambiar de idioma
      primitives.tsx           # Componentes base (Kicker, SectionHead, Cota)
      Reveal.tsx               # Animaciones de entrada progresiva
      en/                      # Componentes equivalentes adaptados al inglés para /en
  content/
    prototipo.ts               # Contenido centralizado en español (marca, precios, proyectos)
    prototipo.en.ts            # Contenido centralizado en inglés
  lib/
    site.ts                    # Metadatos del sitio, URLs y configuración global
    consent.ts                 # Manejador de consentimiento de cookies
    rate-limit.ts              # Control de tasa de peticiones (rate limiting) para endpoints
    plan-selection.ts          # Eventos y comunicación entre componentes de selección de plan
public/
  catalogo/                    # Catálogo técnico interactivo con 100 prototipos funcionales
  brand/                       # Recursos gráficos y previsualizaciones OpenGraph
  portfolio/                   # Capturas de proyectos entregados
```

---

## Licencia

Privado © Nicolini Design Estudio. Todos los derechos reservados.
