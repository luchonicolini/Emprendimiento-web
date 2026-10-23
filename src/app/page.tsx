import { ScrollProgress } from "@/components/prototipo/ScrollProgress";
import { ProtoNav } from "@/components/prototipo/ProtoNav";
import { ProtoHero } from "@/components/prototipo/ProtoHero";
import { ProtoTechStack } from "@/components/prototipo/ProtoTechStack";
import { Scope } from "@/components/prototipo/Scope";
import { WorkIndex } from "@/components/prototipo/WorkIndex";
import { Process } from "@/components/prototipo/Process";
import { PricingTable } from "@/components/prototipo/PricingTable";
import { Testimonials } from "@/components/prototipo/Testimonials";
import { Faq } from "@/components/prototipo/Faq";
import { Contact } from "@/components/prototipo/Contact";
import { ProtoFooter } from "@/components/prototipo/ProtoFooter";
import { WhatsAppFloat } from "@/components/prototipo/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <ProtoNav />
      <main>
        <ProtoHero />
        <ProtoTechStack />
        <Scope />
        <WorkIndex />
        <Process />
        <PricingTable />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <ProtoFooter />
      <WhatsAppFloat />
    </>
  );
}
