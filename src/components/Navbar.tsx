"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080c18]/85 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link aria-label="Ahora Web, inicio" className="-my-2 py-2 flex items-center gap-2" href="/">
          <Image
            alt="Ahora Web"
            width={140}
            height={36}
            priority
            className="h-8 w-auto"
            src="/logo-white.png"
          />
        </Link>

        <a
          href="#contacto"
          className="flex items-center gap-1.5 rounded-full px-5 py-2.5 sm:py-3 text-sm font-semibold !text-[#080c18] bg-white transition-opacity hover:opacity-90 shadow-sm"
        >
          <span>Pedir presupuesto</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
