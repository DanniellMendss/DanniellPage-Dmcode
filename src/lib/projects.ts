// Lista centralizada de projetos para uso em todo o app
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  year?: string;
  status?: string;
  duration?: string;
}

import Projeto1 from "@/Img/Projeto1.png";
import Projeto2 from "@/Img/Projeto2.jpeg";
import Projeto3 from "@/Img/Projeto3.jpeg";
import Projeto4 from "@/Img/Projeto4.jpeg";
import Projeto5 from "@/Img/Projeto5.png";
import Projeto6 from "@/Img/Projeto6.png";
import Projeto7 from "@/Img/Projeto7.png";
import Projeto8 from "@/Img/Projeto8.png";
import Projeto9 from "@/Img/Projeto9.jpeg";

export const projects: Project[] = [
  {
    id: 1,
    title: "Landing Page - Advogada Narriman Rocha",
    description:
      "Landing Page para a advogada Narriman Rocha, com integração com o sistema de marketing do Google, para gerenciar as vendas e o marketing digital da advogada.",
    image: Projeto1,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    category: "React",
    liveUrl: "https://narrimanrocha.com.br/",
    featured: true,
    year: "2025",
    status: "Concluído",
    duration: "10 Dias",
  },
  {
    id: 2,
    title: "Gerador de Senha",
    description:
      "Desenvolvi um gerador de senhas seguro e personalizável para quem precisa criar senhas fortes com facilidade!",
    image: Projeto2,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "JavaScript",
    liveUrl: "https://gerador-de-senha-five-weld.vercel.app/",
    featured: true,
    year: "2025",
    status: "Concluído",
    duration: "15 dias",
  },
  {
    id: 3,
    title: "Painel Informativo COVID-19",
    description:
      "Projeto para simular um painel global de monitoramento da COVID-19, com foco em design moderno, dados visuais impactantes e experiência do usuários.",
    image: Projeto3,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "JavaScript",
    liveUrl: "https://covid-19-ochre.vercel.app/",
    featured: true,
    year: "2025",
    status: "Concluído",
    duration: "1 mês",
  },
  {
    id: 4,
    title: "API RESTful",
    description:
      "API robusta para gerenciamento de usuários com autenticação JWT e banco PostgreSQL. Documentação completa com Swagger e testes automatizados.",
    image: Projeto4,
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    category: "Node.js",
    liveUrl: "#",
    featured: false,
    year: "2024",
    status: "Concluído",
    duration: "2 meses",
  },
  {
    id: 5,
    title: "App Mobile React Native",
    description:
      "Aplicativo mobile para delivery com geolocalização e pagamentos. Interface intuitiva com tracking em tempo real e notificações push.",
    image: Projeto5,
    technologies: ["React Native", "Firebase", "Maps API"],
    category: "React",
    liveUrl: "#",
    featured: false,
    year: "2024",
    status: "Concluído",
    duration: "4 meses",
  },
  {
    id: 6,
    title: "Sistema de Blog",
    description:
      "CMS personalizado para blogs com editor rico e sistema de comentários. Inclui painel administrativo e sistema de tags avançado.",
    image: Projeto6,
    technologies: ["JavaScript", "MongoDB", "Express"],
    category: "JavaScript",
    liveUrl: "#",
    featured: false,
    year: "2023",
    status: "Concluído",
    duration: "2 meses",
  },
  {
    id: 7,
    title: "Calculadora Financeira",
    description:
      "Aplicação web para cálculos financeiros complexos com visualizações gráficas. Inclui simulações de investimentos e planejamento financeiro.",
    image: Projeto7,
    technologies: ["React", "TypeScript", "Chart.js", "PWA"],
    category: "React",
    liveUrl: "#",
    featured: false,
    year: "2024",
    status: "Concluído",
    duration: "1.5 meses",
  },
  {
    id: 8,
    title: "Task Manager Pro",
    description:
      "Sistema de gerenciamento de tarefas com colaboração em equipe. Inclui notificações, deadlines, e integração com calendário.",
    image: Projeto8,
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "React",
    liveUrl: "#",
    featured: true,
    year: "2024",
    status: "Em desenvolvimento",
    duration: "3 meses",
  },
  {
    id: 9,
    title: "Weather App",
    description:
      "Aplicativo de previsão do tempo com interface moderna e dados precisos. Inclui mapas interativos e alertas meteorológicos.",
    image: Projeto9,
    technologies: ["JavaScript", "Weather API", "Maps API", "PWA"],
    category: "JavaScript",
    liveUrl: "#",
    featured: false,
    year: "2023",
    status: "Concluído",
    duration: "3 semanas",
  },
];
