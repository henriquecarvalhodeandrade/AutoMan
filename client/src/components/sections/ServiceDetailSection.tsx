import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { SERVICES } from "@/data/site-data";

export function ServiceDetailSection() {
  return (
    <section id="service-details" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-primary font-bold tracking-widest uppercase mb-4">
            Conheça em Detalhes
          </h4>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Como Trabalhamos
          </h2>
          <p className="text-gray-400 text-lg">
            Cada serviço segue um processo preciso, com técnicas e produtos
            específicos para o resultado que seu veículo merece.
          </p>
        </div>

        {/* Service detail blocks — alternating layout */}
        <div className="space-y-4">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;

            {/* Column A: image + bullets stacked */}
            const imageColumn = (
              <div className="flex flex-col">
                {/* Image */}
                <div className="relative h-[300px] lg:h-[380px] overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Service number badge */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-primary/20 border border-primary/40 rounded-sm flex items-center justify-center backdrop-blur-sm">
                    <span className="font-display text-primary font-bold text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Bullets below the image */}
                <div className="bg-secondary/30 border-t border-white/5 px-8 py-6">
                  <ul className="space-y-3">
                    {service.detail.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );

            {/* Column B: text content */}
            const textColumn = (
              <div className="bg-secondary/20 p-10 lg:p-14 flex flex-col justify-center relative">
                {/* Subtle dot grid */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: "radial-gradient(#fbbf24 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative z-10">
                  <span className="inline-block text-primary text-xs font-bold tracking-[0.25em] uppercase mb-3">
                    {service.detail.tagline}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-10">
                    {service.detail.body}
                  </p>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="inline-flex items-center gap-2 bg-primary text-background font-bold px-6 py-3 rounded-sm text-sm uppercase tracking-wider hover:bg-white transition-colors cursor-pointer w-fit"
                  >
                    Solicitar Orçamento <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );

            return (
              <motion.div
                key={service.slug}
                id={`service-detail-${service.slug}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-sm border border-white/5"
              >
                {isEven ? (
                  <>
                    {imageColumn}
                    {textColumn}
                  </>
                ) : (
                  <>
                    {textColumn}
                    {imageColumn}
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
