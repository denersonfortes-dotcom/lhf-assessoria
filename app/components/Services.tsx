'use client';

import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Para Iniciantes',
      description: 'Você está começando? Descubra o prazer de correr com segurança, construindo uma base sólida que vai te levar longe.',
      color: 'primary',
    },
    {
      number: '02',
      title: 'Intermediários',
      description: 'Você já corre? Vamos elevar seu desempenho. Estrutura consistente, evolução constante, resultados reais.',
      color: 'secondary',
    },
    {
      number: '03',
      title: 'Performance',
      description: 'Buscando o topo? Treino especializado, estratégia de periodização, mentoria para atingir suas metas.',
      color: 'tertiary',
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Três caminhos. Uma comunidade.
          </h2>
          <p className={styles.subtitle}>
            Independente do seu nível, temos a modalidade certa para sua evolução
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.card} ${styles[service.color]}`}>
              <div className={styles.cardNumber}>{service.number}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <a href="#contact" className={styles.cardLink}>
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}