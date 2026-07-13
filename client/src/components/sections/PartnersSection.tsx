import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PARTNERS } from "@/data/site-data";

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h4 className="text-center text-gray-500 uppercase tracking-[0.3em] text-sm mb-12">
          Trabalhamos com os melhores
        </h4>

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {PARTNERS.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="pl-4 md:pl-8 basis-1/2 md:basis-1/4"
                >
                  <div className="h-24 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 hover:bg-white/10 hover:border-primary/30 group cursor-pointer">
                    <img
                      src={partner.logoUrl}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
