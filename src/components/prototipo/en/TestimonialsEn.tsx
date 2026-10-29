import { testimonialsEn } from "@/content/prototipo.en";
import { Reveal } from "@/components/prototipo/Reveal";
import { SectionHead } from "@/components/prototipo/primitives";

export function TestimonialsEn() {
  return (
    <section
      id="reviews"
      className="proto-blue proto-grid border-b border-[var(--line)] py-12 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <Reveal>
          <SectionHead
            index="06 / Reviews"
            title={
              <>
                What clients say
                <br />
                after launch.
              </>
            }
            intro={
              <p>
                Feedback focused on real-world reliability and process.
                The recurring theme is always the same: total clarity, fast delivery, and measurable leads.
              </p>
            }
          />
        </Reveal>

        <div
          role="region"
          aria-label="Client reviews"
          tabIndex={0}
          className="proto-scroll-strip mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-12 md:grid md:grid-cols-[1.18fr_0.82fr] md:gap-6 md:overflow-visible md:pb-0"
        >
          {testimonialsEn.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 70}
              className={`h-full w-full min-w-full shrink-0 snap-start md:w-auto md:min-w-0 ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <figure
                className={`flex h-full flex-col border border-[var(--line)] p-5 transition-colors hover:border-[var(--line-strong)] sm:p-6 ${
                  index === 0
                    ? "bg-[rgba(13,20,24,0.16)] md:p-8"
                    : "bg-[rgba(13,20,24,0.08)]"
                }`}
              >
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                  <span className="proto-label text-[10px]">
                    REVIEW 0{index + 1} // VERIFIED
                  </span>
                  <span className="font-mono text-xs text-[#25D366]">★★★★★</span>
                </div>

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--fg)] sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-6 border-t border-[var(--line)] pt-4">
                  <div className="font-semibold text-sm text-[var(--fg)]">
                    {item.name}
                  </div>
                  <div className="font-cota text-[11px] text-[var(--muted)]">
                    {item.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
