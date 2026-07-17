import React from 'react';
import './Sponsors.css';
import Image from 'next/image';

const Sponsors = () => {
  const organizers = [
    { 
      name: 'PMI-DF', 
      logo: '/assets/7_PMI.svg',
      width: 180,
      height: 180,
      customScale: 1.15
    }
  ];

  const partners = [
    { name: 'Red Bull', logo: '/assets/sponsors/redbull.png' },
    { name: 'Vox2You', logo: '/assets/sponsors/vox2you.png', customScale: 1.8 },
    { name: 'Petricor', logo: '/assets/sponsors/petricor.png' },
    { name: 'Happy Harry', logo: '/assets/sponsors/happy_harry.png' },
    { name: 'Matriz', logo: '/assets/sponsors/matriz_logo.png' }
  ];

  return (
    <section className="sponsors-section" id="sponsors">
      <div className="sponsors-header">
        <div className="section-badge">✧ PARCEIROS</div>
        <h2 className="section-title">QUEM APOIA A <span className="highlight-purple">INOVAÇÃO</span></h2>
      </div>

      <div className="sponsors-container">
        {/* Realização */}
        <div className="tier-label">REALIZAÇÃO</div>
        <div className="realization-grid">
          {organizers.map((org, index) => (
            <div key={index} className="sponsor-card large floating" style={{ animationDelay: `${index * 0.5}s` }}>
              <div className="card-border-glow"></div>
              <div className="sponsor-card-inner">
                <Image 
                  src={org.logo} 
                  alt={org.name} 
                  width={org.width} 
                  height={org.height} 
                  className="sponsor-logo"
                  style={org.customScale ? { 
                    transform: `scale(${org.customScale})` 
                  } : {}}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Partners - Small */}
        <div className="tier-label">PATROCINADORES E PARCEIROS</div>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="sponsor-card small floating" style={{ animationDelay: `${index * 0.5}s` }}>
              <div className="card-border-glow"></div>
              <div className="sponsor-card-inner">
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  width={partner.width || 150} 
                  height={partner.height || 60} 
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

        {/* Call to Action */}
        <div className="sponsors-cta">
          <a 
            href="mailto:hackathon@pmidf.org?subject=Interesse%20em%20Patroc%C3%ADnio%20-%20Hackathon%20PMI-DF%202026"
            className="btn-cyberpunk"
          >
            QUERO PATROCINAR O EVENTO
            <span className="cyber-tag">SPONSOR.EXE //</span>
            <span className="cyber-corner-decor"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
