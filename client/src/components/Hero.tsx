import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop";

export function Hero() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity: opacityHero }}
        className="relative z-10 container mx-auto px-4 text-center max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
            Funilaria e Pintura
          </h2>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Martelinho de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600 gold-glow">
              OURO
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Restauramos a perfeição original do seu veículo com técnicas
            artesanais de precisão e produtos de classe mundial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5512999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-background px-8 py-4 rounded-sm font-bold text-lg uppercase tracking-wider hover:bg-white hover:scale-105 transition-all cursor-pointer shadow-lg shadow-primary/25 inline-block"
            >
              Agendar Avaliação
            </a>
            <Link
              to="services"
              smooth={true}
              className="border border-white/30 text-white px-8 py-4 rounded-sm font-bold text-lg uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all cursor-pointer backdrop-blur-sm"
            >
              Nossos Serviços
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-10"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
