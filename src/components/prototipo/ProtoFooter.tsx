import Link from "next/link";
import { CookiePreferences } from "@/components/CookiePreferences";
import { brand, nav } from "@/content/prototipo";
import { NicoliniLogo } from "@/components/brand/NicoliniLogo";

export function ProtoFooter() {
  return (
    <footer className="proto-dark">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <div className="grid gap-10 border-b border-[var(--line)] py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <NicoliniLogo showDescriptor={false} />
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-[var(--muted)]">
              {brand.descriptor}. Diseño, desarrollo y medición para negocios que
              necesitan que los contacten.
            </p>
          </div>

          <nav aria-label="Índice">
            <h2 className="proto-label">Índice</h2>
            <ul className="mt-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block py-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="proto-label">Contacto</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="transition-colors hover:text-[var(--fg)]"
                >
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--fg)]"
                >
                  {brand.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--fg)]"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="proto-label">Estado</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>{brand.availability}</li>
              <li>{brand.location}</li>
              <li>{brand.coordinates}</li>
              <li>Entregas en 7 a 10 días</li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden border-t border-[var(--line)] py-10 sm:py-14">
          <div className="flex select-none flex-col">
            <span
              aria-hidden="true"
              className="proto-display text-[clamp(2.6rem,11.5vw,9.5rem)] leading-[0.85] tracking-[-0.04em] text-[var(--fg)]"
            >
              NICOLINI
            </span>
            <span
              aria-hidden="true"
              className="font-cota text-[clamp(0.85rem,3.4vw,2.8rem)] uppercase tracking-[0.32em] text-[var(--signal)]"
            >
              DESIGN
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--line)] py-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <span className="proto-label">© 2026 {brand.name}</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link
              href="/politica-de-privacidad"
              className="proto-label transition-colors hover:text-[var(--fg)]"
            >
              Política de privacidad
            </Link>
            <CookiePreferences className="proto-label transition-colors hover:text-[var(--fg)]" />
          </div>
          <span className="proto-label">Hecho con medidas exactas</span>
        </div>
      </div>
    </footer>
  );
}
