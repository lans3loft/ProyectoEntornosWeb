import React from 'react';
import './Footer.css';

function Footer() {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-brand">MueblesFAST</span>
        <span className="footer-date">Fecha: {currentDate}</span>
        <span className="footer-time">Hora: {currentTime}</span>
      </div>
    </footer>
  );
}

export default Footer;