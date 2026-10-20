import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Process() {
  return (
    <section className="bg-[#080c18] py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <ScrollReveal>
            <h2 className="font-display text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
              Cómo{" "}
              <em className="font-serif font-normal italic tracking-[-0.01em]">
                trabajamos
              </em>
            </h2>
          </ScrollReveal>

          <ol className="mt-10 space-y-9">
            <ScrollReveal delay={0.05}>
              <li className="grid grid-cols-[2.5rem_1fr] gap-4 sm:grid-cols-[3rem_1fr]">
                <span className="pt-0.5 text-sm font-semibold tabular-nums text-[#2dd4bf]">
                  01
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Elegís qué necesitás, con el precio a la vista
                  </h3>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-white/55">
                    Completás el formulario de abajo. Lleva menos de un minuto.
                  </p>
                </div>
              </li>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <li className="grid grid-cols-[2.5rem_1fr] gap-4 sm:grid-cols-[3rem_1fr]">
                <span className="pt-0.5 text-sm font-semibold tabular-nums text-[#2dd4bf]">
                  02
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Cerramos precio y fecha de entrega
                  </h3>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-white/55">
                    Seguimos por WhatsApp. Te pasamos un brief de 10 minutos sobre tu negocio y con eso te confirmamos el número final y el día de entrega. Sin reuniones de venta.
                  </p>
                </div>
              </li>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <li className="grid grid-cols-[2.5rem_1fr] gap-4 sm:grid-cols-[3rem_1fr]">
                <span className="pt-0.5 text-sm font-semibold tabular-nums text-[#2dd4bf]">
                  03
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Revisás la web y pedís cambios
                  </h3>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-white/55">
                    La arma el equipo y te la manda para que la navegues desde el celular. La ajustamos con vos hasta que la apruebes.
                  </p>
                </div>
              </li>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <li className="grid grid-cols-[2.5rem_1fr] gap-4 sm:grid-cols-[3rem_1fr]">
                <span className="pt-0.5 text-sm font-semibold tabular-nums text-[#2dd4bf]">
                  04
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                    La publicamos a tu nombre
                  </h3>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-white/55">
                    Conectamos tu dominio y te damos todos los accesos. Una landing page queda online en 7 a 10 días hábiles desde el brief.
                  </p>
                </div>
              </li>
            </ScrollReveal>
          </ol>

          <ScrollReveal delay={0.25} className="mt-10 sm:mt-12">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-[15px] font-semibold text-[#080c18] transition-colors hover:bg-white/90"
            >
              Pedir presupuesto
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f766e] text-white transition-transform duration-500 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </ScrollReveal>
        </div>

        {/* Right aside */}
        <div className="lg:pt-20">
          <ScrollReveal delay={0.15}>
            <aside className="rounded-3xl border border-white/[0.08] bg-[#0d1220] p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                Antes de señar ya sabés
              </h3>
              <ul className="mt-5 space-y-4">
                <li className="flex gap-3 text-[15px] leading-relaxed text-white/70">
                  <span
                    aria-hidden="true"
                    className="mt-[11px] h-px w-3 flex-shrink-0 bg-[#2dd4bf]"
                  />
                  El precio final, que no cambia salvo que cambie el pedido.
                </li>
                <li className="flex gap-3 text-[15px] leading-relaxed text-white/70">
                  <span
                    aria-hidden="true"
                    className="mt-[11px] h-px w-3 flex-shrink-0 bg-[#2dd4bf]"
                  />
                  La fecha de entrega.
                </li>
                <li className="flex gap-3 text-[15px] leading-relaxed text-white/70">
                  <span
                    aria-hidden="true"
                    className="mt-[11px] h-px w-3 flex-shrink-0 bg-[#2dd4bf]"
                  />
                  Qué incluye y qué no, por escrito en el chat.
                </li>
                <li className="flex gap-3 text-[15px] leading-relaxed text-white/70">
                  <span
                    aria-hidden="true"
                    className="mt-[11px] h-px w-3 flex-shrink-0 bg-[#2dd4bf]"
                  />
                  Que el dominio y los accesos van a quedar a tu nombre.
                </li>
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/45">
                Se paga en dos partes: 25% de seña y el resto con la web publicada. Nunca el 100% por adelantado.
              </p>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
