import React from 'react';
import './Navbar.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Image src="/assets/7_PMI.svg" alt="PMI Logo" width={40} height={40} className="logo-img" />
        HACKATHON<span>DF</span>
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
