import type { Metadata } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import "./prototipo.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const martian = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    absolute: "Cota — Sitios web con medidas exactas",
  },
  description:
    "Prototipo de sitio para un estudio de desarrollo web. Alcance, precio y fecha definidos antes de empezar.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrototipoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${archivo.variable} ${martian.variable} proto-root min-h-screen`}>
      {children}
    </div>
  );
}
