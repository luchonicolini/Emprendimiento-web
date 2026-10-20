import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

const stack = [
  { name: "Meta Pixel", icon: "/stack/meta.svg" },
  { name: "Google Analytics", icon: "/stack/googleanalytics.svg" },
  { name: "WhatsApp", icon: "/stack/whatsapp.svg" },
  { name: "Vercel", icon: "/stack/vercel.svg" },
  { name: "Next.js", icon: "/stack/nextdotjs.svg" },
  { name: "Tailwind CSS", icon: "/stack/tailwindcss.svg" },
  { name: "Supabase", icon: "/stack/supabase.svg" },
  { name: "Claude AI", icon: "/stack/claude.svg" },
];

export function TechStack() {
  return (
    <section aria-label="Herramientas con las que trabajamos" className="bg-[#080c18] pb-6 pt-10 sm:pt-14">
      <ScrollReveal delay={0.1}>
        <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-6 px-8 sm:grid-cols-4 sm:gap-y-8">
          {stack.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-center gap-2.5 opacity-55 transition-opacity duration-500 hover:opacity-100"
            >
              <Image
                src={item.icon}
                alt=""
                width={22}
                height={22}
                className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]"
              />
              <span className="whitespace-nowrap font-display text-[15px] font-semibold tracking-tight text-white sm:text-lg">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
