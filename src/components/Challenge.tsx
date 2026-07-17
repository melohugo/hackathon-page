import React from 'react';
import './Challenge.css';

const Challenge = () => {
  const features = [
    {
      id: '01',
      title: 'Problema real',
      description: 'Desafios reais e práticos do mercado, focando em soluções de alto impacto, inovação e viabilidade de implementação.',
      color: 'var(--pmi-blue)'
    },
    {
      id: '02',
      title: 'Times multidisciplinares',
      description: 'Desenvolvedores, designers, gestores e estudantes engajados em um objetivo comum.',
      color: 'var(--pmi-purple)'
    },
    {
      id: '03',
      title: 'Impacto real',
      description: 'Soluções viáveis e inovadoras prontas para serem aplicadas no mercado e gerar valor concreto no mundo real.',
      color: 'var(--pmi-orange)'
    }
  ];

  return (
    <section className="challenge-section" id="about">
      <div className="challenge-header">
        <div className="section-badge">✧ O DESAFIO</div>
        <h2 className="section-title">
          Resolva um problema <span className="highlight-blue">real de mercado</span>
        </h2>
        <p className="section-subtitle">
          Você será desafiado a propor soluções para problemas reais e complexos do mercado 
          e da sociedade. Gestão de projetos, tecnologia e impacto prático caminham 
          juntos neste Hackathon.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="card-inner">
              <div className="feature-number" style={{ color: feature.color, borderColor: feature.color }}>
                {feature.id}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Challenge;
