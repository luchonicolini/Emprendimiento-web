import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Pricing } from "@/components/Pricing";
import { Showcase } from "@/components/Showcase";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080c18] text-white selection:bg-[#009688]/30">
      <Navbar />
      <Hero />
      <TechStack />
      <Pricing />
      <Showcase />
      <Process />
      <Testimonials />
      <Faq />
      <LeadForm />
      <Footer />
    </main>
  );
}
