"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

interface HeroVideoProps {
  title?: string;
  badge?: string;
  outcomeLabel?: string;
  playLabel?: string;
  pauseLabel?: string;
}

export function HeroVideo({
  title = "Plano 01 · Demostración Técnica",
  badge = "Rev. 2026.1",
  outcomeLabel = "De plantilla a diseño propio",
  playLabel = "Reproducir",
  pauseLabel = "Pausar",
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Asegurar autoplay en navegadores modernos (muted obligatorio)
    video.muted = true;
    video.play().catch(() => {
      setIsPlaying(false);
    });
  }, []);

  return (
    <div className="relative">
      <aside className="proto-grid relative border border-[var(--line-strong)] bg-[var(--bg)] p-3 sm:p-4 transition-all duration-300 shadow-sm">

        {/* Barra superior estilo CAD */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] pb-2.5">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-2 w-2 bg-[var(--signal)] animate-pulse"
              aria-hidden="true"
            />
            <span className="font-cota text-[10px] uppercase tracking-[0.2em] text-[var(--fg)]">
              {title}
            </span>
          </div>
          <span className="font-cota text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
            {badge}
          </span>
        </div>

        {/* Contenedor del video 1:1 con marco técnico */}
        <div className="relative mt-3 aspect-square w-full overflow-hidden border border-[var(--line-strong)] bg-[#0d1418] shadow-inner">
          <video
            ref={videoRef}
            src="/brand/hero-video.mp4"
            poster="/brand/hero-video-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="h-full w-full object-cover"
          />

          {/* Barra de progreso de loop sutil */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-black/40">
            <div
              className="h-full bg-[var(--signal)] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Botón de reproducción / pausa accesible */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? pauseLabel : playLabel}
            className="absolute bottom-3 right-3 flex min-h-11 min-w-11 items-center justify-center gap-2 border border-white/30 bg-black/85 px-3 py-2 font-cota text-[10px] uppercase tracking-wider text-stone-200 transition-colors hover:border-[var(--signal)] hover:bg-black/95 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
          >
            {isPlaying ? (
              <Pause aria-hidden="true" size={16} strokeWidth={1.75} />
            ) : (
              <Play aria-hidden="true" size={16} strokeWidth={1.75} />
            )}
            <span>{isPlaying ? pauseLabel : playLabel}</span>
          </button>
        </div>

        {/* Pie de ficha técnica */}
        <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--line)] pt-2.5 text-[10px] font-cota text-[var(--muted)]">
          <span className="text-[var(--signal)] font-medium shrink-0">
            {outcomeLabel}
          </span>
        </div>
      </aside>
    </div>
  );
}
