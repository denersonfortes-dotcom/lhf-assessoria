'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Iniciante → Corredora 10km',
      image: '👩',
      before: {
        status: 'Não corria 1km',
        detail: 'Sedentária',
      },
      after: {
        status: 'Corre 10km',
        detail: 'Participando de provas',
      },
      quote: 'A mudança não foi só nos quilômetros. Foi na minha relação com meu corpo, com a corrida e com as pessoas aqui. Descobri que evoluir é possível quando você está acompanhado.',
    },
    {
      name: 'Carlos Santos',
      role: 'Intermediário → Performance',
      image: '👨',
      before: {
        status: 'Treino desorganizado',
        detail: 'Sem estrutura',
      },
      after: {
        status: 'Atleta competitivo',
        detail: 'Batendo metas',
      },
      quote: 'O acompanhamento próximo faz toda diferença. Recebi feedback constante que me ajudou a evoluir muito. Agora tenho confiança nos meus treinos.',
    },
    {
      name: 'Marina Costa',
      role: 'Sedentária → Ativa',
      image: '👩',
      before: {
        status: 'Parada há 5 anos',
        detail: 'Sem motivação',
      },
      after: {
        status: 'Treina 4x/semana',
        detail: 'Vida transformada',
      },
      quote: 'Encontrei aqui não só um treino, mas uma comunidade. As pessoas se importam realmente com sua evolução. É como treinar com amigos que se preocupam com você.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Histórias que inspiram
          </h2>
          <p className={styles.subtitle}>
            Veja como alunos reais transformaram suas jornadas
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.card}>
            {/* Evolução Visual */}
            <div className={styles.evolution}>
              <div className={styles.evolutionBlock}>
                <p className={styles.evolutionLabel}>ANTES</p>
                <div className={styles.avatar}>{current.image}</div>
                <p className={styles.evolutionStatus}>{current.before.status}</p>
                <p className={styles.evolutionDetail}>{current.before.detail}</p>
              </div>

              <div className={styles.arrow}>→</div>

              <div className={styles.evolutionBlock}>
                <p className={styles.evolutionLabel}>AGORA</p>
                <div className={styles.avatarAfter}>{current.image}</div>
                <p className={styles.evolutionStatusAfter}>{current.after.status}</p>
                <p className={styles.evolutionDetail}>{current.after.detail}</p>
              </div>
            </div>

            {/* Info */}
            <div className={styles.info}>
              <h3 className={styles.name}>{current.name}</h3>
              <p className={styles.role}>{current.role}</p>
            </div>

            {/* Depoimento */}
            <p className={styles.quote}>"{current.quote}"</p>
          </div>

          {/* Controles */}
          <div className={styles.controls}>
            <button className={styles.navButton} onClick={prevTestimonial}>
              ←
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button className={styles.navButton} onClick={nextTestimonial}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}