import { pricing } from "@/content/prototipo";
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
                El número final se confirma por WhatsApp antes de arrancar. En
                dólares o en pesos al cambio del día, con factura y detalle por
                escrito.
              </p>
            }
          />
        </Reveal>

        <Reveal className="mt-12 hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-y border-[var(--line-strong)]">
                <th className="proto-label py-3 pr-6 text-left">Tipo</th>
                <th className="proto-label py-3 pr-6 text-left">Qué incluye</th>
                <th className="proto-label py-3 pr-6 text-left">Precio</th>
                <th className="proto-label py-3 text-left">Plazo</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((row) => (
                <tr
                  key={row.type}
                  className="group border-b border-[var(--line)] align-top transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
                >
                  <td className="py-6 pr-6">
                    <span className="block text-xl tracking-[-0.035em]">
                      {row.type}
                    </span>
                    <span className="mt-2 block max-w-[230px] text-sm leading-relaxed text-[var(--muted)] transition-colors group-hover:text-[var(--bg)]/70">
                      {row.fit}
                    </span>
                  </td>
                  <td className="max-w-[360px] py-6 pr-6 text-sm leading-relaxed text-[var(--muted)] transition-colors group-hover:text-[var(--bg)]/70">
                    {row.includes}
                  </td>
                  <td className="whitespace-nowrap py-6 pr-6 font-cota text-[12px] tracking-[0.06em]">
                    {row.price}
                  </td>
                  <td className="whitespace-nowrap py-6 font-cota text-[12px] tracking-[0.06em]">
                    {row.term}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <div className="mt-10 grid gap-3 md:hidden">
          {pricing.map((row, index) => (
            <Reveal key={row.type} delay={index * 50}>
              <article className="border border-[var(--line)] p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl tracking-[-0.035em]">{row.type}</h3>
                  <span className="whitespace-nowrap font-cota text-[11px] tracking-[0.06em] text-[var(--signal)]">
                    {row.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {row.fit}
                </p>
                <p className="mt-3 border-t border-[var(--line)] pt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {row.includes}
                </p>
                <p className="proto-label mt-3">{row.term}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            Si hoy tenés menos de USD 350, te conviene arrancar con Wix o Tienda
            Nube por tu cuenta. No es lo que hacemos y preferimos decírtelo
            antes.
          </p>
          <a href="#contacto" className="proto-btn shrink-0">
            Pedir cotización
            <span aria-hidden="true" className="font-cota text-[11px]">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
