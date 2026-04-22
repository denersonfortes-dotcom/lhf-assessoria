'use client';

import styles from './Hero.module.css';

export default function Hero() {
  const handleCTA = () => {
    // Será integrado com WhatsApp depois
    window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank');
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        {/* Conteúdo Esquerdo */}
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Aqui você não treina sozinho.
            <br />
            Você evolui com apoio, método e propósito.
          </h1>

          <p className={styles.subtitle}>
            Para iniciantes, corredores intermediários e atletas de performance. 
            Sua evolução é nossa prioridade.
          </p>

          <button className={styles.ctaButton} onClick={handleCTA}>
            Quero Fazer Parte
          </button>
        </div>

        {/* Imagem Direita */}
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            <p>Foto de corrida/movimento</p>
          </div>
          <div className={styles.yellowLine}></div>
        </div>
      </div>
    </section>
  );
}