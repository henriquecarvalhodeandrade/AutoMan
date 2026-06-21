import { Wrench, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Wrench className="text-background w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-wider text-white">AUTO</span>
                <span className="font-display font-bold text-xl tracking-wider text-primary">MAN</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em martelinho de ouro e estética automotiva de alto padrão. Preservamos a originalidade e valorização do seu veículo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-background transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-background transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-lg text-white mb-6">Navegação</h3>
            <ul className="space-y-4">
              {['Quem Somos', 'Serviços', 'Galeria', 'Contato'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg text-white mb-6">Serviços</h3>
            <ul className="space-y-4">
              {['Martelinho de Ouro', 'Polimento Técnico', 'Vitrificação', 'Higienização Interna'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg text-white mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Rua das Oficinas, 123<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contato@automan.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Automan Martelinho de Ouro. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Desenvolvido com excelência.
          </p>
        </div>
      </div>
    </footer>
  );
}
