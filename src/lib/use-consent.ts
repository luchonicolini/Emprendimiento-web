"use client";

import { useSyncExternalStore } from "react";
import { CONSENT_EVENT, readConsent, type Consent } from "./consent";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * Reads the stored consent as an external store so components stay in sync
 * without mirroring it into local state (and without hydration mismatches).
 */
export function useConsent(): Consent | null {
  return useSyncExternalStore(subscribe, readConsent, () => null);
}
