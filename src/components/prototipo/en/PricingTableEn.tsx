"use client";

import { useState } from "react";
import { brandEn, customSystemEn } from "@/content/prototipo.en";
import { Reveal } from "@/components/prototipo/Reveal";
import { CornerMarks, SectionHead } from "@/components/prototipo/primitives";
import { cn } from "@/lib/utils";

const plansDataEn = [
  {
    plan: "Landing page",
    type: "Landing page",
    tag: "PLAN 01 // CONVERSION",
    fit: "Professionals, founders, and service providers who need a high-converting one-page site.",
    result: "Launch with an engineered page focused on turning visits into qualified inquiries.",
    price: "USD 200",
    originalPrice: "USD 350",
    promoBadge: "2 slots left in November",
    pricePrefix: "Fixed rate",
    term: "7 to 10 business days",
    recommended: false,
    features: [
      "Bespoke visual design tailored for direct WhatsApp & email conversion",
      "Direct WhatsApp button and friction-free lead capture form",
      "Sub-second load times globally so visitors never bounce",
      "Conversion tracking setup (Meta Pixel / Google Analytics / Clarity)",
      "Custom .com domain and deployment included in your name",
    ],
  },
  {
    plan: "Multi-page website",
    type: "Multi-page website",
    tag: "PLAN 02 // STRUCTURAL",
    fit: "Studios, consultancies, and companies with multiple offerings that need Google authority.",
    result: "Structure your offerings and build authority so clients find and choose you.",
    price: "USD 500",
    pricePrefix: "Fixed rate",
    term: "10 to 15 business days",
    recommended: true,
    features: [
      "Up to 5 custom pages or sections to articulate all your services",
      "SEO architecture structured to rank for target keywords in your market",
      "Clear strategic CTAs and direct contact triggers across every page",
      "Instant loading speed and rock-solid cloud uptime",
      "Domain, SSL certificate, and cloud hosting configured in your name",
    ],
  },
  {
    plan: "Online store",
    type: "Online store",
    tag: "PLAN 03 // E-COMMERCE",
    fit: "Brands requiring a digital catalog, shopping cart, and global checkout processing.",
    result: "A store ready to accept orders and process payments worldwide.",
    price: "USD 650",
    pricePrefix: "Starting at",
    term: "15 to 20 business days",
    recommended: false,
    features: [
      "Professional setup on Shopify or WooCommerce",
      "Global checkout with Stripe, PayPal, and credit cards",
      "Initial catalog upload of up to 30 products ready to sell",
      "Video walkthrough so you can manage orders without relying on anyone",
      "Custom domain connected and ready to trade in multiple currencies",
    ],
  },
];

export function PricingTableEn() {
  const [selectedMobilePlan, setSelectedMobilePlan] = useState<number>(1);

  return (
    <section
      id="pricing"
      className="border-b border-[var(--line)] py-12 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <SectionHead
            index="05 / Pricing"
            title="Fixed rates. No surprises."
            intro={
              <p>
                Every project has a clear scope, upfront price, and guaranteed turnaround.
                Pay a 25% deposit to kick off and the remaining 75% upon approved delivery.
              </p>
            }
          />
        </Reveal>

        {/* Mobile Plan Selector Tabs */}
        <div className="mt-8 flex border border-[var(--line-strong)] bg-[var(--surface)] p-1 lg:hidden">
          {plansDataEn.map((p, idx) => (
            <button
              key={p.plan}
              type="button"
              onClick={() => setSelectedMobilePlan(idx)}
              className={cn(
                "flex-1 py-2 text-center font-cota text-[10px] uppercase tracking-wider transition-colors",
                selectedMobilePlan === idx
                  ? "bg-[var(--fg)] text-[var(--bg)] font-bold shadow-sm"
                  : "text-[var(--muted)] hover:text-[var(--fg)]"
              )}
            >
              {p.plan}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-8 grid gap-6 lg:mt-12 lg:grid-cols-3">
          {plansDataEn.map((item, idx) => {
            const isHiddenMobile = selectedMobilePlan !== idx;
            return (
              <div
                key={item.plan}
                className={cn(
                  "relative flex flex-col justify-between border bg-[var(--bg)] p-6 sm:p-8 transition-all duration-300",
                  item.recommended
                    ? "border-[var(--signal)] shadow-[0_12px_40px_rgba(184,56,18,0.08)] ring-1 ring-[var(--signal)]"
                    : "border-[var(--line-strong)] hover:border-[var(--fg)]",
                  isHiddenMobile && "hidden lg:flex"
                )}
              >
                <CornerMarks />

                <div>
                  <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                    <span className="font-cota text-[10px] uppercase tracking-[0.2em] text-[var(--signal)]">
                      {item.tag}
                    </span>
                    {item.promoBadge ? (
                      <span className="border border-[var(--signal)] bg-[rgba(184,56,18,0.1)] px-2 py-0.5 font-cota text-[9px] uppercase tracking-wider text-[var(--signal)]">
                        {item.promoBadge}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="proto-display mt-4 text-2xl sm:text-3xl">
                    {item.plan}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                    {item.fit}
                  </p>

                  <div className="mt-6 border-y border-[var(--line)] py-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-cota text-[10px] uppercase text-[var(--muted)]">
                        {item.pricePrefix}
                      </span>
                      <span className="proto-display text-3xl font-bold sm:text-4xl">
                        {item.price}
                      </span>
                      {item.originalPrice ? (
                        <span className="font-mono text-sm text-[var(--muted)] line-through">
                          {item.originalPrice}
                        </span>
                      ) : null}
                    </div>
                    <span className="mt-1 block font-mono text-[11px] text-[var(--muted)]">
                      Turnaround: {item.term}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs text-[var(--fg)]">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="text-[var(--signal)]">✔</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-[var(--line)] pt-5">
                  <a
                    href="#contact"
                    className={cn(
                      "proto-btn w-full justify-center text-center",
                      !item.recommended && "proto-btn-ghost"
                    )}
                  >
                    Select {item.plan}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Web App / System Banner */}
        <Reveal delay={120}>
          <div className="mt-8 border border-[var(--line-strong)] bg-[#f4f2ec] p-6 sm:p-8 lg:mt-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="proto-label text-[var(--signal)]">
                  {customSystemEn.tag || "CUSTOM ENGINEERING // BESPOKE"}
                </span>
                <h3 className="proto-display mt-2 text-2xl sm:text-3xl">
                  {customSystemEn.plan}
                </h3>
                <p className="mt-2 max-w-2xl text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {customSystemEn.fit} — {customSystemEn.includes}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="border border-[var(--line)] bg-[var(--bg)] px-4 py-2 text-center">
                  <span className="font-cota text-[9px] uppercase text-[var(--muted)] block">
                    {customSystemEn.pricePrefix}
                  </span>
                  <span className="proto-display text-2xl font-bold">
                    {customSystemEn.price}
                  </span>
                </div>
                <a href="#contact" className="proto-btn justify-center">
                  Discuss custom architecture
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Global Payments Footnote */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between text-xs text-[var(--muted)]">
          <p className="proto-label">
            Pre-tax USD pricing · Global billing via Wise, PayPal, Payoneer, Wire, or USDT
          </p>
          <div className="flex items-center gap-3">
            <a
              href={`${brandEn.whatsapp}?text=${encodeURIComponent(
                "Hello Luciano, I am reviewing your pricing table and would like to ask a question regarding my project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--fg)] underline decoration-[#25D366] underline-offset-4 hover:text-[#25D366] transition-colors"
            >
              Ask question on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
