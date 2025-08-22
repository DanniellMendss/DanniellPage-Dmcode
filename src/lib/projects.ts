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
    title: "Catalogo Otton Cristais",
    description:
      "Catálogo interativo de cristais e pedras preciosas, com informações detalhadas sobre cada item, incluindo propriedades, usos e imagens de alta qualidade. O catálogo é responsivo e otimizado para dispositivos móveis, proporcionando uma experiência de usuário fluida e intuitiva.",
    image: Projeto7,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "React",
    liveUrl: "https://otton-cristais.vercel.app",
    featured: true,
    year: "2024",
    status: "Concluído",
    duration: "20 dias",
  },
  {
    id: 2,
    title: "Landing Page - Advogada Narriman Rocha",
    description:
      "Landing Page para a advogada Narriman Rocha, com integração com o sistema de marketing do Google, para gerenciar as vendas e o marketing digital da advogada. ",
    image: Projeto1,
    technologies: ["React", "TypeScript", "Tailwind CSS", "node-js"],
    category: "React",
    liveUrl: "https://narrimanrocha.com.br/",
    featured: true,
    year: "2025",
    status: "Concluído",
    duration: "Concluído em 10 dias",
  },
  {
    id: 3,
    title: "Briefing Personalizado - Arquiteta",
    description:
      "Landing page para apresentação de briefings personalizados para arquitetos. Inclui informações sobre o projeto, orçamento, cronograma e equipe.",
    image: Projeto5,
    technologies: ["React", "TypeScript", "Tailwind CSS", "node-js"],
    category: "React",
    liveUrl: "https://vivianecastro.vercel.app/",
    featured: true,
    year: "2025",
    status: "Pausado",
    duration: "Projeto Pausado",
  },
  {
    id: 4,
    title: "Painel Informativo COVID-19",
    description:
      "Projeto para simular um painel global de monitoramento da COVID-19, com dados visuais impactantes e experiência do usuário. O painel apresenta informações em tempo real sobre o número de casos, mortes, recuperados e ativos por país, bem como gráficos interativos para visualizar tendências.",
    image: Projeto3,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "JavaScript",
    liveUrl: "https://covid-19-ochre.vercel.app/",
    featured: false,
    year: "2025",
    status: "Concluído",
    duration: "Concluído em 20 dias",
  },
  {
    id: 5,
    title: "Página de Torneio de Games – Projeto Ilustrativo",
    description:
      "Uma landing page ilustrativa para promoção de torneios de gameplays! A página apresenta informações sobre o torneio, como data, hora, local, times, partidas e resultados.",
    image: Projeto4,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "JavaScript",
    liveUrl: "https://gamertorneio.vercel.app/",
    featured: false,
    year: "2025",
    status: "Concluído",
    duration: "Concluído em 1 mês",
  },
  {
    id: 6,
    title: "Gerador de Senha",
    description:
      "Desenvolvi um gerador de senhas seguro e personalizável para quem precisa criar senhas fortes com facilidade!",
    image: Projeto2,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "JavaScript",
    liveUrl: "https://gerador-de-senha-five-weld.vercel.app/",
    featured: false,
    year: "2025",
    status: "Concluído",
    duration: "Concluído em 15 dias",
  },
  {
    id: 7,
    title: "Saúde Digital dos PCs",
    description:
      "Aplicação web para monitoramento da saúde dos PCs, com dados em tempo real e alertas personalizados. Inclui painel administrativo e sistema de tags avançado.",
    image: Projeto6,
    technologies: ["JavaScript", "PostgreSQL", "Express"],
    category: "Node.js",
    liveUrl: "#",
    featured: false,
    year: "2025",
    status: "Em desenvolvimento",
    duration: "Atualmente desenvolvendo",
  },

  /*  Comentado para não exibir no momento
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
