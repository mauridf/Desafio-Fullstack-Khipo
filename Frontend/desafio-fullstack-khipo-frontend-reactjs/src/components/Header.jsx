import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Crie este arquivo para estilizar o cabeçalho

const Header = () => {
  return (
    <header className="header">
      <div className="logo">OnEntree</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;