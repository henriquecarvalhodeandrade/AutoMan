import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { publicUrl } from "@/lib/public-url";

const ABOUT_IMAGE = publicUrl("/images/AutoMan/escritório/escritorio-1.webp");

const DIFFERENTIALS = [
  "Certificação Internacional",
  "Atendimento Premium",
  "Garantia Vitalícia",
  "Tecnologia de Ponta",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 border-4 border-white/5 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
              <img
                src={ABOUT_IMAGE}
                alt="Automan — Escritório"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 z-0 rounded-lg" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-primary/30 z-0 rounded-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-bold tracking-widest uppercase mb-4">
              Quem Somos
            </h4>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Excelência em Cada Detalhe
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              A Automan nasceu da paixão por automóveis e da busca incessante
              pela perfeição. Com mais de 10 anos de experiência, nos
              especializamos na arte do Martelinho de Ouro, recuperando a
              lataria do seu veículo sem a necessidade de repintura.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Nossa oficina conta com infraestrutura de ponta e uma equipe
              certificada, pronta para atender os clientes mais exigentes que
              não abrem mão da originalidade de seus carros.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DIFFERENTIALS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-white font-medium"
                >
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
