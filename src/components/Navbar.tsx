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
        <li><a href="#challenges">DESAFIOS</a></li>
        <li><a href="#register" className="nav-cta">QUERO PARTICIPAR</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
