import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { usePartners } from "@/hooks/use-site-data";

export function Partners() {
  const { data: partners } = usePartners();

  const displayPartners = partners?.length
    ? partners
    : [
        {
          id: 1,
          name: "3M",
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/3M_wordmark.svg/2560px-3M_wordmark.svg.png",
          website: "https://www.3m.com.br",
        },
        {
          id: 2,
          name: "Meguiar's",
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Meguiar%27s_logo.svg/2560px-Meguiar%27s_logo.svg.png",
          website: "https://www.meguiars.com",
        },
        {
          id: 3,
          name: "Vonixx",
          logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-v5xJ-gD5v5xJ-gD5v5xJ-gD5v5xJ&s",
          website: "https://vonixx.com.br",
        },
      ];

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
              {displayPartners.map((partner) => (
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
