import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="logo-link">
          <img src={logo} alt="Bivin Logo" className="logo-img" />
        </a>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`nav-wrapper ${isOpen ? 'active' : ''}`}>
          <ul className="nav-center">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          </ul>

          <a href="#contact" className="nav-contact" onClick={() => setIsOpen(false)}>Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
