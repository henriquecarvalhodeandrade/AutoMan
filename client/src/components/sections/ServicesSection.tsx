import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/data/site-data";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-secondary/20 border-y border-white/5"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary font-bold tracking-widest uppercase mb-4">
            O Que Fazemos
          </h4>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Serviços
          </h2>
          <p className="text-gray-400 text-lg">
            Soluções completas para a estética e conservação do seu automóvel,
            executadas com maestria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
