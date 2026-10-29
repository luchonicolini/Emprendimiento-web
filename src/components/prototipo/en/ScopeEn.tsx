"use client";

import { useState } from "react";
import { Reveal } from "@/components/prototipo/Reveal";
import { SectionHead } from "@/components/prototipo/primitives";
import { cn } from "@/lib/utils";

const stackingCardsEn = [
  {
    index: "01",
    tag: "TRACK 01 // VISUAL ARCHITECTURE",
    headline: "A single decisive proposal. Crafted for conversion, not decoration.",
    explanation:
      "We define the hierarchy, narrative structure, and user flow before writing any code. We design with a concrete commercial goal: that every visitor understands your value in 3 seconds and feels confident enough to request a proposal.",
    badges: ["Sales Funnel", "Bespoke Design", "Mobile First", "1:1 Interactive Prototype"],
    deliverables: [
      "Visual narrative engineered to guide visitors directly to the contact CTA",
      "Exclusive graphic design that communicates authority and credibility",
      "Exact mobile adaptation (where over 80% of your visitors browse)",
      "Interactive prototype to review and approve before programming starts",
    ],
    saves:
      "Weeks of indecisive back-and-forth, confusing layouts nobody understands, and generic templates identical to your competitors.",
  },
  {
    index: "02",
    tag: "TRACK 02 // FRONTEND ENGINEERING",
    headline: "A fast, lightweight site without heavy page builders.",
    explanation:
      "We build with Next.js and optimize images, resources, and initial loading. Final performance depends on content, device, and connection; we can measure it before launch.",
    badges: ["Optimized performance", "Next.js & React", "Measurable metrics", "Fewer dependencies"],
    deliverables: [
      "Images and resources optimized to reduce load times on mobile",
      "Technical structure prepared to help Google crawl and index the site, without guaranteeing rankings",
      "Security configuration and fewer dependencies; uptime also depends on the hosting provider",
    ],
    saves:
      "Lost clients due to slow-loading pages, fragile plugins that break overnight, and bounces before visitors even see your WhatsApp or email.",
  },
  {
    index: "03",
    tag: "TRACK 03 // EDITORIAL COPYWRITING",
    headline: "What your client needs to read to decide. Straight to the point, zero fluff.",
    explanation:
      "We never leave you staring at a blank page. We help articulate your value proposition, your service scope, and your pricing with sharp, compelling copy that answers client objections before they ask.",
    badges: ["Clear Value Prop", "Conversion Copy", "Zero Cliche Buzzwords", "Strategic CTAs"],
    deliverables: [
      "Direct headline communicating in 3 seconds why clients should choose you",
      "Commercial copywriting that dismantles hesitations and invites contact",
      "Detailed service breakdown so prospective clients know exactly what they get",
      "High-converting calls to action placed at natural reading intervals",
    ],
    saves:
      "Vague corporate filler like 'we provide holistic synergies', writers block, and visitors bouncing without understanding what you actually offer.",
  },
  {
    index: "04",
    tag: "TRACK 04 // GLOBAL LAUNCH & TRACKING",
    headline: "Know exactly how many inquiries arrive and which channel drove them.",
    explanation:
      "Operating a website without analytics is like running a storefront with shuttered windows. We configure privacy-first analytics and conversion tracking so you see every inquiry and track your return on investment.",
    badges: ["Inquiry Tracking", "Meta Pixel & Google", "Custom .com Domain & SSL", "Measurable ROI"],
    deliverables: [
      "Real-time tracking of every WhatsApp click and form submission",
      "Meta Pixel and Google Analytics setup to prevent wasted ad spend",
      "Custom domain (.com) and SSL security certificate 100% in your name",
      "Guaranteed cross-browser and mobile verification prior to launch",
    ],
    saves:
      "Running online ads blindly without knowing what generates revenue, lost leads from broken links, and frustrating technical setups.",
  },
];

