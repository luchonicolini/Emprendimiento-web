import { phases } from "@/content/prototipo";
import { Reveal } from "@/components/prototipo/Reveal";
import { Kicker } from "@/components/prototipo/primitives";

const guarantees = [
  "El precio final, que no cambia salvo que cambie el pedido.",
  "La fecha de entrega.",
  "Qué incluye y qué no, por escrito en el chat.",
  "Que el dominio y los accesos van a quedar a tu nombre.",
];

export function Process() {
  return (
    <section
      id="proceso"
      className="border-b border-[var(--line)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal className="grid gap-12 border-t border-[var(--line)] pt-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            <Kicker>04 / Proceso</Kicker>
            <h2 className="proto-display mt-4 text-[clamp(2rem,4.4vw,3.8rem)]">
              Cómo trabajamos.
            </h2>

            <ol className="mt-10 space-y-9">
              {phases.map((phase) => (
                <li
                  key={phase.index}
                  className="grid grid-cols-[32px_1fr] gap-4 sm:grid-cols-[48px_1fr] sm:gap-6"
                >
                  <span className="font-cota pt-1 text-[10px] tracking-[0.2em] text-[var(--signal)]">
                    {phase.index}
                  </span>
                  <div>
                    <h3 className="text-[21px] leading-snug tracking-[-0.03em] sm:text-2xl">
                      {phase.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                      {phase.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <a href="#contacto" className="proto-btn mt-10">
              Pedir presupuesto
              <span aria-hidden="true" className="font-cota text-[11px]">
                ↗
              </span>
            </a>
          </div>

          <aside className="lg:pt-24">
            <div className="border-t border-[var(--line-strong)] pt-6">
              <h3 className="text-2xl tracking-[-0.035em]">
                Antes de señar ya sabés.
              </h3>
              <ul className="mt-5 space-y-4">
                {guarantees.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-relaxed text-[var(--muted)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[10px] h-px w-3 shrink-0 bg-[var(--signal)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-[var(--line)] pt-5 text-sm leading-relaxed text-[var(--muted)]">
                Se paga en dos partes: 25% de seña y el resto con la web
                publicada. Nunca el 100% por adelantado.
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
