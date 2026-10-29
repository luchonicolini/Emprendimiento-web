"use client";

import { useState } from "react";
import { Reveal } from "@/components/prototipo/Reveal";
import { SectionHead } from "@/components/prototipo/primitives";
import { cn } from "@/lib/utils";

const stackingCards = [
  {
    index: "01",
    tag: "FRENTE 01 // ARQUITECTURA VISUAL",
    headline: "Una sola propuesta con criterio. Pensada para vender, no para adornar.",
    explanation:
      "Definimos la jerarquía, la estructura y el recorrido de tu cliente antes de programar. Diseñamos con un objetivo comercial concreto: que quien entre entienda tu valor en 3 segundos y sienta la confianza suficiente para pedirte presupuesto.",
    badges: ["Flujo de ventas", "Diseño a medida", "Mobile first", "Prototipo 1:1"],
    deliverables: [
      "Recorrido visual diseñado para guiar al visitante al botón de contacto",
      "Diseño gráfico exclusivo que transmite autoridad y respaldo a tu negocio",
      "Adaptación exacta para celulares (donde entra más del 80% de tus clientes)",
      "Prototipo interactivo en tu mano para aprobar todo antes de programar",
    ],
    saves:
      "Semanas de idas y vueltas indecisas, diseños confusos que nadie entiende y plantillas genéricas iguales a las de tu competencia.",
  },
  {
    index: "02",
    tag: "FRENTE 02 // INGENIERÍA FRONTEND",
    headline: "Una web ágil, sin depender de constructores pesados.",
    explanation:
      "Desarrollamos con Next.js y optimizamos imágenes, recursos y carga inicial. El rendimiento final depende del contenido, el dispositivo y la conexión; podemos medirlo antes de publicar.",
    badges: ["Rendimiento optimizado", "Next.js & React", "Métricas medibles", "Menos dependencias"],
    deliverables: [
      "Imágenes y recursos optimizados para reducir tiempos de carga en móviles",
      "Estructura técnica preparada para facilitar el rastreo e indexación en Google, sin garantizar posiciones",
      "Configuración de seguridad y dependencias acotadas; la disponibilidad también depende del proveedor de hosting",
    ],
    saves:
      "Clientes perdidos por pantallas que tardan en abrir, plugins que se caen solos y visitas que abandonan antes de tocar tu WhatsApp.",
  },
  {
    index: "03",
    tag: "FRENTE 03 // ESTRATEGIA EDITORIAL",
    headline: "Lo que tu cliente necesita leer para decidirse. Sin rodeos ni relleno.",
    explanation:
      "No te dejamos solo frente a una hoja en blanco. Te ayudamos a ordenar tu propuesta, tus servicios y tus precios con palabras claras, directas y vendedoras que responden las dudas del cliente antes de que pregunte.",
    badges: ["Propuesta de valor clara", "Textos que venden", "Cero frases cliché", "Llamados a la acción"],
    deliverables: [
      "Titular directo que comunica en 3 segundos por qué elegirte a vos",
      "Redacción comercial que derriba objeciones y estimula el contacto",
      "Detalle claro de tus servicios para que el cliente sepa qué incluye",
      "Llamados a la acción estratégicos ubicados en los momentos clave de lectura",
    ],
    saves:
      "Textos vacíos como 'somos una empresa líder con soluciones integrales', bloqueos de no saber qué escribir y clientes que se van sin entender tu valor.",
  },
  {
    index: "04",
    tag: "FRENTE 04 // ANALÍTICA Y PUESTA EN MARCHA",
    headline: "Medí las consultas y conocé qué canales las generan.",
    explanation:
      "Tener una web sin medir es tener un local con la persiana a oscuras. Configuramos la analítica y el seguimiento de WhatsApp para que sepas cuántos presupuestos te piden, de qué canal vienen y cómo rinde cada peso que invertís.",
    badges: ["Medición de WhatsApp", "Meta Pixel & Google", "Dominio propio & SSL", "Retorno de inversión"],
    deliverables: [
      "Medición de clics a WhatsApp y envíos de formularios, según las herramientas y el consentimiento configurados",
      "Configuración de Meta Pixel y Google Analytics para analizar el rendimiento de campañas",
      "Dominio web oficial (.com / .ar) y candado de seguridad SSL incluidos a tu nombre",
      "Revisión de la puesta en marcha en dispositivos móviles antes del lanzamiento",
    ],
    saves:
      "Pautar en redes a ciegas sin saber qué te genera ventas, perder contactos por enlaces rotos y lidiar con configuraciones técnicas engorrosas.",
  },
];

