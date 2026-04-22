'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Coluna 1: Branding */}
        <div className={styles.column}>
          <div className={styles.logo}>LHF</div>
          <p className={styles.tagline}>
            Evolua com apoio, método e propósito.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink} title="Instagram">
              @
            </a>
            <a href="#" className={styles.socialLink} title="WhatsApp">
              💬
            </a>
            <a href="#" className={styles.socialLink} title="LinkedIn">
              in
            </a>
          </div>
        </div>

        {/* Coluna 2: Links */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Acesso Rápido</h4>
          <ul className={styles.links}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#services">Modalidades</a></li>
            <li><a href="#testimonials">Comunidade</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Contato</h4>
          <ul className={styles.contactLinks}>
            <li>
              <a href="https://wa.me/YOUR_NUMBER">WhatsApp</a>
            </li>
            <li>
              <a href="mailto:contato@lhf.com">Email</a>
            </li>
            <li>
              <a href="#">Endereço</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.divider}></div>
      <div className={styles.copyright}>
        <p>© {currentYear} LHF Assessoria Esportiva. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}