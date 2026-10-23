"use client";

import Link from "next/link";
import { useState } from "react";
import { brand, nav } from "@/content/prototipo";
import { NicoliniLogo } from "@/components/brand/NicoliniLogo";

export function ProtoNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)] backdrop-blur-md">
      <div className="hidden border-b border-[var(--line)] sm:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-2">
          <span className="proto-label whitespace-nowrap">{brand.descriptor}</span>
          <div className="flex items-center gap-6">
            <span className="proto-label whitespace-nowrap">{brand.location}</span>
            <span className="proto-label hidden whitespace-nowrap lg:inline">{brand.coordinates}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-6">
        <Link
          href="/"
          className="group transition-opacity hover:opacity-90"
          aria-label="Nicolini Design — Inicio"
        >
          <NicoliniLogo />
        </Link>

        <nav aria-label="Secciones" className="hidden items-center gap-7 lg:flex">
          {nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-baseline gap-1.5 text-[13px] text-[var(--fg)] transition-colors hover:text-[var(--signal)]"
            >
              <span className="proto-label text-[10px] transition-colors group-hover:text-[var(--signal)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contacto" className="proto-btn hidden sm:inline-flex">
            Pedir presupuesto
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="proto-mobile-nav"
            className="proto-btn proto-btn-ghost lg:hidden"
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="proto-mobile-nav"
          className="border-t border-[var(--line)] bg-[var(--bg)] px-5 py-4 lg:hidden"
        >
          <nav aria-label="Secciones" className="grid gap-1">
            {nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-[var(--line)] py-3 text-lg tracking-[-0.02em] last:border-b-0"
              >
                <span className="proto-label text-[10px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="proto-btn mt-4 w-full"
          >
            Pedir presupuesto
          </a>
        </div>
      ) : null}
    </header>
  );
}
