'use client';

import React from 'react';
import './Navbar.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Image 
          src="/assets/logo-full.svg" 
          alt="Hackathon DF Logo" 
          width={220} 
          height={60} 
          className="full-logo-img" 
          priority
        />
      </div>
      <ul className="navbar-links">
        <li><a href="#about">O EVENTO</a></li>
        <li><a href="#prizes">PRÊMIOS</a></li>
        <li><a href="#sponsors">PARCEIROS</a></li>
        <li><a href="#venue">LOCAL</a></li>
        <li>
          <button 
            onClick={() => alert('O sistema de inscrições será liberado em breve. Fique atento!')} 
            className="nav-cta-btn"
          >
            QUERO PARTICIPAR
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
