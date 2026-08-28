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

export const timeline = [
  {
    year: "2021",
    title: "Iniciou a faculdade no IFSUL - Passo Fundo",
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
      "Após um ano de aprendizado, fui selecionado para uma bolsa para desenvolverdor, nela foi feito um projeto React e Node.js com foco em acessibilidade do usuário.",
    achievements: [
      "Desenvolvi uma API RESTful com Node.js",
      "Implementei testes automatizados em projetos existentes",
      "Aprendi a trabalhar em um codigo com varios desenvolvedores",
    ],
  },
  {
    year: "2023",
    title:
      "Entrei como estagiário de desenvolvimento REACT | NODE.JS | SCRUM na COMPASS ",
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
    title: "Entrei como desenvolvedor full stack na TWO COMMERCE",
    description:
      "Meu trabalho no projeto de agendamento via whatsapp SCHEDY, nele consegui muitas experiências com desenvolvimento full stack com Node.js e NestJS.",
    achievements: [
      "Participei de decisões arquiteturais do projeto",
      "Implementei práticas de DevOps o deploy na AWS",
      "Aprendi bastante ao implementar filas, cron jobs, autenticação, gerenciamento de seções, etc...",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, featuring real-time inventory management, user authentication, and integrated payment processing.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "https://example-ecommerce.com",
    githubLink: "https://github.com/username/ecommerce-platform",
  },
  {
    id: 2,
    title: "Administração de histórico de Pacientes App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Firebase", "TailwindCSS", "Material-UI"],
    demoLink:
      "https://patient-history-8hk4q7gl7-diabosmais22gmailcoms-projects.vercel.app/",
    githubLink: "https://github.com/LuizBrugnera/patient-history",
  },
  {
    id: 3,
    title: "Weather Forecast Dashboard",
    description:
      "An interactive weather dashboard that provides real-time weather data and forecasts for multiple locations.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Vue.js", "Express", "OpenWeatherMap API", "Chart.js"],
    demoLink: "https://example-weather.com",
    githubLink: "https://github.com/username/weather-dashboard",
  },
  {
    id: 4,
    title: "Social Media Analytics Tool",
    description:
      "A comprehensive analytics tool for social media managers to track engagement, growth, and campaign performance across multiple platforms.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Angular", "Django", "PostgreSQL", "D3.js"],
    demoLink: "https://example-analytics.com",
    githubLink: "https://github.com/username/social-analytics",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description:
      "A mobile-first fitness tracking application that allows users to log workouts, track progress, and set fitness goals.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React Native", "GraphQL", "Apollo", "MongoDB"],
    demoLink: "https://example-fitness.com",
    githubLink: "https://github.com/username/fitness-tracker",
  },
];
