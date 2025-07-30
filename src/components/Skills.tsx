// Importações de bibliotecas e ícones
import React, { useState, useEffect } from "react";
import { Code2, Zap } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiVscodium,
  SiFirebase,
  SiNextdotjs,
  SiDocker,
  SiAmazon,
  SiPython,
  SiReactivex,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Componente principal de Skills & Tecnologias
const SkillsComponent = () => {
  // Estado para animação de visibilidade
  const [isVisible, setIsVisible] = useState(false);

  // Efeito para ativar animação ao entrar na tela
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById("skills");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Lista de tecnologias principais com ícones, cor e tempo de experiência
  const technologies = [
    {
      name: "React",
      icon: <SiReact className="text-cyan-400" />,
      years: "1+ ano",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      years: "1+ ano",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      years: "1+ ano",
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="text-orange-500" />,
      years: "2+ anos",
    },
    {
      name: "CSS3",
      icon: <SiCss3 className="text-blue-400" />,
      years: "2+ anos",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-300" />,
      years: "1+ ano",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500" />,
      years: "8 meses",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-700" />,
      years: "6 meses",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" />,
      years: "5 meses",
    },
    {
      name: "Git",
      icon: <SiGit className="text-orange-400" />,
      years: "1+ anos",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="text-white" />,
      years: "2+ anos",
    },
    {
      name: "Figma",
      icon: <SiFigma className="text-pink-500" />,
      years: "1+ ano",
    },
    {
      name: "VS Code",
      icon: <SiVscodium className="text-blue-400" />,
      years: "3+ anos",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500" />,
      years: "8 meses",
    },
  ];

  return (
    // Seção principal de Skills
    <section
      id="skills"
      className="section-padding bg-dark-secondary/30 relative overflow-hidden"
    >
      {/* Efeitos de fundo animados */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-blue rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-neon-purple rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-neon-green rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Container centralizado */}
      <div className="container-custom mx-auto relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-4 glass px-4 py-2 rounded-full border border-neon-blue/30">
            <Code2 className="text-neon-blue" size={20} />
            <span className="text-neon-blue font-medium">
              Expertise Técnica
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Skills & Tecnologias</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Minhas habilidades técnicas desenvolvidas ao longo da jornada como
            desenvolvedor
          </p>
        </div>

        {/* Grid de Tecnologias principais */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-neon-blue mb-8">
            Tecnologias
          </h3>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 xs:gap-6">
            {technologies.map((tech, idx) => (
              // Tooltip acessível para cada tecnologia
              <Tooltip key={tech.name}>
                <TooltipTrigger asChild>
                  <div
                    className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-3 xs:p-4 md:p-6 hover:bg-neon-blue/10 focus:bg-neon-blue/20 transition-all duration-300 shadow group focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue min-w-0"
                    tabIndex={0}
                    aria-label={`Tecnologia ${tech.name}, ${tech.years} de experiência`}
                  >
                    {/* Ícone da tecnologia */}
                    <span className="text-2xl xs:text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </span>
                    {/* Nome da tecnologia */}
                    <span className="text-xs xs:text-sm md:text-base text-gray-200 font-semibold group-hover:text-neon-blue transition-colors duration-300 text-center break-words">
                      {tech.name}
                    </span>
                    {/* Tempo de experiência */}
                    <span className="text-[10px] xs:text-xs text-gray-400 mt-1">
                      {tech.years}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">
                  {tech.name} - {tech.years} de experiência
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Seção de tecnologias atualmente aprendidas */}
        <div className="glass p-4 xs:p-6 md:p-10 rounded-3xl border border-neon-purple/30 bg-gradient-to-r from-neon-purple/5 to-neon-blue/5 relative overflow-hidden mt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-transparent to-neon-blue/5"></div>
          <div className="text-center relative z-10">
            {/* Título da seção */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Zap
                className="text-neon-purple animate-bounce-subtle"
                size={28}
              />
              <h3 className="text-3xl font-bold text-neon-purple">
                Atualmente Aprendendo
              </h3>
              <Zap
                className="text-neon-purple animate-bounce-subtle"
                size={28}
              />
            </div>
            {/* Grid de tecnologias em aprendizado */}
            <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-6 gap-4 xs:gap-6 mb-8">
              {[
                {
                  name: "Next.js",
                  icon: <SiNextdotjs className="text-gray-200" />,
                  desc: "Framework React para SSR e SSG",
                },
                {
                  name: "Docker",
                  icon: <SiDocker className="text-blue-400" />,
                  desc: "Containers e DevOps",
                },
                {
                  name: "AWS",
                  icon: <SiAmazon className="text-yellow-400" />,
                  desc: "Cloud Computing",
                },
                {
                  name: "PostgreSQL",
                  icon: <SiPostgresql className="text-blue-700" />,
                  desc: "Banco de dados relacional",
                },
                {
                  name: "Python",
                  icon: <SiPython className="text-yellow-400" />,
                  desc: "Linguagem de programação",
                },
                {
                  name: "React Native",
                  icon: <SiReactivex className="text-cyan-400" />,
                  desc: "Apps mobile com React",
                },
              ].map((tech, index) => (
                // Tooltip acessível para cada tecnologia em aprendizado
                <Tooltip key={tech.name}>
                  <TooltipTrigger asChild>
                    <div
                      className="flex flex-col items-center space-y-2 xs:space-y-3 bg-white/5 border border-neon-purple/30 p-3 xs:p-4 md:p-6 rounded-2xl hover:bg-neon-purple/10 transition-all duration-300 hover:scale-105 hover:border-neon-purple/50 group focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple min-w-0"
                      tabIndex={0}
                      aria-label={`Aprendendo: ${tech.name}`}
                    >
                      {/* Ícone */}
                      <span className="text-2xl xs:text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </span>
                      {/* Nome */}
                      <span className="text-xs xs:text-sm md:text-base text-gray-300 font-semibold group-hover:text-neon-purple transition-colors duration-300 text-center break-words">
                        {tech.name}
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top">{tech.desc}</TooltipContent>
                </Tooltip>
              ))}
            </div>
            {/* Mensagem motivacional */}
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Sempre em busca de novas tecnologias e tendências para oferecer as
              melhores soluções aos meus projetos.
              <br />
              <span className="text-neon-purple font-semibold">
                Em constante evolução tecnológica.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exportação do componente memoizado para performance
const Skills = React.memo(SkillsComponent);
export default Skills;
