"use client";

import { OPEN_CONSENT_EVENT } from "@/lib/consent";

export function CookiePreferences() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className="inline-block py-2 text-left transition-colors duration-300 hover:text-white"
    >
      Preferencias de cookies
    </button>
  );
}
