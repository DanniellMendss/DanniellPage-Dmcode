import React, { useState, useEffect } from "react";
import {
  Code2,
  Database,
  Palette,
  Server,
  Smartphone,
  GitBranch,
  Figma,
  Chrome,
  Layers,
  Zap,
  TrendingUp,
  Award,
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Front-end",
      icon: Code2,
      color: "neon-blue",
      description: "Criação de interfaces modernas e responsivas",
      skills: [
        { name: "HTML5", level: 85, icon: "🌐", years: "2+ anos" },
        { name: "CSS3", level: 80, icon: "🎨", years: "2+ anos" },
        { name: "JavaScript", level: 62, icon: "⚡", years: "1+ anos" },
        { name: "TypeScript", level: 62, icon: "📘", years: "1+ anos" },
        { name: "React.js", level: 65, icon: "⚛️", years: "1+ anos" },
        { name: "Tailwind CSS", level: 62, icon: "💨", years: "1+ anos" },
      ],
    },
    {
      title: "Back-end",
      icon: Server,
      color: "neon-purple",
      description: "Desenvolvimento de APIs e serviços robustos",
      skills: [
        { name: "Node.js", level: 65, icon: "🟢", years: "1+ ano" },
        { name: "Express.js", level: 55, icon: "🚀", years: "1+ ano" },
        { name: "PostgreSQL", level: 60, icon: "🐘", years: "8 meses" },
        { name: "MongoDB", level: 48, icon: "🍃", years: "6 meses" },
      ],
    },
    {
      title: "Ferramentas & Design",
      icon: Layers,
      color: "neon-green",
      description: "Ferramentas para produtividade e design",
      skills: [
        { name: "Git / GitHub", level: 90, icon: "📊", years: "3+ anos" },
        { name: "Figma", level: 85, icon: "🎯", years: "1+ anos" },
        { name: "VS Code", level: 95, icon: "💻", years: "4+ anos" },
        { name: "Firebase", level: 78, icon: "🔥", years: "1+ ano" },
      ],
    },
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-neon-green to-neon-blue";
    if (level >= 80) return "from-neon-blue to-neon-purple";
    if (level >= 70) return "from-neon-purple to-neon-pink";
    return "from-gray-600 to-gray-500";
  };

  const getSkillRating = (level: number) => {
    if (level >= 90) return { text: "Avançado", icon: Award };
    if (level >= 75) return { text: "Intermediário+", icon: TrendingUp };
    if (level >= 60) return { text: "Intermediário", icon: Code2 };
    return { text: "Básico", icon: Chrome };
  };

  return (
    <section
      id="skills"
      className="section-padding bg-dark-secondary/30 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-blue rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-neon-purple rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-neon-green rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-4 glass px-4 py-2 rounded-full border border-neon-blue/30">
            <Code2 className="text-neon-blue" size={20} />
            <span className="text-neon-blue font-medium">
              Expertise Técnica
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Skills & Tecnologias</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Minhas habilidades técnicas desenvolvidas ao longo da jornada como
            desenvolvedor
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
              style={{
                animationDelay: `${categoryIndex * 0.2}s`,
                transform: isVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(50px) scale(0.95)",
                opacity: isVisible ? 1 : 0,
                transition: "all 0.8s ease-out",
              }}
            >
              {/* Category Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-${category.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Category Header */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-${category.color} to-neon-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                    >
                      <category.icon size={28} className="text-dark-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const rating = getSkillRating(skill.level);
                    return (
                      <div key={skillIndex} className="space-y-3">
                        {/* Skill Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <div>
                              <span className="text-gray-200 font-semibold text-lg">
                                {skill.name}
                              </span>
                              <div className="flex items-center space-x-2 mt-1">
                                <rating.icon
                                  size={14}
                                  className={`text-${category.color}`}
                                />
                                <span
                                  className={`text-xs font-medium text-${category.color}`}
                                >
                                  {rating.text}
                                </span>
                                <span className="text-xs text-gray-500">
                                  • {skill.years}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <span
                              className={`text-lg font-bold text-${category.color} block`}
                            >
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Enhanced Progress Bar */}
                        <div className="relative">
                          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden shadow-inner">
                            <div
                              className={`h-full bg-gradient-to-r ${getSkillColor(
                                skill.level
                              )} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                              style={{
                                width: isVisible ? `${skill.level}%` : "0%",
                                animationDelay: `${
                                  (categoryIndex * 6 + skillIndex) * 0.1
                                }s`,
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="glass p-10 rounded-3xl border border-neon-purple/30 bg-gradient-to-r from-neon-purple/5 to-neon-blue/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-transparent to-neon-blue/5"></div>

          <div className="text-center relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Zap
                className="text-neon-purple animate-bounce-subtle"
                size={28}
              />
              <h3 className="text-3xl font-bold text-neon-purple">
                Atualmente Aprendendo
              </h3>
              <Zap
                className="text-neon-purple animate-bounce-subtle"
                size={28}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
              {[
                { name: "Next.js", icon: "▲", color: "neon-blue" },
                { name: "Docker", icon: "🐳", color: "neon-purple" },
                { name: "AWS", icon: "☁️", color: "neon-green" },
                { name: "PostgreSQL", icon: "🐘", color: "neon-blue" },
                { name: "Python", icon: "🐍", color: "neon-purple" },
                { name: "React Native", icon: "📱", color: "neon-green" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center space-y-3 bg-white/5 border border-${tech.color}/30 p-6 rounded-2xl hover:bg-${tech.color}/10 transition-all duration-300 hover:scale-105 hover:border-${tech.color}/50 group`}
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </span>
                  <span
                    className={`text-gray-300 font-semibold group-hover:text-${tech.color} transition-colors duration-300`}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Sempre em busca de novas tecnologias e tendências para oferecer as
              melhores soluções aos meus projetos.
              <br />
              <span className="text-neon-purple font-semibold">
                Em constante evolução tecnológica.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
