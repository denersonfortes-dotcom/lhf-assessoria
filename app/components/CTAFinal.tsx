'use client';

import styles from './CTAFinal.module.css';

export default function CTAFinal() {
  const handleCTA = () => {
    window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank');
  };

  return (
    <section id="contact" className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.headline}>
            Pronto para começar sua transformação?
          </h2>

          <p className={styles.description}>
            Não importa onde você está agora. O que importa é onde quer chegar. E nós vamos te ajudar a chegar lá.
          </p>

          <button className={styles.buttonPrimary} onClick={handleCTA}>
            Quero Fazer Parte
          </button>
        </div>

        <div className={styles.highlight}>
          <p className={styles.highlightText}>
            "Aqui você não treina sozinho."
          </p>
        </div>
      </div>
    </section>
  );
}