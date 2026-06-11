import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="glitch" data-text="O FUTURO É AGORA">O FUTURO É AGORA</h1>
        <p className="hero-subtitle">
          Participe do maior hackathon de inovação tecnológica do país. 
          Desafie seus limites, codifique o amanhã.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">VER DESAFIOS</button>
          <button className="btn btn-secondary">REGRAS</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
