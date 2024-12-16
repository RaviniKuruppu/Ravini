import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className='nav' >
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#projects">Technologies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <br></br>
      <h1>RAVINI KURUPPU</h1>
      <h2>Full Stack Developer</h2>
    </header>
  );
}

export default Header;
