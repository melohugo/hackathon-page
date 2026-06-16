import React from 'react';
import './Sponsors.css';
import Image from 'next/image';

const Sponsors = () => {
  const mainSponsor = {
    name: 'SEDES',
    logo: '/assets/sponsors/sedes-new.png',
    size: 'large'
  };

  const partners = [
    { name: 'Red Bull', logo: '/assets/sponsors/redbull.png' },
    { name: 'Vox2You', logo: '/assets/sponsors/vox2you.png', customScale: 1.8 },
    { name: 'Petricor', logo: '/assets/sponsors/petricor.png' },
    { name: 'Happy Harry', logo: '/assets/sponsors/happy_harry.png' }
  ];

  return (
    <section className="sponsors-section" id="sponsors">
      <div className="sponsors-header">
        <div className="section-badge">✧ PARCEIROS</div>
        <h2 className="section-title">QUEM APOIA A <span className="highlight-purple">INOVAÇÃO</span></h2>
      </div>

      <div className="sponsors-container">
        {/* Main Sponsor - Large */}
        <div className="tier-label">APOIO INSTITUCIONAL</div>
        <div className="main-sponsor-wrapper">
          <div className="sponsor-card large floating">
            <div className="card-border-glow"></div>
            <div className="sponsor-card-inner">
              <Image 
                src={mainSponsor.logo} 
                alt={mainSponsor.name} 
                width={300} 
                height={120} 
                className="sponsor-logo"
              />
            </div>
            <div className="tech-corner top-left"></div>
            <div className="tech-corner bottom-right"></div>
          </div>
        </div>

        {/* Partners - Small */}
        <div className="tier-label">PARCEIROS ESTRATÉGICOS</div>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="sponsor-card small floating" style={{ animationDelay: `${index * 0.5}s` }}>
              <div className="card-border-glow"></div>
              <div className="sponsor-card-inner">
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  width={150} 
                  height={60} 
                  className="sponsor-logo"
                  style={partner.customScale ? { 
                    transform: `scale(${partner.customScale})`,
                    filter: partner.name === 'Vox2You' ? 'brightness(1.5) contrast(1.2)' : 'brightness(1.1) contrast(1.1)'
                  } : {}}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
