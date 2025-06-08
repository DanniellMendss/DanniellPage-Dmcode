
import React from 'react';
import { Code2, Rocket, Building, Trophy, Calendar } from 'lucide-react';

const About = () => {
  const timelineEvents = [
    {
      year: '2020',
      title: 'Início da Jornada',
      description: 'Primeiros passos no mundo da programação com HTML e CSS',
      icon: Code2,
      color: 'neon-blue'
    },
    {
      year: '2021',
      title: 'JavaScript & React',
      description: 'Dominando JavaScript e criando aplicações com React',
      icon: Rocket,
      color: 'neon-purple'
    },
    {
      year: '2022',
      title: 'Projetos Freelance',
      description: 'Começando a trabalhar com clientes e projetos reais',
      icon: Trophy,
      color: 'neon-green'
    },
    {
      year: '2023',
      title: 'DmCode Solutions',
      description: 'Fundação da empresa focada em soluções digitais inovadoras',
      icon: Building,
      color: 'neon-pink'
    },
    {
      year: '2024',
      title: 'Full Stack Journey',
      description: 'Expandindo conhecimentos para Back-end e banco de dados',
      icon: Calendar,
      color: 'neon-blue'
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-secondary/30">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça minha trajetória e paixão pela tecnologia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-neon-blue mb-4">Daniel Mendes da Silva</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Sou um desenvolvedor Front-end apaixonado por criar experiências digitais que fazem a diferença. 
                Minha jornada começou com curiosidade e evoluiu para uma paixão genuína por tecnologia e inovação.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Como fundador da <span className="text-neon-purple font-semibold">DmCode Solutions</span>, 
                acredito que a tecnologia deve ser acessível e transformadora. Cada projeto é uma oportunidade 
                de criar algo que impacte positivamente a vida das pessoas.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Atualmente, estou expandindo meus horizontes para o universo Back-end, sempre em busca 
                de me tornar um desenvolvedor Full Stack completo e versátil.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-blue">3+</div>
                  <div className="text-sm text-gray-400">Anos de Código</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple">25+</div>
                  <div className="text-sm text-gray-400">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-green">1</div>
                  <div className="text-sm text-gray-400">Empresa</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green opacity-30"></div>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start space-x-4 group">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-${event.color} to-neon-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <event.icon size={24} className="text-dark-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 glass p-6 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full bg-${event.color}/20 text-${event.color}`}>
                        {event.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{event.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
