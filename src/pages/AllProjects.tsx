
import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Filter, Calendar, Code2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { projects } from "@/lib/projects";
import { Helmet } from "react-helmet-async";

const AllProjects = () => {
  // Remover filtros
  // const [activeFilter, setActiveFilter] = useState('Todos');

  // const filters = ['Todos', 'React', 'JavaScript', 'Node.js'];

  const filteredProjects = projects;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': return 'text-neon-green';
      case 'Em desenvolvimento': return 'text-neon-blue';
      default: return 'text-gray-400';
    }
  };

  return (
    <>
      <Helmet>
        <title>Projetos | Daniel Mendes - DmCode Solutions</title>
        <meta name="description" content="Veja todos os projetos desenvolvidos por Daniel Mendes, especialista em React, TypeScript e soluções digitais modernas." />
        <meta property="og:title" content="Projetos | Daniel Mendes - DmCode Solutions" />
        <meta property="og:description" content="Veja todos os projetos desenvolvidos por Daniel Mendes, especialista em React, TypeScript e soluções digitais modernas." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projetos | Daniel Mendes - DmCode Solutions" />
        <meta name="twitter:description" content="Veja todos os projetos desenvolvidos por Daniel Mendes, especialista em React, TypeScript e soluções digitais modernas." />
        <meta name="twitter:image" content="/favicon.ico" />
      </Helmet>
      <div className="min-h-screen bg-dark-primary text-white overflow-x-hidden">
        <Header />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-10 w-32 h-32 bg-neon-blue rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-neon-purple rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container-custom mx-auto relative z-10">
              {/* Back Button */}
              <Button
                variant="outline"
                className="mb-8 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-primary"
                onClick={() => window.history.back()}
              >
                <ArrowLeft size={16} className="mr-2" />
                Voltar para Home
              </Button>

              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="gradient-text">Todos os Projetos</span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-neon-purple to-neon-green mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                  Explore minha jornada através dos projetos que desenvolvi ao longo da carreira
                </p>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="glass p-6 rounded-xl border border-neon-blue/30 text-center">
                  <div className="text-3xl font-bold text-neon-blue mb-2">{projects.length}</div>
                  <p className="text-gray-400">Projetos Totais</p>
                </div>
                <div className="glass p-6 rounded-xl border border-neon-green/30 text-center">
                  <div className="text-3xl font-bold text-neon-green mb-2">
                    {projects.filter(p => p.status === 'Concluído').length}
                  </div>
                  <p className="text-gray-400">Concluídos</p>
                </div>
                <div className="glass p-6 rounded-xl border border-neon-purple/30 text-center">
                  <div className="text-3xl font-bold text-neon-purple mb-2">
                    {projects.filter(p => p.status === 'Em desenvolvimento').length}
                  </div>
                  <p className="text-gray-400">Em Desenvolvimento</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="section-padding">
            <div className="container-custom mx-auto">
              {/* Remover o bloco de botões de filtro */}
              {/* Filter Buttons */}
              {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filters.map((filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? "default" : "outline"}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === filter
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple shadow-neon-blue/30'
                      : 'border-gray-600 text-gray-400 hover:border-neon-blue hover:text-neon-blue'
                      }`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    <Filter size={16} className="mr-2" />
                    {filter}
                  </Button>
                ))}
              </div> */}

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="glass rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 focus-within:ring-2 focus-within:ring-neon-blue hover:scale-[1.01] hover:shadow-md"
                    tabIndex={-1}
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title || 'Imagem do projeto'}
                        loading="lazy"
                        className="w-full h-48 object-cover transition-transform duration-500 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                        tabIndex={0}
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-neon-green to-neon-blue px-3 py-1 rounded-full text-xs font-semibold text-dark-primary">
                          Destaque
                        </div>
                      )}
                      <div className="absolute top-4 right-4 glass px-2 py-1 rounded-full">
                        <span className={`text-xs font-medium ${getStatusColor(project.status || '')}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      {/* Project Meta */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Calendar size={12} />
                          <span>{project.year}</span>
                          <span>•</span>
                          <span>{project.duration}</span>
                        </div>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Code2 size={12} className="mr-1" />
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
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

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-xs"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink size={14} className="mr-1" />
                          Ver Projeto
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AllProjects;
