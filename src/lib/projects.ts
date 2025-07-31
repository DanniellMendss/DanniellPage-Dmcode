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
import Projeto5 from "@/Img/Projeto5.jpeg";
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
    id: 3,
    title: "Página de Torneio de Games – Projeto Ilustrativo",
    description:
      "Uma landing page ilustrativa para promoção de torneios de gameplays! A página apresenta informações sobre o torneio, como data, hora, local, times, partidas e resultados.",
    image: Projeto4,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "JavaScript",
    liveUrl: "https://gamertorneio.vercel.app/",
    featured: true,
    year: "2025",
    status: "Concluído",
    duration: "1 mês",
  },
  {
    id: 4,
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
    id: 5,
    title: "Briefing Personalizado - Arquiteta",
    description:
      "Landing page para apresentação de briefings personalizados para arquitetos. Inclui informações sobre o projeto, orçamento, cronograma e equipe.",
    image: Projeto5,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    category: "React",
    liveUrl: "https://vivianecastro.vercel.app/",
    featured: true,
    year: "2025",
    status: "Em desenvolvimento",
    duration: "2 meses",
  },
  /*{
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
    featured: false,
    year: "2024",
    status: "Concluído",
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
  },*/
];
