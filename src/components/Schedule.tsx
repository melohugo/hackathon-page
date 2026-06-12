'use client';

import React, { useState } from 'react';
import './Schedule.css';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const day1: ScheduleItem[] = [
    { time: '19:00', title: 'Check-in, Credenciamento e Coffee Break', description: 'Recepção dos participantes, entrega de kits e lanche de boas-vindas.' },
    { time: '19:30', title: 'Abertura Oficial e Apresentação do Desafio', description: 'Boas-vindas, introdução ao Hackathon e detalhamento do problema real proposto pela SEDES.' },
    { time: '20:30', title: 'Networking & Mentores', description: 'Momento para formação de conexões e conversa com especialistas.' }
  ];

  const day2: ScheduleItem[] = [
    { time: '09:00', title: 'Credenciamento e Coffee Break', description: 'Abertura do segundo dia com recepção e café de boas-vindas.' },
    { time: '09:30', title: 'Boas-vindas e Regulamentos', description: 'Briefing inicial e alinhamento sobre as regras essenciais do segundo dia.' },
    { time: '10:00', title: 'Workshop Especializado', description: 'Sessão técnica focada em ferramentas e metodologias para a solução.' },
    { time: '11:00', title: 'Mão na Massa: Desenvolvimento', description: 'Tempo intensivo para elaboração, refinamento e submissão final do projeto (até 15:40).' },
    { time: '15:40', title: 'Pitchs Executivos', description: 'Apresentação das soluções finais para a banca examinadora.' },
    { time: '17:30', title: 'Premiação e Encerramento', description: 'Anúncio dos vencedores, entrega de prêmios e celebração de encerramento.' }
  ];

  const currentSchedule = activeDay === 1 ? day1 : day2;

  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-header">
        <div className="section-badge">✧ PROGRAMAÇÃO</div>
        <h2 className="section-title">Cronograma do <span className="highlight-purple">Evento</span></h2>
      </div>

      <div className="day-switcher">
        <button 
          type="button"
          className={`day-btn ${activeDay === 1 ? 'active' : ''}`}
          onClick={() => setActiveDay(1)}
        >
          <span className="day-num">DIA 01</span>
          <span className="day-date">11 SET</span>
        </button>
        <button 
          type="button"
          className={`day-btn ${activeDay === 2 ? 'active' : ''}`}
          onClick={() => setActiveDay(2)}
        >
          <span className="day-num">DIA 02</span>
          <span className="day-date">12 SET</span>
        </button>
      </div>

      <div className="timeline-container">
        <div className="timeline-axis"></div>
        {currentSchedule.map((item, index) => (
          <div key={`${activeDay}-${index}`} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-node"></div>
            <div className="schedule-card">
              <div className="schedule-time">{item.time}</div>
              <h3 className="schedule-title">{item.title}</h3>
              <p className="schedule-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
