export const WHATSAPP_NUMBER = "555499276395";

export const WHATSAPP_MESSAGE =
  "Olá Luiz, vi o site e quero uma landing page para o meu negócio.";

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const EMAIL = "luiz.r.brugnera@gmail.com";
export const GITHUB_URL = "https://github.com/LuizBrugnera";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/luiz-ricardo-brugnera-8b6810236/";

export type Experience = {
  company: string;
  period: string;
  current: boolean;
};

export const experience: Experience[] = [
  {
    company: "Tissage",
    period: "2025–2026",
    current: true,
  },
  {
    company: "Zeeway",
    period: "2025–2026",
    current: false,
  },
];

export type LandingDemo = {
  slug: string;
  name: string;
  city: string;
  niche: string;
  result: string;
  url: string;
  image: string;
};

export const landings: LandingDemo[] = [
  {
    slug: "turis-hotel",
    name: "Turis Hotel",
    city: "Passo Fundo",
    niche: "Hotel",
    result:
      "Protótipo no lugar de site antigo ou inexistente — reserva pelo WhatsApp, no celular.",
    url: "https://turis-hotel-mu.vercel.app",
    image: "/portfolio/turis-hotel.png",
  },
  {
    slug: "rio-hotel",
    name: "Rio Hotel",
    city: "Passo Fundo",
    niche: "Hotel",
    result:
      "Protótipo no lugar de site antigo ou inexistente — reserva pelo WhatsApp, no celular.",
    url: "https://rio-hotel.vercel.app",
    image: "/portfolio/rio-hotel.png",
  },
  {
    slug: "ponteio-fattoria",
    name: "Ponteio Fattoria",
    city: "Lagoa Vermelha",
    niche: "Churrascaria",
    result:
      "Protótipo no lugar de site antigo ou inexistente — mesa pelo WhatsApp, no celular.",
    url: "https://ponteio-fattoria.vercel.app",
    image: "/portfolio/ponteio-fattoria.png",
  },
  {
    slug: "losdos-taqueria",
    name: "LosDos Taqueria",
    city: "São Paulo · Vila Madalena",
    niche: "Restaurante",
    result:
      "Protótipo no lugar de site antigo ou inexistente — pedido e contato pelo WhatsApp.",
    url: "https://losdos-taqueria.vercel.app",
    image: "/portfolio/losdos-taqueria.png",
  },
  {
    slug: "la-rinconada",
    name: "La Rinconada",
    city: "São Paulo · Moema",
    niche: "Parrilla",
    result:
      "Protótipo no lugar de site antigo ou inexistente — reserva pelo WhatsApp, no celular.",
    url: "https://la-rinconada-zeta.vercel.app",
    image: "/portfolio/la-rinconada.png",
  },
  {
    slug: "joao-de-barro",
    name: "João de Barro",
    city: "Erechim",
    niche: "Churrascaria",
    result:
      "Protótipo no lugar de site antigo ou inexistente — mesa pelo WhatsApp, no celular.",
    url: "https://joao-de-barro-pi.vercel.app",
    image: "/portfolio/joao-de-barro.png",
  },
  {
    slug: "gaucho-hotel",
    name: "Gaúcho Hotel",
    city: "Tapejara",
    niche: "Hotel",
    result:
      "Protótipo no lugar de site antigo ou inexistente — reserva pelo WhatsApp, no celular.",
    url: "https://gaucho-hotel.vercel.app",
    image: "/portfolio/gaucho-hotel.png",
  },
  {
    slug: "codex",
    name: "Codex",
    city: "São Paulo · Pinheiros",
    niche: "Restaurante",
    result:
      "Protótipo no lugar de site antigo ou inexistente — pedido e contato pelo WhatsApp.",
    url: "https://codex-two-ecru.vercel.app",
    image: "/portfolio/codex.png",
  },
  {
    slug: "clinica-paulista",
    name: "Clínica Paulista",
    city: "São Paulo · Lapa",
    niche: "Fisioterapia",
    result:
      "Protótipo no lugar de site antigo ou inexistente — agendamento pelo WhatsApp.",
    url: "https://clinica-paulista.vercel.app",
    image: "/portfolio/clinica-paulista.png",
  },
  {
    slug: "churrascaria-planalto",
    name: "Churrascaria Planalto",
    city: "Passo Fundo",
    niche: "Churrascaria",
    result:
      "Protótipo no lugar de site antigo ou inexistente — mesa pelo WhatsApp, no celular.",
    url: "https://churrascaria-planalto.vercel.app",
    image: "/portfolio/churrascaria-planalto.png",
  },
  {
    slug: "chico-churrascaria",
    name: "Chico Churrascaria",
    city: "Passo Fundo",
    niche: "Churrascaria",
    result:
      "Protótipo no lugar de site antigo ou inexistente — mesa pelo WhatsApp, no celular.",
    url: "https://chico-churrascaria.vercel.app",
    image: "/portfolio/chico-churrascaria.png",
  },
  {
    slug: "cheflera-estetica",
    name: "Cheflera Estética",
    city: "Passo Fundo",
    niche: "Estética",
    result:
      "Protótipo no lugar de site antigo ou inexistente — agendamento pelo WhatsApp.",
    url: "https://cheflera-estetica.vercel.app",
    image: "/portfolio/cheflera-estetica.png",
  },
  {
    slug: "checkin-pilates",
    name: "Check-in Pilates",
    city: "São Paulo · Tatuapé",
    niche: "Pilates",
    result:
      "Protótipo no lugar de site antigo ou inexistente — aula experimental pelo WhatsApp.",
    url: "https://checkin-pilates.vercel.app",
    image: "/portfolio/checkin-pilates.png",
  },
  {
    slug: "balen-arquitetura",
    name: "Balen Arquitetura",
    city: "Passo Fundo",
    niche: "Construtora",
    result:
      "Protótipo no lugar de site antigo ou inexistente — contato pelo WhatsApp, no celular.",
    url: "https://balen-pi.vercel.app",
    image: "/portfolio/balen-arquitetura.png",
  },
];
