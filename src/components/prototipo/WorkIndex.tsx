"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  projectFilters,
  projects,
  type ProjectFilter,
} from "@/content/prototipo";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/prototipo/Reveal";
import { SectionHead } from "@/components/prototipo/primitives";

const INITIAL_COUNT = 6;
const MOBILE_INITIAL_COUNT = 3;

// La grilla muestra 3 láminas en mobile y 6 desde tablet. La visibilidad inicial
// se resuelve con CSS; matchMedia solo ajusta el pie y la paginación.
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
  const [selectedFilter, setSelectedFilter] =
    useState<ProjectFilter>("Todos");
  // null = paginación inicial. En mobile se ven 3 láminas; las demás quedan
  // ocultas por CSS hasta pedir "cargar más", así la hidratación no mueve la grilla.
  const [extraCount, setExtraCount] = useState<number | null>(null);
  const isWide = useIsWide();

  const visibleCount = extraCount ?? INITIAL_COUNT;
  const isInitial = extraCount === null;

  // Filtrado reactivo según el filtro seleccionado
  const filteredProjects = useMemo(() => {
    if (selectedFilter === "Todos") return projects;
    if (selectedFilter === "Webs hechas") {
      return projects.filter((p) => p.kind === "produccion");
    }
    if (selectedFilter === "Demos") {
      return projects.filter((p) => p.kind === "demo");
    }
    return projects.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  // Conteo por cada filtro para los badges numéricos
  const counts = useMemo(() => {
    const record: Record<string, number> = {
      Todos: projects.length,
      "Webs hechas": projects.filter((p) => p.kind === "produccion").length,
      Demos: projects.filter((p) => p.kind === "demo").length,
    };
    for (const f of projectFilters) {
      if (f !== "Todos" && f !== "Webs hechas" && f !== "Demos") {
        record[f] = projects.filter((p) => p.category === f).length;
      }
    }
    return record;
  }, []);

  const handleSelectFilter = (filter: ProjectFilter) => {
    setSelectedFilter(filter);
    setExtraCount(null); // Resetea la paginación al cambiar filtro
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
      className="proto-dark border-b border-[var(--line)] py-12 sm:py-24"
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
                  Sitios publicados y funcionando. Abrilos, navegalos y mirá el
                  código desde el celular: esa es la entrega real.
                </p>
              }
            />

            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <span className="proto-label">
                {projects.length} obras registradas
              </span>
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 bg-[var(--signal)]"
              />
            </div>
          </div>
        </Reveal>

        {/* Pestañas de filtrado técnico */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-[var(--line)] pb-5 sm:gap-3">
          <span className="proto-label mr-2 hidden sm:inline">
            Filtrar por tipo:
          </span>
          {projectFilters.map((filter) => {
            const isSelected = selectedFilter === filter;
            const count = counts[filter] ?? 0;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => handleSelectFilter(filter)}
                className={cn(
                  "inline-flex items-center gap-2 border px-3 py-1.5 font-cota text-xs tracking-wider transition-all duration-200",
                  isSelected
                    ? "border-[var(--signal)] bg-[var(--signal)] font-semibold text-[#0d1418]"
                    : "border-[var(--line)] bg-transparent text-[var(--muted)] hover:border-[var(--line-strong)] hover:text-[var(--fg)]",
                )}
              >
                <span>{filter}</span>
                <span
                  className={cn(
                    "text-[10px] opacity-70",
                    isSelected ? "text-[#0d1418]" : "text-[var(--muted)]",
                  )}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Grilla compacta de 3 columnas (en desktop), 2 (tablet), 1 (móvil) */}
        <div
          key={selectedFilter}
          className="mt-8 grid border-l border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3"
        >
          {displayedProjects.map((project, index) => (
            <article
              key={`${selectedFilter}-${project.name}`}
              style={{ animationDelay: `${index * 30}ms` }}
              className={cn(
                "proto-fade-enter group flex flex-col justify-between border-b border-r border-[var(--line)] p-5 sm:p-6 transition-colors duration-200 hover:bg-[rgba(233,230,221,0.02)]",
                isInitial &&
                  index >= MOBILE_INITIAL_COUNT &&
                  "hidden sm:flex",
              )}
            >
              <div>
                {/* Encabezado técnico */}
                <div className="flex items-center justify-between">
                  <span className="font-cota text-[10px] tracking-[0.2em] text-[var(--signal)]">
                    Lámina {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-cota text-[10px] tracking-[0.16em] text-[var(--muted)]">
                    {project.year}
                  </span>
                </div>

                {/* Título y categoría */}
                <div className="mt-3">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--fg)]">
                    {project.name}
                  </h3>
                  <div className="mt-1 flex items-center justify-between gap-2 text-xs">
                    <span className="text-[var(--muted)]">{project.sector}</span>
                    <span className="font-cota text-[9px] uppercase tracking-wider text-[var(--signal)]/80">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Captura de pantalla */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver web de ${project.name} (abre en una pestaña nueva)`}
                  className="relative mt-4 block aspect-[16/10] overflow-hidden border border-[var(--line-strong)] bg-[var(--accent)]"
                >
                  <Image
                    src={project.img}
                    alt={`Captura del sitio web ${project.name}`}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 480px, 100vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-2.5 top-2.5 bg-[var(--bg)] px-2 py-0.5 font-cota text-[10px] text-[var(--fg)] opacity-0 shadow transition-all duration-300 group-hover:opacity-100"
                  >
                    Abrir web
                  </span>
                </a>
              </div>

              {/* Pie de ficha con enlace */}
              <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-3 text-xs">
                <span className="text-[var(--muted)]">
                  {project.kind === "produccion" ? "Web hecha" : "Demo interactiva"}
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--fg)] transition-colors hover:text-[var(--signal)]"
                >
                  Visitar sitio
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
            Mostrando {shownCount} de {filteredProjects.length}{" "}
            obras ({selectedFilter})
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
