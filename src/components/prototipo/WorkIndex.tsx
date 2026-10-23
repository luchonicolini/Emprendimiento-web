"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  projects,
  type ProjectCategory,
} from "@/content/prototipo";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/prototipo/Reveal";
import { SectionHead } from "@/components/prototipo/primitives";

const INITIAL_COUNT = 6;
const MOBILE_INITIAL_COUNT = 3;

type ScopeMode = "produccion" | "demo" | "todos";
type FormatFilter = "Todos" | Exclude<ProjectCategory, "Todos">;

const formatOptions: readonly FormatFilter[] = [
  "Todos",
  "Landing page",
  "Web multipágina",
  "Tienda / Sistema",
];

function useIsWide() {
  const [isWide, setIsWide] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)");
    const update = () => setIsWide(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isWide;
}

export function WorkIndex() {
  const [scopeMode, setScopeMode] = useState<ScopeMode>("produccion");
  const [formatFilter, setFormatFilter] = useState<FormatFilter>("Todos");
  const [extraCount, setExtraCount] = useState<number | null>(null);
  const isWide = useIsWide();

  const visibleCount = extraCount ?? INITIAL_COUNT;
  const isInitial = extraCount === null;

  // Filtrado compuesto: Alcance (producción vs laboratorio) + Formato técnico
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchScope =
        scopeMode === "todos"
          ? true
          : scopeMode === "produccion"
            ? project.kind === "produccion"
            : project.kind === "demo";

      const matchFormat =
        formatFilter === "Todos" ? true : project.category === formatFilter;

      return matchScope && matchFormat;
    });
  }, [scopeMode, formatFilter]);

  // Conteos dinámicos para los selectores de alcance
  const scopeCounts = useMemo(() => {
    const prodCount = projects.filter((p) => p.kind === "produccion").length;
    const demoCount = projects.filter((p) => p.kind === "demo").length;
    return {
      produccion: prodCount,
      demo: demoCount,
      todos: projects.length,
    };
  }, []);

  // Conteos para los subfiltros de formato dentro del scope actual
  const formatCounts = useMemo(() => {
    const scopedList =
      scopeMode === "todos"
        ? projects
        : projects.filter((p) =>
            scopeMode === "produccion"
              ? p.kind === "produccion"
              : p.kind === "demo",
          );

    const counts: Record<string, number> = {
      Todos: scopedList.length,
    };

    for (const fmt of formatOptions) {
      if (fmt !== "Todos") {
        counts[fmt] = scopedList.filter((p) => p.category === fmt).length;
      }
    }

    return counts;
  }, [scopeMode]);

  const handleSelectScope = (scope: ScopeMode) => {
    setScopeMode(scope);
    setFormatFilter("Todos");
    setExtraCount(null);
  };

  const handleSelectFormat = (format: FormatFilter) => {
    setFormatFilter(format);
    setExtraCount(null);
  };

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const shownCount =
    !isWide && isInitial
      ? MOBILE_INITIAL_COUNT
      : Math.min(visibleCount, filteredProjects.length);
  const hasMore = shownCount < filteredProjects.length;
  const remainingCount = filteredProjects.length - shownCount;

  return (
    <section
      id="trabajos"
      className="border-b border-[var(--line)] py-12 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead
              index="03 / Trabajos"
              title={
                <>
                  Planos de obra
                  <br />
                  entregados.
                </>
              }
              intro={
                <p>
                  Sitios en producción con código propio para clientes reales en
                  Argentina y la región, más prototipos interactivos 1:1 de nuestro
                  laboratorio. Cada lámina cuenta con enlace verificable y métricas de carga.
                </p>
              }
            />

            <div className="hidden shrink-0 items-center gap-3 sm:flex">
              <div className="flex items-center gap-1.5 border border-[var(--line-strong)] bg-[var(--bg)] px-3 py-1 font-cota text-[10px] text-[var(--fg)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                <span>13 en producción</span>
                <span className="text-[var(--muted)]">·</span>
                <span className="text-[var(--muted)]">10 laboratorio</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Nivel 1: Segmentado principal (Obras de clientes vs Laboratorio de diseño) */}
        <div className="mt-10 border-b border-[var(--line)] pb-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div
              role="tablist"
              aria-label="Seleccionar tipo de obras"
              className="inline-flex max-w-full flex-wrap items-center gap-1 border border-[var(--line-strong)] bg-[var(--bg)] p-1"
            >
              <button
                type="button"
                role="tab"
                aria-selected={scopeMode === "produccion"}
                onClick={() => handleSelectScope("produccion")}
                className={cn(
                  "inline-flex items-center gap-2 px-3 py-1.5 font-cota text-xs tracking-wider transition-colors",
                  scopeMode === "produccion"
                    ? "bg-[#0d1418] text-[#edeae1] font-semibold shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--fg)]",
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Obras en producción</span>
                <span className="text-[10px] opacity-75">
                  ({scopeCounts.produccion})
                </span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={scopeMode === "demo"}
                onClick={() => handleSelectScope("demo")}
                className={cn(
                  "inline-flex items-center gap-2 px-3 py-1.5 font-cota text-xs tracking-wider transition-colors",
                  scopeMode === "demo"
                    ? "bg-[#0d1418] text-[#edeae1] font-semibold shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--fg)]",
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)]" />
                <span>Laboratorio de diseño</span>
                <span className="text-[10px] opacity-75">
                  ({scopeCounts.demo})
                </span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={scopeMode === "todos"}
                onClick={() => handleSelectScope("todos")}
                className={cn(
                  "inline-flex items-center gap-2 px-3 py-1.5 font-cota text-xs tracking-wider transition-colors",
                  scopeMode === "todos"
                    ? "bg-[#0d1418] text-[#edeae1] font-semibold shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--fg)]",
                )}
              >
                <span>Todas</span>
                <span className="text-[10px] opacity-75">
                  ({scopeCounts.todos})
                </span>
              </button>
            </div>

            {/* Subfiltros por formato técnico */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="proto-label mr-1 hidden lg:inline">Formato:</span>
              {formatOptions.map((fmt) => {
                const count = formatCounts[fmt] ?? 0;
                if (count === 0 && fmt !== "Todos") return null;
                const isSelected = formatFilter === fmt;
                return (
                  <button
                    key={fmt}
                    type="button"
                    onClick={() => handleSelectFormat(fmt)}
                    className={cn(
                      "inline-flex items-center gap-1.5 border px-2.5 py-1 font-cota text-[11px] tracking-wider transition-all",
                      isSelected
                        ? "border-[var(--signal)] bg-[var(--signal)] font-medium text-white shadow-xs"
                        : "border-[var(--line)] bg-[var(--bg)] text-[var(--muted)] hover:border-[var(--line-strong)] hover:text-[var(--fg)]",
                    )}
                  >
                    <span>{fmt}</span>
                    <span className="text-[9px] opacity-80">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grilla de Pliegos Técnicos (3 col desktop, 2 col tablet, 1 col mobile) */}
        <div
          key={`${scopeMode}-${formatFilter}`}
          className="mt-8 grid border-l border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3"
        >
          {displayedProjects.map((project, index) => (
            <article
              key={`${scopeMode}-${formatFilter}-${project.name}`}
              style={{ animationDelay: `${index * 30}ms` }}
              className={cn(
                "proto-fade-enter group flex flex-col justify-between border-b border-r border-[var(--line)] bg-[var(--bg)] p-5 sm:p-6 transition-colors duration-200 hover:bg-[#f4f2ec]",
                isInitial &&
                  index >= MOBILE_INITIAL_COUNT &&
                  "hidden sm:flex",
              )}
            >
              <div>
                {/* Encabezado técnico del Pliego */}
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-cota text-[10px] font-medium tracking-[0.2em] text-[var(--signal)]">
                      PLIEGO {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[var(--line-strong)] text-[10px]">/</span>
                    <span className="font-cota text-[10px] tracking-wider text-[var(--muted)]">
                      {project.year}
                    </span>
                  </div>

                  {project.kind === "produccion" ? (
                    <span className="inline-flex items-center gap-1.5 border border-emerald-700/25 bg-emerald-500/10 px-2 py-0.5 font-cota text-[9px] uppercase tracking-wider text-emerald-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      En producción
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 border border-[var(--line-strong)] bg-[var(--line)]/40 px-2 py-0.5 font-cota text-[9px] uppercase tracking-wider text-[var(--muted)]">
                      Lab · 1:1
                    </span>
                  )}
                </div>

                {/* Título y rubro */}
                <div className="mt-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-xl font-bold tracking-tight text-[var(--fg)]">
                      {project.name}
                    </h3>
                    <span className="font-cota text-[10px] uppercase tracking-wider text-[var(--signal)] shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[var(--muted)] line-clamp-1">
                    {project.sector}
                  </p>
                </div>

                {/* Lámina de captura */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir sitio web de ${project.name} en una pestaña nueva`}
                  className="group/img relative mt-4 block aspect-[16/10] overflow-hidden border border-[var(--line-strong)] bg-[#f4f2ec]"
                >
                  <Image
                    src={project.img}
                    alt={`Captura del sitio web ${project.name}`}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 480px, 100vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#0d1418]/20 opacity-0 transition-opacity duration-300 group-hover/img:opacity-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 bg-[#0d1418] px-2.5 py-1 font-cota text-[10px] text-[#edeae1] opacity-0 shadow transition-all duration-300 group-hover/img:opacity-100"
                  >
                    <span>Abrir web en vivo</span>
                    <span className="text-[var(--signal)]">↗</span>
                  </div>
                </a>

                {/* Ficha técnica de especificaciones de ingeniería */}
                {project.tag && (
                  <div className="mt-3 flex items-center justify-between border border-[var(--line)] bg-[var(--bg)] px-2.5 py-1.5 font-cota text-[10px] text-[var(--fg)]">
                    <span className="truncate text-[var(--muted)]">
                      {project.tag}
                    </span>
                    {"liveDomain" in project && project.liveDomain && (
                      <span className="ml-2 font-mono text-[9px] text-[var(--signal)] font-medium shrink-0">
                        {project.liveDomain}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Pie de ficha con acción */}
              <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-3 text-xs">
                <span className="font-cota text-[10px] text-[var(--muted)]">
                  {project.kind === "produccion" ? "Código entregado" : "Prototipo interactivo"}
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[var(--fg)] transition-colors hover:text-[var(--signal)]"
                >
                  <span>Visitar sitio</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Control de expansión (Cargar más) */}
        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setExtraCount(
                  !isWide && isInitial
                    ? INITIAL_COUNT
                    : visibleCount + INITIAL_COUNT,
                )
              }
              className="proto-btn proto-btn-ghost w-full max-w-sm"
            >
              + Cargar más obras ({remainingCount}{" "}
              {remainingCount === 1 ? "restante" : "restantes"})
            </button>
          </div>
        )}

        {/* Pie con nota de escala técnica */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] pt-4">
          <p className="proto-label">
            Mostrando {shownCount} de {filteredProjects.length} obras en vista
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="/catalogo"
              target="_blank"
              rel="noopener noreferrer"
              className="proto-label text-[var(--signal)] transition-colors hover:underline"
            >
              Catálogo extendido (100 obras) ↗
            </a>
            <span className="proto-label">Escala 1:1 · Código en producción</span>
          </div>
        </div>
      </div>
    </section>
  );
}
