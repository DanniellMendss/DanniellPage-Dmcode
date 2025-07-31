import React from "react";
import { Code2, Rocket, Building, Trophy, Calendar } from "lucide-react";

const AboutComponent = () => {
  const timelineEvents = [
    {
      year: "2023",
      title: "Início da Jornada",
      description: "Primeiros passos no mundo da programação com HTML e CSS",
      icon: Code2,
      color: "neon-blue",
    },
    {
      year: "2024",
      title: "JavaScript & React",
      description: "Dominando JavaScript e criando aplicações com React",
      icon: Rocket,
      color: "neon-purple",
    },
    {
      year: "2025",
      title: "Projetos Freelance",
      description: "Começando a trabalhar com clientes e projetos reais",
      icon: Trophy,
      color: "neon-green",
    },
    {
      year: "2025",
      title: "DmCode Solutions",
      description: "Fundação da empresa focada em soluções digitais inovadoras",
      icon: Building,
      color: "neon-purple",
    },
    {
      year: "2025",
      title: "Full Stack Journey",
      description: "Expandindo conhecimentos para Back-end e banco de dados",
      icon: Calendar,
      color: "neon-blue",
    },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="glass p-4 xs:p-6 md:p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl xs:text-2xl font-bold text-neon-blue mb-4">
                Daniel Mendes da Silva
              </h3>
              <p className="text-gray-300 text-sm xs:text-base leading-relaxed mb-4">
                Sou um desenvolvedor Front-end movido por propósito e paixão.
                Minha jornada na programação não começou por acaso, mas por
                necessidade — quando precisei encontrar uma forma honesta de
                sustentar minha família. Aquela busca por sobrevivência
                despertou em mim uma paixão genuína por tecnologia, design e a
                incrível capacidade de transformar vidas por meio do digital.
              </p>
              <p className="text-gray-300 text-sm xs:text-base leading-relaxed">
                Sei que ainda estou no início da caminhada, mas carrego dentro
                de mim uma vontade imensa de conquistar meu espaço no mercado e
                mostrar o meu valor. Cada desafio que enfrento é uma chance de
                aprender, evoluir e deixar minha marca no mundo.
              </p>
              <br />
              <p className="text-gray-300 text-sm xs:text-base leading-relaxed">
                Apesar de muitas portas terem se fechado na minha cara, sigo em
                pé, com fé e determinação. Acredito que, pela graça de Deus,
                ainda verei a vitória chegar. Quero alcançar meus objetivos e
                proporcionar uma vida digna e confortável para minha família —
                hoje composta por minha esposa e duas filhas, que são minha
                maior motivação. Estou em busca da minha primeira grande
                oportunidade, e sei que ela virá.
              </p>
              <br />
              <p className="text-gray-300 text-sm xs:text-base leading-relaxed mb-4">
                Como fundador da{" "}
                <span className="text-neon-purple font-semibold">
                  DmCode Solutions
                </span>
                , acredito que a tecnologia deve ser acessível e transformadora.
                Cada projeto é uma oportunidade de criar algo que impacte
                positivamente a vida das pessoas.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 xs:gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-lg xs:text-2xl font-bold text-neon-blue">
                    1+
                  </div>
                  <div className="text-xs xs:text-sm text-gray-400">
                    Anos de Código
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg xs:text-2xl font-bold text-neon-purple">
                    5+
                  </div>
                  <div className="text-xs xs:text-sm text-gray-400">
                    Projetos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg xs:text-2xl font-bold text-neon-green">
                    1
                  </div>
                  <div className="text-xs xs:text-sm text-gray-400">
                    Empresa
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative mt-10 lg:mt-0">
            <div className="absolute left-4 xs:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green opacity-30"></div>

            <div className="space-y-6 xs:space-y-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-2 xs:space-x-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
                  tabIndex={0}
                  aria-label={`Evento da timeline: ${event.title} (${event.year})`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`relative z-10 w-10 xs:w-16 h-10 xs:h-16 rounded-full bg-gradient-to-r from-${event.color} to-neon-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <event.icon
                      size={20}
                      className="xs:size-6 text-dark-primary"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass p-3 xs:p-6 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center space-x-2 xs:space-x-3 mb-2">
                      <span
                        className={`text-xs xs:text-sm font-bold px-2 xs:px-3 py-1 rounded-full bg-${event.color}/20 text-${event.color}`}
                      >
                        {event.year}
                      </span>
                    </div>
                    <h4 className="text-base xs:text-lg font-semibold text-white mb-2">
                      {event.title}
                    </h4>
                    <p className="text-gray-400 text-xs xs:text-sm leading-relaxed">
                      {event.description}
                    </p>
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

const About = React.memo(AboutComponent);
export default About;
