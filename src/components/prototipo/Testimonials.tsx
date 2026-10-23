import { testimonials } from "@/content/prototipo";
import { Reveal } from "@/components/prototipo/Reveal";
import { SectionHead } from "@/components/prototipo/primitives";

export function Testimonials() {
  return (
    <section
      id="resenas"
      className="proto-blue proto-grid border-b border-[var(--line)] py-12 sm:py-24"
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

        <div
          role="region"
          aria-label="Reseñas de clientes"
          tabIndex={0}
          className="proto-scroll-strip mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-12 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0"
        >
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 70}
              className="h-full w-full min-w-full shrink-0 snap-start md:w-auto md:min-w-0"
            >
              <figure className="flex h-full flex-col border-t border-[var(--line-strong)] pt-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="font-cota text-[11px] tracking-[0.2em] text-[var(--signal)]"
                    >
                      «»
                    </span>
                    {"rating" in item && item.rating && (
                      <span className="font-cota text-[10px] text-amber-300 tracking-wider">
                        {item.rating}
                      </span>
                    )}
                  </div>
                  <span className="proto-label">
                    Rev. {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <blockquote className="mt-5 text-[19px] leading-[1.35] tracking-[-0.02em] sm:text-[21px]">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-auto border-t border-[var(--line)] pt-5">
                  <div className="flex items-baseline gap-2">
                    <span className="h-[5px] w-[5px] bg-[var(--signal)] shrink-0" />
                    <span className="text-sm font-semibold">{item.name}</span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center justify-between gap-2 pl-3">
                    <span className="proto-label">{item.role}</span>
                    {"verifiedUrl" in item && item.verifiedUrl && (
                      <a
                        href={item.verifiedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-cota text-[10px] text-[var(--signal)] hover:underline inline-flex items-center gap-1"
                      >
                        Ver en Google ↗
                      </a>
                    )}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="proto-label mt-4 md:hidden">
          Deslizá para ver las tres →
        </p>
      </div>
    </section>
  );
}
