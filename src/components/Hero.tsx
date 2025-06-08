
import React, { useState, useEffect } from 'react';
import { Download, Mail, ExternalLink, Sparkles, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Transformo ideias em experiências digitais.';
  
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

  const motivationalMessages = [
    "Código é arte, arte é código",
    "Inovação através da tecnologia",
    "Criando o futuro digital",
    "Where ideas become reality"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % motivationalMessages.length);
    }, 4000);

    return () => clearInterval(messageTimer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Enhanced Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-3 h-3 bg-neon-blue rounded-full animate-float opacity-60"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-neon-purple rounded-full animate-bounce-subtle opacity-80"></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-neon-green rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-neon-blue rounded-full animate-bounce-subtle opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-10 w-3 h-3 bg-neon-purple rounded-full animate-float opacity-50" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-neon-green rounded-full animate-bounce-subtle opacity-60" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-neon-blue rounded-full animate-float opacity-40" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container-custom mx-auto px-6 text-center relative z-10 max-w-5xl">
        {/* Enhanced Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-dark-primary flex items-center justify-center relative overflow-hidden">
                <span className="text-4xl md:text-5xl font-bold gradient-text relative z-10">DM</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-green/10 animate-pulse"></div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-green rounded-full animate-bounce-subtle border-2 border-dark-primary flex items-center justify-center">
              <Code2 size={12} className="text-dark-primary" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-neon-blue rounded-full animate-pulse border-2 border-dark-primary flex items-center justify-center">
              <Sparkles size={10} className="text-dark-primary" />
            </div>
          </div>
        </div>

        {/* Enhanced Motivational Message */}
        <div className="mb-6 h-8">
          <div className="glass px-6 py-2 rounded-full border border-neon-blue/30 inline-block">
            <p className="text-sm md:text-base text-neon-blue font-space-mono font-medium transition-all duration-500">
              {motivationalMessages[currentMessage]}
            </p>
          </div>
        </div>

        {/* Enhanced Main Heading with Typewriter Effect */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="block mb-2 text-gray-300">Olá, eu sou</span>
          <span className="gradient-text block mb-4 neon-text">Daniel Mendes</span>
          <span className="text-lg md:text-2xl lg:text-3xl text-gray-300 block font-light">
            {typewriterText}
            <span className="animate-pulse text-neon-blue ml-1">|</span>
          </span>
        </h1>

        {/* Enhanced Subtitle */}
        <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Desenvolvedor Front-end apaixonado por criar interfaces modernas. 
          <br className="hidden md:block" />
          Explorando o universo Back-end e fundador da 
          <span className="text-neon-purple font-semibold"> DmCode Solutions</span>
        </p>

        {/* Enhanced Status Badge */}
        <div className="inline-flex items-center glass px-6 py-3 rounded-full mb-10 border border-neon-green/30 bg-neon-green/5">
          <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse mr-3"></div>
          <span className="text-sm md:text-base text-neon-green font-semibold">🚀 Em transição para Full Stack</span>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-neon-blue/50 px-8 py-4 text-lg font-bold rounded-full relative overflow-hidden group"
            onClick={scrollToProjects}
          >
            <span className="relative z-10 flex items-center">
              <ExternalLink className="mr-3 group-hover:animate-bounce-subtle" size={20} />
              Ver Portfólio
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full blur-xl"></div>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-primary transform hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-neon-green/50 px-8 py-4 text-lg font-bold rounded-full relative overflow-hidden group"
            onClick={scrollToContact}
          >
            <span className="relative z-10 flex items-center">
              <Mail className="mr-3 group-hover:animate-bounce-subtle" size={20} />
              Contato Rápido
            </span>
            <div className="absolute inset-0 bg-neon-green opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
