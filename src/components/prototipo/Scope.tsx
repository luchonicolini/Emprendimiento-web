"use client";

import { Reveal } from "@/components/prototipo/Reveal";
import { SectionHead } from "@/components/prototipo/primitives";

const stackingCards = [
  {
    index: "01",
    tag: "FRENTE 01 // ARQUITECTURA VISUAL",
    headline: "Una sola propuesta con criterio. No tres caminos a medias.",
    explanation:
      "Definimos la jerarquía, la estructura y el sistema de diseño antes de escribir una línea de código. Pensamos el sitio desde cómo va a convertir visitas en clientes, no desde modas visuales pasajeras.",
    badges: ["Wireframe funcional", "Tipografía suiza", "Grid editorial", "Mobile first"],
    deliverables: [
      "Estructura de secciones y flujo de navegación",
      "Sistema visual: tipografías, colores y espaciados",
      "Diseño responsive adaptado a celulares y tablets",
      "Prototipo interactivo navegable para tu aprobación",
    ],
    saves:
      "Semanas de idas y vueltas indecisas, diseños sobrecargados que nadie lee y plantillas genéricas que se ven iguales a la competencia.",
  },
  {
    index: "02",
    tag: "FRENTE 02 // INGENIERÍA FRONTEND",
    headline: "Código limpio y carga instantánea. Cero constructores pesados.",
    explanation:
      "Desarrollamos con Next.js y React con arquitectura propia. Sin WordPress sobrecargado de plugins que se rompen ni constructores visuales que tardan 5 segundos en abrir. Tu web abre al instante.",
    badges: ["Next.js 16", "React 19", "Tailwind CSS", "Core Web Vitals 100/100"],
    deliverables: [
      "Desarrollo frontend nativo con renderizado ultra-rápido",
      "Optimización de imágenes y tipografías sin pérdida de nitidez",
      "SEO técnico estructurado, metadata y Open Graph para redes",
      "Código modular, accesible y optimizado para los motores de Google",
    ],
    saves:
      "Plugins lentos con agujeros de seguridad, caídas de velocidad que espantan clientes y sitios que se desacomodan al abrir en celulares.",
  },
  {
    index: "03",
    tag: "FRENTE 03 // ESTRATEGIA EDITORIAL",
    headline: "Lo que el visitante necesita leer para decidir. Sin relleno.",
    explanation:
      "No te dejamos solo frente a una hoja en blanco. Te ayudamos a ordenar tu propuesta de valor, tus servicios y tus llamadas a la acción con palabras simples, contundentes y vendedoras.",
    badges: ["Copywriting directo", "Propuesta de valor", "0% humo", "Llamados a la acción"],
    deliverables: [
      "Titular y propuesta de valor clara en el primer pantallazo",
      "Redacción orientada a resolver dudas y motivar el contacto",
      "Estructuración lógica de servicios y respuestas a objeciones",
      "Curaduría y orden de imágenes para que acompañen el texto",
    ],
    saves:
      "Textos genéricos tipo 'somos una empresa líder con soluciones integrales', bloqueos creativos y clientes que se van sin entender qué ofrecés.",
  },
  {
    index: "04",
    tag: "FRENTE 04 // ANALÍTICA Y PUESTA EN MARCHA",
    headline: "Tu web y tus anuncios hablando el mismo idioma desde el día 1.",
    explanation:
      "Un sitio web sin analítica es un barco a ciegas. Configuramos los eventos clave para que sepas con exactitud cuánta gente te escribe por WhatsApp, de dónde llegan tus visitas y cómo rinde tu inversión.",
    badges: ["Meta Pixel", "Google Analytics 4", "Eventos WhatsApp", "Dominio & SSL"],
    deliverables: [
      "Instalación de píxel de Meta y Google Analytics 4",
      "Eventos de conversión configurados (clics a WhatsApp, formularios)",
      "Conexión de dominio propio, DNS y certificado SSL de seguridad",
      "Verificación técnica previa al lanzamiento oficial",
    ],
    saves:
      "Pautar en redes o Google a ciegas sin saber qué anuncio funciona, perder contactos de clientes y dolores de cabeza configurando DNS o servidores.",
  },
];

export function Scope() {
  return (
    <section id="alcance" className="border-b border-[var(--line)] py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <SectionHead
            index="02 / Alcance"
            title={
              <>
                Lo que entra en la <em className="not-italic text-[var(--signal)]">obra</em>.
              </>
            }
            intro={
              <p>
                Cuatro frentes, un solo responsable técnico. No vendemos horas sueltas
                ni delegamos a terceros: cerramos un alcance de ingeniería y lo ejecutamos de punta a punta.
              </p>
            }
          />
        </Reveal>

        {/* Mazo de Tarjetas Sticky Stacking */}
        <div className="relative mt-16 space-y-20 sm:space-y-32 pb-16">
          {stackingCards.map((card, idx) => (
            <article
              key={card.index}
              className="sticky transform-gpu border border-[var(--line-strong)] bg-[#f4f2ec] shadow-[0_-4px_20px_rgba(13,20,24,0.06),0_18px_40px_rgba(13,20,24,0.12)] transition-colors duration-300 hover:border-[var(--signal)]/70 group"
              style={{
                top: `calc(5.2rem + ${idx * 40}px)`,
              }}
            >
              {/* Pestaña superior del archivo / plano */}
              <div className="flex h-11 items-center justify-between border-b border-[var(--line-strong)] bg-[var(--bg)] px-5 sm:px-8">
                <div className="flex items-center gap-3">
                  <span className="font-cota text-xs font-bold text-[var(--signal)]">
                    {card.index}
                  </span>
                  <span className="h-3 w-px bg-[var(--line-strong)]" />
                  <span className="font-cota text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[var(--fg)]">
                    {card.tag}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden font-cota text-[10px] tracking-wider uppercase text-[var(--muted)] sm:inline">
                    FASE {card.index} DE 04
                  </span>
                  <span className="h-1.5 w-1.5 bg-[var(--signal)]" />
                </div>
              </div>

              {/* Cuerpo de la Tarjeta */}
              <div className="p-6 sm:p-9 lg:p-11">
                <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12 items-start">
                  {/* Columna Izquierda: Titular y propuesta */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-[-0.035em] text-[var(--fg)] leading-snug">
                      {card.headline}
                    </h3>
                    <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[var(--muted)] max-w-xl">
                      {card.explanation}
                    </p>

                    {/* Badges técnicos */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {card.badges.map((b) => (
                        <span
                          key={b}
                          className="font-cota text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 py-1 border border-[var(--line-strong)] bg-[var(--bg)] text-[var(--fg)]"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Columna Derecha: Ficha de Entregables */}
                  <div className="border border-[var(--line-strong)] bg-[var(--bg)] p-5 sm:p-7 space-y-5">
                    <div>
                      <h4 className="font-cota text-[10px] tracking-[0.2em] uppercase text-[var(--signal)] font-bold">
                        Entregables de obra
                      </h4>
                      <ul className="mt-3.5 space-y-2.5">
                        {card.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[var(--fg)]"
                          >
                            <span className="font-cota text-[11px] text-[var(--signal)] mt-0.5">
                              ✓
                            </span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[var(--line)]">
                      <h4 className="font-cota text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] font-semibold">
                        Dolor que te ahorrás
                      </h4>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">
                        {card.saves}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
