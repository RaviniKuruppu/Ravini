import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <h1>RAVINI KURUPPU</h1>
      <h2>Full Stack Developer</h2>
      <h2>Computer Science and Engineering</h2>
      <h3>University of Moratuwa</h3>
    </header>
  );
}

export default Header;
