import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="logo.png" alt="Logo" className="logo" /> {/* Cambia la ruta según tu archivo de logo */}
        <span className="brand-name">MueblesFAST</span>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="facebook-icon.png" alt="Facebook" className="icon" /> {/* Cambia la ruta según tu archivo de icono */}
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="instagram-icon.png" alt="Instagram" className="icon" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="youtube-icon.png" alt="YouTube" className="icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;