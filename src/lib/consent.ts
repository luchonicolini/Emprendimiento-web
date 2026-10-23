export type Consent = "granted" | "denied";

export const CONSENT_KEY = "nicolini.cookie-consent";
export const CONSENT_EVENT = "nicolini:consent-change";
export const OPEN_CONSENT_EVENT = "nicolini:consent-open";

export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage can be unavailable (private mode, blocked cookies). The
    // in-memory event still keeps the current page consistent.
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
