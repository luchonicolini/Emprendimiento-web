"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const faqs = [
  {
    q: "¿Cómo se paga?",
    a: "Se paga en dos partes: 25% de seña para arrancar y el 75% restante recién cuando la web está publicada, aprobada por vos y a tu nombre. Aceptamos transferencia en pesos (al cambio del día) o en dólares, con factura.",
  },
  {
    q: "¿En cuánto tiempo está lista?",
    a: "Una landing page queda online en 7 a 10 días hábiles desde que nos mandás el brief. Una web multipágina, entre 10 y 15 días hábiles. El día de entrega te lo confirmamos por WhatsApp antes de que señes.",
  },
  {
    q: "¿El dominio queda a mi nombre?",
    a: "Sí. El dominio lo comprás vos (te pasamos los pasos) y te damos todos los accesos de la web. Si mañana querés seguir con otro equipo, te llevás todo.",
  },
  {
    q: "¿No me conviene hacerla con Wix o con IA?",
    a: "Si estás validando una idea o tenés menos de USD 350, sí. La diferencia aparece cuando la web tiene que traer clientes: las nuestras se programan de cero, cargan rápido, tienen SEO desde el primer día y están armadas para que el que entra te escriba por WhatsApp.",
  },
  {
    q: "Ya pagué una web una vez y me dejaron tirado.",
    a: "Nos lo cuentan seguido. Por eso el precio y la fecha quedan cerrados antes de que señes, la seña es del 25% y no del 100%, el resto se paga con la web publicada, y el dominio y los accesos son tuyos desde el primer día.",
  },
  {
    q: "¿Los textos y las fotos los pongo yo?",
    a: "Como te quede más cómodo. El brief te pregunta lo que necesitamos saber de tu negocio, y con eso te ayudamos a escribir los textos. Las fotos, si tenés propias, mejor; si no, lo resolvemos juntos.",
  },
];

export function Faq() {
  return (
    <section id="faqs" className="scroll-mt-20 bg-[#080c18] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <ScrollReveal>
          <h2 className="text-center font-display text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
            Preguntas{" "}
            <em className="font-serif font-normal italic tracking-[-0.01em]">
              frecuentes
            </em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion.Root type="single" collapsible className="mt-12 space-y-2.5">
            {faqs.map((faq, idx) => (
              <Accordion.Item
                key={idx}
                value={`item-${idx}`}
                className="rounded-2xl border border-white/[0.08] bg-[#0d1220] px-5 sm:px-6 transition-colors data-[state=open]:border-white/20"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left font-display text-base font-semibold text-white transition-all group">
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown className="h-4 w-4 shrink-0 text-white/40 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-[#2dd4bf]" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-[15px] leading-relaxed text-white/60 pb-5 pt-1 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </ScrollReveal>
      </div>
    </section>
  );
}
