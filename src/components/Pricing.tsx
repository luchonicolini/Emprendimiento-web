import { Check, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Pricing() {
  return (
    <section id="precios" className="scroll-mt-20 bg-[#080c18] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <ScrollReveal>
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <h2 className="font-display text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
              Cuánto{" "}
              <em className="font-serif font-normal italic tracking-[-0.01em]">
                cuesta
              </em>
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-white/55 sm:text-base">
              El número final te lo confirmamos por WhatsApp antes de arrancar, y no cambia salvo que cambie lo que pediste. En dólares o en pesos al cambio del día, con factura.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-3 md:grid-cols-3 md:gap-4">
          {/* Card 1 - Landing page */}
          <ScrollReveal delay={0.05} className="h-full">
            <article className="flex h-full flex-col rounded-3xl border p-6 sm:p-8 border-white/25 bg-[#111829]">
              <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                Landing page
              </h3>
              <p className="mt-1 text-[15px] text-white/60">
                Para oficios y profesionales
              </p>
              <p className="mt-7 flex flex-wrap items-baseline gap-x-2 text-white">
                <span className="font-display text-[44px] font-semibold leading-none tracking-[-0.045em] tabular-nums sm:text-5xl">
                  USD 350
                </span>
                <span className="text-base text-white/60">pago único</span>
              </p>
              <ul className="mb-8 mt-7 space-y-3 border-t border-white/[0.08] pt-7 text-[15px] leading-snug text-white/85">
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  Una página con todo lo que hacés
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  Diseño y programación de cero
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  WhatsApp y formularios conectados
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  Píxel de Meta y Google Analytics
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  Online en 7 a 10 días hábiles
                </li>
              </ul>
              <a
                href="#contacto"
                className="group mt-auto flex items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-semibold transition-colors bg-white !text-[#080c18] hover:bg-white/90"
              >
                Pedir presupuesto
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </article>
          </ScrollReveal>

          {/* Card 2 - Web multipágina */}
          <ScrollReveal delay={0.12} className="h-full">
            <article className="flex h-full flex-col rounded-3xl border p-6 sm:p-8 border-white/[0.08] bg-[#0d1220]">
              <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                Web multipágina
              </h3>
              <p className="mt-1 text-[15px] text-white/60">
                Para estudios y empresas
              </p>
              <p className="mt-7 flex flex-wrap items-baseline gap-x-2 text-white">
                <span className="font-display text-[44px] font-semibold leading-none tracking-[-0.045em] tabular-nums sm:text-5xl">
                  USD 500
                </span>
                <span className="text-base text-white/60">pago único</span>
              </p>
              <ul className="mb-8 mt-7 space-y-3 border-t border-white/[0.08] pt-7 text-[15px] leading-snug text-white/85">
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  Una página por servicio, mejor para Google
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  Diseño y programación de cero
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  WhatsApp y formularios conectados
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  Píxel de Meta y Google Analytics
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  Fecha de entrega cerrada antes de señar
                </li>
              </ul>
              <a
                href="#contacto"
                className="group mt-auto flex items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-semibold transition-colors border border-white/15 text-white hover:border-white/40"
              >
                Pedir presupuesto
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </article>
          </ScrollReveal>

          {/* Card 3 - Tienda online */}
          <ScrollReveal delay={0.19} className="h-full">
            <article className="flex h-full flex-col rounded-3xl border p-6 sm:p-8 border-white/[0.08] bg-[#0d1220]">
              <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                Tienda online
              </h3>
              <p className="mt-1 text-[15px] text-white/60">
                Para vender con carrito y envíos
              </p>
              <p className="mt-7 flex flex-wrap items-baseline gap-x-2 text-white">
                <span className="text-base text-white/60">Desde</span>
                <span className="font-display text-[44px] font-semibold leading-none tracking-[-0.045em] tabular-nums sm:text-5xl">
                  USD 650
                </span>
              </p>
              <ul className="mb-8 mt-7 space-y-3 border-t border-white/[0.08] pt-7 text-[15px] leading-snug text-white/85">
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  Sobre Tienda Nube o Shopify
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  Medios de pago y envíos configurados
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  Carga inicial de hasta 30 productos
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  Píxel de Meta y Google Analytics
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2dd4bf] stroke-[2.5]" />
                  Con checkout propio, desde USD 1.500
                </li>
              </ul>
              <a
                href="#contacto"
                className="group mt-auto flex items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-semibold transition-colors border border-white/15 text-white hover:border-white/40"
              >
                Pedir presupuesto
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25}>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/45">
            Si hoy tenés menos de USD 350 para la web, te conviene arrancar con Wix o Tienda Nube por tu cuenta y volver cuando el negocio lo pida. No es lo que hacemos.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
