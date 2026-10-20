import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const showcaseProjects = [
  {
    url: "https://www.joindevelopers.com",
    title: "Join Developers",
    subtitle: "Desarrolladora inmobiliaria",
    domain: "joindevelopers.com",
    img: "/portfolio/joindevelopers.png",
  },
  {
    url: "https://landing-ventura.vercel.app",
    title: "Ventura",
    subtitle: "Estudio de software a medida",
    domain: "landing-ventura.vercel.app",
    img: "/portfolio/ventura-hero.png",
  },
  {
    url: "https://bruggens-web-si.vercel.app",
    title: "Bruggens Fine Arts",
    subtitle: "Galería de arte",
    domain: "bruggens-web-si.vercel.app",
    img: "/portfolio/bruggens.png",
  },
  {
    url: "https://softiescatering.com",
    title: "Softies Catering",
    subtitle: "Gastronomía y eventos",
    domain: "softiescatering.com",
    img: "/portfolio/softies.png",
  },
  {
    url: "https://ecospace-energia.vercel.app",
    title: "Ecospace",
    subtitle: "Energía para empresas",
    domain: "ecospace-energia.vercel.app",
    img: "/portfolio/ecospace.png",
  },
  {
    url: "https://www.extramundano.com.ar",
    title: "Extramundano",
    subtitle: "Productora audiovisual",
    domain: "extramundano.com.ar",
    img: "/portfolio/extramundano.png",
  },
];

export function Showcase() {
  return (
    <section id="trabajos" className="scroll-mt-20 bg-[#080c18] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <ScrollReveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="max-w-2xl font-display text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
            Webs de clientes que podés abrir{" "}
            <em className="font-serif font-normal italic tracking-[-0.01em]">
              ahora
            </em>
          </h2>
          <a
            className="w-fit whitespace-nowrap rounded-full border border-white/15 px-5 py-3 text-sm font-medium sm:py-2.5 text-white transition-colors hover:border-white/40"
            href="#contacto"
          >
            Ver los más de 50 proyectos
          </a>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-12 sm:mt-16 md:grid-cols-2 lg:gap-y-16">
          {showcaseProjects.map((item, index) => (
            <ScrollReveal key={item.title} delay={0.1 * (index % 2)}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f1420]">
                  <Image
                    src={item.img}
                    alt={`Web de ${item.title}`}
                    fill
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm text-white/45">{item.subtitle}</p>
                  </div>
                  <span className="mt-0.5 flex flex-shrink-0 items-center gap-1 text-xs text-white/40 transition-colors group-hover:text-[#2dd4bf]">
                    <span className="hidden max-w-[180px] truncate sm:inline">
                      {item.domain}
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
