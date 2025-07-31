// Componente de Projetos em Destaque
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

const ProjectsComponent = () => {
  // Seleciona apenas os 3 projetos em destaque
  const filteredProjects = projects.filter((p) => p.featured).slice(0, 6);

  return (
    // Seção principal dos projetos
    <section id="projects" className="section-padding">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projetos em Destaque</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-green mx-auto mb-6"></div>
          <p className="text-base xs:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi com paixão e dedicação
          </p>
        </div>

        {/* Grid responsivo dos projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 focus-within:ring-2 focus-within:ring-neon-blue hover:scale-[1.01] hover:shadow-md"
              tabIndex={-1}
            >
              {/* Imagem do projeto */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title || "Imagem do projeto"}
                  loading="lazy"
                  className="w-full h-48 object-cover object-center transition-transform duration-500 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  tabIndex={0}
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-neon-green to-neon-blue px-3 py-1 rounded-full text-xs font-semibold text-dark-primary">
                    Destaque
                  </div>
                )}
                <div className="absolute top-4 right-4 glass px-2 py-1 rounded-full">
                  <span
                    className={`text-xs font-medium ${
                      project.status === "Concluído"
                        ? "text-neon-green"
                        : project.status === "Em desenvolvimento"
                        ? "text-neon-blue"
                        : "text-gray-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                {/* Removido overlay de hover */}
                {/* Hover Actions removido */}
              </div>

              {/* Informações do projeto */}
              <div className="p-6">
                {/* Meta do projeto */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>
                      <svg
                        width="12"
                        height="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </span>
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.duration}</span>
                  </div>
                  <span className="text-xs text-gray-500 flex items-center">
                    <svg
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 18v-1a4 4 0 0 0-8 0v1" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Botão de ação */}
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-xs text-white hover:text-white"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Ver Projeto
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão para ver todos os projetos */}
        <div className="text-center mt-10 md:mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-neon-purple text-white hover:bg-neon-purple hover:text-white px-8 py-3"
            onClick={() => (window.location.href = "/all-projects")}
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

const Projects = React.memo(ProjectsComponent);
export default Projects;
