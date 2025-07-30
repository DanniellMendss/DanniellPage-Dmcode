import React from "react";
import {
  ArrowUp,
  Heart,
  Code,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/DanniellMendss",
      label: "GitHub",
      color: "hover:text-neon-blue",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/daniel-mendes-dev/",
      label: "LinkedIn",
      color: "hover:text-neon-purple",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/dmcodesolutions",
      label: "Instagram",
      color: "hover:text-neon-green",
    },
  ];

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contato", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-primary border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-20 h-20 bg-neon-blue rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-neon-purple rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom mx-auto px-2 xs:px-4 py-8 xs:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2 mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-xl xs:text-2xl font-bold font-space-mono gradient-text">
                Daniel - DmCode Solutions
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed max-w-md text-sm xs:text-base">
              Desenvolvedor Front-end apaixonado por criar experiências digitais
              incríveis. Fundador da DmCode Solutions, sempre em busca de
              inovação e excelência.
            </p>

            {/* Company Link */}
            <a
              href="https://dmstyle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-neon-purple hover:text-neon-blue transition-colors duration-300 group text-sm xs:text-base"
            >
              <span className="font-semibold">Dm Style</span>
              <ExternalLink
                size={16}
                className="group-hover:transform group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm xs:text-base">
              Navegação
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-xs xs:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
                    aria-label={`Ir para seção ${link.name}`}
                    tabIndex={0}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm xs:text-base">
              Conecte-se
            </h3>
            <div className="space-y-2 xs:space-y-3 mb-4">
              <p className="text-gray-400 text-xs xs:text-sm">
                dmcodesolutions@gmail.com
              </p>
              <p className="text-gray-400 text-xs xs:text-sm">
                Curvelo, Brasil
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-2 xs:space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 xs:w-10 h-9 xs:h-10 glass rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue`}
                  aria-label={social.label}
                  tabIndex={0}
                >
                  <social.icon size={16} className="xs:size-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 xs:mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 xs:space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400 text-xs xs:text-sm">
            <span>© {currentYear} Daniel - DmCode Solutions</span>
            <span>•</span>
            <span>Desenvolvido com</span>
            <Heart
              size={12}
              className="xs:size-[14px] text-red-500 animate-pulse"
            />
            <span>e com muito</span>
            <Coffee size={12} className="xs:size-[14px] text-amber-500" />
          </div>

          {/* Tech Stack */}
          <div className="flex items-center space-x-2 text-gray-500 text-xs xs:text-sm">
            <Code size={12} className="xs:size-[14px]" />
            <span>React • TypeScript • Tailwind CSS</span>
          </div>

          {/* Back to Top */}
          <Button
            onClick={scrollToTop}
            size="sm"
            variant="outline"
            className="border-gray-600 text-gray-400 hover:border-neon-blue hover:text-neon-blue transition-all duration-300 hover:transform hover:scale-105 text-xs xs:text-sm px-3 xs:px-4 py-2"
          >
            <ArrowUp size={14} className="mr-1 xs:size-[16px]" />
            Voltar ao Topo
          </Button>
        </div>

        {/* Achievement Badge */}
        <div className="text-center mt-6 xs:mt-8 pt-4 xs:pt-6 border-t border-white/10">
          <div className="inline-flex items-center space-x-2 glass px-3 xs:px-4 py-2 rounded-full border border-neon-green/30">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-neon-green text-xs xs:text-sm font-medium">
              🚀 Disponível para novos projetos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
