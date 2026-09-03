import React from 'react';
import './Venue.css';

const Venue = () => {
  return (
    <section className="venue-section" id="venue">
      <div className="venue-header">
        <div className="section-badge">✧ LOCALIZAÇÃO</div>
        <h2 className="venue-title">BASE DE <span className="highlight-blue">OPERAÇÕES</span></h2>
      </div>

      <div className="venue-container">
        <div className="venue-info">
          <div className="terminal-box">
            <div className="terminal-header">
              <span className="dot"></span>
              <span className="terminal-title">SISTEMA_DE_NAVEGAÇÃO.EXE</span>
            </div>
            <div className="terminal-content">
              <div className="location-data">
                <span className="label">LOCAL:</span>
                <span className="value">CEUB - CAMPUS ASA NORTE</span>
              </div>
              <div className="location-data">
                <span className="label">COORDENADAS:</span>
                <span className="value typing-animation">-15.7656° S, -47.8944° W</span>
              </div>
              <div className="location-data">
                <span className="label">SETOR:</span>
                <span className="value">SEPN 707/907, ASA NORTE - BRASÍLIA/DF</span>
              </div>
              <div className="status-line">
                <span className="status-indicator"></span>
                <span className="status-text">ACESSO AUTORIZADO // SINAL ESTÁVEL</span>
              </div>
            </div>
          </div>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=CEUB+Campus+Asa+Norte+Brasilia" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-route"
          >
            <span className="btn-text">TRAÇAR ROTA</span>
            <span className="btn-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C12 22 20 16 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 16 12 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
          </a>
        </div>

        <div className="venue-visual">
          <div className="radar-container">
            <div className="radar-circle circle-1"></div>
            <div className="radar-circle circle-2"></div>
            <div className="radar-circle circle-3"></div>
            <div className="radar-scanner"></div>
            <div className="radar-target"></div>
            <div className="radar-grid"></div>
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>
          </div>
          <div className="tech-specs">
            <div className="spec-item">SCAN_RANGE: 50KM</div>
            <div className="spec-item">SIGNAL_STRENGTH: 98%</div>
            <div className="spec-item">ELEVATION: 1172M</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
