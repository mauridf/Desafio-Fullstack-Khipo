import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        OnEntree
      </Link>
    </header>
  );
};

export default Header;