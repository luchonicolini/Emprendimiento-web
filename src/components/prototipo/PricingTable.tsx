import { customSystem, pricing } from "@/content/prototipo";
import { PricingPlanLink } from "@/components/prototipo/PricingPlanLink";
import { Reveal } from "@/components/prototipo/Reveal";
import { SectionHead } from "@/components/prototipo/primitives";

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
            title={
              <>
                Precios cerrados
                <br />
                antes de empezar.
              </>
            }
            intro={
              <p>
                Elegí el punto de partida. El número final se confirma por
                WhatsApp antes de arrancar, en dólares o en pesos al cambio del
                día, con factura y detalle por escrito.
              </p>
            }
          />
        </Reveal>

        <Reveal className="mt-12 hidden md:block">
          <table className="w-full table-fixed border-collapse text-left">
            <caption className="sr-only">
              Planes de Cota, qué incluye cada uno, precio y plazo de entrega.
            </caption>
            <colgroup>
              <col className="w-[31%]" />
              <col className="w-[33%]" />
              <col className="w-[20%]" />
              <col className="w-[16%]" />
            </colgroup>
            <thead>
              <tr className="border-y border-[var(--line-strong)]">
                <th scope="col" className="proto-label py-4 pr-8 text-left">
                  Tipo y para quién
                </th>
                <th scope="col" className="proto-label py-4 pr-8 text-left">
                  Qué incluye
                </th>
                <th scope="col" className="proto-label py-4 pr-8 text-left">
                  Precio y plazo
                </th>
                <th scope="col" className="proto-label py-4 text-left">
                  Empezar
                </th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((row, index) => (
                <tr
                  key={row.plan}
                  className={`align-top ${
                    row.recommended ? "proto-blue" : ""
                  } ${
                    index < pricing.length - 1
                      ? "border-b border-[var(--line)]"
                      : ""
                  }`}
                >
                  <th
                    scope="row"
                    className="py-7 pr-8 text-left align-top font-normal"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-cota mt-1 text-[10px] tracking-[0.18em] text-[var(--muted)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-[1.35rem] font-semibold tracking-[-0.03em]">
                            {row.type}
                          </h3>
                          {row.recommended ? (
                            <span className="inline-flex items-center gap-2 border border-[var(--line-strong)] px-2 py-1 font-cota text-[10px] uppercase tracking-[0.18em]">
                              <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 bg-[var(--signal)]"
                              />
                              Recomendado
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-3 max-w-[300px] text-sm leading-relaxed text-[var(--muted)]">
                          {row.fit}
                        </p>
                      </div>
                    </div>
                  </th>
                  <td className="py-7 pr-8 text-sm leading-relaxed text-[var(--muted)]">
                    {row.includes}
                  </td>
                  <td className="py-7 pr-8">
                    <span className="proto-label">
                      {row.pricePrefix || "Precio"}
                    </span>
                    <p className="font-cota mt-2 text-[clamp(1.7rem,2.5vw,2.35rem)] leading-none tracking-[-0.02em] text-[var(--fg)]">
                      {row.price}
                    </p>
                    <p className="proto-label mt-3">{row.term}</p>
                  </td>
                  <td className="py-7">
                    <PricingPlanLink
                      plan={row.plan}
                      ariaLabel={`Elegir ${row.type}`}
                      className={`${
                        row.recommended
                          ? "proto-btn"
                          : "proto-btn proto-btn-ghost"
                      } w-full`}
                    >
                      Elegir
                      <span
                        aria-hidden="true"
                        className="font-cota text-[11px]"
                      >
                        ↗
                      </span>
                    </PricingPlanLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <div className="mt-10 grid gap-4 md:hidden">
          {pricing.map((row, index) => (
            <Reveal key={row.plan} delay={index * 60}>
              <article
                className={`border border-[var(--line)] p-5 ${
                  row.recommended ? "proto-blue" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-cota text-[10px] tracking-[0.2em] text-[var(--muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                      {row.type}
                    </h3>
                  </div>
                  {row.recommended ? (
                    <span className="inline-flex shrink-0 items-center gap-2 border border-[var(--line-strong)] px-2 py-1 font-cota text-[10px] uppercase tracking-[0.18em]">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 bg-[var(--signal)]"
                      />
                      Recomendado
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 grid grid-cols-[1fr_auto] items-end gap-4 border-y border-[var(--line)] py-4">
                  <div>
                    <span className="proto-label">
                      {row.pricePrefix || "Precio"}
                    </span>
                    <p className="font-cota mt-2 text-[2rem] leading-none tracking-[-0.02em]">
                      {row.price}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="proto-label">Plazo</span>
                    <p className="proto-label mt-2">{row.term}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  {row.fit}
                </p>

                <div className="mt-4 border-t border-[var(--line)] pt-3">
                  <span className="proto-label">Incluye</span>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {row.includes}
                  </p>
                </div>

                <PricingPlanLink
                  plan={row.plan}
                  ariaLabel={`Elegir ${row.type}`}
                  className={`${
                    row.recommended ? "proto-btn" : "proto-btn proto-btn-ghost"
                  } mt-5 w-full`}
                >
                  Elegir
                  <span aria-hidden="true" className="font-cota text-[11px]">
                    ↗
                  </span>
                </PricingPlanLink>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="grid gap-6 border-y border-[var(--line-strong)] py-7 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.035em]">
                {customSystem.type}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                {customSystem.fit} {customSystem.includes}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:items-end">
              <div>
                <span className="proto-label">{customSystem.pricePrefix}</span>
                <p className="font-cota mt-1 text-[clamp(1.6rem,2.2vw,2rem)] leading-none tracking-[-0.02em]">
                  {customSystem.price}
                </p>
                <p className="proto-label mt-2">{customSystem.term}</p>
              </div>
              <PricingPlanLink
                plan={customSystem.plan}
                ariaLabel="Consultar por Sistema a medida"
                className="proto-btn proto-btn-ghost w-full sm:w-auto"
              >
                Contanos qué necesitás
                <span aria-hidden="true" className="font-cota text-[11px]">
                  ↗
                </span>
              </PricingPlanLink>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
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
              <PricingPlanLink
                plan="No sé todavía"
                ariaLabel="Ir al formulario sin elegir un plan"
                className="text-sm underline decoration-[var(--signal)] underline-offset-4 transition-colors hover:text-[var(--signal)]"
              >
                No sé cuál me conviene
              </PricingPlanLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
