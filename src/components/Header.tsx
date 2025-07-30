import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Instagram } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contato", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/DanniellMendss",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/daniel-mendes-dev/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/dmcodesolutions/",
      label: "Instagram",
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 pt-3 ${
        isScrolled ? "glass shadow-neon-blue/20" : "bg-transparent"
      }
        `}
    >
      <nav className="container-custom mx-auto px-2 xs:px-4 py-3 xs:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl xs:text-3xl font-bold font-space-mono">
            <span className="gradient-text">Daniel Mendes</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 xs:space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base xs:text-lg text-gray-300 hover:text-neon-blue transition-colors duration-300 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue px-1 xs:px-2"
                tabIndex={0}
                aria-label={`Ir para seção ${item.name}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-2 xs:space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-all duration-300 transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue p-1 xs:p-2 rounded"
                aria-label={social.label}
                tabIndex={0}
              >
                <social.icon size={24} className="xs:size-[28px]" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue p-2 rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full glass transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="p-4 space-y-2 xs:space-y-4">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-base xs:text-lg text-gray-300 hover:text-neon-blue transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue py-2 px-2 rounded"
                tabIndex={0}
                aria-label={`Ir para seção ${item.name}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-2 xs:space-x-4 pt-4 border-t border-white/10">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue p-2 rounded"
                  aria-label={social.label}
                  tabIndex={0}
                >
                  <social.icon size={24} className="xs:size-[28px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
