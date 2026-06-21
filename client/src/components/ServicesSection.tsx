import { ServiceCard } from "@/components/ServiceCard";
import { useServices } from "@/hooks/use-site-data";

export function ServicesSection() {
  const { data: services } = useServices();

  const displayServices = services?.length
    ? services
    : [
        {
          id: 1,
          title: "Martelinho de Ouro",
          description: "Técnica artesanal para desamassar lataria sem danificar a pintura original.",
          imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
        },
        {
          id: 2,
          title: "Polimento Técnico",
          description: "Recuperação do brilho e remoção de microrriscos da pintura.",
          imageUrl: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop",
        },
        {
          id: 3,
          title: "Vitrificação",
          description: "Proteção cerâmica de alta durabilidade para a pintura do seu veículo.",
          imageUrl: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop",
        },
      ];

  return (
    <section id="services" className="py-24 bg-secondary/20 border-y border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary font-bold tracking-widest uppercase mb-4">O Que Fazemos</h4>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Nossos Serviços</h2>
          <p className="text-gray-400 text-lg">
            Soluções completas para a estética e conservação do seu automóvel, executadas com maestria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
