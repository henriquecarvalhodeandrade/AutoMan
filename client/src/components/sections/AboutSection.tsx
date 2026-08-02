import { motion } from "framer-motion";

const DIFFERENTIALS = [
  { label: "Certificação Internacional", desc: "Técnicos treinados e certificados" },
  { label: "Atendimento Premium", desc: "Foco total na sua experiência" },
  { label: "Garantia no Serviço", desc: "Qualidade assegurada em cada etapa" },
  { label: "Tecnologia de Ponta", desc: "Equipamentos e produtos de classe mundial" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Subtle accent gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-primary font-bold tracking-widest uppercase mb-4">
            Quem Somos
          </h4>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
            Excelência em Cada Detalhe
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            A Automan nasceu da paixão por automóveis e da busca incessante
            pela perfeição. Com mais de 10 anos de experiência, nos
            especializamos na arte do Martelinho de Ouro, recuperando a
            lataria do seu veículo sem a necessidade de repintura.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Nossa oficina conta com infraestrutura de ponta e uma equipe
            certificada, pronta para atender os clientes mais exigentes que
            não abrem mão da originalidade de seus carros.
          </p>
        </motion.div>

        {/* Differentials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {DIFFERENTIALS.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-8 flex flex-col gap-2 group hover:bg-secondary/20 transition-colors duration-300"
            >
              <span className="text-primary text-2xl font-display font-bold leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-white font-bold text-base mt-2 group-hover:text-primary transition-colors">
                {item.label}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
