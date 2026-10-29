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

const scopesEn: readonly { id: ProjectKind; label: string }[] = [
  { id: "produccion", label: "Clients" },
  { id: "demo", label: "Studio Lab" },
];

function projectDomain(project: Project) {
  if (project.liveDomain) return project.liveDomain;
  return `nicolini.design${project.url.replace(/\.html$/, "")}`;
}

function statusLabel(kind: ProjectKind) {
  return kind === "produccion" ? "Live in production" : "Interactive prototype";
}

function projectCountLabel(kind: ProjectKind, count: number) {
  if (kind === "produccion") {
    return `${count} ${count === 1 ? "live site" : "live sites"}`;
  }
  return `${count} ${count === 1 ? "prototype" : "prototypes"}`;
}

export function WorkIndexEn() {
  const [scope, setScope] = useState<ProjectKind>("produccion");
  const [selectedName, setSelectedName] = useState(projects[0].name);
  const [galleryCount, setGalleryCount] = useState(INITIAL_GALLERY_COUNT);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const counts = useMemo(
    () => ({
      produccion: projects.filter((project) => project.kind === "produccion").length,
      demo: projects.filter((project) => project.kind === "demo").length,
    }),
    [],
  );

  const scopeProjects = useMemo(
    () => projects.filter((project) => project.kind === scope),
    [scope],
  );

  const selected = useMemo(() => {
    const found = scopeProjects.find((project) => project.name === selectedName);
    return found ?? scopeProjects[0] ?? projects[0];
  }, [scopeProjects, selectedName]);

  const selectedIndex = scopeProjects.findIndex(
    (project) => project.name === selected.name,
  );

  const handleScopeChange = (nextScope: ProjectKind) => {
    setScope(nextScope);
    setGalleryCount(INITIAL_GALLERY_COUNT);
    const firstOfScope = projects.find((project) => project.kind === nextScope);
    if (firstOfScope) setSelectedName(firstOfScope.name);
  };

  const handleIndexKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    let nextIndex: number | null = null;
    if (event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % scopeProjects.length;
    } else if (event.key === "ArrowUp") {
      nextIndex = (currentIndex - 1 + scopeProjects.length) % scopeProjects.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = scopeProjects.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      const target = scopeProjects[nextIndex];
      setSelectedName(target.name);
      itemRefs.current[nextIndex]?.focus();
    }
  };

  const scopeTabs = (layout: "desktop" | "mobile") => (
    <div
      role="tablist"
      aria-label="Filter works by origin"
      className={cn(
        "flex items-center",
        layout === "desktop" ? "gap-4" : "gap-3 border-b border-[var(--line)] pb-3",
      )}
    >
      {scopesEn.map((item) => {
        const isCurrent = scope === item.id;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isCurrent}
            onClick={() => handleScopeChange(item.id)}
            className={cn(
              "group relative flex items-baseline gap-1.5 font-cota text-[11px] tracking-wider transition-colors",
              isCurrent
                ? "font-semibold text-[var(--fg)]"
                : "text-[var(--muted)] hover:text-[var(--fg)]",
              layout === "desktop" && "pb-2.5",
            )}
          >
            <span>{item.label}</span>
            <span
              className={cn(
                "font-mono text-[9.5px] tabular-nums",
                isCurrent ? "text-[var(--signal)]" : "text-[var(--muted)]",
              )}
            >
              ({counts[item.id]})
            </span>
            {layout === "desktop" && isCurrent ? (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--signal)]"
              />
            ) : null}
          </button>
        );
      })}
    </div>
  );

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="border-b border-[var(--line)] py-12 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="proto-label">03 / Selected Works</span>
              <h2
                id="work-title"
                className="proto-display mt-2 text-3xl tracking-[-0.03em] sm:text-5xl"
              >
                Built to measure.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
              Real websites for independent businesses and editorial prototypes
              from our laboratory. Every project features custom code and sub-second load times.
            </p>
          </header>
        </Reveal>

        {/* CAD Blueprint Viewer */}
        <div className="mt-8 border border-[var(--line-strong)] bg-[var(--bg)] p-4 sm:mt-12 sm:p-7">
          <div className="lg:hidden">{scopeTabs("mobile")}</div>

          <div className="mt-4 grid gap-6 lg:mt-0 lg:grid-cols-[1.55fr_1fr] lg:gap-8">
            <figure className="m-0 flex flex-col border border-[var(--line-strong)] bg-[#f4f2ec]">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e9e6dd]">
                <Image
                  key={selected.name}
                  src={selected.img}
                  alt={`Screenshot of ${selected.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.01]"
                />
              </div>

              <figcaption className="flex flex-col gap-3 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] pb-3">
                  <div>
                    <span className="proto-label text-[10px] uppercase text-[var(--signal)]">
                      {selected.tag}
                    </span>
                    <h3 className="proto-display text-xl text-[var(--fg)] sm:text-2xl">
                      {selected.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[var(--muted)]">
                    {selected.year}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                    <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                    <span>{statusLabel(selected.kind)}</span>
                  </div>
                  <a
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border-b border-[var(--line-strong)] pb-1 text-[13px] font-medium text-[var(--fg)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
                  >
                    <span>{selected.kind === "produccion" ? "Visit live website" : "Open prototype"}</span>
                  </a>
                </div>
              </figcaption>
            </figure>

            <aside aria-label="Index of works" className="min-w-0">
              <div className="flex items-end justify-between border-b border-[var(--line-strong)]">
                {scopeTabs("desktop")}
                <span className="pb-2.5 font-mono text-[10px] tabular-nums tracking-[0.08em] text-[var(--muted)]">
                  {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                  {String(scopeProjects.length).padStart(2, "0")}
                </span>
              </div>

              <div
                role="listbox"
                aria-label="Works index"
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
                        isActive ? "bg-[#f4f2ec]" : "hover:bg-[#f4f2ec]/60",
                      )}
                    >
                      <span
                        className={cn(
                          "w-5 shrink-0 font-mono text-[9.5px] tabular-nums",
                          isActive ? "text-[var(--signal)]" : "text-[var(--muted)]",
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
                      <span className="font-cota text-[10px] text-[var(--muted)] uppercase">
                        {project.sector}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
