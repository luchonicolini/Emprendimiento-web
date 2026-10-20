"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OPEN_CONSENT_EVENT, writeConsent } from "@/lib/consent";
import { useConsent } from "@/lib/use-consent";

export function CookieConsent() {
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const open = reopened || consent === null;
  if (!open) return null;

  const decide = (value: "granted" | "denied") => {
    writeConsent(value);
    setReopened(false);
  };

  return (
    <div
      role="region"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#0d1220]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="max-w-2xl text-sm leading-relaxed text-white/70">
          Usamos cookies de medición para entender cómo se usa el sitio. No
          cargamos analítica hasta que las aceptes.{" "}
          <Link
            href="/politica-de-privacidad"
            className="text-[#2dd4bf] underline underline-offset-2 hover:text-white"
          >
            Política de privacidad
          </Link>
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("denied")}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40"
          >
            Solo esenciales
          </button>
          <button
            type="button"
            onClick={() => decide("granted")}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#080c18] transition-colors hover:bg-white/90"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
