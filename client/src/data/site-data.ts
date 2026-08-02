// ============================================================
// Static site data — replaces server-side API
// ============================================================

import { publicUrl } from "@/lib/public-url";

export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  detail: {
    tagline: string;
    body: string;
    bullets: string[];
  };
}

export interface Partner {
  id: number;
  name: string;
  logoUrl: string;
  website: string;
}

// Caminhos base das imagens locais (WebP otimizado)
const IMG = publicUrl("/images/AutoMan");

export const SERVICES: Service[] = [
  {
    id: 1,
    slug: "funilaria-artesanal",
    title: "Funilaria Artesanal",
    description:
      "Técnica de Martelinho de Ouro para restaurar amassados sem repintura, preservando 100% da pintura de fábrica.",
    imageUrl: `${IMG}/onix vermelho/onix-antes.webp`,
    detail: {
      tagline: "Sem repintura. Sem perda de valor.",
      body: "A funilaria artesanal — conhecida como Martelinho de Ouro — é a técnica mais nobre da estética automotiva. Utilizamos ferramentas de precisão para empurrar a lataria de dentro para fora, eliminando amassados causados por granizo, colisões leves e manuseio inadequado. Por não envolver lixamento nem repintura, a pintura original do fabricante é totalmente preservada, o que mantém o valor de mercado do veículo e garante um resultado invisível.",
      bullets: [
        "Pintura original 100% preservada",
        "Ideal para granizo e amassados sem quebra de tinta",
        "Sem rebaixar o valor do veículo",
        "Processo limpo — sem solventes ou primers",
        "Resultado em horas, não em dias",
      ],
    },
  },
  {
    id: 2,
    slug: "funilaria-convencional",
    title: "Funilaria Convencional",
    description:
      "Reparo completo de lataria com massa, lixamento e repintura para danos onde a pintura foi comprometida.",
    imageUrl: `${IMG}/hb20/hb20-durante.webp`,
    detail: {
      tagline: "Quando o dano exige reparo completo.",
      body: "Para colisões mais severas — onde há quebra de tinta, deformação profunda ou necessidade de substituição de peças — a funilaria convencional é a solução. O processo envolve endireitamento da lataria, aplicação de massa niveladora, lixamento progressivo, aplicação de primer e repintura com tinta automotiva de alta qualidade, com cabine de pintura para acabamento profissional.",
      bullets: [
        "Reparo de colisões severas e deformações profundas",
        "Pintura com tinta automotiva em cabine",
        "Substituição de peças quando necessário",
        "Acabamento idêntico ao original de fábrica",
        "Garantia no serviço de pintura",
      ],
    },
  },
  {
    id: 3,
    slug: "polimento",
    title: "Polimento",
    description:
      "Correção e renovação da pintura removendo riscos, manchas e oxidação para devolver o brilho original.",
    imageUrl: `${IMG}/onix vermelho/onix-depois.webp`,
    detail: {
      tagline: "Brilho de showroom, sem trocar a pintura.",
      body: "O polimento técnico é o processo de desbaste e refino da camada de verniz para eliminar imperfeições como riscos finos, marcas de lavagem automática, manchas de água e oxidação superficial. Utilizamos polidores e compostos de abrasividade graduada com máquinas rotativas e de dupla ação, garantindo um acabamento espelhado e profundo sem comprometer a espessura do verniz.",
      bullets: [
        "Remove riscos superficiais e marcas de lavagem",
        "Elimina manchas de água e oxidação",
        "Corrige hologramas e swirl marks",
        "Devolve profundidade e brilho ao verniz",
        "Prepara a pintura para proteção cerâmica",
      ],
    },
  },
  {
    id: 4,
    slug: "cristalizacao",
    title: "Cristalização",
    description:
      "Proteção cerâmica de alta durabilidade que sela o verniz, facilita a limpeza e mantém o brilho por anos.",
    imageUrl: `${IMG}/VW Taos/taos-depois.webp`,
    detail: {
      tagline: "Proteção permanente. Brilho duradouro.",
      body: "A cristalização — também chamada de vitrificação ou coating cerâmico — é uma camada protetora de SiO₂ (dióxido de silício) aplicada sobre o verniz. Ela cria uma barreira dura e hidrofóbica que repele água, poeira, insetos e contaminantes químicos, tornando a limpeza muito mais fácil. O resultado é um brilho intenso e persistente que pode durar de 2 a 5 anos, dependendo do produto e das condições de uso.",
      bullets: [
        "Hidrofobia extrema — água escorrega sozinha",
        "Proteção contra UV, chuva ácida e contaminantes",
        "Duração de 2 a 5 anos",
        "Facilita lavagens futuras",
        "Intensifica profundidade e brilho da cor",
      ],
    },
  },
];

export const PARTNERS: Partner[] = [
  {
    id: 1,
    name: "3M",
    logoUrl: publicUrl("/images/AutoMan/parceiros/3m-logo.svg"),
    website: "#",
  },
  {
    id: 2,
    name: "Meguiar's",
    logoUrl: publicUrl("/images/AutoMan/parceiros/meguiars-logo.svg"),
    website: "#",
  },
  {
    id: 3,
    name: "Vonixx",
    logoUrl: publicUrl("/images/AutoMan/parceiros/vonixx-logo.svg"),
    website: "#",
  },
  {
    id: 4,
    name: "Mothers",
    logoUrl: publicUrl("/images/AutoMan/parceiros/mothers-logo.svg"),
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
  contacts: [
    {
      name: "Rafaela",
      phones: [
        { number: "+55 12 3923-8561", tel: "+551239238561" },
        { number: "+55 12 97405-9773", tel: "+5512974059773" },
      ],
      whatsapp: "5512974059773",
    },
    {
      name: "Rogério",
      phones: [
        { number: "+55 12 3941-6160", tel: "+551239416160" },
        { number: "+55 12 97403-3720", tel: "+5512974033720" },
      ],
      whatsapp: "5512974033720",
    },
  ],
  email: "automan.oficina@gmail.com",
  instagram: "https://www.instagram.com/automanoficina/",
  facebook: "https://www.facebook.com/AutoManMartelinhoDeOuro?locale=pt_BR",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.1179195308514!2d-45.88829772494088!3d-23.20237284850139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a67e58b9593%3A0x378721ccfe6ac86a!2sAuto%20Man%20Funilaria%20Artesanal%20e%20Convencional%20-%20Martelinho%20de%20Ouro!5e0!3m2!1spt-BR!2sbr!4v1768005582601!5m2!1spt-BR!2sbr",
};
