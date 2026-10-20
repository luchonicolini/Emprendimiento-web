"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { faqs } from "@/content/prototipo";
import { Reveal } from "@/components/prototipo/Reveal";
import { SectionHead } from "@/components/prototipo/primitives";

export function Faq() {
  return (
    <section
      id="preguntas"
      className="border-b border-[var(--line)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <SectionHead
            index="07 / Preguntas"
            title={
              <>
                Lo que suelen
                <br />
                preguntar.
              </>
            }
            intro={
              <p>
                Si tu duda no está acá, escribinos por WhatsApp. Respondemos en
                el día, sin formularios intermedios.
              </p>
            }
          />
        </Reveal>

        <Reveal className="mt-10 md:max-w-[860px]">
          <Accordion.Root
            type="single"
            collapsible
            className="border-t border-[var(--line)]"
          >
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={faq.q}
                value={`item-${index}`}
                className="border-b border-[var(--line)]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-start gap-4 py-5 text-left sm:gap-6">
                    <span className="font-cota pt-1.5 text-[9px] tracking-[0.18em] text-[var(--signal)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-lg tracking-[-0.025em] sm:text-xl">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative mt-1.5 h-3 w-3 shrink-0"
                    >
                      <span className="absolute left-0 top-1/2 h-px w-3 bg-[var(--fg)]" />
                      <span className="absolute left-1/2 top-0 h-3 w-px bg-[var(--fg)] transition-transform duration-300 group-data-[state=open]:scale-y-0" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-[var(--muted)] sm:ml-8">
                    {faq.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
