// ============================================================
// Static site data — replaces server-side API
// ============================================================

export interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Partner {
  id: number;
  name: string;
  logoUrl: string;
  website: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Martelinho de Ouro",
    description:
      "Técnica artesanal para remover amassados sem danificar a pintura original do veículo. Ideal para chuva de granizo e pequenas colisões.",
    imageUrl:
      "https://images.unsplash.com/photo-1618585675271-4a37651a2579?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Polimento Técnico",
    description:
      "Correção da pintura removendo riscos superficiais, manchas e hologramas, devolvendo o brilho intenso e profundidade de cor.",
    imageUrl:
      "https://images.unsplash.com/photo-1552857497-6953dc5d862f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Vitrificação",
    description:
      "Proteção cerâmica de alta durabilidade que cria uma barreira contra agentes externos, facilitando a limpeza e mantendo o brilho.",
    imageUrl:
      "https://images.unsplash.com/photo-1562916174-a6f67137f88f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Higienização Interna",
    description:
      "Limpeza profunda e detalhada de bancos, carpetes e painéis, eliminando ácaros, fungos e odores desagradáveis.",
    imageUrl:
      "https://images.unsplash.com/photo-1605218427360-179267df8c1d?q=80&w=1932&auto=format&fit=crop",
  },
];

export const PARTNERS: Partner[] = [
  {
    id: 1,
    name: "3M",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/3M_wordmark.svg/2560px-3M_wordmark.svg.png",
    website: "#",
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

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  beforeImageUrl: string;
  afterImageUrl: string;
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: "Martelinho de Ouro – Lateral",
    description: "Amassado profundo removido sem repintura, preservando a pintura original de fábrica.",
    beforeImageUrl:
      "https://images.unsplash.com/photo-1590796583326-afd3bb43d2a4?q=80&w=1974&auto=format&fit=crop",
    afterImageUrl:
      "https://images.unsplash.com/photo-1618585675271-4a37651a2579?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Polimento Técnico – Capô",
    description: "Riscos profundos e hologramas corrigidos, devolvendo o brilho espelhado à pintura.",
    beforeImageUrl:
      "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1974&auto=format&fit=crop",
    afterImageUrl:
      "https://images.unsplash.com/photo-1552857497-6953dc5d862f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Higienização Interna",
    description: "Interior completamente restaurado: bancos, carpetes e painel limpos a fundo.",
    beforeImageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1974&auto=format&fit=crop",
    afterImageUrl:
      "https://images.unsplash.com/photo-1605218427360-179267df8c1d?q=80&w=1932&auto=format&fit=crop",
  },
];

export const COMPANY = {
  name: "Automan",
  tagline: "Estética Automotiva Premium",
  address: "São José dos Campos – SP",
  phone: "+55 12 99999-9999", // TODO: substituir pelo número real
  whatsapp: "5512999999999",  // TODO: substituir pelo número real (só dígitos)
  email: "contato@automan.com.br",
  instagram: "https://instagram.com/automan",
  facebook: "https://facebook.com/automan",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.1179195308514!2d-45.88829772494088!3d-23.20237284850139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a67e58b9593%3A0x378721ccfe6ac86a!2sAuto%20Man%20Funilaria%20Artesanal%20e%20Convencional%20-%20Martelinho%20de%20Ouro!5e0!3m2!1spt-BR!2sbr!4v1768005582601!5m2!1spt-BR!2sbr",
};
