import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Service } from "@shared/schema";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${service.imageUrl})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
          <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-3">
            {service.description}
          </p>
          
          <div className="flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
            Saiba Mais <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      {/* Border effect */}
      <div className="absolute inset-0 border border-white/10 group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
}
