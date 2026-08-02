import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ServiceDetailSection } from "@/components/sections/ServiceDetailSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ServiceDetailSection />
      <PortfolioSection />
      {/* <PartnersSection /> — desabilitado até confirmar parceiros reais */}
      <LocationSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
