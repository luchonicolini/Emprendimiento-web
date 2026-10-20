"use client";

import { OPEN_CONSENT_EVENT } from "@/lib/consent";

export function CookiePreferences({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className={`inline-block py-2 text-left transition-colors duration-300 ${className}`}
    >
      Preferencias de cookies
    </button>
  );
}
