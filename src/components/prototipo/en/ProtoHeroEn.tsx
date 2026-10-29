import { Kicker } from "@/components/prototipo/primitives";
import { Reveal } from "@/components/prototipo/Reveal";
import { HeroCadSheetEn } from "@/components/prototipo/en/HeroCadSheetEn";

export function ProtoHeroEn() {
  return (
    <section className="proto-grid border-b border-[var(--line)]">
      <div className="mx-auto max-w-[1240px] px-5 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.32fr_0.68fr] lg:gap-16">
          <div className="min-w-0">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-[6px] w-[6px] bg-[var(--signal)]" />
                <Kicker>Blueprint 01 — Baseline Offering</Kicker>
              </div>
              <h1 className="proto-display mt-7 text-[clamp(2.9rem,7.2vw,6.3rem)]">
                Websites built with{" "}
                <span className="underline decoration-[var(--signal)] decoration-[3px] underline-offset-[6px] sm:decoration-[4px] sm:underline-offset-[10px]">
                  exact dimensions
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-[var(--muted)] sm:text-lg">
                We design and engineer your website with fixed scope, fixed
                pricing, and guaranteed delivery locked in before kickoff. No
                runaway budgets or mid-project surprises.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="proto-btn">
                  Get a quote
                </a>
                <a href="#work" className="proto-btn proto-btn-ghost">
                  View portfolio
                </a>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 grid max-w-xl gap-2 border-y border-[var(--line)] py-4 sm:grid-cols-3 sm:gap-4">
                {[
                  "Delivered ready to generate leads.",
                  "Zero generic templates.",
                  "No surprise invoices.",
                ].map((promise) => (
                  <div key={promise} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-[var(--signal)]" />
                    <span className="text-xs leading-relaxed text-[var(--fg)]">
                      {promise}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <HeroCadSheetEn />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
