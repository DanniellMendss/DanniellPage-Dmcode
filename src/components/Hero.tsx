// Componente Hero: seção principal do topo do portfólio
import React, { useState, useEffect } from "react";
import { Download, Mail, ExternalLink, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Imagelogo from "../Img/danniell1.png";

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

  // Estado para controlar a mensagem atual
  const [currentMessage, setCurrentMessage] = useState(0);

  // Efeito para trocar a mensagem motivacional a cada 4 segundos
  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % motivationalMessages.length);
    }, 4000);
    return () => clearInterval(messageTimer);
  }, []);

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
    // Seção principal do Hero
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Background decorativo animado (bolinhas coloridas) */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-3 h-3 bg-neon-blue rounded-full animate-float opacity-60"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-neon-purple rounded-full animate-bounce-subtle opacity-80"></div>
        <div
          className="absolute bottom-40 left-1/4 w-4 h-4 bg-neon-green rounded-full animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-neon-blue rounded-full animate-bounce-subtle opacity-70"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 right-10 w-3 h-3 bg-neon-purple rounded-full animate-float opacity-50"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/4 left-1/3 w-1 h-1 bg-neon-green rounded-full animate-bounce-subtle opacity-60"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-20 w-2 h-2 bg-neon-blue rounded-full animate-float opacity-40"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      {/* Container centralizado do conteúdo */}
      <div className="container-custom mx-auto px-6 relative z-10 max-w-5xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Coluna Esquerda: Texto e botões */}
          <div className="flex-1 text-center md:text-left">
            {/* Mensagem motivacional animada */}
            <div className="mb-6 h-8">
              <div className="glass px-6 py-2 rounded-full border border-neon-blue/30 inline-block">
                <p className="text-sm md:text-base text-neon-blue font-space-mono font-medium transition-all duration-500">
                  {motivationalMessages[currentMessage]}
                </p>
              </div>
            </div>
            {/* Título principal */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-2 text-gray-300">Olá, eu sou</span>
              <span className="gradient-text block mb-4 neon-text">
                Daniel Mendes
              </span>
              <span className="text-lg md:text-2xl lg:text-3xl text-gray-300 block font-light">
                {typewriterText}
                <span className="animate-pulse text-neon-blue ml-1">|</span>
              </span>
            </h1>
            {/* Descrição */}
            <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
              Desenvolvedor Front-end apaixonado por criar interfaces modernas.
              <br className="hidden md:block" />
              Explorando o universo Back-end e fundador da
              <span className="text-neon-purple font-semibold">
                {" "}
                DmCode Solutions
              </span>
            </p>
            {/* Badge de status */}
            <div className="inline-flex items-center glass px-6 py-3 rounded-full mb-10 border border-neon-green/30 bg-neon-green/5">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse mr-3"></div>
              <span className="text-sm md:text-base text-neon-green font-semibold">
                🚀 Em transição para Full Stack
              </span>
            </div>
            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-neon-blue/50 px-8 py-4 text-lg font-bold rounded-full relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
                onClick={scrollToProjects}
                aria-label="Ver portfólio de projetos"
                tabIndex={0}
              >
                <span className="relative z-10 flex items-center">
                  <ExternalLink
                    className="mr-3 group-hover:animate-bounce-subtle"
                    size={20}
                  />
                  Projetos
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full blur-xl"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-primary transform hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-neon-green/50 px-8 py-4 text-lg font-bold rounded-full relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-green"
                onClick={scrollToContact}
                aria-label="Ir para contato rápido"
                tabIndex={0}
              >
                <span className="relative z-10 flex items-center">
                  <Mail
                    className="mr-3 group-hover:animate-bounce-subtle"
                    size={20}
                  />
                  Contato Rápido
                </span>
                <div className="absolute inset-0 bg-neon-green opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full"></div>
              </Button>
            </div>
          </div>
          {/* Coluna Direita: Avatar com borda e ícones decorativos */}
          <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
            <div className="relative">
              {/* Avatar com borda personalizada */}
              <div
                className="w-72 h-72 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] rounded-full bg-dark-primary flex items-center justify-center relative overflow-hidden border-4 shadow-xl"
                style={{ borderColor: "#D1D5DB" }}
              >
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
