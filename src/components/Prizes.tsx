import React from 'react';
import './Prizes.css';

interface PrizeCategory {
  id: string;
  position: string;
  cashPrize?: string;
  creditsPrize: string;
  description: string;
  benefits: string[];
  swag: { name: string; type: 'redbull' | 'petricor' | 'happyharry' | 'ibm' }[];
  rank: number;
}

const TrophyIcon = ({ rank }: { rank: number }) => {
  const colors = {
    1: 'var(--pmi-blue)',
    2: 'var(--pmi-purple)',
    3: 'var(--pmi-orange)'
  };
  
  return (
    <div className="trophy-wrapper" style={{ color: colors[rank as 1 | 2 | 3] }}>
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="trophy-svg">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
        <path d="M12 2a4 4 0 0 0-4 4v5a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z" />
      </svg>
    </div>
  );
};

const Prizes = () => {
  const prizeCategories: PrizeCategory[] = [
    {
      id: 'rank-2nd',
      position: '2º Lugar',
      creditsPrize: 'R$ 2.000',
      description: 'em créditos PMI-DF',
      benefits: [
        'R$ 2.000 em créditos de produtos/cursos PMI-DF',
        'Troféu oficial de 2º lugar',
        'Kit de brindes dos parceiros do evento'
      ],
      swag: [
        { name: 'Kit Red Bull', type: 'redbull' },
        { name: 'Café Petricor', type: 'petricor' },
        { name: 'Voucher Happy Harry', type: 'happyharry' },
        { name: 'Brinde IBM', type: 'ibm' }
      ],
      rank: 2
    },
    {
      id: 'rank-1st',
      position: '1º Lugar',
      cashPrize: 'R$ 3.000',
      creditsPrize: 'R$ 3.000',
      description: 'em dinheiro + em créditos PMI-DF',
      benefits: [
        'R$ 3.000 em dinheiro',
        'R$ 3.000 em créditos de produtos/cursos PMI-DF',
        'Troféu oficial de 1º lugar',
        'Kit exclusivo e completo de parceiros'
      ],
      swag: [
        { name: 'Kit Red Bull', type: 'redbull' },
        { name: 'Café Petricor', type: 'petricor' },
        { name: 'Voucher Happy Harry', type: 'happyharry' },
        { name: 'Brinde IBM', type: 'ibm' }
      ],
      rank: 1
    },
    {
      id: 'rank-3rd',
      position: '3º Lugar',
      creditsPrize: 'R$ 1.000',
      description: 'em créditos PMI-DF',
      benefits: [
        'R$ 1.000 em créditos de produtos/cursos PMI-DF',
        'Troféu oficial de 3º lugar',
        'Kit de brindes dos parceiros do evento'
      ],
      swag: [
        { name: 'Kit Red Bull', type: 'redbull' },
        { name: 'Café Petricor', type: 'petricor' },
        { name: 'Voucher Happy Harry', type: 'happyharry' },
        { name: 'Brinde IBM', type: 'ibm' }
      ],
      rank: 3
    }
  ];

  return (
    <section className="prizes-section" id="prizes">
      <div className="prizes-header">
        <div className="section-badge">✧ PREMIAÇÃO</div>
        <h2 className="section-title">
          RECOMPENSAS PARA A <span className="highlight-orange">VITÓRIA</span>
        </h2>
        <p className="section-subtitle">
          Mais de R$ 9.000 em prêmios, créditos PMI-DF e brindes exclusivos de parceiros para as equipes que liderarem a inovação.
        </p>
      </div>

      <div className="podium-container">
        {prizeCategories.map((prize) => (
          <div key={prize.id} className={`prize-card ${prize.id}`}>
            <div className="card-glitch-overlay"></div>
            <div className="prize-card-inner">
              <TrophyIcon rank={prize.rank} />
              <div className="prize-position">{prize.position}</div>
              
              <div className="prize-amount-container">
                {prize.cashPrize ? (
                  <>
                    <div className="prize-value cash">{prize.cashPrize}</div>
                    <div className="prize-label">EM DINHEIRO</div>
                    <div className="prize-plus-sign">+</div>
                    <div className="prize-value credits">{prize.creditsPrize}</div>
                    <div className="prize-label">EM CRÉDITOS PMI-DF</div>
                  </>
                ) : (
                  <>
                    <div className="prize-value credits-only">{prize.creditsPrize}</div>
                    <div className="prize-label">EM CRÉDITOS PMI-DF</div>
                  </>
                )}
              </div>

              <div className="prize-divider"></div>

              <ul className="prize-benefits">
                {prize.benefits.map((benefit, idx) => (
                  <li key={idx} className="prize-benefit-item">
                    <svg className="benefit-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="prize-divider"></div>

              <div className="prize-swag-section">
                <div className="swag-header-title">BRINDES DOS PARCEIROS</div>
                <div className="swag-tags-container">
                  {prize.swag.map((item, idx) => (
                    <span key={idx} className={`swag-tag-pill ${item.type}`}>
                      {item.type === 'redbull' && <span className="swag-icon">⚡</span>}
                      {item.type === 'petricor' && <span className="swag-icon">☕</span>}
                      {item.type === 'happyharry' && <span className="swag-icon">🎫</span>}
                      {item.type === 'ibm' && <span className="swag-icon">💼</span>}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-scanline"></div>
          </div>
        ))}
      </div>

      {/* Call to Action - Termo Aditivo */}
      <div className="prizes-cta">
        <a 
          href="/TermoAditivo_01_2026_HackathonPMIDF_assinado_assinado_assinado.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cyberpunk-prizes"
        >
          <svg className="doc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          ACESSAR TERMO ADITIVO
          <span className="cyber-tag">TERMO_ADITIVO.PDF //</span>
          <span className="cyber-corner-decor"></span>
        </a>
      </div>
    </section>
  );
};

export default Prizes;

