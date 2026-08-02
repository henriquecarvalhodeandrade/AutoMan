import { Link } from "react-scroll";
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";
import { COMPANY } from "@/data/site-data";
import { publicUrl } from "@/lib/public-url";

const navLinks = [
  { name: "Quem Somos", to: "about" },
  { name: "Serviços", to: "services" },
  { name: "Portfólio", to: "portfolio" },
  { name: "Parceiros", to: "partners" },
  { name: "Localização", to: "location" },
  { name: "Contato", to: "contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      {/* Main footer content */}
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div className="space-y-6">
            <div>
              <img
                src={publicUrl("/images/AutoMan/logo/logo.webp")}
                alt="Automan Funilaria Artesanal"
                className="h-14 w-auto object-contain"
                style={{ filter: "drop-shadow(0 0 6px rgba(251,191,36,0.25))" }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Especialistas em estética automotiva premium. Restauramos a perfeição original do seu veículo com técnicas artesanais e produtos de classe mundial.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer text-sm flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-primary/0 group-hover:bg-primary/80 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm group"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} Automan Estética Automotiva. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Feito com <span className="text-primary">♥</span> por especialistas em automóveis
          </p>
        </div>
      </div>
    </footer>
  );
}
