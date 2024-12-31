import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
            <div className="contact-details">
                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>ravinikuruppu@email.com</span>
                </div>
                <div className="contact-item">
                    <i className="fas fa-phone-alt"></i>
                    <span>(+94) 714706690</span>
                </div>
                <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Panadura, Sri Lanka</span>
                </div>
            </div>
            <div className="social-icons">
            <a href="https://github.com/RaviniKuruppu" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://medium.com/@ravinikuruppu" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-medium"></i>
            </a>
            <a href="https://www.linkedin.com/in/ravini-kuruppu" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/+94714706690" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>
            </div>
            <p className="footer-text">“Thanks for Scrolling”</p>

    </section>
  );
}

export default Contact;
