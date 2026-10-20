import { brand, heroSheet } from "@/content/prototipo";
import { CornerMarks, Cota, Kicker } from "@/components/prototipo/primitives";
import { Reveal } from "@/components/prototipo/Reveal";

export function ProtoHero() {
  return (
    <section className="proto-grid border-b border-[var(--line)]">
      <div className="mx-auto max-w-[1240px] px-5 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.32fr_0.68fr] lg:gap-16">
          <div className="min-w-0">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-[6px] w-[6px] bg-[var(--signal)]" />
                <Kicker>Plano 01 — Oferta base</Kicker>
              </div>
              <h1 className="proto-display mt-7 text-[clamp(2.9rem,7.2vw,6.3rem)]">
                Sitios web con{" "}
                <span className="underline decoration-[var(--signal)] decoration-[3px] underline-offset-[6px] sm:decoration-[4px] sm:underline-offset-[10px]">
                  medidas exactas
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-[var(--muted)] sm:text-lg">
                Diseñamos y programamos tu web con alcance, precio y fecha
                definidos por escrito antes de empezar. Sin presupuestos que
                cambian a mitad de obra.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#contacto" className="proto-btn">
                  Pedir presupuesto
                  <span aria-hidden="true" className="font-cota text-[11px]">
                    ↗
                  </span>
                </a>
                <a href="#trabajos" className="proto-btn proto-btn-ghost">
                  Ver trabajos
                  <span aria-hidden="true" className="font-cota text-[11px]">
                    ↓
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <Cota
                label="Desde USD 350 · 7–10 días hábiles · 25% de seña"
                className="mt-12 max-w-xl"
              />
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <aside className="proto-blue proto-grid relative border border-[var(--line-strong)] p-6 sm:p-7">
              <CornerMarks />
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <span className="font-cota text-[10px] uppercase tracking-[0.22em] text-[var(--fg)]">
                  Ficha técnica
                </span>
                <span className="font-cota text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Rev. 01
                </span>
              </div>

              <dl>
                {heroSheet.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[76px_1fr] gap-4 border-b border-[var(--line)] py-4 last:border-b-0"
                  >
                    <dt className="font-cota text-[9px] uppercase leading-relaxed tracking-[0.18em] text-[var(--muted)]">
                      {row.label}
                    </dt>
                    <dd className="text-[13px] leading-relaxed tracking-[-0.01em] text-[var(--fg)]">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4">
                <span className="font-cota text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  {brand.availability}
                </span>
                <span
                  aria-hidden="true"
                  className="h-[6px] w-[6px] bg-[var(--signal)]"
                />
              </div>
            </aside>
            <div className="mt-3 flex items-center justify-between">
              <span className="proto-label">Fig. 1 — Oferta base</span>
              <span className="proto-label">Escala 1:1</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
