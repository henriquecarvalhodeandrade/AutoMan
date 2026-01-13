import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactForm } from "@/components/ContactForm";
import { useServices, usePartners } from "@/hooks/use-site-data";
import { motion, useScroll, useTransform } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowDown, CheckCircle2, MapPin, Phone, Star } from "lucide-react";
import { Link } from "react-scroll";

// Hero placeholder image - Luxury Car Detail
// https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop";

// About section image - Mechanic working
// https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop
const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop";

export default function Home() {
  const { data: services, isLoading: isLoadingServices } = useServices();
  const { data: partners, isLoading: isLoadingPartners } = usePartners();
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  // Use realistic default data if API returns empty during development
  const displayServices = services?.length
    ? services
    : [
        {
          id: 1,
          title: "Funilaria Artesanal (Martelinho de Ouro)",
          description:
            'Técnica de precisão usada para remover amassados sem danificar a pintura original. Utiliza ferramentas específicas para "massagear" a chapa de metal por trás, preservando a valorização do veículo e dispensando massa ou repintura.',
          imageUrl:
            "https://images.unsplash.com/photo-1618585675271-4a37651a2579?q=80&w=2070&auto=format&fit=crop",
        },
        {
          id: 2,
          title: "Funilaria Convencional",
          description:
            "Indicada para danos severos onde a chapa sofreu vincos fortes ou rasgos. Envolve o uso de lixas, soldas e preenchimento com massa poliéster, exigindo obrigatoriamente a repintura completa da peça afetada para restaurar o formato original.",
          imageUrl:
            "https://images.unsplash.com/photo-1552857497-6953dc5d862f?q=80&w=1974&auto=format&fit=crop",
        },
        {
          id: 3,
          title: "Polimento",
          description:
            "Processo abrasivo que remove uma microcamada do verniz para eliminar riscos superficiais, manchas e oxidação. Utiliza boinas e massas de polir para nivelar a superfície, devolvendo o brilho e a uniformidade visual à lataria.",
          imageUrl:
            "https://images.unsplash.com/photo-1562916174-a6f67137f88f?q=80&w=2070&auto=format&fit=crop",
        },
        {
          id: 4,
          title: "Cristalização (ou Espelhamento)",
          description:
            "Aplicação de uma resina protetora sobre o verniz já polido para selar os poros da pintura. O objetivo é garantir um brilho mais intenso e criar uma camada de proteção temporária contra agentes externos, facilitando a limpeza do carro.",
          imageUrl:
            "https://images.unsplash.com/photo-1605218427360-179267df8c1d?q=80&w=1932&auto=format&fit=crop",
        },
      ];

  const displayPartners = partners?.length
    ? partners
    : [
        {
          id: 1,
          name: "Autoglass",
          logoUrl:
            "https://conteudo.autoglass.com.br/hubfs/logo-autoglass-RGB_LOGO-ORIGINAL-para-fundos-claros-3.png",
          website: "https://www.google.com/aclk?sa=L&ai=DChsSEwi3zfK6uYmSAxUXRUgAHbWgJPAYACICCAEQABoCY2U&co=1&gclid=CjwKCAiA95fLBhBPEiwATXUsxFVxp3xVxoEuYtYpo4PK9JDXDjmtwmf15bPpxObgy14EBfI_OFb7jhoC_UEQAvD_BwE&cid=CAAS0gHkaKADSraWwnrxLhYslk9Afx8uEFu9Gpb4rrPV0Xho-4_h4zQQRVPxOQxec7LK_IFHNN9ocdY9Mw6Da8FRTaXlphCJAE7cXX08Mi45wJvQbCdybH0h9dsk1UbLbwA7WV5OrOTHQrQBOtIAOh-Pnj_QKDu2f3XpBZ25Dv2XEssssSISX0EGdj-Rvdf43CXBVkQvP4pdYq9Hn0v5HfvcWRHy9X3dPRmZBQXMlvGnZ3UWFb6bhqCMjWHHHmWPZHMZqdPxoxxDKaC4hNw5kZelxDhfjpY&cce=2&sig=AOD64_38M5iYbpdj4f2Rl39vHx5jkITXPw&q&adurl&ved=2ahUKEwjL_-y6uYmSAxX4A7kGHV2aLQMQ0Qx6BAgKEAE",
        },
        {
          id: 2,
          name: "Meguiar's",
          logoUrl:
            "https://1000logos.net/wp-content/uploads/2021/10/Meguiars-Logo.png",
          website: "#",
        },
        {
          id: 3,
          name: "Vonixx",
          logoUrl:
            "https://logodownload.org/wp-content/uploads/2022/08/vonixx-logo-1.png",
          website: "#",
        },
        {
          id: 4,
          name: "Mothers",
          logoUrl:
            "https://seeklogo.com/images/M/Mothers_Polishes-logo-71D67B6F30-seeklogo.com.png",
          website: "#",
        },
      ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />

      {/* === HERO SECTION === */}
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
              <Link
                to="contact"
                smooth={true}
                className="bg-primary text-background px-8 py-4 rounded-sm font-bold text-lg uppercase tracking-wider hover:bg-white hover:scale-105 transition-all cursor-pointer shadow-lg shadow-primary/25"
              >
                Agendar Avaliação
              </Link>
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

      {/* === ABOUT SECTION === */}
      <section
        id="about"
        className="py-24 md:py-32 bg-background relative overflow-hidden"
      >
        {/* Background texture element */}
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
                  alt="Automan Team"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative square */}
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
                {[
                  "Certificação Internacional",
                  "Atendimento Premium",
                  "Garantia Vitalícia",
                  "Tecnologia de Ponta",
                ].map((item) => (
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

      {/* === SERVICES SECTION === */}
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
            {displayServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* === PORTFOLIO SECTION === */}
      <PortfolioSection />

      {/* === PARTNERS SECTION === */}
      <section id="partners" className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <h4 className="text-center text-gray-500 uppercase tracking-[0.3em] text-sm mb-12">
            Trabalhamos com os melhores
          </h4>

          <div className="relative max-w-5xl mx-auto">
            <Carousel
              plugins={[Autoplay({ delay: 3000 })]}
              className="w-full"
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent className="-ml-4 md:-ml-8">
                {displayPartners.map((partner) => (
                  <CarouselItem
                    key={partner.id}
                    className="pl-4 md:pl-8 basis-1/2 md:basis-1/4"
                  >
                    <div className="h-24 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 hover:bg-white/10 hover:border-primary/30 group cursor-pointer">
                      <img
                        src={partner.logoUrl}
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* === LOCATION & CONTACT SECTION === */}
      <section id="location" className="relative py-0 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Map Side */}
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

          {/* Contact Form Side */}
          <div
            id="contact"
            className="relative bg-secondary/10 p-8 lg:p-20 flex flex-col justify-center"
          >
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(#fbbf24 1px, transparent 1px)",
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

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-primary text-background text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Seu carro merece o melhor tratamento
          </h2>
          <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto opacity-90">
            Traga seu veículo para uma avaliação gratuita e descubra o padrão
            Automan de qualidade.
          </p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-current text-white" />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
