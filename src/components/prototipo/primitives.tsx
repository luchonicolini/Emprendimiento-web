export function Kicker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-cota text-[11px] uppercase leading-none tracking-[0.22em] text-[var(--muted)] ${className}`}
    >
      {children}
    </p>
  );
}

export function Cota({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`proto-cota font-cota text-[10px] uppercase tracking-[0.2em] sm:text-[11px] ${className}`}
    >
      <span className="proto-cota-line" aria-hidden="true" />
      <span className="max-w-[85%] text-center leading-relaxed">{label}</span>
      <span className="proto-cota-line" aria-hidden="true" />
    </div>
  );
}

export function SectionHead({
  index,
  title,
  intro,
}: {
  index: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-[var(--line)] pt-6 md:grid-cols-[1fr_0.9fr] md:gap-16">
      <div>
        <Kicker>{index}</Kicker>
        <h2 className="proto-display mt-4 text-[clamp(2rem,4.4vw,3.8rem)]">
          {title}
        </h2>
      </div>
      {intro ? (
        <div className="max-w-xl text-base leading-relaxed text-[var(--muted)] md:pt-9">
          {intro}
        </div>
      ) : null}
    </div>
  );
}

export function CornerMarks() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="font-cota absolute -left-[5px] -top-[9px] text-[13px] leading-none">
        +
      </span>
      <span className="font-cota absolute -right-[5px] -top-[9px] text-[13px] leading-none">
        +
      </span>
      <span className="font-cota absolute -bottom-[11px] -left-[5px] text-[13px] leading-none">
        +
      </span>
      <span className="font-cota absolute -bottom-[11px] -right-[5px] text-[13px] leading-none">
        +
      </span>
    </span>
  );
}
