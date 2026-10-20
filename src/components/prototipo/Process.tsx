import { phases } from "@/content/prototipo";
import { Reveal } from "@/components/prototipo/Reveal";
import { Cota, SectionHead } from "@/components/prototipo/primitives";

const guarantees = [
  "El precio final, que no cambia salvo que cambies el pedido.",
  "La fecha de entrega, por escrito antes de señar.",
  "Qué incluye y qué no, en el chat y en el contrato.",
  "El dominio y los accesos a tu nombre desde el día uno.",
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
            title={
              <>
                La obra, en cuatro
                <br />
                etapas.
              </>
            }
            intro={
              <p>
                Una landing page lleva diez días hábiles. Este es el plano de
                ruta, con la carga de trabajo de cada etapa a la vista.
              </p>
            }
          />
        </Reveal>

        <Reveal className="mt-12 border border-[var(--line)]">
          <div className="hidden grid-cols-[200px_1fr_56px] gap-6 border-b border-[var(--line)] px-6 py-3 sm:grid">
            <span className="proto-label">Etapa</span>
            <span className="proto-label">Carga · días hábiles</span>
            <span className="proto-label text-right">Total</span>
          </div>

          {phases.map((phase) => (
            <div
              key={phase.index}
              className="grid gap-5 border-b border-[var(--line)] px-5 py-6 last:border-b-0 sm:grid-cols-[200px_1fr_56px] sm:items-start sm:gap-6 sm:px-6"
            >
              <div className="flex gap-4">
                <span className="font-cota text-[10px] tracking-[0.2em] text-[var(--signal)]">
                  {phase.index}
                </span>
                <div>
                  <h3 className="text-xl tracking-[-0.03em]">{phase.title}</h3>
                  <p className="proto-label mt-2">{phase.window}</p>
                </div>
              </div>

              <div>
                <div className="relative h-[10px] w-full border border-[var(--line)] bg-transparent">
                  <div
                    aria-hidden="true"
                    className="absolute top-0 h-full bg-[var(--fg)]"
                    style={{
                      left: phase.offset,
                      width: phase.width,
                    }}
                  />
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                  {phase.body}
                </p>
              </div>

              <span className="font-cota text-[10px] tracking-[0.16em] text-[var(--muted)] sm:text-right">
                {phase.days} d
              </span>
            </div>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <h3 className="text-2xl tracking-[-0.035em] sm:text-3xl">
              Antes de señar
              <br />
              ya sabés.
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              Se paga en dos partes: 25% de seña y el resto con la web
              publicada. Nunca el 100% por adelantado.
            </p>
            <a href="#contacto" className="proto-btn mt-7">
              Reservar una semana
              <span aria-hidden="true" className="font-cota text-[11px]">
                ↗
              </span>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <ul className="border-t border-[var(--line)]">
              {guarantees.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-[var(--line)] py-4 text-[15px] leading-relaxed"
                >
                  <span className="font-cota pt-0.5 text-[9px] tracking-[0.18em] text-[var(--signal)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Cota label="Plazo medido en días hábiles desde el brief" className="mt-14" />
      </div>
    </section>
  );
}
