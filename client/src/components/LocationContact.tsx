import { ContactForm } from "@/components/ContactForm";
import { Star } from "lucide-react";

export function LocationContact() {
  return (
    <>
      <section id="location" className="relative py-0 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="relative h-[400px] lg:h-auto w-full bg-secondary">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.1179195308514!2d-45.88829772494088!3d-23.20237284850139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a67e58b9593%3A0x378721ccfe6ac86a!2sAuto%20Man%20Funilaria%20Artesanal%20e%20Convencional%20-%20Martelinho%20de%20Ouro!5e0!3m2!1spt-BR!2sbr!4v1768005582601!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(50%) invert(92%) contrast(83%)",
              }}
              allowFullScreen
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>

          <div
            id="contact"
            className="relative bg-secondary/10 p-8 lg:p-20 flex flex-col justify-center"
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(#fbbf24 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>

            <div className="relative z-10 max-w-lg mx-auto w-full">
              <h4 className="text-primary font-bold tracking-widest uppercase mb-2">
                Fale Conosco
              </h4>
              <h2 className="font-display text-4xl font-bold text-white mb-8">
                Agende seu Serviço
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  Clique no botão abaixo para iniciar uma conversa no WhatsApp e agendar sua avaliação gratuita.
                </p>
                <a
                  href="https://wa.me/5512999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-4 rounded-sm font-bold text-xl uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-500/20"
                >
                  Agendar via WhatsApp
                </a>
                
                <div className="pt-8 border-t border-white/10">
                  <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Endereço</h5>
                  <p className="text-gray-400">
                    Rua Paraibuna, 1177<br />
                    São José dos Campos - SP<br />
                    CEP: 12245-020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-background text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Seu carro merece o melhor tratamento
          </h2>
          <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto opacity-90">
            Traga seu veículo para uma avaliação gratuita e descubra o padrão Automan de qualidade.
          </p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-current text-white" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
