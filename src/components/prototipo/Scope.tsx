import { scope } from "@/content/prototipo";
import { Reveal } from "@/components/prototipo/Reveal";
import { SectionHead } from "@/components/prototipo/primitives";

export function Scope() {
  return (
    <section id="alcance" className="border-b border-[var(--line)] py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <SectionHead
            index="02 / Alcance"
            title={
              <>
                Lo que entra en la <em className="not-italic text-[var(--signal)]">obra</em>.
              </>
            }
            intro={
              <p>
                Cuatro frentes, un solo responsable. No vendemos horas sueltas:
                cerramos un alcance y lo ejecutamos completo.
              </p>
            }
          />
        </Reveal>

        <div className="mt-12 grid border-l border-t border-[var(--line)] md:grid-cols-2">
          {scope.map((item, index) => (
            <Reveal
              key={item.index}
              delay={index * 60}
              className="border-b border-r border-[var(--line)]"
            >
              <article className="flex h-full flex-col gap-4 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-cota text-[10px] tracking-[0.2em] text-[var(--signal)]">
                    {item.index}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-[5px] w-[5px] bg-[var(--line-strong)]"
                  />
                </div>
                <h3 className="text-2xl tracking-[-0.035em] sm:text-[28px]">
                  {item.title}
                </h3>
                <p className="max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
                  {item.body}
                </p>
                <p className="proto-label mt-auto pt-6">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
