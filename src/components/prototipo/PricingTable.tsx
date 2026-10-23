"use client";

import { customSystem } from "@/content/prototipo";
import { PricingPlanLink } from "@/components/prototipo/PricingPlanLink";
import { Reveal } from "@/components/prototipo/Reveal";
import { CornerMarks, SectionHead } from "@/components/prototipo/primitives";

const plansData = [
  {
    plan: "Landing page" as const,
    type: "Landing page",
    tag: "PLAN 01 // CONVERSIÓN",
    fit: "Profesionales, oficios y lanzamientos que buscan validar y recibir consultas directas sin vueltas.",
    price: "USD 350",
    pricePrefix: "Precio cerrado",
    term: "7 a 10 días hábiles",
    recommended: false,
    features: [
      "Diseño exclusivo orientado a conversión",
      "Integración de WhatsApp y formulario directo",
      "Optimización 100% Mobile y velocidad de carga",
      "Configuración de analítica (Pixel / Analytics)",
      "Dominio propio conectado y publicación incluida",
    ],
  },
  {
    plan: "Web multipágina" as const,
    type: "Web multipágina",
    tag: "PLAN 02 // ESTRUCTURAL",
    fit: "Estudios y empresas con varios servicios que necesitan posicionar en Google y transmitir autoridad.",
    price: "USD 500",
    pricePrefix: "Precio cerrado",
    term: "10 a 15 días hábiles",
    recommended: true,
    features: [
      "Hasta 5 páginas o secciones independientes",
      "Estrategia y arquitectura SEO por servicio",
      "Formularios, llamados a la acción y WhatsApp",
      "Entrega documentada y métricas de rendimiento",
      "Dominio, SSL y hosting configurados a tu nombre",
    ],
  },
  {
    plan: "Tienda online" as const,
    type: "Tienda online",
    tag: "PLAN 03 // E-COMMERCE",
    fit: "Marcas y comercios que necesitan catálogo digital, carrito de compras y cobros automatizados.",
    price: "USD 650",
    pricePrefix: "Desde",
    term: "15 a 20 días hábiles",
    recommended: false,
    features: [
      "Montaje profesional en Tienda Nube o Shopify",
      "Pasarelas de cobro y envíos configuradas",
      "Carga inicial de hasta 30 productos con variantes",
      "Capacitación en video para gestionar stock y ventas",
      "Dominio propio vinculado y lista para operar",
    ],
  },
];

