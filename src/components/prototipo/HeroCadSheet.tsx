"use client";

import { useState } from "react";
import { CornerMarks } from "@/components/prototipo/primitives";
import { brand, heroSheet } from "@/content/prototipo";

type TabId = "ficha" | "cotas" | "metricas";

interface CadZone {
  id: string;
  label: string;
  dim: string;
  desc: string;
}

const CAD_ZONES: CadZone[] = [
  {
    id: "header",
    label: "Cabezal",
    dim: "H: 64px",
    desc: "Sticky blur · Navegación con medidas fijas",
  },
  {
    id: "reticula",
    label: "Retícula",
    dim: "W: 1240px",
    desc: "12 columnas · Margen lateral responsivo",
  },
  {
    id: "tipografia",
    label: "Display",
    dim: "clamp(2.9rem, 7.2vw)",
    desc: "Escala tipográfica proporcional sin saltos",
  },
  {
    id: "conversion",
    label: "Conversión",
    dim: "44px min tap",
    desc: "CTAs con feedback instantáneo y accesibilidad AA",
  },
];

export function HeroCadSheet() {
  const [activeTab, setActiveTab] = useState<TabId>("ficha");
  const [activeZone, setActiveZone] = useState<CadZone>(CAD_ZONES[0]);

  return (
    <div className="relative">
      <aside className="proto-blue proto-grid relative border border-[var(--line-strong)] p-5 sm:p-6 transition-all duration-300">
        <CornerMarks />

        {/* Barra superior estilo CAD */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] pb-3.5">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-2 w-2 bg-[var(--signal)]"
              aria-hidden="true"
            />
            <span className="font-cota text-[10px] uppercase tracking-[0.2em] text-[var(--fg)]">
              Plano 01 · Visor CAD
            </span>
          </div>
          <span className="font-cota text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Rev. 2026.1
          </span>
        </div>

        {/* Selector de capas / pestañas */}
        <div
          role="tablist"
          aria-label="Capas del visor CAD"
          className="mt-3.5 grid grid-cols-3 gap-1 border border-[var(--line)] bg-[rgba(0,0,0,0.18)] p-1 text-center"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "ficha"}
            onClick={() => setActiveTab("ficha")}
            className={`font-cota py-1.5 text-[9px] uppercase tracking-[0.14em] transition-all sm:text-[10px] ${
              activeTab === "ficha"
                ? "bg-[var(--fg)] font-semibold text-[#16324f] shadow-sm"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
            01 Ficha
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "cotas"}
            onClick={() => setActiveTab("cotas")}
            className={`font-cota py-1.5 text-[9px] uppercase tracking-[0.14em] transition-all sm:text-[10px] ${
              activeTab === "cotas"
                ? "bg-[var(--fg)] font-semibold text-[#16324f] shadow-sm"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
            02 Cotas CAD
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "metricas"}
            onClick={() => setActiveTab("metricas")}
            className={`font-cota py-1.5 text-[9px] uppercase tracking-[0.14em] transition-all sm:text-[10px] ${
              activeTab === "metricas"
                ? "bg-[var(--fg)] font-semibold text-[#16324f] shadow-sm"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
            03 Métricas
          </button>
        </div>

        {/* Contenido según pestaña */}
        <div className="mt-4 min-h-[220px]">
          {activeTab === "ficha" && (
            <dl className="animate-in fade-in duration-200">
              {heroSheet.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[78px_1fr] gap-3 border-b border-[var(--line)] py-3 last:border-b-0"
                >
                  <dt className="font-cota text-[9px] uppercase leading-relaxed tracking-[0.18em] text-[var(--muted)]">
                    {row.label}
                  </dt>
                  <dd className="text-[13px] leading-relaxed tracking-[-0.01em] text-[var(--fg)]">
                    {row.value}
                  </dd>
                </div>
              ))}
              <div className="grid grid-cols-[78px_1fr] gap-3 pt-3">
                <dt className="font-cota text-[9px] uppercase leading-relaxed tracking-[0.18em] text-[var(--muted)]">
                  Garantía
                </dt>
                <dd className="text-[13px] leading-relaxed tracking-[-0.01em] text-[var(--fg)]">
                  Fecha de entrega fijada por escrito
                </dd>
              </div>
            </dl>
          )}

          {activeTab === "cotas" && (
            <div className="animate-in fade-in duration-200">
              {/* Plano interactivo estilo Wireframe con cotas */}
              <div className="relative border border-[var(--line-strong)] bg-[#0d1f2d] p-3 text-left">
                {/* Grilla técnica de fondo */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                  aria-hidden="true"
                />

                {/* Bloque Header Wireframe */}
                <button
                  type="button"
                  onClick={() => setActiveZone(CAD_ZONES[0])}
                  className={`relative mb-2 flex w-full items-center justify-between border px-2.5 py-1.5 transition-colors ${
                    activeZone.id === "header"
                      ? "border-[var(--signal)] bg-[var(--signal)]/15 text-[var(--fg)]"
                      : "border-[var(--line)] bg-white/5 text-[var(--muted)] hover:border-[var(--fg)]"
                  }`}
                >
                  <span className="font-cota text-[10px] uppercase tracking-wider">
                    Cabezal
                  </span>
                  <span className="font-cota text-[10px] text-[var(--muted)]">
                    64 px
                  </span>
                </button>

                {/* Bloque Central Wireframe */}
                <div className="mb-2 grid grid-cols-12 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveZone(CAD_ZONES[2])}
                    className={`col-span-8 border p-2.5 text-left transition-colors ${
                      activeZone.id === "tipografia"
                        ? "border-[var(--signal)] bg-[var(--signal)]/15 text-[var(--fg)]"
                        : "border-[var(--line)] bg-white/5 text-[var(--muted)] hover:border-[var(--fg)]"
                    }`}
                  >
                    <div className="h-2 w-3/4 bg-current opacity-40 mb-1.5" />
                    <div className="h-1.5 w-1/2 bg-current opacity-25" />
                    <span className="mt-2 block font-cota text-[9px] uppercase tracking-wider text-[var(--muted)]">
                      H1 + Copy
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveZone(CAD_ZONES[1])}
                    className={`col-span-4 flex flex-col justify-between border p-2.5 text-right transition-colors ${
                      activeZone.id === "reticula"
                        ? "border-[var(--signal)] bg-[var(--signal)]/15 text-[var(--fg)]"
                        : "border-[var(--line)] bg-white/5 text-[var(--muted)] hover:border-[var(--fg)]"
                    }`}
                  >
                    <span className="font-cota text-[9px] uppercase tracking-wider text-[var(--muted)]">
                      12 Col
                    </span>
                    <span className="font-cota text-[10px] text-[var(--signal)]">
                      1240px
                    </span>
                  </button>
                </div>

                {/* Bloque CTA Wireframe */}
                <button
                  type="button"
                  onClick={() => setActiveZone(CAD_ZONES[3])}
                  className={`flex w-full items-center justify-between border px-2.5 py-1.5 transition-colors ${
                    activeZone.id === "conversion"
                      ? "border-[var(--signal)] bg-[var(--signal)]/15 text-[var(--fg)]"
                      : "border-[var(--line)] bg-white/5 text-[var(--muted)] hover:border-[var(--fg)]"
                  }`}
                >
                  <span className="font-cota text-[10px] uppercase tracking-wider">
                    Acción principal (CTA)
                  </span>
                  <span className="font-cota text-[10px] text-[var(--muted)]">
                    44 px tap
                  </span>
                </button>
              </div>

              {/* Inspector de cota seleccionada */}
              <div className="mt-3 flex items-start justify-between border-t border-[var(--line)] pt-2.5">
                <div>
                  <span className="font-cota text-[10px] uppercase tracking-[0.16em] text-[var(--fg)]">
                    {activeZone.label}
                  </span>
                  <p className="mt-0.5 text-xs text-[var(--muted)]">
                    {activeZone.desc}
                  </p>
                </div>
                <span className="font-cota text-[11px] font-medium text-[var(--signal)]">
                  {activeZone.dim}
                </span>
              </div>
            </div>
          )}

          {activeTab === "metricas" && (
            <div className="animate-in fade-in duration-200 space-y-2.5 pt-1">
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-[var(--line)] bg-[#0d1f2d] p-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-cota text-[9px] uppercase tracking-wider text-[var(--muted)]">
                      LCP (Carga)
                    </span>
                    <span className="font-cota text-xs font-bold text-emerald-400">
                      0.8s
                    </span>
                  </div>
                  <p className="mt-1 font-cota text-[9px] text-[var(--muted)]">
                    Objetivo: &lt; 2.5s (Óptimo)
                  </p>
                </div>

                <div className="border border-[var(--line)] bg-[#0d1f2d] p-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-cota text-[9px] uppercase tracking-wider text-[var(--muted)]">
                      INP (Respuesta)
                    </span>
                    <span className="font-cota text-xs font-bold text-emerald-400">
                      &lt; 35ms
                    </span>
                  </div>
                  <p className="mt-1 font-cota text-[9px] text-[var(--muted)]">
                    Objetivo: &lt; 200ms (Fluido)
                  </p>
                </div>

                <div className="border border-[var(--line)] bg-[#0d1f2d] p-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-cota text-[9px] uppercase tracking-wider text-[var(--muted)]">
                      CLS (Estabilidad)
                    </span>
                    <span className="font-cota text-xs font-bold text-emerald-400">
                      0.00
                    </span>
                  </div>
                  <p className="mt-1 font-cota text-[9px] text-[var(--muted)]">
                    Cero saltos de layout
                  </p>
                </div>

                <div className="border border-[var(--line)] bg-[#0d1f2d] p-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-cota text-[9px] uppercase tracking-wider text-[var(--muted)]">
                      Lighthouse
                    </span>
                    <span className="font-cota text-xs font-bold text-emerald-400">
                      100/100
                    </span>
                  </div>
                  <p className="mt-1 font-cota text-[9px] text-[var(--muted)]">
                    Auditoría de rendimiento
                  </p>
                </div>
              </div>

              <div className="border-t border-[var(--line)] pt-2 text-center">
                <span className="font-cota text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Código Next.js + TS compilado · Sin bloatware
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Pie de la ficha */}
        <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-3.5">
          <span className="font-cota text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
            {brand.availability}
          </span>
          <span className="inline-flex items-center gap-1.5 font-cota text-[9px] uppercase tracking-[0.14em] text-[var(--fg)]">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"
              aria-hidden="true"
            />
            Operativo
          </span>
        </div>
      </aside>

      {/* Rótulo inferior */}
      <div className="mt-2.5 flex items-center justify-between px-1">
        <span className="proto-label">Fig. 1 — Visor de especificaciones</span>
        <span className="proto-label">Escala 1:1</span>
      </div>
    </div>
  );
}
