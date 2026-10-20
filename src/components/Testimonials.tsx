"use client";

import { useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const reviews = [
  {
    initial: "L",
    name: "Lucas Rueda",
    quote: "Excelente servicio de Mateo. Logramos una página muy bien desarrollada y a un costo muy bueno.",
    time: "hace 9 semanas",
  },
  {
    initial: "F",
    name: "Flavia Pesce",
    quote: "Muy buena onda y excelente servicio. Superó mis expectativas. Recomendable!",
    time: "hace 2 semanas",
  },
  {
    initial: "D",
    name: "Diego Esposito",
    quote: "Excelente trabajo hicieron los chicos las dos veces que los contraté. Super profesionales con el material entregado y la puntualidad.",
    time: "hace 2 semanas",
  },
  {
    initial: "S",
    name: "Santiago Hazaña",
    quote: "¡Increíble experiencia trabajar con Mateo y Ahora Web! Captó el espíritu de Softies desde el primer momento.",
    time: "hace 3 meses",
  },
  {
    initial: "G",
    name: "Graciela Echeverria",
    quote: "Recomiendo sin dudas a este equipo. Los elegí luego de semanas de búsqueda y cuando conecté con Mateo me sentí cómoda y segura.",
    time: "hace 4 meses",
  },
  {
    initial: "E",
    name: "ExtraMundano Producciones",
    quote: "Genios! Nos hicieron una re linda web.",
    time: "hace 4 meses",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex];
  const formattedIndex = String(currentIndex + 1).padStart(2, "0");
  const totalCount = String(reviews.length).padStart(2, "0");

  return (
    <section
      id="opiniones"
      className="scroll-mt-20 bg-[#080c18] text-white"
    >
      <div className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 sm:pb-32">
        <ScrollReveal>
          <h2 className="text-center font-display text-[44px] font-semibold leading-none tracking-[-0.045em] sm:text-[80px] lg:text-[104px]">
            Lo que{" "}
            <em className="font-serif font-normal italic tracking-[-0.01em]">
              dicen
            </em>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-3 sm:mt-16 lg:grid-cols-[0.8fr_2fr]">
          {/* Left stats card */}
          <ScrollReveal delay={0.08}>
            <dl className="grid h-full grid-cols-3 gap-3 rounded-3xl border border-white/[0.08] p-6 sm:p-8 lg:grid-cols-1 lg:gap-8 bg-[#0d1220]">
              <div>
                <dt className="sr-only">en Google, con 21 reseñas</dt>
                <dd className="font-display text-[34px] font-semibold leading-none tracking-[-0.04em] sm:text-5xl">
                  5,0<span style={{ color: "#2dd4bf" }}></span>
                </dd>
                <dd className="mt-2 text-xs leading-snug text-white/45 sm:text-sm">
                  en Google, con 21 reseñas
                </dd>
              </div>
              <div>
                <dt className="sr-only">webs y sistemas entregados</dt>
                <dd className="font-display text-[34px] font-semibold leading-none tracking-[-0.04em] sm:text-5xl">
                  50<span style={{ color: "#2dd4bf" }}>+</span>
                </dd>
                <dd className="mt-2 text-xs leading-snug text-white/45 sm:text-sm">
                  webs y sistemas entregados
                </dd>
              </div>
              <div>
                <dt className="sr-only">días hábiles para tener tu landing online</dt>
                <dd className="font-display text-[34px] font-semibold leading-none tracking-[-0.04em] sm:text-5xl">
                  7<span style={{ color: "#2dd4bf" }}>–10</span>
                </dd>
                <dd className="mt-2 text-xs leading-snug text-white/45 sm:text-sm">
                  días hábiles para tener tu landing online
                </dd>
              </div>
            </dl>
          </ScrollReveal>

          {/* Right review slider */}
          <ScrollReveal delay={0.16}>
            <figure className="flex h-full min-h-[340px] flex-col justify-between rounded-3xl border border-white/[0.08] p-6 sm:p-10 bg-[#0d1220]">
              <div className="flex items-center justify-between">
                <span className="text-sm tabular-nums text-white/40">
                  {formattedIndex} / {totalCount}
                </span>
                <span className="font-serif text-6xl leading-none text-white/20">
                  ”
                </span>
              </div>

              <div className="my-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      style={{ fill: "#FBBC04", color: "#FBBC04" }}
                    />
                  ))}
                </div>
                <blockquote className="text-xl leading-snug tracking-[-0.01em] text-white/90 sm:text-2xl lg:text-[27px]">
                  “{current.quote}”
                </blockquote>
              </div>

              <figcaption className="flex items-center justify-between gap-4 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                    {current.initial}
                  </span>
                  <div>
                    <p className="text-sm font-semibold capitalize">{current.name}</p>
                    <a
                      href="https://share.google/RwVYrHUEOp1QmP3vA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-0.5 text-xs text-white/40 hover:text-white/70"
                    >
                      Reseña en Google · {current.time}
                    </a>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prevReview}
                    aria-label="Reseña anterior"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextReview}
                    aria-label="Reseña siguiente"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
