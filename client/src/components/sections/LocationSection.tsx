import { ContactForm } from "@/components/ContactForm";
import { COMPANY } from "@/data/site-data";

export function LocationSection() {
  return (
    <section id="location" className="relative py-0 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Map Side */}
        <div className="relative h-[400px] lg:h-auto w-full bg-secondary">
          <iframe
            src={COMPANY.mapsEmbed}
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(50%) invert(92%) contrast(83%)",
            }}
            allowFullScreen
            loading="lazy"
            title="Google Maps — Automan Estética Automotiva"
          ></iframe>
        </div>

        {/* Contact Form Side */}
        <div
          id="contact"
          className="relative bg-secondary/10 p-8 lg:p-20 flex flex-col justify-center"
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(#fbbf24 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

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
  );
}
