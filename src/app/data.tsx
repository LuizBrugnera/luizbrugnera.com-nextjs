import reactIcon from "./assets/react.svg";
import nextjsIcon from "./assets/nextjs.svg";
import nodejsIcon from "./assets/node.svg";
import pythonIcon from "./assets/python.svg";
import typescriptIcon from "./assets/typescript.svg";
import javascriptIcon from "./assets/javascript.svg";
import sqlIcon from "./assets/sql.svg";
import dockerIcon from "./assets/docker.svg";

export const skills = [
  { name: "React", icon: reactIcon.src as string },
  { name: "Next.js", icon: nextjsIcon.src as string },
  { name: "Node.js", icon: nodejsIcon.src as string },
  { name: "JavaScript", icon: javascriptIcon.src as string },
  { name: "TypeScript", icon: typescriptIcon.src as string },
  { name: "Python", icon: pythonIcon.src as string },
  { name: "SQL", icon: sqlIcon.src as string },
  { name: "Docker", icon: dockerIcon.src as string },
];

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  achievements?: string[];
};

export const timeline: TimelineItem[] = [
  {
    year: "2021",
    title: "Iniciei a faculdade no IFSUL, em Passo Fundo",
    description:
      "Comecei minha jornada na faculdade, trabalhando principalmente com JavaScript e React.",
    achievements: [
      "Desenvolvi minha primeira aplicação React do zero",
      "Aprendi boas práticas de Git e trabalho em equipe",
      "Melhorei minhas soft skills e networking",
    ],
  },
  {
    year: "2022",
    title: "Entrei como bolsista de desenvolvimento no IFSUL",
    description:
      "Após um ano de aprendizado, fui selecionado para uma bolsa de desenvolvedor. Nessa bolsa desenvolvi um projeto React e Node.js com foco em acessibilidade.",
    achievements: [
      "Desenvolvi uma API RESTful com Node.js",
      "Implementei testes automatizados em projetos existentes",
      "Aprendi a trabalhar em um código com vários desenvolvedores",
    ],
  },
  {
    year: "2023",
    title:
      "Entrei como estagiário de desenvolvimento React, Node.js e Scrum na Compass",
    description:
      "Neste estágio, aprendi a trabalhar em equipes, liderar projetos e refinar minhas habilidades de desenvolvimento.",
    achievements: [
      "Arquitetei uma solução escalável usando microserviços e fiz o deploy na AWS",
      "Implementei CI/CD com GitHub Actions e Docker",
      "Consegui o certificado Cloud Practitioner na AWS",
    ],
  },
  {
    year: "2024",
    title: "Entrei como desenvolvedor full stack na Two Commerce",
    description:
      "Meu trabalho no projeto de agendamento via WhatsApp, o Schedy. Nele ganhei muita experiência com desenvolvimento full stack com Node.js e NestJS.",
    achievements: [
      "Participei de decisões arquiteturais do projeto",
      "Implementei práticas de DevOps e o deploy na AWS",
      "Aprendi bastante ao implementar filas, cron jobs, autenticação, gerenciamento de sessões, etc.",
    ],
  },
  {
    year: "2025",
    title: "Zeeway",
    description: "Trabalhei na Zeeway em 2025–2026.",
  },
  {
    year: "2026",
    title: "Tissage",
    description: "Trabalho na Tissage em 2025–2026.",
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink?: string;
};

const landingTech = ["Next.js", "Tailwind CSS"];

export const projects: Project[] = [
  {
    id: 1,
    title: "Ponteio Fattoria",
    description: "Site da churrascaria Ponteio Fattoria, em Lagoa Vermelha (RS).",
    image: "/portfolio/ponteio-fattoria.jpg",
    technologies: landingTech,
    demoLink: "https://ponteio-fattoria.vercel.app",
  },
  {
    id: 2,
    title: "Chico Churrascaria",
    description: "Site da Chico Churrascaria, em Passo Fundo (RS).",
    image: "/portfolio/chico-churrascaria.jpg",
    technologies: landingTech,
    demoLink: "https://chico-churrascaria.vercel.app",
  },
  {
    id: 3,
    title: "LosDos Taqueria",
    description: "Site da taqueria LosDos, em Vila Madalena, São Paulo.",
    image: "/portfolio/losdos-taqueria.jpg",
    technologies: landingTech,
    demoLink: "https://losdos-taqueria.vercel.app",
  },
  {
    id: 4,
    title: "Cheflera Estética e Laser",
    description: "Site da Cheflera Estética e Laser, em Passo Fundo (RS).",
    image: "/portfolio/cheflera-estetica.jpg",
    technologies: landingTech,
    demoLink: "https://cheflera-estetica.vercel.app",
  },
  {
    id: 5,
    title: "Clínica Paulista",
    description:
      "Site da Clínica Paulista de fisioterapia, na Lapa, em São Paulo.",
    image: "/portfolio/clinica-paulista.jpg",
    technologies: landingTech,
    demoLink: "https://clinica-paulista.vercel.app",
  },
  {
    id: 6,
    title: "João de Barro",
    description:
      "Site da churrascaria e pizzaria João de Barro, em Erechim (RS).",
    image: "/portfolio/joao-de-barro.jpg",
    technologies: landingTech,
    demoLink: "https://joao-de-barro-pi.vercel.app",
  },
  {
    id: 7,
    title: "Codex",
    description: "Site do restaurante Codex, em Pinheiros, São Paulo.",
    image: "/portfolio/codex.jpg",
    technologies: landingTech,
    demoLink: "https://codex-two-ecru.vercel.app",
  },
  {
    id: 8,
    title: "La Rinconada",
    description:
      "Site da churrascaria uruguaia La Rinconada, em Moema, São Paulo.",
    image: "/portfolio/la-rinconada.jpg",
    technologies: landingTech,
    demoLink: "https://la-rinconada-zeta.vercel.app",
  },
  {
    id: 9,
    title: "Cefip",
    description:
      "Site da Clínica CEFIP de pilates, RPG e fisioterapia, no Ipiranga, em São Paulo.",
    image: "/portfolio/cefip.jpg",
    technologies: landingTech,
    demoLink: "https://cefip.vercel.app",
  },
  {
    id: 10,
    title: "Churrascaria Planalto",
    description: "Site da Churrascaria Planalto, em Passo Fundo (RS).",
    image: "/portfolio/churrascaria-planalto.jpg",
    technologies: landingTech,
    demoLink: "https://churrascaria-planalto.vercel.app",
  },
  {
    id: 11,
    title: "Gaúcho Hotel",
    description: "Site do Gaúcho Hotel, em Tapejara (RS).",
    image: "/portfolio/gaucho-hotel.jpg",
    technologies: landingTech,
    demoLink: "https://gaucho-hotel.vercel.app",
  },
  {
    id: 12,
    title: "Rio Hotel",
    description: "Site do Rio Hotel, no centro de Passo Fundo (RS).",
    image: "/portfolio/rio-hotel.jpg",
    technologies: landingTech,
    demoLink: "https://rio-hotel.vercel.app",
  },
  {
    id: 13,
    title: "Turis Hotel",
    description: "Site do Turis Hotel, no centro de Passo Fundo (RS).",
    image: "/portfolio/turis-hotel.jpg",
    technologies: landingTech,
    demoLink: "https://turis-hotel-mu.vercel.app",
  },
  {
    id: 14,
    title: "Balen Arquitetura",
    description:
      "Site da Balen Arquitetura e Engenharia, em Passo Fundo (RS).",
    image: "/portfolio/balen-arquitetura.jpg",
    technologies: landingTech,
    demoLink: "https://balen-pi.vercel.app",
  },
  {
    id: 15,
    title: "Check-in Pilates",
    description:
      "Site do estúdio Check-in Pilates & Yoga, no Tatuapé, em São Paulo.",
    image: "/portfolio/checkin-pilates.jpg",
    technologies: landingTech,
    demoLink: "https://checkin-pilates.vercel.app",
  },
  {
    id: 16,
    title: "Administração de histórico de Pacientes",
    description:
      "App para registrar histórico de pacientes, tratamentos e feedbacks.",
    image: "/portfolio/patient-history.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    demoLink: "https://patient-history-seven.vercel.app",
    githubLink: "https://github.com/LuizBrugnera/patient-history",
  },
];
