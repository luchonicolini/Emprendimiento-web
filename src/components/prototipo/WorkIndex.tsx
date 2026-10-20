"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/content/prototipo";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/prototipo/Reveal";
import { SectionHead } from "@/components/prototipo/primitives";

export function WorkIndex() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section
      id="trabajos"
      className="proto-dark border-b border-[var(--line)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
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
                Seis sitios publicados y funcionando. Abrilos, navegalos y
                mirá el código desde el celular: esa es la entrega real.
              </p>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 40}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={cn(
                    "group grid grid-cols-[28px_1fr_auto] items-baseline gap-4 border-t border-[var(--line)] py-5 transition-colors last:border-b",
                    active === index
                      ? "text-[var(--fg)]"
                      : "text-[var(--fg)]/70 hover:text-[var(--fg)]",
                  )}
                >
                  <span className="font-cota text-[9px] tracking-[0.18em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-[26px] leading-none tracking-[-0.04em] sm:text-[32px]">
                      {project.name}
                    </span>
                    <span className="mt-2 block text-sm text-[var(--muted)]">
                      {project.sector}
                    </span>
                    <span className="mt-4 block aspect-[16/9] overflow-hidden border border-[var(--line)] lg:hidden">
                      <Image
                        src={project.img}
                        alt={`Web de ${project.name}`}
                        width={1280}
                        height={730}
                        sizes="100vw"
                        className="h-full w-full object-cover object-top"
                      />
                    </span>
                  </span>
                  <span className="flex items-center gap-3 font-cota text-[9px] tracking-[0.16em] text-[var(--muted)]">
                    {project.year}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                        active === index && "text-[var(--signal)]",
                      )}
                    >
                      ↗
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="relative aspect-[16/9] overflow-hidden border border-[var(--line-strong)]">
                <Image
                  key={current.img}
                  src={current.img}
                  alt={`Web de ${current.name}`}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <span className="proto-label">
                  {current.name} — {current.sector}
                </span>
                <span className="proto-label">{current.year}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-[var(--muted)]">
          Selección de trabajos de ejemplo para el prototipo. Antes de publicar,
          reemplazá las capturas y los enlaces por los proyectos reales de tu
          estudio.
        </p>
      </div>
    </section>
  );
}
