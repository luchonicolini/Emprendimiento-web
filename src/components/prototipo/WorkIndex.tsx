"use client";

import Image from "next/image";
import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import {
  projects,
  type Project,
  type ProjectKind,
} from "@/content/prototipo";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/prototipo/Reveal";

const INITIAL_GALLERY_COUNT = 4;
const GALLERY_STEP = 6;

const scopes: readonly { id: ProjectKind; label: string }[] = [
  { id: "produccion", label: "Clientes" },
  { id: "demo", label: "Laboratorio" },
];

function projectDomain(project: Project) {
  if (project.liveDomain) return project.liveDomain;
  return `nicolini.design${project.url.replace(/\.html$/, "")}`;
}

function statusLabel(kind: ProjectKind) {
  return kind === "produccion" ? "En producción" : "Prototipo interactivo";
}

function projectCountLabel(kind: ProjectKind, count: number) {
  if (kind === "produccion") {
    return `${count} ${count === 1 ? "sitio publicado" : "sitios publicados"}`;
  }
  return `${count} ${count === 1 ? "prototipo" : "prototipos"}`;
}

export function WorkIndex() {
  const [scope, setScope] = useState<ProjectKind>("produccion");
  const [selectedName, setSelectedName] = useState(projects[0].name);
  const [galleryCount, setGalleryCount] = useState(INITIAL_GALLERY_COUNT);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const counts = useMemo(
    () => ({
      produccion: projects.filter((project) => project.kind === "produccion")
        .length,
      demo: projects.filter((project) => project.kind === "demo").length,
    }),
    [],
  );

  const scopeProjects = useMemo(
    () => projects.filter((project) => project.kind === scope),
    [scope],
  );

  const selected =
    scopeProjects.find((project) => project.name === selectedName) ??
    scopeProjects[0];
  const selectedIndex = scopeProjects.indexOf(selected);
  const shownProjects = scopeProjects.slice(0, galleryCount);
  const remaining = scopeProjects.length - shownProjects.length;

  const changeScope = (next: ProjectKind) => {
    if (next === scope) return;
    setScope(next);
    const first = projects.find((project) => project.kind === next);
    if (first) setSelectedName(first.name);
    setGalleryCount(INITIAL_GALLERY_COUNT);
  };

  const handleIndexKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const last = scopeProjects.length - 1;
    let next = index;

    if (event.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;

    event.preventDefault();
    setSelectedName(scopeProjects[next].name);
    itemRefs.current[next]?.focus();
  };

  const scopeTabs = (variant: "desktop" | "mobile") => (
    <div
      role="group"
      aria-label="Tipo de obra"
      className="flex items-center gap-5"
    >
      {scopes.map((item) => {
        const isActive = scope === item.id;
        return (
          <button
            key={`${variant}-${item.id}`}
            type="button"
            aria-label={`${item.label}: ${counts[item.id]}`}
            aria-pressed={isActive}
            onClick={() => changeScope(item.id)}
            className={cn(
              "relative -mb-px py-2.5 text-[13px] tracking-[-0.01em] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:transition-colors",
              isActive
                ? "font-semibold text-[var(--fg)] after:bg-[var(--signal)]"
                : "text-[var(--muted)] after:bg-transparent hover:text-[var(--fg)]",
            )}
          >
            {item.label}
            <span
              className={cn(
                "ml-1.5 font-mono text-[9.5px] tabular-nums",
                isActive ? "text-[var(--signal)]" : "text-[var(--muted)]",
              )}
            >
              {counts[item.id]}
            </span>
          </button>
        );
      })}
    </div>
  );

  return (
    <section
      id="trabajos"
      aria-labelledby="trabajos-title"
      className="border-b border-[var(--line)] py-12 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <div className="grid gap-5 border-t border-[var(--line)] pt-7 md:grid-cols-[1.12fr_0.88fr] md:items-end md:gap-16">
            <h2
              id="trabajos-title"
              className="proto-display text-[clamp(2.5rem,5.2vw,4.4rem)]"
            >
              <span className="block">Planos de obra</span>{" "}
              <span className="block">entregados.</span>
            </h2>
            <p className="max-w-[50ch] text-[15px] leading-[1.6] text-[var(--muted)] sm:text-[16px] sm:leading-relaxed md:pb-2">
              Una selección de sitios que diseñamos y programamos de principio a
              fin: webs de clientes publicadas con dominio propio y prototipos
              interactivos del laboratorio.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-8 sm:mt-10 xl:mt-14" delay={60}>
          {/* Visor de obra — desktop */}
          <div className="hidden xl:grid xl:grid-cols-[minmax(0,1fr)_312px] xl:gap-12">
            <p className="sr-only" role="status">
              {`${selected.name}. ${statusLabel(selected.kind)}. ${selected.sector}.`}
            </p>

            <figure className="m-0 min-w-0">
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${selected.name} en una pestaña nueva`}
                className="group block border border-[var(--line-strong)] bg-[var(--bg)] transition-colors duration-300 hover:border-[var(--fg)]"
              >
                <div className="flex h-10 items-center justify-between gap-4 border-b border-[var(--line)] bg-[#f4f2ec] px-3.5">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="h-[5px] w-[5px] shrink-0 bg-[var(--signal)]"
                    />
                    <span className="truncate font-mono text-[10.5px] tracking-[0.04em] text-[var(--muted)]">
                      {projectDomain(selected)}
                    </span>
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    Ver sitio
                    <span
                      aria-hidden="true"
                      className="text-[11px] leading-none transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </span>
                </div>

                <div className="relative aspect-[16/9] overflow-hidden bg-[#f4f2ec]">
                  <Image
                    key={selected.name}
                    src={selected.img}
                    alt={`Captura del sitio web ${selected.name}`}
                    fill
                    sizes="(min-width: 1280px) 832px, 100vw"
                    className="work-media-in object-cover object-top"
                  />
                </div>
              </a>

              <figcaption className="mt-5 flex flex-wrap items-start justify-between gap-x-8 gap-y-5">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em]">
                    <span className="inline-flex items-center gap-2 text-[var(--fg)]">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "h-1.5 w-1.5",
                          selected.kind === "produccion"
                            ? "bg-emerald-600"
                            : "bg-[var(--signal)]",
                        )}
                      />
                      {statusLabel(selected.kind)}
                    </span>
                    <span aria-hidden="true" className="text-[var(--line-strong)]">
                      /
                    </span>
                    <span className="text-[var(--muted)]">{selected.year}</span>
                  </div>

                  <h3 className="mt-2.5 text-[clamp(1.65rem,2.2vw,2.1rem)] leading-none font-bold tracking-[-0.03em] text-[var(--fg)]">
                    {selected.name}
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-[14px] leading-relaxed text-[var(--muted)]">
                    {selected.sector}
                  </p>
                </div>

                <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    {selected.category}
                  </span>
                  <a
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${selected.kind === "produccion" ? "Visitar sitio" : "Probar prototipo"}: ${selected.name} (abre en una pestaña nueva)`}
                    className="group/cta inline-flex items-center gap-1.5 border-b border-[var(--line-strong)] pb-1 text-[13px] font-medium text-[var(--fg)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
                  >
                    {selected.kind === "produccion"
                      ? "Visitar sitio"
                      : "Probar prototipo"}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/cta:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </figcaption>
            </figure>

            <aside aria-label="Índice de obras" className="min-w-0">
              <div className="flex items-end justify-between border-b border-[var(--line-strong)]">
                {scopeTabs("desktop")}
                <span className="pb-2.5 font-mono text-[10px] tabular-nums tracking-[0.08em] text-[var(--muted)]">
                  {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                  {String(scopeProjects.length).padStart(2, "0")}
                </span>
              </div>

              <div
                role="listbox"
                aria-label={`Índice de ${scopes.find((item) => item.id === scope)?.label.toLowerCase()}`}
                className="mt-1.5"
              >
                {scopeProjects.map((project, index) => {
                  const isActive = project.name === selected.name;
                  return (
                    <button
                      key={`${scope}-${project.name}`}
                      ref={(node) => {
                        itemRefs.current[index] = node;
                      }}
                      type="button"
                      role="option"
                      aria-label={`${String(index + 1).padStart(2, "0")} ${project.name}`}
                      aria-selected={isActive}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setSelectedName(project.name)}
                      onKeyDown={(event) => handleIndexKeyDown(event, index)}
                      className={cn(
                        "group flex w-full items-center gap-3 border-b border-[var(--line)] px-2 py-[7px] text-left transition-colors duration-200",
                        isActive
                          ? "bg-[#f4f2ec]"
                          : "hover:bg-[#f4f2ec]/60",
                      )}
                    >
                      <span
                        className={cn(
                          "w-5 shrink-0 font-mono text-[9.5px] tabular-nums",
                          isActive
                            ? "text-[var(--signal)]"
                            : "text-[var(--muted)]",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="relative h-8 w-[54px] shrink-0 overflow-hidden border border-[var(--line)] bg-[#f4f2ec]">
                        <Image
                          src={project.img}
                          alt=""
                          fill
                          sizes="54px"
                          className="object-cover object-top"
                        />
                      </span>
                      <span className="min-w-0 flex-1 truncate text-[13.5px] tracking-[-0.01em] text-[var(--fg)]">
                        {project.name}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "shrink-0 font-mono text-[11px] transition-opacity",
                          isActive
                            ? "text-[var(--signal)] opacity-100"
                            : "text-[var(--muted)] opacity-0 group-hover:opacity-100",
                        )}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>

          {/* Galería de obra — mobile y tablet */}
          <div className="xl:hidden">
            <div className="flex items-end justify-between border-b border-[var(--line-strong)]">
              {scopeTabs("mobile")}
              <span className="hidden pb-2.5 font-mono text-[10px] tabular-nums tracking-[0.08em] text-[var(--muted)] sm:inline">
                {projectCountLabel(scope, scopeProjects.length)}
              </span>
            </div>

            <div className="mt-5 grid gap-x-5 gap-y-9 sm:mt-6 sm:grid-cols-2">
              {shownProjects.map((project) => (
                <a
                  key={`${scope}-${project.name}`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${project.name} en una pestaña nueva`}
                  className="group block"
                >
                  <div className="relative aspect-[16/9] overflow-hidden border border-[var(--line-strong)] bg-[#f4f2ec] transition-colors duration-300 group-hover:border-[var(--fg)]">
                    <Image
                      src={project.img}
                      alt={`Captura del sitio web ${project.name}`}
                      fill
                      sizes="(min-width: 640px) 45vw, 92vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="mt-3 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-[18px] leading-tight font-bold tracking-[-0.02em] text-[var(--fg)]">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-[13px] leading-snug text-[var(--muted)]">
                        {project.sector}
                      </p>
                    </div>
                    <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] transition-colors group-hover:text-[var(--signal)]">
                      Abrir
                      <span aria-hidden="true">↗</span>
                    </span>
                  </div>

                  <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "h-1.5 w-1.5",
                          project.kind === "produccion"
                            ? "bg-emerald-600"
                            : "bg-[var(--signal)]",
                        )}
                      />
                      {statusLabel(project.kind)}
                    </span>
                    <span className="whitespace-nowrap">
                      {project.category} · {project.year}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {remaining > 0 && (
              <button
                type="button"
                onClick={() =>
                  setGalleryCount((current) => current + GALLERY_STEP)
                }
                className="mt-9 flex w-full items-center justify-center gap-2 border-t border-[var(--line)] py-4 text-[13px] font-medium text-[var(--fg)] transition-colors hover:text-[var(--signal)]"
              >
                Ver {remaining} obras más
                <span aria-hidden="true">↓</span>
              </button>
            )}
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--line)] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-[var(--muted)]">
            Los sitios se abren en una pestaña nueva.
          </p>
          <a
            href="/catalogo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver los 100 prototipos del laboratorio (abre en una pestaña nueva)"
            className="group inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--fg)] transition-colors hover:text-[var(--signal)]"
          >
            Ver los 100 prototipos del laboratorio
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
