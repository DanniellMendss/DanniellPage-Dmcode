
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Daniel Mendes - Desenvolvedor Front-end | DmCode Solutions</title>
        <meta name="description" content="Daniel Mendes da Silva - Desenvolvedor Front-end especializado em React, TypeScript e criação de experiências digitais modernas. Fundador da DmCode Solutions." />
        <meta name="keywords" content="desenvolvedor frontend, react, typescript, javascript, dmcode solutions, daniel mendes, portfolio" />
        <meta property="og:title" content="Daniel Mendes - Desenvolvedor Front-end | DmCode Solutions" />
        <meta property="og:description" content="Desenvolvedor Front-end apaixonado por criar experiências digitais incríveis. Fundador da DmCode Solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@daniel_dev" />
        <meta name="twitter:title" content="Daniel Mendes - Desenvolvedor Front-end | DmCode Solutions" />
        <meta name="twitter:description" content="Desenvolvedor Front-end apaixonado por criar experiências digitais incríveis. Fundador da DmCode Solutions." />
        <meta name="twitter:image" content="/favicon.ico" />
      </Helmet>
      <div className="min-h-screen bg-dark-primary text-white overflow-x-hidden">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />
          {/* About Section */}
          <About />
          {/* Projects Section */}
          <Projects />
          {/* Skills Section */}
          <Skills />
          {/* Call to Action */}
          <CTA />
          {/* Contact Section */}
          <Contact />
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