export function Scope() {
  // En mobile las fichas de entregables arrancan cerradas para que la sección
  // mida la mitad. En desktop el mazo sticky las muestra siempre.
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  return (
    <section id="alcance" className="border-b border-[var(--line)] py-12 sm:py-24">
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

        {/* Selector rápido de fases en desktop */}
        <div className="mt-8 hidden items-center gap-2 border-b border-[var(--line)] pb-4 lg:flex">
          <span className="proto-label mr-2">Fases de obra:</span>
          {stackingCards.map((card) => (
            <a
              key={card.index}
              href={`#fase-${card.index}`}
              className="inline-flex items-center gap-2 border border-[var(--line)] bg-[var(--bg)] px-3 py-1.5 font-cota text-[10px] uppercase tracking-wider text-[var(--muted)] transition-colors hover:border-[var(--signal)] hover:text-[var(--fg)]"
            >
              <span className="text-[var(--signal)]">{card.index}</span>
              <span>{card.tag.split("//")[1]?.trim() ?? card.tag}</span>
            </a>
          ))}
        </div>

        {/* Mazo de Tarjetas Sticky Stacking */}
        <div className="relative mt-10 space-y-4 pb-10 sm:mt-14 sm:space-y-8 sm:pb-12 lg:mt-12 lg:space-y-24">
          {stackingCards.map((card, idx) => {
            const panelId = `alcance-panel-${card.index}`;
            const isOpen = openPanel === card.index;

            return (
              <article
                key={card.index}
                id={`fase-${card.index}`}
                className="group transform-gpu scroll-mt-28 border border-[var(--line-strong)] bg-[#f4f2ec] shadow-[3px_3px_0px_var(--line-strong)] transition-all duration-300 hover:border-[var(--signal)]/80 lg:sticky"
                style={{
                  top: `calc(5.2rem + ${idx * 40}px)`,
                }}
              >
                {/* Pestaña superior del archivo / plano */}
                <div className="relative flex min-h-11 flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-[var(--line-strong)] bg-[var(--bg)] px-4 py-2 sm:px-8">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="font-cota text-xs font-bold text-[var(--signal)]">
                      {card.index}
                    </span>
                    <span className="h-3 w-px shrink-0 bg-[var(--line-strong)]" />
                    <span className="font-cota text-[10px] leading-snug font-semibold tracking-[0.18em] text-[var(--fg)] sm:text-[11px] sm:tracking-[0.2em] lg:hidden">
                      {card.tag.split("//")[1]?.trim() ?? card.tag}
                    </span>
                    <span className="hidden font-cota text-[11px] font-semibold tracking-[0.2em] text-[var(--fg)] lg:inline">
                      {card.tag}
                    </span>
                  </div>
                  <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
                    <span className="hidden font-cota text-[10px] tracking-wider uppercase text-[var(--muted)] sm:inline">
                      FASE {card.index} DE 04
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenPanel(isOpen ? null : card.index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="inline-flex min-h-9 items-center gap-1.5 border border-[var(--line-strong)] px-2.5 py-1.5 font-cota text-[10px] tracking-wider uppercase text-[var(--fg)] transition-colors after:absolute after:inset-0 after:content-[''] hover:border-[var(--signal)] hover:text-[var(--signal)] lg:hidden"
                    >
                      {isOpen
                        ? "Ocultar"
                        : `Entregables (${card.deliverables.length})`}
                      <span aria-hidden="true" className="text-[12px] leading-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <span className="h-1.5 w-1.5 bg-[var(--signal)]" />
                  </div>
                </div>

                {/* Cuerpo de la Tarjeta */}
                <div className="p-5 sm:p-9 lg:p-11">
                  <div className="grid items-start gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
                    {/* Columna Izquierda: Titular y propuesta */}
                    <div>
                      <h3 className="text-2xl font-bold leading-snug tracking-[-0.035em] text-[var(--fg)] sm:text-3xl lg:text-[34px]">
                        {card.headline}
                      </h3>
                      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">
                        {card.explanation}
                      </p>

                      {/* Badges técnicos */}
                      <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                        {card.badges.map((b) => (
                          <span
                            key={b}
                            className="border border-[var(--line-strong)] bg-[var(--bg)] px-2.5 py-1 font-cota text-[10px] tracking-wider uppercase text-[var(--fg)] sm:text-[11px]"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Columna Derecha: Ficha de Entregables */}
                    <div
                      id={panelId}
                      className={cn(
                        "space-y-5 border border-[var(--line-strong)] bg-[var(--bg)] p-5 sm:p-7",
                        !isOpen && "hidden lg:block",
                      )}
                    >
                      <div>
                        <h4 className="font-cota text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--signal)]">
                          Entregables de obra
                        </h4>
                        <ul className="mt-3.5 space-y-2.5">
                          {card.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[var(--fg)]"
                            >
                              <span className="mt-0.5 font-cota text-[11px] text-[var(--signal)]">
                                ✓
                              </span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-[var(--line)] pt-4">
                        <h4 className="font-cota text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--muted)]">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
