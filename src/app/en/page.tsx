import type { Metadata } from "next";
import { ScrollProgress } from "@/components/prototipo/ScrollProgress";
import { ProtoNavEn } from "@/components/prototipo/en/ProtoNavEn";
import { ProtoHeroEn } from "@/components/prototipo/en/ProtoHeroEn";
import { ProtoTechStack } from "@/components/prototipo/ProtoTechStack";
import { ScopeEn } from "@/components/prototipo/en/ScopeEn";
import { WorkIndexEn } from "@/components/prototipo/en/WorkIndexEn";
import { ProcessEn } from "@/components/prototipo/en/ProcessEn";
import { PricingTableEn } from "@/components/prototipo/en/PricingTableEn";
import { TestimonialsEn } from "@/components/prototipo/en/TestimonialsEn";
import { FaqEn } from "@/components/prototipo/en/FaqEn";
import { ContactEn } from "@/components/prototipo/en/ContactEn";
import { ProtoFooterEn } from "@/components/prototipo/en/ProtoFooterEn";
import { WhatsAppFloatEn } from "@/components/prototipo/en/WhatsAppFloatEn";

export const metadata: Metadata = {
  title: "Nicolini Design — Precision Web Design & Engineering Studio",
  description:
    "Fixed-scope, fixed-price websites for growing businesses worldwide. Landing pages from USD 200, multi-page websites from USD 500. Remote coverage for US, Europe & Latin America.",
  alternates: {
    canonical: "/en",
    languages: {
      "es-AR": "/",
      "en-US": "/en",
    },
  },
};

export default function EnglishHomePage() {
  return (
    <>
      <ScrollProgress />
      <ProtoNavEn />
      <main>
        <ProtoHeroEn />
        <ProtoTechStack />
        <ScopeEn />
        <WorkIndexEn />
        <ProcessEn />
        <PricingTableEn />
        <TestimonialsEn />
        <FaqEn />
        <ContactEn />
      </main>
      <ProtoFooterEn />
      <WhatsAppFloatEn />
    </>
  );
}
