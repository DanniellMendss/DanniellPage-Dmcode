import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Configuração do EmailJS
    // Substitua pelos seus próprios IDs do EmailJS
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Parâmetros para o template do EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      whatsapp: formData.whatsapp,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      toast({
        title: "Mensagem enviada! ✨",
        description: "Obrigado pelo contato! Retornarei em breve.",
      });
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description:
          "Tente novamente ou envie um e-mail direto para dmcodesolutions@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "dmcodesolutions@gmail.com",
      link: "mailto:dmcodesolutions@gmail.com",
      color: "neon-blue",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (31) 9 9884-5674",
      link: "tel:+5531998845674",
      color: "neon-purple",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Curvelo, Brasil",
      link: "#",
      color: "neon-green",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-secondary/30">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Vamos Conversar</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos transformar sua ideia em realidade!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass p-4 xs:p-6 md:p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl xs:text-2xl font-bold text-white mb-6">
                Entre em Contato
              </h3>
              <p className="text-gray-400 text-sm xs:text-base mb-8 leading-relaxed">
                Estou sempre aberto a discutir novos projetos, oportunidades
                criativas ou simplesmente trocar uma ideia sobre tecnologia. Não
                hesite em entrar em contato!
              </p>

              {/* Contact Details */}
              <div className="space-y-4 xs:space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-3 xs:space-x-4 p-3 xs:p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div
                      className={`w-10 xs:w-12 h-10 xs:h-12 rounded-xl bg-gradient-to-r from-${info.color} to-neon-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon
                        size={18}
                        className="xs:size-5 text-dark-primary"
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs xs:text-sm">
                        {info.title}
                      </p>
                      <p
                        className={`text-${info.color} font-medium text-xs xs:text-sm`}
                      >
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="mt-6 xs:mt-8 p-3 xs:p-4 bg-neon-green/10 border border-neon-green/30 rounded-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-neon-green font-semibold text-xs xs:text-sm">
                    Disponível para novos projetos
                  </span>
                </div>
                <p className="text-gray-400 text-xs xs:text-sm mt-2">
                  Resposta garantida em até 24 horas
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-2 xs:gap-4">
              <div className="glass p-3 xs:p-6 rounded-xl border border-white/10 text-center">
                <div className="text-lg xs:text-2xl font-bold text-neon-blue mb-1">
                  24h
                </div>
                <div className="text-xs xs:text-sm text-gray-400">
                  Tempo de Resposta
                </div>
              </div>
              <div className="glass p-3 xs:p-6 rounded-xl border border-white/10 text-center">
                <div className="text-lg xs:text-2xl font-bold text-neon-purple mb-1">
                  100%
                </div>
                <div className="text-xs xs:text-sm text-gray-400">
                  Satisfação
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-4 xs:p-6 md:p-8 rounded-2xl border border-white/10 mt-10 lg:mt-0">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 xs:space-y-6"
              aria-label="Formulário de contato"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 text-xs xs:text-sm font-medium mb-2"
                  >
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Nome completo"
                    className="bg-white/5 border-white/20 focus:border-neon-blue text-white placeholder-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue w-full"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 text-xs xs:text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label="E-mail"
                    className="bg-white/5 border-white/20 focus:border-neon-blue text-white placeholder-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue w-full"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="whatsapp"
                    className="block text-gray-300 text-xs xs:text-sm font-medium mb-2"
                  >
                    WhatsApp
                  </label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    aria-label="WhatsApp"
                    className="bg-white/5 border-white/20 focus:border-neon-blue text-white placeholder-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue w-full"
                    placeholder="(DDD) 90000-0000"
                  />
                </div>
              </div>
              <label
                htmlFor="subject"
                className="block text-gray-300 text-xs xs:text-sm font-medium mb-2"
              >
                Assunto
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-label="Assunto da mensagem"
                className="bg-white/5 border-white/20 focus:border-neon-blue text-white placeholder-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue w-full"
                placeholder="Assunto da mensagem"
              />
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-xs xs:text-sm font-medium mb-2"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  aria-label="Mensagem"
                  className="bg-white/5 border-white/20 focus:border-neon-blue text-white placeholder-gray-500 resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue w-full"
                  placeholder="Conte-me sobre seu projeto ou ideia..."
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                aria-label="Enviar mensagem"
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green transform hover:scale-105 transition-all duration-300 py-5 xs:py-6 text-base xs:text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                      aria-label="Enviando"
                    ></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send size={20} />
                    <span>Enviar Mensagem</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Form Footer */}
            <div className="mt-4 xs:mt-6 p-3 xs:p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <div className="flex items-start space-x-2">
                <AlertCircle
                  size={16}
                  className="text-blue-400 mt-0.5 flex-shrink-0"
                />
                <p className="text-blue-400 text-xs xs:text-sm">
                  Seus dados estão seguros e serão utilizados apenas para
                  responder seu contato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
