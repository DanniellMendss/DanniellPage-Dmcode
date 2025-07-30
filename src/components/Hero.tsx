import React, { useState, useEffect } from "react";
import { ExternalLink, Mail, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Imagelogo from "../Img/danniell1.png";

// Componente Hero: seção principal do topo do portfólio
const Hero = () => {
  // Estado para efeito de máquina de escrever
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Transformo ideias em experiências digitais.";

  // Efeito para animar o texto letra por letra
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  // Mensagens motivacionais rotativas
  const motivationalMessages = [
    "Código é arte, arte é código",
    "Inovação através da tecnologia",
    "Código é poesia, cada linha é uma nota",
    "Código é a linguagem da inovação",
    "Tudo parece impossível até que seja feito",
    "Where ideas become reality",
  ];
  const totalMessages = motivationalMessages.length;

  // Estado para controlar a mensagem atual
  const [currentMessage, setCurrentMessage] = useState(0);

  // Efeito para trocar a mensagem motivacional a cada 4 segundos
  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % totalMessages);
    }, 4000);
    return () => clearInterval(messageTimer);
  }, [totalMessages]);

  // Função para rolar até a seção de projetos
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Função para rolar até a seção de contato
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Bolinhas decorativas animadas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 w-3 h-3 bg-neon-blue rounded-full animate-float opacity-60" />
        <div className="absolute top-48 right-20 w-2 h-2 bg-neon-purple rounded-full animate-bounce-subtle opacity-80" />
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-neon-green rounded-full animate-float opacity-40 delay-[1000ms]" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-neon-blue rounded-full animate-bounce-subtle opacity-70 delay-[2000ms]" />
        <div className="absolute bottom-32 right-10 w-3 h-3 bg-neon-purple rounded-full animate-float opacity-50 delay-[1500ms]" />
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-neon-green rounded-full animate-bounce-subtle opacity-60 delay-[3000ms]" />
        <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-neon-blue rounded-full animate-float opacity-40 delay-[2500ms]" />
      </div>

      {/* Conteúdo principal centralizado */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Texto do lado esquerdo */}
          <div className="flex-1 text-center lg:text-left">
            {/* Mensagem motivacional rotativa */}
            <div className="mb-6 h-8">
              <div className="glass px-5 py-2 rounded-full border border-neon-blue/30 inline-block">
                <p className="text-sm md:text-base text-neon-blue font-space-mono font-medium transition-all duration-500">
                  {motivationalMessages[currentMessage]}
                </p>
              </div>
            </div>

            {/* Cabeçalho principal com animação */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-300">
              <span className="block mb-2">Olá, eu sou</span>
              <span className="gradient-text block mb-4 neon-text">
                Daniel Mendes
              </span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-300">
                {typewriterText}
                <span className="animate-pulse text-neon-blue ml-1">|</span>
              </span>
            </h1>

            {/* Descrição do desenvolvedor */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Desenvolvedor Front-end apaixonado por criar interfaces modernas.
              <br className="hidden md:block" />
              Explorando o universo Back-end e fundador da
              <span className="text-neon-purple font-semibold">
                {" "}
                DmCode Solutions
              </span>
            </p>

            {/* Status atual */}
            <div className="inline-flex items-center glass px-6 py-3 rounded-full mb-10 border border-neon-green/30 bg-neon-green/5">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse mr-3" />
              <span className="text-sm md:text-base text-neon-green font-semibold">
                🚀 Em transição para Full Stack
              </span>
            </div>

            {/* Botões de ação responsivos */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-neon-blue/50 px-8 py-4 text-lg font-bold rounded-full relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
                onClick={scrollToProjects}
                aria-label="Ver portfólio de projetos"
              >
                <span className="relative z-10 flex items-center">
                  <ExternalLink
                    className="mr-3 group-hover:animate-bounce-subtle"
                    size={20}
                  />
                  Projetos
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full blur-xl" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-primary transform hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-neon-green/50 px-8 py-4 text-lg font-bold rounded-full relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-green"
                onClick={scrollToContact}
                aria-label="Ir para contato rápido"
              >
                <span className="relative z-10 flex items-center">
                  <Mail
                    className="mr-3 group-hover:animate-bounce-subtle"
                    size={20}
                  />
                  Contato Rápido
                </span>
                <div className="absolute inset-0 bg-neon-green opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full" />
              </Button>
            </div>
          </div>

          {/* Imagem do avatar com responsividade */}
          <div className="flex-1 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem]">
              <div className="rounded-full bg-dark-primary flex items-center justify-center overflow-hidden border-4 border-gray-300 shadow-xl w-full h-full">
                <img
                  src={Imagelogo}
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Ícones decorativos ao redor do avatar */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-green rounded-full animate-bounce-subtle border-2 border-dark-primary flex items-center justify-center">
                <Code2 size={12} className="text-dark-primary" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-neon-blue rounded-full animate-pulse border-2 border-dark-primary flex items-center justify-center">
                <Sparkles size={10} className="text-dark-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
