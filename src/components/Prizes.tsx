import React from 'react';
import './Prizes.css';

const Prizes = () => {
  const prizeCategories = [
    {
      id: 'rank-2nd',
      position: '2º Lugar',
      title: 'DADOS CRIPTOGRAFADOS',
      rank: 2
    },
    {
      id: 'rank-1st',
      position: '1º Lugar',
      title: 'ACESSO RESTRITO',
      rank: 1
    },
    {
      id: 'rank-3rd',
      position: '3º Lugar',
      title: 'DADOS CRIPTOGRAFADOS',
      rank: 3
    }
  ];

  // Reorder for mobile (1st, 2nd, 3rd) but keep podium visual for desktop (2nd, 1st, 3rd)
  // In the CSS we will use order or flex layout to handle this.
  
  return (
    <section className="prizes-section" id="prizes">
      <div className="prizes-header">
        <div className="section-badge">✧ PRÊMIOS</div>
        <h2 className="section-title">
          Algo grande está sendo <span className="highlight-orange">preparado</span>
        </h2>
        <p className="section-subtitle">
          Os prêmios para os times vencedores serão revelados em breve. 
          O sistema está processando a recompensa final...
        </p>
      </div>

      <div className="podium-container">
        {prizeCategories.map((prize) => (
          <div key={prize.id} className={`prize-card ${prize.id}`}>
            <div className="card-glitch-overlay"></div>
            <div className="prize-card-inner">
              <div className="lock-icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 11V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V11C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V11H9V7ZM12 17C11.1716 17 10.5 16.3284 10.5 15.5C10.5 14.6716 11.1716 14 12 14C12.8284 14 13.5 14.6716 13.5 15.5C13.5 16.3284 12.8284 17 12 17Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="prize-position">{prize.position}</div>
              <div className="decoding-text">
                <span className="char">?</span>
                <span className="char">?</span>
                <span className="char">?</span>
              </div>
              <div className="prize-status">EM BREVE</div>
            </div>
            <div className="card-scanline"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
