
import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Filter, Calendar, Code2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Moderno',
      description: 'Plataforma completa de e-commerce com React, TypeScript e integração de pagamento. Sistema completo com carrinho, checkout, autenticação de usuários e painel administrativo.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Stripe'],
      category: 'React',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      year: '2024',
      status: 'Concluído',
      duration: '3 meses'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para análise de dados com gráficos dinâmicos e visualizações. Interface responsiva com métricas em tempo real e relatórios personalizáveis.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['React', 'Chart.js', 'API Integration', 'PostgreSQL'],
      category: 'React',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      year: '2024',
      status: 'Concluído',
      duration: '2 meses'
    },
    {
      id: 3,
      title: 'Landing Page Corporativa',
      description: 'Site institucional responsivo com design moderno e otimização SEO. Inclui formulários de contato, galeria de projetos e integração com redes sociais.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      category: 'JavaScript',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      year: '2023',
      status: 'Concluído',
      duration: '1 mês'
    },
    {
      id: 4,
      title: 'API RESTful',
      description: 'API robusta para gerenciamento de usuários com autenticação JWT e banco PostgreSQL. Documentação completa com Swagger e testes automatizados.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      category: 'Node.js',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      year: '2024',
      status: 'Concluído',
      duration: '2 meses'
    },
    {
      id: 5,
      title: 'App Mobile React Native',
      description: 'Aplicativo mobile para delivery com geolocalização e pagamentos. Interface intuitiva com tracking em tempo real e notificações push.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      technologies: ['React Native', 'Firebase', 'Maps API'],
      category: 'React',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      year: '2024',
      status: 'Em desenvolvimento',
      duration: '4 meses'
    },
    {
      id: 6,
      title: 'Sistema de Blog',
      description: 'CMS personalizado para blogs com editor rico e sistema de comentários. Inclui painel administrativo e sistema de tags avançado.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      technologies: ['JavaScript', 'MongoDB', 'Express'],
      category: 'JavaScript',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      year: '2023',
      status: 'Concluído',
      duration: '2 meses'
    },
    {
      id: 7,
      title: 'Calculadora Financeira',
      description: 'Aplicação web para cálculos financeiros complexos com visualizações gráficas. Inclui simulações de investimentos e planejamento financeiro.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Chart.js', 'PWA'],
      category: 'React',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      year: '2024',
      status: 'Concluído',
      duration: '1.5 meses'
    },
    {
      id: 8,
      title: 'Task Manager Pro',
      description: 'Sistema de gerenciamento de tarefas com colaboração em equipe. Inclui notificações, deadlines, e integração com calendário.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      category: 'React',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      year: '2024',
      status: 'Em desenvolvimento',
      duration: '3 meses'
    },
    {
      id: 9,
      title: 'Weather App',
      description: 'Aplicativo de previsão do tempo com interface moderna e dados precisos. Inclui mapas interativos e alertas meteorológicos.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['JavaScript', 'Weather API', 'Maps API', 'PWA'],
      category: 'JavaScript',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      year: '2023',
      status: 'Concluído',
      duration: '3 semanas'
    }
  ];

  const filters = ['Todos', 'React', 'JavaScript', 'Node.js'];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': return 'text-neon-green';
      case 'Em desenvolvimento': return 'text-neon-blue';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-dark-primary text-white overflow-x-hidden">
      <ScrollProgress />
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
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === filter 
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple shadow-neon-blue/30' 
                      : 'border-gray-600 text-gray-400 hover:border-neon-blue hover:text-neon-blue'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  <Filter size={16} className="mr-2" />
                  {filter}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-neon-green to-neon-blue px-3 py-1 rounded-full text-xs font-semibold text-dark-primary">
                        Destaque
                      </div>
                    )}
                    <div className="absolute top-4 right-4 glass px-2 py-1 rounded-full">
                      <span className={`text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        size="sm" 
                        className="bg-neon-blue hover:bg-neon-blue/80"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-white text-white hover:bg-white hover:text-dark-primary"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} />
                      </Button>
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

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
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
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-gray-600 text-gray-400 hover:border-neon-green hover:text-neon-green text-xs"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={14} className="mr-1" />
                        Código
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
  );
};

export default AllProjects;
