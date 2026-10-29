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

  if (!hasScrolledPastHero || inContactSection) {
    return null;
  }

  return (
    <aside
      aria-label="Direct contact via WhatsApp"
      className="fixed bottom-5 right-5 z-40 animate-fadeIn sm:bottom-6 sm:right-6"
    >
      <div className="group relative flex items-center">
        <a
          href={whatsappUrlEn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Luciano"
          className="relative flex h-12 items-center gap-2.5 rounded-full border border-[#1ebd5b]/30 bg-[#25D366] px-4 font-cota text-xs font-semibold text-[#0d1418] shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_28px_rgba(37,211,102,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          {/* Live pulsing dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0d1418] opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0d1418]" />
          </span>

          {/* WhatsApp icon */}
          <svg
            className="h-4 w-4 shrink-0 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
          </svg>

          <span className="whitespace-nowrap">
            WhatsApp
          </span>

          <span
            className={`overflow-hidden whitespace-nowrap text-[11px] font-normal transition-all duration-300 ${
              isInitialExpanded
                ? "max-w-[130px] opacity-100"
                : "max-w-0 opacity-0 group-hover:max-w-[130px] group-hover:opacity-100"
            }`}
          >
            · Ask Luciano
          </span>
        </a>
      </div>
    </aside>
  );
}
