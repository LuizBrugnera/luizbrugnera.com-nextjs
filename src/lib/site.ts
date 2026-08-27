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
  caption: string;
  url: string;
  image: string;
};

export const landings: LandingDemo[] = [
  {
    slug: "turis-hotel",
    name: "Turis Hotel",
    city: "Passo Fundo",
    niche: "Hotel",
    caption:
      "Tradição no Centro desde 1954. Este protótipo põe tarifa e reserva no WhatsApp, na primeira tela — no lugar do site institucional.",
    url: "https://turis-hotel-mu.vercel.app",
    image: "/portfolio/turis-hotel.png",
  },
  {
    slug: "rio-hotel",
    name: "Rio Hotel",
    city: "Passo Fundo",
    niche: "Hotel",
    caption:
      "Centro desde 1967, 83 apartamentos. O hotel não publica tabela de diárias — este protótipo manda a pessoa falar com a recepção no WhatsApp.",
    url: "https://rio-hotel.vercel.app",
    image: "/portfolio/rio-hotel.png",
  },
  {
    slug: "ponteio-fattoria",
    name: "Ponteio Fattoria",
    city: "Lagoa Vermelha",
    niche: "Churrascaria",
    caption:
      "A casa vive no Instagram, na Capital Nacional do Churrasco. Este protótipo é a página que o anúncio deveria abrir.",
    url: "https://ponteio-fattoria.vercel.app",
    image: "/portfolio/ponteio-fattoria.png",
  },
  {
    slug: "losdos-taqueria",
    name: "LosDos Taqueria",
    city: "São Paulo · Vila Madalena",
    niche: "Restaurante",
    caption:
      "50 lugares na Harmonia. Este protótipo é a reserva no celular — não um cardápio PDF, não só o Insta.",
    url: "https://losdos-taqueria.vercel.app",
    image: "/portfolio/losdos-taqueria.png",
  },
  {
    slug: "la-rinconada",
    name: "La Rinconada",
    city: "São Paulo · Moema",
    niche: "Parrilla",
    caption:
      "Parrilla uruguaia, inauguração em 4 de setembro. Este protótipo é a reserva da abertura no WhatsApp.",
    url: "https://la-rinconada-zeta.vercel.app",
    image: "/portfolio/la-rinconada.png",
  },
  {
    slug: "joao-de-barro",
    name: "João de Barro",
    city: "Erechim",
    niche: "Churrascaria",
    caption:
      "Churrascaria e pizzaria no Bela Vista. Este protótipo tira a mesa do telefone escondido e põe o WhatsApp na cara.",
    url: "https://joao-de-barro-pi.vercel.app",
    image: "/portfolio/joao-de-barro.png",
  },
  {
    slug: "gaucho-hotel",
    name: "Gaúcho Hotel",
    city: "Tapejara",
    niche: "Hotel",
    caption:
      "Na RS-467, a 1 km da cidade. A tabela antiga do site oficial não vale mais — este protótipo consulta a diária no WhatsApp.",
    url: "https://gaucho-hotel.vercel.app",
    image: "/portfolio/gaucho-hotel.png",
  },
  {
    slug: "codex",
    name: "Codex",
    city: "São Paulo · Pinheiros",
    niche: "Restaurante",
    caption:
      "15 lugares, só sexta e sábado. Este protótipo é o pedido de reserva — a casa não confirma mesa na página.",
    url: "https://codex-two-ecru.vercel.app",
    image: "/portfolio/codex.png",
  },
  {
    slug: "clinica-paulista",
    name: "Clínica Paulista",
    city: "São Paulo · Lapa",
    niche: "Fisioterapia",
    caption:
      "Desde 2002 na Lapa. Este protótipo vai direto para o telefone: fisio por ordem de chegada, sem labirinto de especialidades.",
    url: "https://clinica-paulista.vercel.app",
    image: "/portfolio/clinica-paulista.png",
  },
  {
    slug: "churrascaria-planalto",
    name: "Churrascaria Planalto",
    city: "Passo Fundo",
    niche: "Churrascaria",
    caption:
      "Sem site oficial e sem cardápio on-line. Este protótipo é o WhatsApp da Vila Jerônimo Coelho.",
    url: "https://churrascaria-planalto.vercel.app",
    image: "/portfolio/churrascaria-planalto.png",
  },
  {
    slug: "chico-churrascaria",
    name: "Chico Churrascaria",
    city: "Passo Fundo",
    niche: "Churrascaria",
    caption:
      "O domínio oficial estava fora do ar. Este protótipo reconstrói a casa no celular, com o telefone de reserva na cara.",
    url: "https://chico-churrascaria.vercel.app",
    image: "/portfolio/chico-churrascaria.png",
  },
  {
    slug: "cheflera-estetica",
    name: "Cheflera Estética",
    city: "Passo Fundo",
    niche: "Estética",
    caption:
      "Depilação a laser, criolipólise, limpeza de pele. Este protótipo agenda pelo WhatsApp, no Centro.",
    url: "https://cheflera-estetica.vercel.app",
    image: "/portfolio/cheflera-estetica.png",
  },
  {
    slug: "checkin-pilates",
    name: "Check-in Pilates",
    city: "São Paulo · Tatuapé",
    niche: "Pilates",
    caption:
      "Aula experimental na Francisco Marengo. Este protótipo é o agendamento no WhatsApp, não a ficha do Wellhub.",
    url: "https://checkin-pilates.vercel.app",
    image: "/portfolio/checkin-pilates.png",
  },
  {
    slug: "balen-arquitetura",
    name: "Balen Arquitetura",
    city: "Passo Fundo",
    niche: "Construtora",
    caption:
      "Projeto e obra desde 1979. Este protótipo põe o telefone na primeira tela — não há WhatsApp público confirmado.",
    url: "https://balen-pi.vercel.app",
    image: "/portfolio/balen-arquitetura.png",
  },
];

export function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "");
}
