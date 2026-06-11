import React from 'react';
import './Hero.css';
import Image from 'next/image';

const Hero = () => {
  const fullTitle = "TRANSFORME O FUTURO DA GESTÃO PÚBLICA";
  
  return (
    <section className="hero">
      <div className="hero-background-elements">
        <Image src="/assets/1_Tesourinha.svg" alt="Tesourinha" width={400} height={400} className="bg-svg tesourinha" />
        <Image src="/assets/2_Torre.svg" alt="Torre" width={300} height={600} className="bg-svg torre" />
        <Image src="/assets/5_Museu.svg" alt="Museu" width={400} height={200} className="bg-svg museu" />
      </div>

      <div className="hero-content">
        <div className="badge">12 A 14 DE JUNHO • BRASÍLIA</div>
        <div className="title-wrapper">
          <h1 className="main-title glitch" data-text={fullTitle}>
            TRANSFORME O FUTURO DA GESTÃO PÚBLICA
          </h1>
        </div>
        <p className="hero-subtitle">
          O HACKATHON PMI-DF 2026 reúne mentes brilhantes para solucionar 
          desafios reais da nossa capital através da tecnologia e inovação.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">INSCREVER MINHA EQUIPE</button>
          <button className="btn btn-secondary">CONHECER DESAFIOS</button>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="hypnotic-logo-container">
          <div className="logo-glow-ring"></div>
          <Image 
            src="/assets/7_PMI.svg" 
            alt="PMI Logo" 
            width={320} 
            height={320} 
            className="pmi-hypnotic-logo" 
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
