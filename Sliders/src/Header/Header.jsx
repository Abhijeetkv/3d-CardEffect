import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <figure className="logo">
        <img src="https://raw.githubusercontent.com/HoanghoDev/starbucks_slider/main/images/logo.png" alt="Logo" />
      </figure>
      <nav className="main-nav">
        <ul>
          <li><a href="#">Coffee</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
