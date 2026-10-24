import { Kicker } from "@/components/prototipo/primitives";
import { Reveal } from "@/components/prototipo/Reveal";
import { HeroCadSheet } from "@/components/prototipo/HeroCadSheet";

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

            <Reveal delay={180}>
              <div className="mt-9 grid max-w-xl gap-2 border-y border-[var(--line)] py-4 sm:grid-cols-3 sm:gap-4">
                {[
                  "Te entregamos una web lista para vender.",
                  "Sin plantillas genéricas.",
                  "Sin costos sorpresa.",
                ].map((promise) => (
                  <p
                    key={promise}
                    className="text-[13px] font-medium leading-snug text-[var(--fg)]"
                  >
                    <span className="mr-2 text-[var(--signal)]" aria-hidden="true">
                      /
                    </span>
                    {promise}
                  </p>
                ))}
              </div>
            </Reveal>

          </div>

          <Reveal delay={120} className="relative">
            <HeroCadSheet />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
