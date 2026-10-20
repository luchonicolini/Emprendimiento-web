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
                Cómo trabajamos,
                <br />
                en cuatro pasos.
              </>
            }
            intro={
              <p>
                En cada paso sabés qué hacemos, qué tenés que hacer vos y qué te
                llevás. Sin reuniones de venta ni sorpresas.
              </p>
            }
          />
        </Reveal>

        <Reveal className="mt-12 border border-[var(--line)]">
          {phases.map((phase) => (
            <article
              key={phase.index}
              className="grid gap-5 border-b border-[var(--line)] p-5 last:border-b-0 sm:grid-cols-[210px_1fr] sm:gap-10 sm:p-7"
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-cota text-[10px] tracking-[0.2em] text-[var(--signal)]">
                    {phase.index}
                  </span>
                  <h3 className="text-[22px] leading-tight tracking-[-0.035em] sm:text-2xl">
                    {phase.title}
                  </h3>
                </div>
                <p className="proto-label mt-3">{phase.window}</p>
              </div>

              <div>
                <p className="proto-label">Qué hacemos</p>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed">
                  {phase.body}
                </p>

                <dl className="mt-5 grid gap-4 md:grid-cols-2 md:gap-6">
                  <div className="border-l-2 border-[var(--signal)] pl-4">
                    <dt className="proto-label">Tu parte</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                      {phase.you}
                    </dd>
                  </div>
                  <div className="border-l border-[var(--line-strong)] pl-4">
                    <dt className="proto-label">Te llevás</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                      {phase.deliverable}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
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

        <Cota
          label="Plazo total: 7–10 días hábiles desde la seña"
          className="mt-14"
        />
      </div>
    </section>
  );
}
