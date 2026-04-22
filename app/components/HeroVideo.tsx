'use client';

import styles from './HeroVideo.module.css';

export default function HeroVideo() {
  return (
    <section className={styles.hero}>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/running-bg.mp4" type="video/mp4" />
          <img src="/images/running-bg.jpg" alt="Running Background" />
        </video>
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.headline}>
            Aqui você não <br />
            treina sozinho.
          </h1>

          <h2 className={styles.subheadline}>
            Você evolui com apoio,<br />
            método e propósito.
          </h2>

          <p className={styles.description}>
            Para iniciantes, corredores intermediários e atletas <br />
            de performance. Sua evolução é nossa prioridade.
          </p>

          <button className={styles.ctaButton}>
            QUERO FAZER PARTE
          </button>

          <div className={styles.scrollIndicator}>
            <span>SCROLL PARA CONHECER</span>
            <div className={styles.scrollArrow}>↓</div>
          </div>
        </div>
      </div>
    </section>
  );
}