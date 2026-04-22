'use client';

import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Coluna Direita - Conteúdo */}
        <div className={styles.contentColumn}>
          <div className={styles.badge}>NOSSA ESSÊNCIA</div>
          
          <h2 className={styles.title}>
            Você não treina sozinho.
          </h2>

          <p className={styles.description}>
            A LHF é mais que uma assessoria. É um ambiente onde cada passo é acompanhado. Onde seu objetivo é nosso objetivo. Onde a evolução é coletiva, mas o atendimento é individual.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureNumber}>01</div>
              <h3 className={styles.featureTitle}>Método Profissional</h3>
              <p className={styles.featureText}>
                Treinos estruturados, personalizados e evoluindo a cada semana.
              </p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureNumber}>02</div>
              <h3 className={styles.featureTitle}>Ambiente de Família</h3>
              <p className={styles.featureText}>
                Você não é um número. Você faz parte de uma comunidade que cresce junto.
              </p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureNumber}>03</div>
              <h3 className={styles.featureTitle}>Atenção Individual</h3>
              <p className={styles.featureText}>
                Seu ritmo, suas limitações, seus sonhos. Respeitamos sua individualidade.
              </p>
            </div>
          </div>

          <a href="#contact" className={styles.cta}>
            Conhecer Mais →
          </a>
        </div>

        {/* Coluna Esquerda - Imagens Sobrepostas */}
        <div className={styles.imageColumn}>
          {/* Imagem 1 - Topo esquerdo */}
          <div className={`${styles.imageWrapper} ${styles.image1}`}>
            <div className={styles.imagePlaceholder}>
              <p>Foto 1</p>
            </div>
          </div>

          {/* Imagem 2 - Meio esquerdo */}
          <div className={`${styles.imageWrapper} ${styles.image2}`}>
            <div className={styles.imagePlaceholder}>
              <p>Foto 2</p>
            </div>
          </div>

          {/* Imagem 3 - Fundo direito */}
          <div className={`${styles.imageWrapper} ${styles.image3}`}>
            <div className={styles.imagePlaceholder}>
              <p>Foto 3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}