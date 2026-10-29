"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { faqsEn } from "@/content/prototipo.en";
import { Reveal } from "@/components/prototipo/Reveal";
import { SectionHead } from "@/components/prototipo/primitives";

export function FaqEn() {
  return (
    <section
      id="faq"
      className="border-b border-[var(--line)] py-12 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <SectionHead
            index="07 / FAQ"
            title={
              <>
                Frequently asked
                <br />
                questions.
              </>
            }
            intro={
              <p>
                If your question isn&apos;t covered here, reach out directly on WhatsApp or email.
                We respond within the same business day.
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
            {faqsEn.map((faq, index) => (
              <Accordion.Item
                key={faq.q}
                value={`item-${index}`}
                className="border-b border-[var(--line)]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-start gap-4 py-5 text-left sm:gap-6">
                    <span className="font-cota pt-1.5 text-[11px] tracking-[0.18em] text-[var(--signal)]">
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
                <Accordion.Content className="pb-6 pl-9 text-sm leading-relaxed text-[var(--muted)] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down sm:pl-11 sm:text-[15px]">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
