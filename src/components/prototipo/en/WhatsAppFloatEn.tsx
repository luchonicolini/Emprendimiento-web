"use client";

import { useEffect, useState } from "react";
import { brandEn } from "@/content/prototipo.en";

const defaultMessageEn =
  "Hello Luciano, I am reviewing the Nicolini Design website and would like to discuss a web project for my business.";
const whatsappUrlEn = `${brandEn.whatsapp}?text=${encodeURIComponent(
  defaultMessageEn,
)}`;

export function WhatsAppFloatEn() {
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const [inContactSection, setInContactSection] = useState(false);
  const [isInitialExpanded, setIsInitialExpanded] = useState(false);

  // Show button after scrolling past Hero (250px) and expand 3.5s the first time
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let didExpandOnce = false;

    const handleScroll = () => {
      const pastHero = window.scrollY > 250;
      setHasScrolledPastHero(pastHero);

      if (pastHero && !didExpandOnce) {
        didExpandOnce = true;
        setIsInitialExpanded(true);
        timer = setTimeout(() => {
          setIsInitialExpanded(false);
        }, 3500);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  // Hide smoothly when #contact section is in viewport
  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInContactSection(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  const isVisible = hasScrolledPastHero && !inContactSection;

  return (
    <aside
      aria-label="Direct contact via WhatsApp"
      className={`fixed bottom-5 right-5 z-40 transition-all duration-500 ease-out sm:bottom-6 sm:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "pointer-events-none translate-y-6 opacity-0 scale-95"
      }`}
    >
      <a
        href={whatsappUrlEn}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp: same-day reply (opens in a new tab)"
        className="group relative flex h-12 items-center rounded-full border border-white/15 bg-[#0e1418]/90 p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-[#121a20] hover:shadow-[0_16px_40px_rgba(37,211,102,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d10]"
      >
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-emerald-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

        {/* Icon circle with halo and active pulse dot */}
        <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[#25D366] transition-transform duration-300 group-hover:scale-105">
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full border border-[#0e1418] bg-[#25D366]" />
          </span>

          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4.5 w-4.5 text-[#25D366]"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>

        {/* Dynamic Island expandable pill */}
        <div
          className={`flex items-center overflow-hidden whitespace-nowrap transition-all duration-300 ease-out ${
            isInitialExpanded
              ? "max-w-[280px] pl-2.5 pr-3 opacity-100"
              : "max-w-0 opacity-0 group-hover:max-w-[280px] group-hover:pl-2.5 group-hover:pr-3 group-hover:opacity-100 group-focus-visible:max-w-[280px] group-focus-visible:pl-2.5 group-focus-visible:pr-3 group-focus-visible:opacity-100"
          }`}
        >
          <div className="flex flex-col pr-1">
            <span className="text-[13px] font-semibold tracking-tight text-white leading-none">
              WhatsApp
            </span>
            <span className="mt-0.5 font-cota text-[9px] uppercase tracking-wider text-stone-400">
              Same-day reply
            </span>
          </div>
        </div>
      </a>
    </aside>
  );
}
