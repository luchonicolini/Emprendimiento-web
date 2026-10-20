import Link from "next/link";
import { CookiePreferences } from "@/components/CookiePreferences";
import { brand, nav } from "@/content/prototipo";

export function ProtoFooter() {
  return (
    <footer className="proto-dark">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <div className="grid gap-10 border-b border-[var(--line)] py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="proto-mark text-[var(--fg)]" aria-hidden="true" />
              <span className="text-xl font-semibold tracking-[-0.06em]">
                {brand.name.toUpperCase()}
              </span>
            </div>
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
                    href={`/${item.href}`}
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
              <li className="text-[var(--signal)]">Sitio en construcción</li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden py-8">
          <p
            aria-hidden="true"
            className="proto-display text-[clamp(4.5rem,30vw,24rem)] leading-[0.75] tracking-[-0.07em]"
          >
            {brand.name.toUpperCase()}
          </p>
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
          <span className="proto-label">Contenido de ejemplo</span>
        </div>
      </div>
    </footer>
  );
}
