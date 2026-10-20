"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const showcaseProjects = [
  { img: "/portfolio/ventura-hero.png", label: "Ventura", url: "https://landing-ventura.vercel.app" },
  { img: "/portfolio/ranchapp-hero.png", label: "RanchApp", url: "https://www.ranchapp.ar" },
  { img: "/portfolio/datero.png", label: "Datero", url: "https://www.datero.app" },
  { img: "/portfolio/ecospace.png", label: "Ecospace", url: "https://ecospace-energia.vercel.app" },
  { img: "/portfolio/graciela-echeverria.png", label: "Graciela Echeverria Rey", url: "https://www.gracielaecheverriarey.com.ar" },
  { img: "/portfolio/estudio-krono.png", label: "Estudio Krono", url: "https://estudiokrono.vercel.app" },
  { img: "/portfolio/joindevelopers.png", label: "Join Developers", url: "https://www.joindevelopers.com" },
  { img: "/portfolio/softies.png", label: "Softies Catering", url: "https://softiescatering.com" },
  { img: "/portfolio/lucas-rueda.png", label: "Dr. Lucas Rueda", url: "https://lucas-rueda-website.vercel.app" },
  { img: "/portfolio/bruggens.png", label: "Bruggens Fine Arts", url: "https://bruggens-web-si.vercel.app" },
  { img: "/portfolio/ndw.png", label: "NDW Gestión Preventiva", url: "https://ndwgestionpreventiva.vercel.app" },
  { img: "/portfolio/extramundano.png", label: "Extramundano", url: "https://www.extramundano.com.ar" },
  { img: "/portfolio/ccelectricidad.png", label: "CC Electricidad", url: "https://ccelectricidad.com.ar" },
];

const metrics = [
  { valor: "Desde USD 350", texto: "landing page, pago único" },
  { valor: "7 a 10 días hábiles", texto: "desde que nos mandás el brief" },
  { valor: "25% de seña", texto: "y el resto con la web publicada" },
  { valor: "5,0 en Google", texto: "más de 50 proyectos entregados" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPlaying(entry.isIntersecting);
      },
      { rootMargin: "100px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const marqueeItems = [...showcaseProjects, ...showcaseProjects];

  return (
    <section className="relative overflow-hidden bg-[#080c18]">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-32 lg:grid-cols-[1fr_280px] lg:items-end lg:gap-16 lg:pt-40">
        <ScrollReveal intensity="hero">
          <h1 className="max-w-[820px] text-balance font-display text-[38px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[56px] lg:text-[64px] xl:text-[72px]">
            Tu web a medida, con precio y fecha{" "}
            <em className="font-serif font-normal italic tracking-[-0.01em]">
              cerrados
            </em>{" "}
            antes de empezar.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:mt-6 sm:text-lg">
            La diseñamos y la programamos de cero para que tus clientes te escriban por WhatsApp. Dominio y accesos quedan a tu nombre desde el primer día.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-[15px] font-semibold text-[#080c18] transition-colors hover:bg-white/90"
              href="#contacto"
            >
              Pedir presupuesto
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f766e] text-white transition-transform duration-500 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>

            <a
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:border-white/40"
              href="#precios"
            >
              Ver precios
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 lg:grid-cols-1 lg:gap-y-0 lg:border-t-0 lg:pt-0">
            {metrics.map((item) => (
              <div key={item.valor} className="lg:border-t lg:border-white/10 lg:py-4">
                <dt className="font-display text-lg font-semibold tabular-nums tracking-tight text-white sm:text-xl">
                  {item.valor}
                </dt>
                <dd className="mt-0.5 text-[13px] leading-snug text-white/50">
                  {item.texto}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>

      {/* Infinite Ticker Marquee Carousel with exact screenshots */}
      <div ref={containerRef} className="relative z-10 w-full overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-[#080c18] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-[#080c18] to-transparent sm:w-20" />

        <div
          className="flex w-max animate-ticker gap-3 px-4 pb-4 sm:gap-4 sm:px-6"
          style={{ animationPlayState: isPlaying ? "running" : "paused" }}
        >
          {marqueeItems.map((item, index) => (
            <a
              key={`${item.label}-${index}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={index >= showcaseProjects.length ? -1 : undefined}
              aria-hidden={index >= showcaseProjects.length || undefined}
              className="group relative aspect-[1280/730] w-60 flex-shrink-0 overflow-hidden rounded-xl border border-white/[0.07] sm:w-72 md:w-80"
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                sizes="320px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