export function PricingTable() {
  return (
    <section
      id="precios"
      className="border-b border-[var(--line)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <SectionHead
            index="05 / Presupuesto"
            title="Precios cerrados antes de empezar."
            intro={
              <p>
                Elegí el punto de partida. El número final se confirma por
                WhatsApp antes de arrancar, en dólares o en pesos al cambio del
                día, con factura y detalle por escrito.
              </p>
            }
          />
        </Reveal>

        {/* Grid de 3 Tarjetas de Precios (Triptych) */}
        <div className="mt-14 grid gap-8 md:grid-cols-3 lg:gap-8 items-stretch">
          {plansData.map((item, index) => {
            const isRec = item.recommended;
            return (
              <Reveal key={item.plan} delay={index * 80} className="flex">
                <article
                  className={`group relative flex w-full flex-col justify-between border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                    isRec
                      ? "proto-blue proto-grid border-[var(--line-strong)] shadow-xl hover:border-[var(--signal)] hover:shadow-[0_20px_48px_rgba(22,50,79,0.28)]"
                      : "border-[var(--line)] bg-[var(--bg)] hover:border-[var(--signal)] hover:shadow-[0_16px_36px_rgba(13,20,24,0.06)]"
                  }`}
                >
                  <CornerMarks />

                  {/* Badge de Recomendado */}
                  {isRec && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 border border-[var(--signal)] bg-[var(--signal)] px-3.5 py-1 font-cota text-[9px] uppercase tracking-[0.2em] text-white shadow-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      Recomendado · Más elegido
                    </div>
                  )}

                  <div>
                    {/* Encabezado técnico */}
                    <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                      <span className="font-cota text-[10px] tracking-[0.2em] font-medium text-[var(--signal)]">
                        {item.tag}
                      </span>
                      <span className="font-cota text-[9px] tracking-wider uppercase px-2 py-0.5 border border-[var(--line)] text-[var(--muted)]">
                        {item.term}
                      </span>
                    </div>

                    {/* Nombre y para quién */}
                    <h3 className="mt-4 text-2xl sm:text-[26px] font-bold tracking-[-0.035em] text-[var(--fg)]">
                      {item.type}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[var(--muted)] min-h-[42px]">
                      {item.fit}
                    </p>

                    {/* Bloque de Precio */}
                    <div className="mt-6 border-y border-[var(--line)] py-5">
                      <span className="font-cota text-[10px] tracking-wider uppercase text-[var(--muted)]">
                        {item.pricePrefix}
                      </span>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-cota text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)]">
                          {item.price}
                        </span>
                      </div>
                      <span className="mt-1 block font-cota text-[11px] text-[var(--muted)]">
                        Plazo: {item.term}
                      </span>
                    </div>

                    {/* Lista de Especificaciones Técnicas */}
                    <div className="mt-6">
                      <span className="font-cota text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                        Qué incluye la obra:
                      </span>
                      <ul className="mt-3.5 space-y-2.5">
                        {item.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[var(--fg)]"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-[var(--line-strong)] font-cota text-[10px] text-[var(--signal)]"
                            >
                              ✓
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Botón CTA */}
                  <div className="mt-8 pt-4 border-t border-[var(--line)]">
                    <PricingPlanLink
                      plan={item.plan}
                      ariaLabel={`Elegir ${item.type}`}
                      className={`group/btn w-full inline-flex items-center justify-center gap-2 py-3 px-4 font-cota text-xs tracking-wider uppercase transition-all duration-200 ${
                        isRec
                          ? "proto-btn"
                          : "proto-btn proto-btn-ghost hover:border-[var(--signal)]"
                      }`}
                    >
                      Elegir {item.type}
                    </PricingPlanLink>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Banner Técnico: Sistema a Medida (El 4to caso) */}
        <Reveal delay={200} className="mt-12">
          <div className="relative border border-[var(--line)] bg-[var(--bg)] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 transition-all duration-300 hover:border-[var(--signal)]">
            <CornerMarks />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-cota text-[10px] tracking-[0.2em] text-[var(--signal)] uppercase font-semibold">
                  ALCANCE AVANZADO // CUSTOM
                </span>
                <span className="font-cota text-[9px] uppercase px-2 py-0.5 border border-[var(--line)] text-[var(--muted)]">
                  {customSystem.pricePrefix} {customSystem.price}
                </span>
              </div>
              <h4 className="text-xl font-bold tracking-[-0.03em] text-[var(--fg)]">
                ¿Buscás un sistema a medida, turnos o panel de gestión?
              </h4>
              <p className="text-sm text-[var(--muted)] max-w-2xl leading-relaxed">
                {customSystem.fit} {customSystem.includes}
              </p>
            </div>
            <div className="shrink-0">
              <PricingPlanLink
                plan={customSystem.plan}
                ariaLabel="Consultar por Sistema a medida"
                className="proto-btn proto-btn-ghost w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                Cotizar sistema a medida
              </PricingPlanLink>
            </div>
          </div>
        </Reveal>

        {/* Nota de Honestidad y Selección Libre */}
        <Reveal delay={240} className="mt-8">
          <div className="flex flex-col gap-5 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
              Si hoy tenés menos de USD 350, te conviene arrancar con Wix o
              Tienda Nube por tu cuenta. No es lo que hacemos y preferimos
              decírtelo antes.
            </p>
            <div className="flex flex-col gap-2 sm:items-end">
              <p className="proto-label">
                Precios en USD · pesos al cambio del día
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <PricingPlanLink
                  plan="No sé todavía"
                  ariaLabel="Ir al formulario sin elegir un plan"
                  className="text-sm underline decoration-[var(--signal)] underline-offset-4 transition-colors hover:text-[var(--signal)]"
                >
                  No sé cuál me conviene
                </PricingPlanLink>
                <span className="text-xs text-[var(--muted)]">o</span>
                <a
                  href={`https://wa.me/5491155550101?text=${encodeURIComponent(
                    "Hola Cota, estoy viendo la tabla de precios y no sé qué plan me conviene para mi proyecto.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[var(--fg)] underline decoration-[#25D366] underline-offset-4 transition-colors hover:text-[#25D366]"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
