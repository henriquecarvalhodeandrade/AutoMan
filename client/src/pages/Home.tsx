import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Partners } from "@/components/Partners";
import { LocationContact } from "@/components/LocationContact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <ServicesSection />
      <PortfolioSection />
      <Partners />
      <LocationContact />
      <Footer />
    </div>
  );
}
