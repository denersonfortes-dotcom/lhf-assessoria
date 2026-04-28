'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCTAClick = () => {
    window.location.href = '/planos';
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

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo - Imagem */}
        <div className={styles.logo}>
          <button 
            onClick={handleHomeClick}
            className={styles.logoButton}
          >
            <img 
              src="/images/logo.png?v=2" 
              alt="LHF Assessoria Esportiva"
              className={styles.logoImage}
            />
          </button>
        </div>

        {/* Menu Desktop */}
        <nav className={styles.nav}>
          <button 
            className={styles.navLink} 
            onClick={handleHomeClick}
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Home
          </button>
          <button 
            className={styles.navLink} 
            onClick={() => handleNavClick('about')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Sobre
          </button>
          <button 
            className={styles.navLink} 
            onClick={() => handleNavClick('services')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Serviços
          </button>
          <button 
            className={styles.navLink} 
            onClick={() => handleNavClick('testimonials')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Comunidade
          </button>
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
          <button 
            className={styles.navLink} 
            onClick={() => handleNavClick('contact')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Contato
          </button>
        </nav>

        {/* Botão CTA */}
        <button 
          className={styles.ctaButton}
          onClick={handleCTAClick}
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
          <button 
            className={styles.mobileNavLink}
            onClick={() => {
              handleHomeClick();
              setIsMobileMenuOpen(false);
            }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', width: '100%', textAlign: 'left' }}
          >
            Home
          </button>
          <button 
            className={styles.mobileNavLink}
            onClick={() => {
              handleNavClick('about');
              setIsMobileMenuOpen(false);
            }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', width: '100%', textAlign: 'left' }}
          >
            Sobre
          </button>
          <button 
            className={styles.mobileNavLink}
            onClick={() => {
              handleNavClick('services');
              setIsMobileMenuOpen(false);
            }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', width: '100%', textAlign: 'left' }}
          >
            Serviços
          </button>
          <button 
            className={styles.mobileNavLink}
            onClick={() => {
              handleNavClick('testimonials');
              setIsMobileMenuOpen(false);
            }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', width: '100%', textAlign: 'left' }}
          >
            Comunidade
          </button>
          <Link 
            href="/blog" 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <button 
            className={styles.mobileNavLink}
            onClick={() => {
              handleNavClick('contact');
              setIsMobileMenuOpen(false);
            }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', width: '100%', textAlign: 'left' }}
          >
            Contato
          </button>
          <button 
            className={styles.mobileCTAButton}
            onClick={() => {
              handleCTAClick();
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