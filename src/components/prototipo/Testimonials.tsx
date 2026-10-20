import { testimonials } from "@/content/prototipo";
import { Reveal } from "@/components/prototipo/Reveal";
import { SectionHead } from "@/components/prototipo/primitives";

export function Testimonials() {
  return (
    <section
      id="resenas"
      className="proto-blue proto-grid border-b border-[var(--line)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <SectionHead
            index="06 / Reseñas"
            title={
              <>
                Lo que dicen después
                <br />
                de publicar.
              </>
            }
            intro={
              <p>
                Tres respuestas de clientes sobre el proceso, no sobre el
                diseño. Lo que se repite es siempre lo mismo: claridad y
                cumplimiento.
              </p>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 70}>
              <figure className="flex h-full flex-col border-t border-[var(--line-strong)] pt-5">
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="font-cota text-[11px] tracking-[0.2em] text-[var(--signal)]"
                  >
                    «»
                  </span>
                  <span className="proto-label">
                    Rev. {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <blockquote className="mt-5 text-[19px] leading-[1.35] tracking-[-0.02em] sm:text-[21px]">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-baseline gap-3 border-t border-[var(--line)] pt-5">
                  <span className="h-[5px] w-[5px] bg-[var(--signal)]" />
                  <span className="text-sm">{item.name}</span>
                  <span className="proto-label">{item.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-[var(--muted)]">
          Reseñas de ejemplo para el prototipo. Reemplazalas por reseñas reales
          verificables antes de publicar.
        </p>
      </div>
    </section>
  );
}
