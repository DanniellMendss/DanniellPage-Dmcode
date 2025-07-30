import React from "react";
import { MessageCircle, Rocket, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-r from-neon-blue/10 via-dark-secondary/30 to-neon-purple/10">
      <div className="container-custom mx-auto px-2 xs:px-4 py-8 xs:py-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 rounded-3xl">
        {/* Texto principal */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">
              Vamos criar algo incrível juntos?
            </span>
          </h2>
          <p className="text-gray-400 text-sm xs:text-base mb-6 max-w-xl mx-auto md:mx-0">
            Entre em contato para discutir seu projeto, tirar dúvidas ou apenas
            trocar uma ideia sobre tecnologia e inovação. Estou pronto para
            ajudar a transformar sua visão em realidade!
          </p>
        </div>
        {/* Botão de ação */}
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
          <Button
            size="lg"
            className="w-full md:w-auto bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green px-6 py-4 text-base xs:text-lg font-bold rounded-full shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
            onClick={scrollToContact}
            aria-label="Entrar em contato"
          >
            <Mail className="mr-2" size={20} />
            Fale comigo
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CTA;
