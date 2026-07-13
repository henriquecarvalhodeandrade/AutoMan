import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Quem Somos", to: "about" },
    { name: "Serviços", to: "services" },
    { name: "Portfólio", to: "portfolio" },
    { name: "Parceiros", to: "partners" },
    { name: "Localização", to: "location" },
    { name: "Contato", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-primary/10 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img
              src="/images/AutoMan/logo/logo.webp"
              alt="Automan Funilaria Artesanal"
              className="h-12 w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 6px rgba(251,191,36,0.3))" }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full duration-300" />
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="bg-primary hover:bg-primary/90 text-background px-6 py-2 rounded-sm font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/20 cursor-pointer"
            >
              Agendar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 cursor-pointer border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                   to="contact"
                   smooth={true}
                   duration={500}
                   offset={-80}
                   onClick={() => setIsOpen(false)}
                   className="block w-full text-center bg-primary text-background font-bold py-3 rounded-sm"
                >
                  Agendar Orçamento
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
