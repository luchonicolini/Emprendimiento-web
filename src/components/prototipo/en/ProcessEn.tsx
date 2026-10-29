"use client";

import { phasesEn } from "@/content/prototipo.en";
import { Reveal } from "@/components/prototipo/Reveal";
import { CornerMarks, SectionHead } from "@/components/prototipo/primitives";

const phaseMetaEn = [
  {
    phaseLabel: "PHASE 01 // DEFINITION",
    duration: "1 MINUTE",
    deliverable: "Instant quote & scope outline",
    techNote: "Quick project brief",
  },
  {
    phaseLabel: "PHASE 02 // AGREEMENT",
    duration: "10 MIN BRIEF",
    deliverable: "Fixed quote & scheduled launch date",
    techNote: "WhatsApp or 15m Video Call",
  },
  {
    phaseLabel: "PHASE 03 // PROTOTYPING",
    duration: "ACTIVE FEEDBACK",
    deliverable: "Interactive mobile preview",
    techNote: "Iterate until approved",
  },
  {
    phaseLabel: "PHASE 04 // HANDOVER",
    duration: "7 TO 10 BUSINESS DAYS",
    deliverable: "Live website + Custom .com domain",
    techNote: "100% admin credentials handed over",
  },
];

const guaranteesEn = [
  {
    title: "Firm, unmovable pricing",
    desc: "Your quote will not change under any circumstance unless you explicitly decide to expand scope.",
  },
  {
    title: "Guaranteed delivery date",
    desc: "An exact launch date agreed upon and committed in writing from day one.",
  },
  {
    title: "Clear, transparent scope",
    desc: "Complete clarity on what is included and what is not. Zero fine print or hidden fees.",
  },
  {
    title: "100% ownership & credentials",
    desc: "Domain, hosting, and code are registered under your name and remain under your exclusive control.",
  },
];

export function ProcessEn() {
  return (
    <section
      id="process"
      className="border-b border-[var(--line)] py-12 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <SectionHead
            index="04 / Process"
            title="Roadmap & delivery."
            intro={
              <p>
                From initial idea to live website with custom domain and full access.
                Four defined phases, zero endless meetings, and tangible milestones at each step.
              </p>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 items-start">
          {/* Left Column: Pipeline */}
          <div>
            <div className="relative space-y-7 before:absolute before:left-[17px] sm:before:left-[21px] before:top-5 before:bottom-5 before:w-[2px] before:border-l-2 before:border-dashed before:border-[var(--line-strong)]">
              {phasesEn.map((phase, idx) => {
                const meta = phaseMetaEn[idx] ?? phaseMetaEn[0];
                return (
                  <Reveal key={phase.index} delay={idx * 70}>
                    <div className="group relative pl-11 sm:pl-14">
                      <div className="absolute left-[2px] sm:left-[4px] top-5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center border border-[var(--line-strong)] bg-[var(--bg)] font-cota text-xs font-bold tracking-wider text-[var(--signal)] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--signal)] group-hover:bg-[var(--signal)] group-hover:text-white">
                        {phase.index}
                      </div>

                      <div className="relative border border-[var(--line)] bg-[var(--bg)] p-6 sm:p-7 transition-all duration-300 hover:border-[var(--signal)] hover:shadow-[0_8px_30px_rgba(13,20,24,0.06)]">
                        <CornerMarks />

                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] pb-3">
                          <span className="font-cota text-[10px] uppercase tracking-[0.2em] text-[var(--signal)]">
                            {meta.phaseLabel}
                          </span>
                          <span className="font-cota text-[9px] uppercase tracking-[0.15em] text-[var(--muted)]">
                            {meta.duration}
                          </span>
                        </div>

                        <h3 className="proto-display mt-4 text-xl sm:text-2xl">
                          {phase.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
                          {phase.body}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--line)] pt-3 text-xs">
                          <span className="font-cota text-[10px] text-[var(--fg)]">
                            Deliverable: {meta.deliverable}
                          </span>
                          <span className="font-mono text-[10px] text-[var(--muted)]">
                            {meta.techNote}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Guarantees */}
          <div className="lg:sticky lg:top-28">
            <Reveal delay={180}>
              <div className="border border-[var(--line-strong)] bg-[#f4f2ec] p-6 sm:p-8">
                <span className="proto-label text-[var(--signal)]">
                  Guarantees // Contractual Peace of Mind
                </span>
                <h3 className="proto-display mt-3 text-2xl sm:text-3xl">
                  Work committed with total transparency.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  We don&apos;t leave things up in the air. Every project operates under written commitments before kickoff:
                </p>

                <div className="mt-6 space-y-4">
                  {guaranteesEn.map((item, i) => (
                    <div
                      key={item.title}
                      className="border-b border-[var(--line)] pb-3.5 last:border-b-0"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-cota text-[11px] font-bold text-[var(--signal)]">
                          0{i + 1}
                        </span>
                        <h4 className="text-sm font-semibold text-[var(--fg)]">
                          {item.title}
                        </h4>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--muted)] pl-6">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-[var(--line-strong)] pt-4 text-center sm:text-left">
                  <a href="#contact" className="proto-btn w-full justify-center">
                    Request project quote
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
