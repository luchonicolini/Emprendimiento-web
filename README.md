# Nicolini Design — Estudio de Desarrollo Web

Sitio oficial de **Nicolini Design**, estudio especializado en diseño y desarrollo web de alta precisión. Construido con arquitectura moderna, tipografía editorial técnica y rendimiento nativo.

---

## Concepto Visual: Plano Técnico (Blueprint)

El sitio utiliza una metáfora de **plano técnico y arquitectura de ingeniería**:
* **Paleta:** Papel pergamino (`#e9e6dd`), tinta carbón (`#0d1418`), azul blueprint (`#16324f`) y naranja de marcación técnica (`#e4572e`).
* **Tipografía:** `Figtree` (display y lectura) + `Martian Mono` (cotas numéricas, metadatos y etiquetas técnicas).
* **Grilla milimetrada:** Textura vectorial de fondo con líneas de medición exactas.

---

## Componentes y Experiencia Interactiva

1. **Hero con Comparador Antes / Después:**
   * Slider interactivo con control circular que compara en tiempo real una web genérica generada por IA (plantilla saturada, código lento, sin indexación) frente a una web profesional de Nicolini Design (Next.js 16, 0.4s de carga, SEO nativo y base de datos propia).
2. **02 / Alcance (Stacking Cards on Scroll):**
   * Efecto mazo de planos sticky donde las 4 fases se van apilando suavemente con el scroll del usuario, con aceleración por GPU (`transform-gpu`) y fichas de entregables reales.
3. **03 / Trabajos (Galería Editorial):**
   * Catálogo de proyectos publicados con capturas reales y enlaces de prueba.
4. **04 / Proceso (Plan de obra y entrega):**
   * Pipeline técnico interactivo con nodos numerados y la **Cédula de Garantía de Obra** en azul blueprint con el esquema de pago protegido (25% seña / 75% contra entrega).
5. **05 / Presupuesto (Precios cerrados):**
   * Triptych de 3 tarjetas equilibradas (Landing page, Web multipágina destacada en blueprint y Tienda online) + sub-banner para sistemas a medida.
6. **WhatsApp Flotante:**
   * Botón de contacto directo con indicador de estado activo y mensaje preconfigurado.

---

## Stack Tecnológico

* **Framework:** Next.js 16 (App Router + Turbopack)
* **Librería UI:** React 19
* **Estilos:** Tailwind CSS 4 + `cota.css` (tokens de variables CSS)
* **Componentes UI:** Radix UI primitives (`@radix-ui/react-accordion`)
* **Analítica & Rendimiento:** Microsoft Clarity (sujeto a consentimiento de cookies)
* **Accesibilidad:** Soporte estricto para `prefers-reduced-motion` y resiliencia sin JavaScript vía `<noscript>`.

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

Copiá `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Dominio público del sitio (alimenta canonicals, sitemap, Open Graph y JSON-LD). |
| `NEXT_PUBLIC_CLARITY_ID` | ID de Microsoft Clarity (opcional; si está vacío no se inicializa). |

---

## Estructura del Proyecto

```
src/
  app/
    layout.tsx                 # Fuentes, metadata global, JSON-LD y cookies
    page.tsx                   # Página principal (Home)
    globals.css                # Estilos base de Tailwind
    cota.css                   # Tokens y sistema visual "plano técnico"
    robots.ts / sitemap.ts     # SEO técnico automatizado
    politica-de-privacidad/    # Página legal
    api/save-lead/             # Endpoint para captura de leads
    api/track-event/           # Endpoint para eventos de analítica
  components/
    prototipo/
      ProtoHero.tsx            # Hero con slider interactivo Antes/Después
      Scope.tsx                # Alcance con Stacking Cards sticky
      WorkIndex.tsx            # Galería de proyectos entregados
      Process.tsx              # Metodología de obra y cédula de garantía
      PricingTable.tsx         # Tabla de 3 precios y sistemas a medida
      WhatsAppFloat.tsx        # Botón flotante de WhatsApp
      primitives.tsx           # Componentes base (Kicker, SectionHead, Cota)
  content/
    prototipo.ts               # Contenido centralizado (marca, precios, proyectos)
public/
  portfolio/                   # Capturas de proyectos entregados
```

---

## Licencia

Privado © Nicolini Design Estudio. Todos los derechos reservados.
