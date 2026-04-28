'use client';

import { useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const handleNavClick = (sectionId: string) => {
    // Se estamos na home, faz scroll. Se não, vai para home com anchor
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleHomeClick = () => {
    // Se está na home, volta pro topo
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Se não está na home, vai pra home
      window.location.href = '/';
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Coluna 1: Logo e Tagline */}
        <div className={styles.column}>
          <button 
            onClick={handleHomeClick}
            className={styles.logoButton}
          >
            <img 
              src="/images/logo_amarela.png?v=2" 
              alt="LHF Assessoria Esportiva"
              className={styles.footerLogo}
            />
          </button>
          <p className={styles.tagline}>
            Evolua com apoio, método e propósito.
          </p>
          
          {/* Social Icons */}
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              @
            </a>
            <a href="https://wa.me/5547988123456" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              💬
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              in
            </a>
          </div>
        </div>

        {/* Coluna 2: Acesso Rápido */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Acesso Rápido</h4>
          <nav className={styles.quickLinks}>
            <button 
              onClick={handleHomeClick}
              className={styles.quickLink}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={styles.quickLink}
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className={styles.quickLink}
            >
              Modalidades
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')}
              className={styles.quickLink}
            >
              Comunidade
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={styles.quickLink}
            >
              Contato
            </button>
          </nav>
        </div>

        {/* Coluna 3: Contato */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Contato</h4>
          <div className={styles.contactInfo}>
            <p>
              <strong>Email:</strong><br />
              contato@lhfassessoria.com.br
            </p>
            <p>
              <strong>WhatsApp:</strong><br />
              <a href="https://wa.me/5547988123456">(47) 98812-3456</a>
            </p>
            <p>
              <strong>Localização:</strong><br />
              Joinville, SC
            </p>
          </div>
        </div>
      </div>

      {/* Divisor */}
      <div className={styles.divider}></div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>&copy; 2026 LHF Assessoria Esportiva. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}