"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export interface LangTransitionDetail {
  targetUrl: string;
  locale: "es" | "en";
}

export function triggerLanguageTransition(targetUrl: string, locale: "es" | "en") {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent<LangTransitionDetail>("proto:change-language", {
        detail: { targetUrl, locale },
      }),
    );
  }
}

export function LanguageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const [targetLocale, setTargetLocale] = useState<"es" | "en">("en");
  const pendingTargetRef = useRef<string | null>(null);

  useEffect(() => {
    const handleTransition = (event: Event) => {
      const customEvent = event as CustomEvent<LangTransitionDetail>;
      const { targetUrl, locale } = customEvent.detail;

      // Don't transition if already on that route
      if (pathname === targetUrl) return;

      pendingTargetRef.current = targetUrl;
      setTargetLocale(locale);
      setFadingOut(false);
      setActive(true);

      // Trigger client-side route push smoothly after brief veil entrance
      const pushTimer = setTimeout(() => {
        router.push(targetUrl);
      }, 180);

      // Fallback safety timeout so veil never gets stuck
      const safetyTimer = setTimeout(() => {
        setFadingOut(true);
        setTimeout(() => {
          setActive(false);
          setFadingOut(false);
          pendingTargetRef.current = null;
        }, 220);
      }, 900);

      return () => {
        clearTimeout(pushTimer);
        clearTimeout(safetyTimer);
      };
    };

    window.addEventListener("proto:change-language", handleTransition);
    return () => {
      window.removeEventListener("proto:change-language", handleTransition);
    };
  }, [pathname, router]);

  // When pathname changes to the desired target, smoothly fade out the veil
  useEffect(() => {
    if (active && pendingTargetRef.current && pathname === pendingTargetRef.current) {
      const exitTimer = setTimeout(() => {
        setFadingOut(true);
        setTimeout(() => {
          setActive(false);
          setFadingOut(false);
          pendingTargetRef.current = null;
        }, 220);
      }, 120);

      return () => clearTimeout(exitTimer);
    }
  }, [pathname, active]);

  if (!active) return null;

  const isEn = targetLocale === "en";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={isEn ? "Switching language to English" : "Cambiando idioma a Español"}
      className={`fixed inset-0 z-[120] flex flex-col items-center justify-center bg-[#0d1418] text-[#e9e6dd] select-none transition-opacity duration-200 ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(233,230,221,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(233,230,221,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* Corner CAD blueprint marks */}
      <div className="absolute left-6 top-6 font-cota text-[10px] tracking-[0.2em] text-[var(--signal)]">
        + 01 // LOCALE CALIBRATION
      </div>
      <div className="absolute right-6 top-6 hidden font-cota text-[10px] tracking-[0.2em] text-[#98a19e] sm:block">
        34°36′S 58°22′W +
      </div>
      <div className="absolute bottom-6 left-6 font-cota text-[10px] tracking-[0.2em] text-[#98a19e]">
        + NICOLINI DESIGN STUDIO
      </div>
      <div className="absolute bottom-6 right-6 font-cota text-[10px] tracking-[0.2em] text-[var(--signal)]">
        {isEn ? "TARGET: EN-US" : "DESTINO: ES-AR"} +
      </div>

      {/* Center technical calibration panel */}
      <div className="flex flex-col items-center px-6 text-center">
        <span className="font-cota text-[10px] uppercase tracking-[0.32em] text-[var(--signal)]">
          Nicolini Design · Studio
        </span>

        {/* Progress scanning line */}
        <div className="mt-4 h-[2px] w-52 overflow-hidden bg-[rgba(233,230,221,0.15)] relative">
          <div className="h-full w-24 bg-[var(--signal)] animate-cad-sweep" />
        </div>

        <h2 className="proto-display mt-5 text-xl tracking-[-0.02em] text-[#edeae1] sm:text-2xl">
          {isEn ? "Switching to English" : "Cambiando a Español"}
        </h2>

        <p className="font-cota mt-2 text-[11px] tracking-[0.18em] text-[#98a19e]">
          {isEn
            ? "[ CALIBRATING WORKSPACE · EN-US ]"
            : "[ CALIBRANDO ENTORNO · ES-AR ]"}
        </p>
      </div>
    </div>
  );
}
