import { Star } from "lucide-react";
import { publicUrl } from "@/lib/public-url";

const STARS = [1, 2, 3, 4, 5];

export function CTABanner() {
  return (
    <section className="py-20 bg-primary text-background text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${publicUrl("/images/carbon-fibre.png")})` }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Seu carro merece o melhor tratamento
        </h2>
        <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto opacity-90">
          Traga seu veículo para uma avaliação gratuita e descubra o padrão
          Automan de qualidade.
        </p>
        <div className="flex justify-center gap-2">
          {STARS.map((i) => (
            <Star key={i} className="w-6 h-6 fill-current text-white" />
          ))}
        </div>
      </div>
    </section>
  );
}
