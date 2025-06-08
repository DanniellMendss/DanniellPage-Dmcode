
import React from 'react';
import { MessageCircle, Rocket, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-r from-dark-primary via-dark-secondary to-dark-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-blue rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-neon-purple rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-neon-green rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom mx-auto text-center relative z-10">
        {/* Floating Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="w-16 h-16 glass rounded-full flex items-center justify-center animate-float">
            <Rocket className="text-neon-blue" size={24} />
          </div>
          <div className="w-20 h-20 glass rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
            <Sparkles className="text-neon-purple" size={28} />
          </div>
          <div className="w-16 h-16 glass rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
            <MessageCircle className="text-neon-green" size={24} />
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block mb-2">Vamos construir</span>
          <span className="gradient-text neon-text">algo incrível</span>
          <span className="block mt-2">juntos?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transforme sua ideia em realidade digital. 
          <br className="hidden md:block" />
          Vamos criar uma experiência única para seus usuários.
        </p>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="glass p-6 rounded-xl border border-neon-blue/30 hover:border-neon-blue/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-neon-blue mb-2">Desenvolvimento Rápido</h3>
            <p className="text-gray-400 text-sm">Entrega ágil sem comprometer a qualidade</p>
          </div>
          
          <div className="glass p-6 rounded-xl border border-neon-purple/30 hover:border-neon-purple/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold text-neon-purple mb-2">Design Moderno</h3>
            <p className="text-gray-400 text-sm">Interfaces elegantes e funcionais</p>
          </div>
          
          <div className="glass p-6 rounded-xl border border-neon-green/30 hover:border-neon-green/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold text-neon-green mb-2">Performance</h3>
            <p className="text-gray-400 text-sm">Código otimizado e responsivo</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative inline-block">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green hover:from-neon-green hover:via-neon-blue hover:to-neon-purple transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-neon-blue/50 px-12 py-6 text-xl font-bold rounded-full relative overflow-hidden group"
            onClick={scrollToContact}
          >
            <span className="relative z-10 flex items-center">
              <MessageCircle className="mr-3 group-hover:animate-bounce-subtle" size={24} />
              Fale Comigo Agora
            </span>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full blur-xl"></div>
          </Button>
        </div>

        {/* Motivational Quote */}
        <div className="mt-12 p-6 glass rounded-xl border border-white/10 max-w-2xl mx-auto">
          <p className="text-gray-300 italic text-lg mb-2">
            "A melhor forma de prever o futuro é criá-lo."
          </p>
          <p className="text-neon-blue font-semibold">- Peter Drucker</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
