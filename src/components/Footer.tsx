import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { CookiePreferences } from "@/components/CookiePreferences";

export function Footer() {
  return (
    <footer className="bg-[#080c18] text-white">
      {/* 3 Full-width banner links */}
      <div className="grid border-y border-white/[0.08] sm:grid-cols-3">
        <a
          href="https://wa.me/5491171187699?text=Hola,%20quiero%20hablar%20sobre%20un%20proyecto"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between border-b border-white/[0.08] px-5 py-6 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.03] sm:border-b-0 sm:border-r sm:px-8 sm:last:border-r-0"
        >
          <span className="flex items-center gap-3 text-[15px] text-white/80">
            <MessageCircle className="h-4 w-4 text-white/50" />
            WhatsApp
          </span>
          <ArrowUpRight className="h-4 w-4 text-white/30 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </a>

        <a
          href="https://www.instagram.com/ahoraweb.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between border-b border-white/[0.08] px-5 py-6 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.03] sm:border-b-0 sm:border-r sm:px-8 sm:last:border-r-0"
        >
          <span className="flex items-center gap-3 text-[15px] text-white/80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-white/50"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Instagram
          </span>
          <ArrowUpRight className="h-4 w-4 text-white/30 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </a>

        <a
          href="mailto:contacto@ahorawebdigital.com"
          rel="noopener noreferrer"
          className="group flex items-center justify-between border-b border-white/[0.08] px-5 py-6 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.03] sm:border-b-0 sm:border-r sm:px-8 sm:last:border-r-0"
        >
          <span className="flex items-center gap-3 text-[15px] text-white/80">
            <Mail className="h-4 w-4 text-white/50" />
            Email
          </span>
          <ArrowUpRight className="h-4 w-4 text-white/30 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </a>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr_0.8fr_1.3fr]">
          {/* Logo and desc */}
          <div className="col-span-2 lg:col-span-1">
            <Image
              alt="Ahora Web"
              width={140}
              height={36}
              className="h-7 w-auto"
              src="/logo-white.png"
            />
            <p className="mt-5 max-w-[17rem] text-sm leading-relaxed text-white/45">
              Desarrollo web, contenido y pauta en Meta. Buenos Aires, Argentina.
            </p>
          </div>

          {/* Servicios */}
          <nav aria-label="Servicios">
            <h3 className="text-sm text-white/35">Servicios</h3>
            <ul className="mt-2">
              {[
                { label: "Landing page", href: "/#precios" },
                { label: "Web multipágina", href: "/#precios" },
                { label: "Tienda online", href: "/#precios" },
                { label: "Sistemas a medida", href: "/#contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    className="inline-block py-3 text-sm text-white/70 transition-colors duration-300 hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Agencia */}
          <nav aria-label="Agencia">
            <h3 className="text-sm text-white/35">Agencia</h3>
            <ul className="mt-2">
              <li>
                <Link
                  className="inline-block py-3 text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  href="/#trabajos"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-3 text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  href="/#opiniones"
                >
                  Opiniones
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-3 text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  href="/#faqs"
                >
                  Preguntas
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contacto */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm text-white/35">Contacto</h3>
            <ul className="mt-2 text-sm text-white/70">
              <li>
                <a
                  href="mailto:contacto@ahorawebdigital.com"
                  className="inline-block py-3 transition-colors duration-300 hover:text-white"
                >
                  contacto@ahorawebdigital.com
                </a>
              </li>
              <li className="py-3 text-white/50">Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-8 border-t border-white/[0.08] text-[13px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ahora Web</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/politica-de-privacidad"
              className="inline-block py-2 transition-colors duration-300 hover:text-white"
            >
              Política de privacidad
            </Link>
            <CookiePreferences />
          </div>
        </div>
      </div>
    </footer>
  );
}
