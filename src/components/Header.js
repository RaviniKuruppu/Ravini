import React, { useState } from 'react';
import './Header.css';
import RaviniImage from '../images/Ravini.png';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';



function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#technologies" onClick={toggleMenu}>Technologies</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
      <br></br>
      {/* Container for text and image */}
      <div className="header-content">
        <img src={RaviniImage} alt="Ravini Kuruppu" className="header-image" />
        <div className="header-text">
          {/* <h1>RAVINI KURUPPU</h1> */}
          <h1>
            <span className="ravini">I'M</span> <span className="kuruppu">RAVINI KURUPPU</span>
          </h1>
          <h2>A Full Stack Developer</h2>
          <a href="https://drive.google.com/file/d/12Xq6Ejvr9Hsa46QmiOfECwthjMIp74GF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button class="custom-button">Check out my CV here</button>
          </a>



          {/* <button class="button-90" >Download CV</button> */}
          <div className="social-icons">
            <a href="https://lk.linkedin.com/in/ravini-kuruppu" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/RaviniKuruppu" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://medium.com/@ravinikuruppu" target="_blank" rel="noopener noreferrer">
              <FaMedium />
            </a>
          </div>
        </div>
      </div>


    </header>
  );
}

export default Header;
