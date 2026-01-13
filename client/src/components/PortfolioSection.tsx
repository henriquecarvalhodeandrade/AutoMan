import { motion } from "framer-motion";
import { usePortfolio } from "@/hooks/use-site-data";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PortfolioSection() {
  const { data: portfolioItems, isLoading } = usePortfolio();
  const [activeImage, setActiveImage] = useState<Record<number, 'before' | 'after'>>({});

  if (isLoading || !portfolioItems?.length) return null;

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary font-bold tracking-widest uppercase mb-4">
            Trabalhos Realizados
          </h4>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Serviços Concluídos (Antes e Depois)
          </h2>
          <p className="text-gray-400 text-lg">
            Veja a transformação de veículos que passaram pelo padrão Automan de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => {
            const isAfter = activeImage[item.id] === 'after';
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 rounded-lg overflow-hidden border border-white/10"
              >
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    key={isAfter ? 'after' : 'before'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={isAfter ? item.afterImageUrl : item.beforeImageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-white border border-white/20 z-10">
                    {isAfter ? 'Depois' : 'Antes'}
                  </div>

                  {/* Toggle Button */}
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full bg-black/50 border-white/20 hover:bg-primary hover:text-black"
                      onClick={() => setActiveImage(prev => ({ ...prev, [item.id]: isAfter ? 'before' : 'after' }))}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full bg-black/50 border-white/20 hover:bg-primary hover:text-black"
                      onClick={() => setActiveImage(prev => ({ ...prev, [item.id]: isAfter ? 'before' : 'after' }))}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </div>

                  {/* Slider Control Bar (Visual only) */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    <button 
                      onClick={() => setActiveImage(prev => ({ ...prev, [item.id]: 'before' }))}
                      className={`w-12 h-1 ${!isAfter ? 'bg-primary' : 'bg-white/30'} rounded-full transition-all`}
                    />
                    <button 
                      onClick={() => setActiveImage(prev => ({ ...prev, [item.id]: 'after' }))}
                      className={`w-12 h-1 ${isAfter ? 'bg-primary' : 'bg-white/30'} rounded-full transition-all`}
                    />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">Clique nas setas ou barras para alternar entre antes e depois.</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
