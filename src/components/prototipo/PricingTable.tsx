"use client";

import { useState } from "react";
import { brand, customSystem } from "@/content/prototipo";
import { PricingPlanLink } from "@/components/prototipo/PricingPlanLink";
import { Reveal } from "@/components/prototipo/Reveal";
import { CornerMarks, SectionHead } from "@/components/prototipo/primitives";
import { cn } from "@/lib/utils";

const plansData = [
  {
    plan: "Landing page" as const,
    type: "Landing page",
    tag: "PLAN 01 // CONVERSIÓN",
    fit: "Profesionales, oficios y lanzamientos que buscan validar y recibir consultas directas sin vueltas.",
    price: "USD 200",
    originalPrice: "USD 350",
    promoBadge: "Promo este mes",
    pricePrefix: "Precio cerrado",
    term: "7 a 10 días hábiles",
    recommended: false,
    features: [
      "Diseño exclusivo enfocado en que te escriban por WhatsApp",
      "Botón directo de WhatsApp y formulario de contacto ágil",
      "Carga en < 1 segundo para que tus visitas no se vayan",
      "Medición de consultas (Pixel de Meta / Google Analytics)",
      "Dominio propio (.com / .ar) y publicación incluidos",
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
      "Hasta 5 páginas o secciones para ordenar todos tus servicios",
      "Estructura preparada para que Google te encuentre cuando busquen tu rubro",
      "Llamados a la acción claros y botón de WhatsApp en cada página",
      "Carga instantánea y máxima seguridad sin caídas",
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
      "Cobros con Mercado Pago / tarjetas y envíos automatizados",
      "Carga inicial de hasta 30 productos listos para vender",
      "Capacitación en video para que manejes tus ventas sin depender de nadie",
      "Dominio propio vinculado y lista para operar",
    ],
  },
];

export function PricingTable() {
  // En mobile se muestra un plan por vez; el recomendado arranca seleccionado.
  const recommendedIndex = Math.max(
    plansData.findIndex((item) => item.recommended),
    0,
  );
  const [planIndex, setPlanIndex] = useState(recommendedIndex);

  return (
    <section
      id="precios"
      className="border-b border-[var(--line)] py-12 sm:py-24"
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

        {/* Selector de plan en mobile: una tarjeta a la vez, sin perder contenido. */}
        <fieldset className="mt-8 lg:hidden">
          <legend className="proto-label">Elegí un plan</legend>
          <div className="mt-3 grid grid-cols-3 border border-[var(--line-strong)]">
            {plansData.map((item, index) => {
              const active = index === planIndex;
              return (
                <label
                  key={item.plan}
                  className={cn(
                    "relative cursor-pointer border-r border-[var(--line)] px-2 py-3 text-center transition-colors last:border-r-0",
                    active
                      ? "bg-[var(--fg)] text-[var(--bg)]"
                      : "text-[var(--muted)]",
                  )}
                >
                  <input
                    type="radio"
                    name="plan-mobile"
                    value={item.plan}
                    checked={active}
                    onChange={() => setPlanIndex(index)}
                    className="peer sr-only"
                  />
                  <span className="block font-cota text-[9px] tracking-[0.12em] uppercase">
                    {item.type}
                  </span>
                  <span className="mt-1 block font-cota text-[13px] font-bold">
                    {"originalPrice" in item && item.originalPrice ? (
                      <span className="flex items-center justify-center gap-1.5">
                        <span className="text-[11px] font-normal text-[var(--muted)] line-through decoration-[var(--signal)]">
                          {item.originalPrice}
                        </span>
                        <span>{item.price}</span>
                      </span>
                    ) : (
                      item.price
                    )}
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 peer-focus-visible:outline-2 peer-focus-visible:-outline-offset-2 peer-focus-visible:outline-[var(--signal)] peer-focus-visible:outline"
                  />
                </label>
              );
            })}
          </div>
        </fieldset>

        {/* Grid de 3 Tarjetas de Precios (Triptych) */}
        <div className="mt-6 grid gap-8 items-stretch lg:mt-14 lg:grid-cols-3">
          {plansData.map((item, index) => {
            const isRec = item.recommended;
            return (
              <Reveal
                key={item.plan}
                delay={index * 80}
                className={cn(
                  "mx-auto flex w-full max-w-[520px] lg:mx-0 lg:max-w-none",
                  index !== planIndex && "hidden lg:flex",
                )}
              >
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
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 border border-[var(--signal)] bg-[var(--signal)] px-3.5 py-1 font-cota text-[10px] uppercase tracking-[0.2em] text-white shadow-md">
                      <span className="h-1.5 w-1.5 bg-white" aria-hidden="true" />
                      Recomendado · Más elegido
                    </div>
                  )}

                  <div>
                    {/* Encabezado técnico */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] pb-3">
                      <span className="font-cota text-[10px] font-medium tracking-[0.14em] whitespace-nowrap text-[var(--signal)] sm:tracking-[0.18em]">
                        {item.tag}
                      </span>
                      <span className="font-cota text-[9px] tracking-wider whitespace-nowrap uppercase px-2 py-0.5 border border-[var(--line)] text-[var(--muted)]">
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
                      <div className="flex items-center gap-2 font-cota text-[10px] tracking-wider uppercase text-[var(--muted)]">
                        <span>{item.pricePrefix}</span>
                        {"promoBadge" in item && item.promoBadge ? (
                          <>
                            <span>·</span>
                            <span className="text-[var(--signal)] font-medium">
                              {item.promoBadge}
                            </span>
                          </>
                        ) : null}
                      </div>

                      <div className="mt-1.5 flex flex-wrap items-baseline gap-2.5">
                        {"originalPrice" in item && item.originalPrice ? (
                          <span className="font-cota text-xl sm:text-2xl text-[var(--muted)] line-through">
                            {item.originalPrice}
                          </span>
                        ) : null}
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
                  href={`${brand.whatsapp}?text=${encodeURIComponent(
                    "Hola Luciano, estoy viendo la tabla de precios de Nicolini Design y no sé qué plan me conviene para mi proyecto.",
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
