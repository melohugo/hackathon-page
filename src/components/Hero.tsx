import React from 'react';
import './Hero.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background-elements">
        <Image src="/assets/1_Tesourinha.svg" alt="Tesourinha" width={400} height={400} className="bg-svg tesourinha" />
        <Image src="/assets/2_Torre.svg" alt="Torre" width={300} height={600} className="bg-svg torre" />
        <Image src="/assets/5_Museu.svg" alt="Museu" width={400} height={200} className="bg-svg museu" />
      </div>

      <div className="hero-content">
        <div className="badge">12 A 14 DE JUNHO • BRASÍLIA</div>
        <h1 className="main-title">
          TRANSFORME O <span className="highlight">FUTURO</span> DA GESTÃO PÚBLICA
        </h1>
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
        <div className="visual-container">
          <Image src="/assets/8_Colchetes.svg" alt="Decoration" width={500} height={500} className="decoration-svg" />
          <div className="pmi-branding">
            <Image src="/assets/7_PMI.svg" alt="PMI Large" width={200} height={200} className="pmi-floating" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