export function ScopeEn() {
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  return (
    <section id="scope" className="border-b border-[var(--line)] py-12 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <SectionHead
            index="02 / Scope"
            title={
              <>
                What goes into the <em className="not-italic text-[var(--signal)]">build</em>.
              </>
            }
            intro={
              <p>
                Four pillars, a single technical lead. We don&apos;t bill fragmented hourly
                rates or outsource to third parties: we lock in an engineering scope and execute it end-to-end.
              </p>
            }
          />
        </Reveal>

        {/* Desktop track selector */}
        <div className="mt-8 hidden items-center gap-2 border-b border-[var(--line)] pb-4 lg:flex">
          <span className="proto-label mr-2">Project Tracks:</span>
          {stackingCardsEn.map((card) => (
            <a
              key={card.index}
              href={`#phase-${card.index}`}
              className="inline-flex items-center gap-2 border border-[var(--line)] bg-[var(--bg)] px-3 py-1.5 font-cota text-[10px] uppercase tracking-wider text-[var(--muted)] transition-colors hover:border-[var(--signal)] hover:text-[var(--fg)]"
            >
              <span className="text-[var(--signal)]">{card.index}</span>
              <span>{card.tag.split("//")[1]?.trim() ?? card.tag}</span>
            </a>
          ))}
        </div>

        {/* Stacking cards */}
        <div className="relative mt-10 space-y-4 pb-10 sm:mt-14 sm:space-y-8 sm:pb-12 lg:mt-12 lg:space-y-24">
          {stackingCardsEn.map((card, idx) => {
            const panelId = `scope-panel-${card.index}`;
            const isOpen = openPanel === card.index;

            return (
              <article
                key={card.index}
                id={`phase-${card.index}`}
                className="group transform-gpu scroll-mt-28 border border-[var(--line-strong)] bg-[#f4f2ec] shadow-[3px_3px_0px_var(--line-strong)] transition-all duration-300 hover:border-[var(--signal)]/80 lg:sticky"
                style={{
                  top: `calc(5.2rem + ${idx * 40}px)`,
                }}
              >
                {/* Header tab */}
                <div className="relative flex min-h-11 flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-[var(--line-strong)] bg-[var(--bg)] px-4 py-2 sm:px-8">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="font-cota text-xs font-bold text-[var(--signal)]">
                      {card.index}
                    </span>
                    <span className="h-3 w-px shrink-0 bg-[var(--line-strong)]" />
                    <span className="font-cota text-[11px] font-semibold tracking-[0.2em] text-[var(--fg)]">
                      {card.tag}
                    </span>
                  </div>
                  <span className="font-cota text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    DELIVERABLE 0{idx + 1}/04
                  </span>
                </div>

                <div className="p-5 sm:p-8 lg:p-10">
                  <h3 className="proto-display text-2xl sm:text-3xl lg:text-4xl">
                    {card.headline}
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    {card.explanation}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {card.badges.map((b) => (
                      <span
                        key={b}
                        className="border border-[var(--line-strong)] bg-[var(--bg)] px-2.5 py-1 font-cota text-[10px] uppercase tracking-wider text-[var(--fg)]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Mobile toggle button */}
                  <div className="mt-6 lg:hidden">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenPanel((current) =>
                          current === card.index ? null : card.index
                        )
                      }
                      className="proto-btn proto-btn-ghost w-full justify-between"
                    >
                      <span>
                        {isOpen ? "Hide scope details" : "View deliverables & what you save"}
                      </span>
                      <span className="font-cota text-xs">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </div>

                  {/* Deliverables section */}
                  <div
                    id={panelId}
                    className={cn(
                      "mt-8 grid gap-6 border-t border-[var(--line)] pt-6 lg:grid-cols-2",
                      isOpen ? "block" : "hidden lg:grid"
                    )}
                  >
                    <div>
                      <span className="proto-label text-[10px] text-[var(--signal)]">
                        Technical Deliverables
                      </span>
                      <ul className="mt-3 space-y-2 text-xs text-[var(--fg)] sm:text-sm">
                        {card.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-[var(--signal)]">✔</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-[var(--line)] pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                      <span className="proto-label text-[10px] text-[var(--muted)]">
                        What this prevents:
                      </span>
                      <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                        {card.saves}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
