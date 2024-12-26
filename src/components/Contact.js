import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
            <div className="contact-details">
                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>ivandan@email.com</span>
                </div>
                <div className="contact-item">
                    <i className="fas fa-phone-alt"></i>
                    <span>(201) 555-0124</span>
                </div>
                <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Toledo, United States</span>
                </div>
            </div>
            <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-whatsapp"></i>
            </div>
            <p className="footer-text">“Thanks for Scrolling”</p>

    </section>
  );
}

export default Contact;
