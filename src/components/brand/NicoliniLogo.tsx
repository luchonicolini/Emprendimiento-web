import { cn } from "@/lib/utils";

interface NicoliniLogoProps {
  className?: string;
  showDescriptor?: boolean;
}

export function NicoliniIsotype({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      fill="none"
      className={cn("h-8 w-8 shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="120" height="120" rx="24" fill="#1b1b1f" />
      <path
        d="M 32 31 H 47 L 73 70 V 31 H 86 V 89 H 71 L 45 50 V 89 H 32 Z"
        fill="#f4f1ea"
      />
      <rect x="84" y="83" width="14" height="14" fill="#b8381a" />
    </svg>
  );
}

export function NicoliniLogo({ className, showDescriptor = true }: NicoliniLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <NicoliniIsotype className="h-8 w-8" />
      <div className="flex flex-col justify-center leading-none">
        <span className="font-display text-[17px] font-bold tracking-tight text-[var(--fg)]">
          NICOLINI
        </span>
        <span className="mt-0.5 font-cota text-[9px] uppercase tracking-[0.28em] text-[var(--signal)]">
          DESIGN
        </span>
      </div>
      {showDescriptor && (
        <span className="proto-label hidden self-center border-l border-[var(--line)] pl-3 text-[10px] sm:inline">
          Estudio
        </span>
      )}
    </div>
  );
}
