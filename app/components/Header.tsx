'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>LHF</div>

        {/* Menu Desktop */}
        <nav className={styles.nav}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>Sobre</a>
          <a href="#services" className={styles.navLink}>Serviços</a>
          <a href="#testimonials" className={styles.navLink}>Comunidade</a>
          <a href="/blog" className={styles.navLink}>Blog</a>
          <a href="#contact" className={styles.navLink}>Contato</a>
        </nav>

        {/* Botão CTA */}
        <button 
          className={styles.ctaButton}
          onClick={handleWhatsAppClick}
        >
          Quero Fazer Parte
        </button>

        {/* Hamburger Menu */}
        <button 
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <nav className={styles.mobileMenu}>
          <a 
            href="#home" 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre
          </a>
          <a 
            href="#services" 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Serviços
          </a>
          <a 
            href="#testimonials" 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Comunidade
          </a>
          <a 
            href="/blog" 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </a>
          <a 
            href="#contact" 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contato
          </a>
          <button 
            className={styles.mobileCTAButton}
            onClick={() => {
              handleWhatsAppClick();
              setIsMobileMenuOpen(false);
            }}
          >
            Quero Fazer Parte
          </button>
        </nav>
      )}
    </header>
  );
}