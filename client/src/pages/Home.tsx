import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <PartnersSection />
      <LocationSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
