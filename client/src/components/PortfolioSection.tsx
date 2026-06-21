import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PORTFOLIO, type PortfolioItem } from "@/data/site-data";

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white/5 rounded-sm overflow-hidden border border-white/10 hover:border-primary/30 transition-colors duration-300"
    >
      {/* Image area */}
      <div className="relative aspect-square overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={isAfter ? "after" : "before"}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            src={isAfter ? item.afterImageUrl : item.beforeImageUrl}
            alt={`${item.title} – ${isAfter ? "Depois" : "Antes"}`}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* State badge */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest border z-10 backdrop-blur-sm transition-all duration-300 ${
            isAfter
              ? "bg-primary/80 text-black border-primary"
              : "bg-black/70 text-white border-white/20"
          }`}
        >
          {isAfter ? "Depois ✓" : "Antes"}
        </div>

        {/* Hover overlay with toggle */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => setIsAfter((v) => !v)}
            className="bg-primary text-black font-bold px-6 py-2 rounded-sm text-sm uppercase tracking-widest hover:bg-white transition-colors"
          >
            Ver {isAfter ? "Antes" : "Depois"}
          </button>
        </div>

        {/* Bottom toggle pills */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          <button
            onClick={() => setIsAfter(false)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              !isAfter ? "w-8 bg-primary" : "w-4 bg-white/30"
            }`}
            aria-label="Ver antes"
          />
          <button
            onClick={() => setIsAfter(true)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              isAfter ? "w-8 bg-primary" : "w-4 bg-white/30"
            }`}
            aria-label="Ver depois"
          />
        </div>
      </div>

      {/* Card info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
        <p className="text-xs text-gray-600 mt-3 italic">
          Passe o mouse ou clique nas barras para alternar Antes/Depois
        </p>
      </div>
    </motion.div>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary font-bold tracking-widest uppercase mb-4">
            Trabalhos Realizados
          </h4>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Antes e Depois
          </h2>
          <p className="text-gray-400 text-lg">
            Veja a transformação de veículos que passaram pelo padrão Automan de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
