'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function PlanosPage() {
  const [selectedCategory, setSelectedCategory] = useState<'presencial' | 'online'>('presencial');

  const presencialPlans = [
    {
      id: 1,
      name: 'Iniciante',
      subtitle: 'Para quem está começando',
      description: 'Estrutura básica para dar seus primeiros passos na corrida com segurança.',
      features: [
        'Avaliação física inicial',
        '2 treinos personalizados por semana',
        'Acompanhamento por WhatsApp',
        'Acesso ao grupo da comunidade',
        'Relatório mensal de progresso',
      ],
      price: '299',
      period: '/mês',
      cta: 'Começar Agora',
      highlighted: false,
    },
    {
      id: 2,
      name: 'Intermediário',
      subtitle: 'Para quem quer evoluir',
      description: 'Programa completo com suporte personalizado e acompanhamento contínuo.',
      features: [
        'Avaliação física completa',
        '3 treinos personalizados por semana',
        '1 sessão de ajuste presencial/mês',
        'Suporte prioritário por WhatsApp',
        'Análise de vídeos dos treinos',
        'Acesso ao grupo + eventos mensais',
        'Plano nutricional básico',
      ],
      price: '599',
      period: '/mês',
      cta: 'Acelerar Evolução',
      highlighted: true,
    },
    {
      id: 3,
      name: 'Performance',
      subtitle: 'Para quem quer máximos resultados',
      description: 'Acompanhamento exclusivo com foco total na sua performance.',
      features: [
        'Tudo do Intermediário',
        '4 treinos personalizados por semana',
        '2 sessões presenciais por mês',
        'Atendimento 1-on-1 prioritário',
        'Análise biomecânica avançada',
        'Plano nutricional completo',
        'Preparação para competições',
        'Acompanhamento de recuperação',
      ],
      price: '999',
      period: '/mês',
      cta: 'Ativar Performance',
      highlighted: false,
    },
  ];

  const onlinePlans = [
    {
      id: 4,
      name: 'Online Essencial',
      subtitle: 'Autonomia com segurança',
      description: 'Tudo que você precisa para treinar certo, de qualquer lugar.',
      features: [
        'Avaliação física por vídeo',
        '2 treinos personalizados por semana',
        'Biblioteca de vídeos de forma',
        'Suporte por WhatsApp',
        'Acesso ao grupo online',
        'Relatório mensal digital',
      ],
      price: '199',
      period: '/mês',
      cta: 'Começar Online',
      highlighted: false,
    },
    {
      id: 5,
      name: 'Online Plus',
      subtitle: 'Mais proximidade e detalhes',
      description: 'Acompanhamento ativo com análise de vídeos e suporte constante.',
      features: [
        'Avaliação física completa por vídeo',
        '3 treinos personalizados por semana',
        '2 videocalls de análise por mês',
        'Análise de vídeos dos treinos',
        'Suporte prioritário por WhatsApp',
        'Biblioteca completa + atualizações',
        'Comunidade online + lives semanais',
        'Plano nutricional básico',
      ],
      price: '399',
      period: '/mês',
      cta: 'Ativar Acompanhamento',
      highlighted: true,
    },
    {
      id: 6,
      name: 'Online Elite',
      subtitle: 'Sem limitações, máximo suporte',
      description: 'Experiência online que se aproxima do presencial em qualidade e atenção.',
      features: [
        'Tudo do Online Plus',
        '4 treinos personalizados por semana',
        'Videocalls ilimitados (agende quando quiser)',
        'Análise biomecânica por vídeo',
        'Plano nutricional completo',
        'App exclusivo com seus dados',
        'Prioridade absoluta em dúvidas',
        'Preparação para competições',
      ],
      price: '699',
      period: '/mês',
      cta: 'Ativar Elite',
      highlighted: false,
    },
  ];

  const displayedPlans = selectedCategory === 'presencial' ? presencialPlans : onlinePlans;

  const handleWhatsApp = (planName: string) => {
    const message = `Olá! Gostaria de saber mais sobre o plano ${planName}.`;
    window.open(
      `https://wa.me/5547988123456?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Próximo Passo</div>
          
          <h1 className={styles.heroTitle}>
            Se você chegou até aqui,<br />
            já deu um passo importante.
          </h1>

          <p className={styles.heroSubtitle}>
            Agora é só escolher como você quer começar essa transformação.
          </p>
        </div>
      </section>

      {/* Category Selector */}
      <section className={styles.selectorSection}>
        <div className={styles.container}>
          <p className={styles.selectorText}>Escolha sua modalidade:</p>

          <div className={styles.selector}>
            <button
              className={`${styles.selectorBtn} ${selectedCategory === 'presencial' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('presencial')}
            >
              <span className={styles.icon}>🔶</span>
              <span className={styles.label}>Presencial</span>
            </button>

            <button
              className={`${styles.selectorBtn} ${selectedCategory === 'online' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('online')}
            >
              <span className={styles.icon}>🔷</span>
              <span className={styles.label}>Online</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className={styles.plansSection}>
        <div className={styles.container}>
          <div className={styles.plansGrid}>
            {displayedPlans.map(plan => (
              <div
                key={plan.id}
                className={`${styles.planCard} ${plan.highlighted ? styles.highlighted : ''}`}
              >
                {plan.highlighted && (
                  <div className={styles.badge2}>Mais Popular</div>
                )}

                <div className={styles.planHeader}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planSubtitle}>{plan.subtitle}</p>
                </div>

                <p className={styles.planDescription}>{plan.description}</p>

                <div className={styles.priceBox}>
                  <span className={styles.price}>R$ {plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>

                <ul className={styles.featuresList}>
                  {plan.features.map((feature, index) => (
                    <li key={index} className={styles.feature}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={styles.ctaButton}
                  onClick={() => handleWhatsApp(plan.name)}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalSection}>
        <div className={styles.container}>
          <div className={styles.finalContent}>
            <h2 className={styles.finalTitle}>
              O mais difícil você já fez.<br />
              Agora é só começar.
            </h2>

            <p className={styles.finalText}>
              Dúvida sobre qual plano escolher? Converse com a gente via WhatsApp. 
              Temos certeza que encontraremos a melhor opção para você.
            </p>

            <button
              className={styles.finalCTA}
              onClick={() => handleWhatsApp('Consultoria')}
            >
              Falar com a Gente
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}