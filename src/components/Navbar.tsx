import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        HACKATHON<span>_2026</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">SOBRE</a></li>
        <li><a href="#features">FEATURES</a></li>
        <li><a href="#register" className="nav-cta">INSCREVER-SE</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
