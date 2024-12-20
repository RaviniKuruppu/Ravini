import React from 'react';
import './Header.css';
import RaviniImage from '../images/Ravini.png';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';



function Header() {
  return (
    <header className="header">
      <nav className='nav' >
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <br></br>
      {/* Container for text and image */}
      <div className="header-content">
      <img src={RaviniImage} alt="Ravini Kuruppu" className="header-image" />
        <div className="header-text">
          <h1>RAVINI KURUPPU</h1>
          <h2>Computer Science and Engineering Undergraduate</h2>
          <button class="button-90" >Download CV</button>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/ravini-kuruppu/" target="_blank" rel="noopener noreferrer">
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
