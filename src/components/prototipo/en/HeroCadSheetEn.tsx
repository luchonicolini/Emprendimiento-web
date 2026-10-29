"use client";

import { useState } from "react";
import { CornerMarks } from "@/components/prototipo/primitives";
import { brandEn, heroSheetEn } from "@/content/prototipo.en";

type TabId = "specs" | "cad" | "metrics";

interface CadZone {
  id: string;
  label: string;
  dim: string;
  desc: string;
}

const CAD_ZONES: CadZone[] = [
  {
    id: "header",
    label: "Header",
    dim: "H: 64px",
    desc: "Sticky blur · Fixed-measure navigation",
  },
  {
    id: "grid",
    label: "Grid",
    dim: "W: 1240px",
    desc: "12 columns · Responsive architectural margins",
  },
  {
    id: "type",
    label: "Display",
    dim: "clamp(2.9rem, 7.2vw)",
    desc: "Proportional typographic scale with zero layout shifts",
  },
  {
    id: "conversion",
    label: "Conversion",
    dim: "44px min tap",
    desc: "CTAs with instant tactile feedback & AA accessibility",
  },
];

export function HeroCadSheetEn() {
  const [activeTab, setActiveTab] = useState<TabId>("specs");
  const [activeZone, setActiveZone] = useState<CadZone>(CAD_ZONES[0]);

  return (
    <div className="relative">
      <aside className="proto-blue proto-grid relative border border-[var(--line-strong)] p-5 sm:p-6 transition-all duration-300">
        <CornerMarks />

        {/* Top CAD toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] pb-3.5">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-2 w-2 bg-[var(--signal)]"
              aria-hidden="true"
            />
            <span className="font-cota text-[10px] uppercase tracking-[0.2em] text-[var(--fg)]">
              Blueprint 01 · CAD View
            </span>
          </div>
          <span className="font-cota text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Rev. 2026.1
          </span>
        </div>

        {/* Tab selector */}
        <div
          role="tablist"
          aria-label="CAD Viewer layers"
          className="mt-3.5 grid grid-cols-3 gap-1 border border-[var(--line)] bg-[rgba(0,0,0,0.18)] p-1 text-center"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "specs"}
            onClick={() => setActiveTab("specs")}
            className={`font-cota py-1.5 text-[9px] uppercase tracking-[0.14em] transition-all sm:text-[10px] ${
              activeTab === "specs"
                ? "bg-[var(--fg)] font-semibold text-[#16324f] shadow-sm"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
            01 Specs
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "cad"}
            onClick={() => setActiveTab("cad")}
            className={`font-cota py-1.5 text-[9px] uppercase tracking-[0.14em] transition-all sm:text-[10px] ${
              activeTab === "cad"
                ? "bg-[var(--fg)] font-semibold text-[#16324f] shadow-sm"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
            02 CAD Dims
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "metrics"}
            onClick={() => setActiveTab("metrics")}
            className={`font-cota py-1.5 text-[9px] uppercase tracking-[0.14em] transition-all sm:text-[10px] ${
              activeTab === "metrics"
                ? "bg-[var(--fg)] font-semibold text-[#16324f] shadow-sm"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
            03 Metrics
          </button>
        </div>

        {/* TAB 1: Specs */}
        {activeTab === "specs" && (
          <div className="mt-4 animate-fadeIn">
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 text-xs sm:text-[13px]">
              {heroSheetEn.map((row) => (
                <div key={row.label} className="contents">
                  <dt className="proto-label self-baseline">{row.label}</dt>
                  <dd className="font-mono text-right text-[var(--fg)] sm:text-left">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* TAB 2: CAD Dims */}
        {activeTab === "cad" && (
          <div className="mt-4 animate-fadeIn space-y-3">
            <div className="grid grid-cols-2 gap-1.5">
              {CAD_ZONES.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setActiveZone(zone)}
                  className={`border p-2 text-left transition-all ${
                    activeZone.id === zone.id
                      ? "border-[var(--signal)] bg-[rgba(184,56,18,0.12)] text-[var(--fg)]"
                      : "border-[var(--line)] bg-[rgba(0,0,0,0.12)] text-[var(--muted)] hover:border-[var(--fg)] hover:text-[var(--fg)]"
                  }`}
                >
                  <div className="font-cota text-[9px] uppercase tracking-[0.15em]">
                    {zone.label}
                  </div>
                  <div className="font-mono text-[11px] font-bold text-[var(--signal)]">
                    {zone.dim}
                  </div>
                </button>
              ))}
            </div>
            <div className="border border-[var(--line)] bg-[rgba(0,0,0,0.22)] p-2.5">
              <span className="proto-label text-[9px] uppercase text-[var(--signal)]">
                Selected measure // {activeZone.label}
              </span>
              <p className="mt-1 text-xs text-[var(--fg)]">{activeZone.desc}</p>
            </div>
          </div>
        )}

        {/* TAB 3: Metrics */}
        {activeTab === "metrics" && (
          <div className="mt-4 animate-fadeIn space-y-2.5 text-xs">
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-2">
              <span className="proto-label">PageSpeed Mobile</span>
              <span className="font-mono font-bold text-[#25D366]">99 / 100</span>
            </div>
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-2">
              <span className="proto-label">LCP First Paint</span>
              <span className="font-mono font-bold text-[#25D366]">0.8s (Instant)</span>
            </div>
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-2">
              <span className="proto-label">Core Web Vitals</span>
              <span className="font-mono font-bold text-[#25D366]">Passed (All green)</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="proto-label">Accessibility (WCAG)</span>
              <span className="font-mono font-bold text-[#25D366]">AA 100%</span>
            </div>
          </div>
        )}

        {/* Bottom studio footnote */}
        <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-3 text-[10px] text-[var(--muted)]">
          <span className="font-cota tracking-wider">{brandEn.name}</span>
          <span className="font-cota tracking-widest text-[var(--signal)]">
            ENGINEERED STUDIO
          </span>
        </div>
      </aside>
    </div>
  );
}
