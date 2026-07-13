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

// Caminhos base das imagens locais (WebP otimizado)
const IMG = "/images/AutoMan";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Martelinho de Ouro",
    description:
      "Técnica artesanal para remover amassados sem danificar a pintura original do veículo. Ideal para chuva de granizo e pequenas colisões.",
    imageUrl: `${IMG}/onix vermelho/onix-antes.webp`,
  },
  {
    id: 2,
    title: "Polimento Técnico",
    description:
      "Correção da pintura removendo riscos superficiais, manchas e hologramas, devolvendo o brilho intenso e profundidade de cor.",
    imageUrl: `${IMG}/onix vermelho/onix-depois.webp`,
  },
  {
    id: 3,
    title: "Vitrificação",
    description:
      "Proteção cerâmica de alta durabilidade que cria uma barreira contra agentes externos, facilitando a limpeza e mantendo o brilho.",
    imageUrl: `${IMG}/VW Taos/taos-depois.webp`,
  },
  {
    id: 4,
    title: "Higienização Interna",
    description:
      "Limpeza profunda e detalhada de bancos, carpetes e painéis, eliminando ácaros, fungos e odores desagradáveis.",
    imageUrl: `${IMG}/escritório/escritorio-1.webp`,
  },
];

export const PARTNERS: Partner[] = [
  {
    id: 1,
    name: "3M",
    logoUrl: "/images/AutoMan/parceiros/3m-logo.svg",
    website: "#",
  },
  {
    id: 2,
    name: "Meguiar's",
    logoUrl: "/images/AutoMan/parceiros/meguiars-logo.svg",
    website: "#",
  },
  {
    id: 3,
    name: "Vonixx",
    logoUrl: "/images/AutoMan/parceiros/vonixx-logo.svg",
    website: "#",
  },
  {
    id: 4,
    name: "Mothers",
    logoUrl: "/images/AutoMan/parceiros/mothers-logo.svg",
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
    title: "VW Taos – Funilaria Dianteira",
    description: "Para-lama e capô com amassado severo de colisão restaurados sem repintura, pintura original preservada.",
    beforeImageUrl: `${IMG}/VW Taos/taos-antes.webp`,
    afterImageUrl:  `${IMG}/VW Taos/taos-depois.webp`,
  },
  {
    id: 2,
    title: "Onix Premier – Martelinho de Ouro",
    description: "Para-choque traseiro amassado e lanterna danificada. Restauração completa com brilho espelhado no acabamento.",
    beforeImageUrl: `${IMG}/onix vermelho/onix-antes.webp`,
    afterImageUrl:  `${IMG}/onix vermelho/onix-depois.webp`,
  },
  {
    id: 3,
    title: "Honda Civic – Porta Lateral",
    description: "Amassado expressivo na porta do motorista corrigido com técnica artesanal, sem remoção da pintura original.",
    beforeImageUrl: `${IMG}/honda civic/civic-antes.webp`,
    afterImageUrl:  `${IMG}/honda civic/civic-depois.webp`,
  },
  {
    id: 4,
    title: "HB20S – Funilaria Traseira",
    description: "Colisão traseira com danos severos ao para-choque e lataria. Reconstrução completa com acabamento premium.",
    beforeImageUrl: `${IMG}/hb20/hb20-antes.webp`,
    afterImageUrl:  `${IMG}/hb20/hb20-depois.webp`,
  },
  {
    id: 5,
    title: "Kawasaki Ninja — Carenagem",
    description: "Carenagem lateral com trinca e abrasões. Restauração de plásticos e brilho com padrão de concessionária.",
    beforeImageUrl: `${IMG}/kawasaki/kawasaki-antes.webp`,
    afterImageUrl:  `${IMG}/kawasaki/kawasaki-depois.webp`,
  },
  {
    id: 6,
    title: "VW Saveiro — Funilaria Completa",
    description: "Lataria com múltiplos pontos de impacto e oxidação. Recuperação completa da carroceria com acabamento de concessionária.",
    beforeImageUrl: `${IMG}/VW saveiro/saveiro-antes.webp`,
    afterImageUrl:  `${IMG}/VW saveiro/saveiro-depois.webp`,
  },
];

export const COMPANY = {
  name: "Automan",
  tagline: "Estética Automotiva Premium",
  address: "São José dos Campos – SP",
  addressFull: "Rua Paraibuna, 1177 — São José dos Campos, SP — CEP 12245-020",
  phone: "+55 12 99999-9999", // TODO: substituir pelo número real
  whatsapp: "5512999999999",  // TODO: substituir pelo número real (só dígitos)
  email: "contato@automan.com.br",
  instagram: "https://instagram.com/automan", // TODO: substituir pelo perfil real
  facebook: "https://facebook.com/automan",   // TODO: substituir pelo perfil real
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.1179195308514!2d-45.88829772494088!3d-23.20237284850139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a67e58b9593%3A0x378721ccfe6ac86a!2sAuto%20Man%20Funilaria%20Artesanal%20e%20Convencional%20-%20Martelinho%20de%20Ouro!5e0!3m2!1spt-BR!2sbr!4v1768005582601!5m2!1spt-BR!2sbr",
};
