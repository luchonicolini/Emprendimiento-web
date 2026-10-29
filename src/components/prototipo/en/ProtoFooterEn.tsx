"use client";

import Link from "next/link";
import { CookiePreferences } from "@/components/CookiePreferences";
import { brandEn, navEn } from "@/content/prototipo.en";
import { NicoliniLogo } from "@/components/brand/NicoliniLogo";
import { triggerLanguageTransition } from "@/components/prototipo/LanguageTransition";

export function ProtoFooterEn() {
  return (
    <footer className="proto-dark">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
        <div className="grid gap-10 border-b border-[var(--line)] py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <NicoliniLogo showDescriptor={false} />
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-[var(--muted)]">
              {brandEn.descriptor}. Bespoke web design & engineering for modern businesses.
            </p>
          </div>

          <nav aria-label="Index">
            <h2 className="proto-label">Navigation</h2>
            <ul className="mt-4">
              {navEn.map((item) => (
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
            <h2 className="proto-label">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>
                <a
                  href={`mailto:${brandEn.email}`}
                  className="transition-colors hover:text-[var(--fg)]"
                >
                  {brandEn.email}
                </a>
              </li>
              <li>
                <a
                  href={brandEn.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--fg)]"
                >
                  {brandEn.whatsappDisplay}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "Nicolini Design's official Instagram profile will be live shortly.\n\nPlease contact us via WhatsApp or email."
                    )
                  }
                  className="inline-block py-0.5 text-left text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)] cursor-pointer"
                >
                  Instagram <span className="font-cota text-[10px] text-[var(--muted)] opacity-70">(Coming soon)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "Nicolini Design's official LinkedIn profile will be live shortly.\n\nPlease contact us via WhatsApp or email."
                    )
                  }
                  className="inline-block py-0.5 text-left text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)] cursor-pointer"
                >
                  LinkedIn <span className="font-cota text-[10px] text-[var(--muted)] opacity-70">(Coming soon)</span>
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="proto-label">Availability</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>{brandEn.availability}</li>
              <li>{brandEn.location}</li>
              <li>{brandEn.coordinates}</li>
              <li>Turnaround: 7 to 10 business days</li>
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
          <span className="proto-label">© 2026 {brandEn.name}</span>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--muted)]">
            <button
              type="button"
              onClick={() => triggerLanguageTransition("/", "es")}
              className="font-cota text-[10px] uppercase tracking-wider text-[var(--muted)] hover:text-[var(--fg)] transition-colors cursor-pointer"
            >
              Versión en Español (ES)
            </button>
            <span aria-hidden="true" className="text-[var(--line)]">·</span>
            <Link
              href="/politica-de-privacidad"
              className="transition-colors hover:text-[var(--fg)]"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-[var(--line)]">·</span>
            <CookiePreferences />
          </div>
        </div>
      </div>
    </footer>
  );
}
