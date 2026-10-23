"use client";

import { useState } from "react";
import { brand } from "@/content/prototipo";
import { Cota, Kicker } from "@/components/prototipo/primitives";
import { Reveal } from "@/components/prototipo/Reveal";

export function ProtoHero() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="proto-grid border-b border-[var(--line)]">
      <div className="mx-auto max-w-[1240px] px-5 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1.15fr] lg:gap-14 items-center">
          {/* Columna Izquierda: Propuesta de Valor */}
          <div className="min-w-0">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-[6px] w-[6px] bg-[var(--signal)]" />
                <Kicker>Plano 01 — Oferta base</Kicker>
              </div>
              <h1 className="proto-display mt-7 text-[clamp(2.7rem,6.8vw,5.6rem)]">
                Sitios web con{" "}
                <span className="underline decoration-[var(--signal)] decoration-[3px] underline-offset-[6px] sm:decoration-[4px] sm:underline-offset-[10px]">
                  medidas exactas
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-[var(--muted)] sm:text-lg">
                Diseñamos y programamos tu web con alcance, precio y fecha
                definidos por escrito antes de empezar. Sin presupuestos que
                cambian a mitad de obra.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#contacto" className="proto-btn">
                  Pedir presupuesto
                </a>
                <a href="#trabajos" className="proto-btn proto-btn-ghost">
                  Ver trabajos
                </a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <Cota
                label="Desde USD 350 · 7–10 días hábiles · 25% de seña"
                className="mt-12 max-w-xl"
              />
            </Reveal>
          </div>

          {/* Columna Derecha: Comparador Visual Antes y Después */}
          <Reveal delay={120} className="relative w-full">
            {/* Cota superior del comparador */}
            <div className="mb-2 flex items-center justify-between text-[10px] font-cota text-[var(--muted)]">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="h-1.5 w-1.5 bg-[var(--signal)]" />
                COMPARADOR DE DISEÑO // ANTES Y DESPUÉS
              </span>
              <span className="tracking-wider text-[var(--signal)] font-semibold">
                ◄ ARRASTRÁ EL CONTROL ►
              </span>
            </div>

            {/* Contenedor del Slider Antes y Después */}
            <div className="relative select-none overflow-hidden border border-[var(--line-strong)] shadow-[0_20px_50px_rgba(13,20,24,0.16)] h-[440px] sm:h-[480px]">
              
              {/* ========================================================= */}
              {/* CAPA BASE (DESPUÉS): WEB PROFESIONAL COTA */}
              {/* ========================================================= */}
              <div className="absolute inset-0 flex flex-col justify-between bg-[#eae6dc] p-5 sm:p-7 proto-grid text-[var(--fg)]">
                {/* Badge flotante superior derecho */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 border border-[var(--line-strong)] bg-[var(--bg)] px-2.5 py-1 font-cota text-[9px] text-[var(--fg)] shadow-sm">
                    <span className="text-emerald-600 font-bold">🔒 https://</span>
                    <span>tu-marca.com</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 border border-emerald-600/40 bg-emerald-500/15 px-3 py-1 font-cota text-[10px] uppercase tracking-wider text-emerald-800 dark:text-emerald-300 font-bold shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Después · Web Profesional
                  </span>
                </div>

                {/* Contenido Visual: Diseño de Estudio Editorial */}
                <div className="my-auto space-y-3.5 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-[var(--signal)]" />
                    <span className="font-cota text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--signal)]">
                      ESTUDIO COTA // ARQUITECTURA DIGITAL
                    </span>
                  </div>

                  <h3 className="proto-display text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[var(--fg)] leading-none">
                    Sitios web rápidos que generan consultas reales.
                  </h3>

                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-[var(--muted)] max-w-md font-sans">
                    Diseño a medida con tipografía suiza, carga instantánea en 0.4s y base de datos propia conectada directo a tu WhatsApp.
                  </p>

                  <div className="flex items-center gap-3 pt-1">
                    <span className="proto-btn text-[11px] py-2 px-4 pointer-events-none">
                      Pedir presupuesto ↗
                    </span>
                    <span className="font-cota text-[11px] text-[var(--muted)]">
                      7 a 10 días hábiles
                    </span>
                  </div>

                  {/* Ficha técnica de calidad */}
                  <div className="grid grid-cols-2 gap-2 pt-3 font-cota text-[11px]">
                    <div className="border border-emerald-600/30 bg-emerald-500/10 p-2 text-emerald-800 dark:text-emerald-300">
                      <div className="font-bold">100/100 SPEED</div>
                      <div className="text-[9.5px] opacity-80">Next.js 16 · Turbopack</div>
                    </div>
                    <div className="border border-emerald-600/30 bg-emerald-500/10 p-2 text-emerald-800 dark:text-emerald-300">
                      <div className="font-bold">INDEXA EN GOOGLE</div>
                      <div className="text-[9.5px] opacity-80">SEO estructurado nativo</div>
                    </div>
                  </div>
                </div>

                {/* Pie técnico Cota */}
                <div className="flex items-center justify-between border-t border-[var(--line-strong)] pt-3 text-[10px] font-cota text-[var(--muted)]">
                  <span className="text-[var(--signal)] font-bold">✓ CÓDIGO PROPIO Y DOMINIO A TU NOMBRE</span>
                  <span>ESCALA 1:1</span>
                </div>
              </div>

              {/* ========================================================= */}
              {/* CAPA SUPERIOR RECORTADA (ANTES): WEB DE IA GENÉRICA */}
              {/* ========================================================= */}
              <div
                className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-[#1a082e] via-[#100522] to-[#250942] p-5 sm:p-7 text-white"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
              >
                {/* Banner feo de IA en la parte superior */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 border border-rose-500/40 bg-rose-500/20 px-3 py-1 font-cota text-[10px] uppercase tracking-wider text-rose-300 font-bold shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                    Antes · Generada con IA
                  </span>
                  <div className="flex items-center gap-1.5 border border-rose-500/40 bg-black/40 px-2.5 py-1 font-cota text-[9px] text-rose-300">
                    <span>⚠️ No Seguro //</span>
                    <span className="truncate">wixsite.com/ai-tmp</span>
                  </div>
                </div>

                {/* Contenido Visual: Típica plantilla genérica de IA */}
                <div className="my-auto space-y-3.5 pr-2">
                  <div className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-lg shadow-pink-500/30">
                    ✨ AI POWERED 3.0 TEMPLATE
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-[30px] font-extrabold tracking-tight text-white leading-tight">
                    "Transformamos sinergias holísticas del mañana digital."
                  </h3>

                  <p className="text-[12px] sm:text-[13px] leading-relaxed text-purple-200/70 max-w-md font-sans">
                    Texto genérico de relleno que no dice qué vendés ni por qué elegirte. Código inflado con 50 plugins y formulario roto.
                  </p>

                  <div className="flex items-center gap-3 pt-1">
                    <span className="rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-5 py-2 text-[11px] font-bold text-white shadow-lg shadow-purple-500/40 pointer-events-none">
                      Get Started Today ⚡
                    </span>
                    <span className="font-mono text-[10px] text-rose-400">
                      [Error: DB not connected]
                    </span>
                  </div>

                  {/* Ficha técnica de fallas */}
                  <div className="grid grid-cols-2 gap-2 pt-3 font-mono text-[11px]">
                    <div className="border border-rose-500/30 bg-rose-950/40 p-2 text-rose-300">
                      <div className="font-bold text-rose-400">✕ 4.8s DE CARGA</div>
                      <div className="text-[9.5px] opacity-70">El 70% abandona</div>
                    </div>
                    <div className="border border-rose-500/30 bg-rose-950/40 p-2 text-rose-300">
                      <div className="font-bold text-rose-400">✕ INVISIBLE EN GOOGLE</div>
                      <div className="text-[9.5px] opacity-70">Sin SEO ni sitemap</div>
                    </div>
                  </div>
                </div>

                {/* Pie técnico IA */}
                <div className="flex items-center justify-between border-t border-purple-500/20 pt-3 text-[10px] font-mono text-rose-400">
                  <span>✕ CÓDIGO INSEGURO Y LENTO</span>
                  <span className="text-purple-300/60">PLANTILLA DESCUIDADA</span>
                </div>
              </div>

              {/* ========================================================= */}
              {/* LÍNEA DIVISORIA Y MANIJA INTERACTIVA (SLIDER HANDLE) */}
              {/* ========================================================= */}
              <div
                className="absolute top-0 bottom-0 z-20 w-[2px] bg-white shadow-[0_0_16px_rgba(0,0,0,0.6)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#0d1418] text-white shadow-2xl transition-transform hover:scale-110">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M8 9l-3 3m0 0l3 3m-3-3h14m-3-3l3 3m0 0l-3 3"
                    />
                  </svg>
                </div>
              </div>

              {/* INPUT DE CONTROL ACCESIBLE Y ARRASTRABLE NATIVO */}
              <input
                type="range"
                min={0}
                max={100}
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 z-30 h-full w-full opacity-0 cursor-ew-resize"
                aria-label="Deslizador comparativo de Antes y Después"
              />
            </div>

            {/* Leyenda técnica inferior */}
            <div className="mt-3 flex items-center justify-between text-[10px] font-cota text-[var(--muted)]">
              <span>FIG. 01 — COMPARATIVA VISUAL DE INGENIERÍA</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 bg-[var(--signal)]" />
                {brand.availability}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
