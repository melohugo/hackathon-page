'use client';

import React, { useState, useEffect } from 'react';
import './Hero.css';
import Image from 'next/image';

const Hero = () => {
  const fullTitle = "TRANSFORME O FUTURO DA GESTÃO PÚBLICA";
  const [showSedes, setShowSedes] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      
      // Glitch starts, then swap, then glitch ends
      setTimeout(() => {
        setShowSedes(prev => !prev);
      }, 150);

      setTimeout(() => {
        setIsGlitching(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="hero">
      <div className="hero-background-elements">
        <Image src="/assets/1_Tesourinha.svg" alt="Tesourinha" width={400} height={400} className="bg-svg tesourinha" />
        <Image src="/assets/2_Torre.svg" alt="Torre" width={300} height={600} className="bg-svg torre" />
        <Image src="/assets/5_Museu.svg" alt="Museu" width={400} height={200} className="bg-svg museu" />
      </div>

      <div className="hero-content">
        <div className="badge">11 E 12 DE SETEMBRO • BRASÍLIA</div>
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
          <button 
            className="btn btn-primary" 
            onClick={() => alert('O sistema de inscrições será liberado em breve. Fique atento!')}
          >
            INSCREVER MINHA EQUIPE
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => alert('O edital está sendo processado e será publicado em breve.')}
          >
            ACESSAR EDITAL
          </button>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="hypnotic-logo-container">
          <div className="logo-glow-ring"></div>
          <div className={`logo-transition-wrapper ${showSedes ? 'show-sedes' : 'show-pmi'} ${isGlitching ? 'glitching' : ''}`}>
            <Image 
              src="/assets/7_PMI.svg" 
              alt="PMI Logo" 
              width={320} 
              height={320} 
              className="pmi-hypnotic-logo logo-main" 
              priority
            />
            <Image 
              src="/assets/sponsors/sedes-new.png" 
              alt="SEDES Logo" 
              width={320} 
              height={320} 
              className="sedes-hypnotic-logo logo-alt" 
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
