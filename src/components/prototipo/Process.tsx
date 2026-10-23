"use client";

import { phases } from "@/content/prototipo";
import { Reveal } from "@/components/prototipo/Reveal";
import { CornerMarks, SectionHead } from "@/components/prototipo/primitives";

const phaseMeta = [
  {
    phaseLabel: "FASE 01 // DEFINICIÓN",
    duration: "1 MINUTO",
    deliverable: "Presupuesto y alcance estimado",
    techNote: "Formulario ágil",
  },
  {
    phaseLabel: "FASE 02 // ACUERDO",
    duration: "10 MIN BRIEF",
    deliverable: "Fecha y costo final sellados",
    techNote: "WhatsApp asincrónico",
  },
  {
    phaseLabel: "FASE 03 // PROTOTIPADO",
    duration: "FEEDBACK CONTINUO",
    deliverable: "Link navegable en tu celular",
    techNote: "Ajustes hasta aprobación",
  },
  {
    phaseLabel: "FASE 04 // ENTREGA",
    duration: "7 A 10 DÍAS HÁBILES",
    deliverable: "Web online + DNS propios",
    techNote: "100% accesos cedidos",
  },
];

const guarantees = [
  {
    title: "Precio final inamovible",
    desc: "No cambia bajo ninguna circunstancia salvo que vos decidas ampliar el pedido.",
  },
  {
    title: "Fecha de entrega exacta",
    desc: "Día de puesta en marcha pactado y agendado por escrito desde el inicio.",
  },
  {
    title: "Alcance detallado en el chat",
    desc: "Qué incluye y qué no, registrado con total transparencia y sin letra chica.",
  },
  {
    title: "Dominio y accesos a tu nombre",
    desc: "Titularidad 100% tuya: hosting, código y accesos bajo tu control exclusivo.",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="border-b border-[var(--line)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <SectionHead
            index="04 / Proceso"
            title="Plan de obra y entrega."
            intro={
              <p>
                De la primera idea a tu web online con dominio y accesos propios.
                Cuatro fases claras, sin reuniones eternas y con entregables tangibles en cada etapa.
              </p>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 items-start">
          {/* Columna Izquierda: Pipeline Técnico */}
          <div>
            <div className="relative space-y-7 before:absolute before:left-[17px] sm:before:left-[21px] before:top-5 before:bottom-5 before:w-[2px] before:border-l-2 before:border-dashed before:border-[var(--line-strong)]">
              {phases.map((phase, idx) => {
                const meta = phaseMeta[idx] ?? phaseMeta[0];
                return (
                  <Reveal key={phase.index} delay={idx * 70}>
                    <div className="group relative pl-11 sm:pl-14">
                      {/* Nodo del Pipeline */}
                      <div className="absolute left-[2px] sm:left-[4px] top-5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center border border-[var(--line-strong)] bg-[var(--bg)] font-cota text-xs font-bold tracking-wider text-[var(--signal)] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--signal)] group-hover:bg-[var(--signal)] group-hover:text-white">
                        {phase.index}
                      </div>

                      {/* Tarjeta de Fase */}
                      <div className="relative border border-[var(--line)] bg-[var(--bg)] p-6 sm:p-7 transition-all duration-300 hover:border-[var(--signal)] hover:shadow-[0_8px_30px_rgba(13,20,24,0.06)]">
                        <CornerMarks />

                        {/* Encabezado técnico de la tarjeta */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] pb-3">
                          <span className="font-cota text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-[var(--signal)]">
                            {meta.phaseLabel}
                          </span>
                          <span className="font-cota text-[9px] sm:text-[10px] tracking-wider uppercase px-2 py-0.5 border border-[var(--line)] bg-[var(--line)]/5 text-[var(--muted)]">
                            ⏱ {meta.duration}
                          </span>
                        </div>

                        {/* Título y cuerpo */}
                        <div className="mt-4">
                          <h3 className="text-xl sm:text-[22px] font-bold tracking-[-0.03em] leading-snug text-[var(--fg)] transition-colors group-hover:text-[var(--accent)]">
                            {phase.title}
                          </h3>
                          <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--muted)]">
                            {phase.body}
                          </p>
                        </div>

                        {/* Barra de telemetría y entregable */}
                        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--line)] pt-3.5 font-cota text-[11px]">
                          <span className="inline-flex items-center gap-1.5 text-[var(--fg)]">
                            <span className="h-1.5 w-1.5 bg-[var(--signal)]" />
                            <strong className="font-medium">Entregable:</strong> {meta.deliverable}
                          </span>
                          <span className="text-[var(--muted)] opacity-70 transition-opacity group-hover:opacity-100">
                            [{meta.techNote}]
                          </span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="pt-8 pl-11 sm:pl-14">
              <a href="#contacto" className="proto-btn inline-flex">
                Pedir presupuesto
              </a>
            </div>
          </div>

          {/* Columna Derecha: Cédula de Garantía Blueprint */}
          <aside className="lg:pt-0">
            <Reveal delay={150}>
              <div className="proto-blue proto-grid relative border border-[var(--line-strong)] p-6 sm:p-8 shadow-xl lg:sticky lg:top-24">
                <CornerMarks />

                {/* Encabezado del pliego */}
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--signal)] animate-pulse" />
                    <span className="font-cota text-[10px] font-bold tracking-[0.24em] uppercase text-[var(--signal)]">
                      PLIEGO DE GARANTÍA // COTA
                    </span>
                  </div>
                  <span className="font-cota text-[10px] text-[var(--muted)] opacity-75">
                    SPEC-2026
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-2xl sm:text-[26px] font-bold tracking-[-0.035em] text-[var(--fg)] leading-tight">
                    Antes de señar ya sabés.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    Pautas contractuales claras por escrito. Sin letra chica ni desvíos de presupuesto.
                  </p>
                </div>

                {/* Lista de puntos de garantía */}
                <div className="mt-6 space-y-3.5 border-t border-[var(--line)] pt-5">
                  {guarantees.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-[var(--signal)] font-cota text-[10px] text-[var(--signal)]"
                      >
                        ✓
                      </span>
                      <div className="text-[14px] leading-snug">
                        <span className="font-semibold text-[var(--fg)]">
                          {item.title}:
                        </span>{" "}
                        <span className="text-[var(--muted)]">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Esquema de Pago Protegido */}
                <div className="mt-7 border border-[var(--line)] bg-[var(--bg)]/90 p-4">
                  <div className="flex items-center justify-between font-cota text-[10px] tracking-wider uppercase text-[var(--signal)] font-medium">
                    <span>Esquema de pago protegido</span>
                    <span>25% / 75%</span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-center font-cota">
                    <div className="border border-[var(--line)] p-2.5">
                      <div className="text-lg font-bold text-[var(--fg)]">25%</div>
                      <div className="text-[10px] text-[var(--muted)] tracking-tight">
                        Seña inicial de reserva
                      </div>
                    </div>
                    <div className="border border-[var(--line)] p-2.5">
                      <div className="text-lg font-bold text-[var(--signal)]">75%</div>
                      <div className="text-[10px] text-[var(--muted)] tracking-tight">
                        Contra web publicada
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-center text-xs leading-relaxed text-[var(--muted)]">
                    Nunca pagás el 100% por adelantado. La liquidación final ocurre únicamente cuando navegás y aprobás el sitio online.
                  </p>
                </div>

                {/* Pie técnico */}
                <div className="mt-5 flex items-center justify-between border-t border-[var(--line)]/50 pt-3 text-[10px] font-cota text-[var(--muted)]">
                  <span>SEGURIDAD TÉCNICA</span>
                  <span>0% RIESGO COMERCIAL</span>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
