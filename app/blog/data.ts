export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'como-comecar-a-correr',
    title: 'Como Começar a Correr: Guia Completo para Iniciantes',
    excerpt: 'Descubra os primeiros passos para começar sua jornada na corrida. Desde a escolha do tênis até os treinos iniciais.',
    content: `
      <h2>Introdução</h2>
      <p>Começar a correr é uma decisão que pode transformar sua vida. Mas sabemos que os primeiros passos podem ser intimidadores. Por isso, preparamos este guia completo para te ajudar.</p>

      <h2>1. Escolha o Tênis Certo</h2>
      <p>O primeiro passo é investir em um bom tênis de corrida. Não precisa ser o mais caro, mas deve ter um bom amortecimento e suporte para seus pés.</p>
      <p>Procure por lojas especializadas onde possam fazer uma análise da sua pisada. Isso faz toda a diferença!</p>

      <h2>2. Comece Devagar</h2>
      <p>Muitas pessoas começam correndo muito rápido e depois se machucam. O ideal é começar com uma mistura de corrida e caminhada.</p>
      <p>Por exemplo: caminhe 2 minutos, corra 1 minuto, e repita isso 5 vezes. Gradualmente, aumente o tempo de corrida.</p>

      <h2>3. Consistência é Fundamental</h2>
      <p>Treinar 3 vezes por semana é mais importante do que treinar 1 vez por semana durante muito tempo. Seu corpo se adapta melhor com regularidade.</p>

      <h2>4. Ouça Seu Corpo</h2>
      <p>Se sente dor, pare. Dor não é normal. Cansaço é normal, dor não. A diferença é importante!</p>

      <h2>Conclusão</h2>
      <p>Começar a correr é um processo gradual. Não tenha pressa. Em poucas semanas você já notará grandes mudanças no seu corpo e na sua mente.</p>
    `,
    image: '/blog/post1.jpg',
    author: 'Ana Silva',
    date: '2024-04-15',
    category: 'Iniciantes',
    readTime: 5,
  },
  {
    id: '2',
    slug: 'nutriacao-para-corredores',
    title: 'Nutrição para Corredores: O que Comer Antes e Depois do Treino',
    excerpt: 'Aprenda como se alimentar corretamente para potencializar seus treinos e recuperação.',
    content: `
      <h2>Introdução</h2>
      <p>A nutrição é tão importante quanto o treino. O que você come antes, durante e depois do treino pode fazer uma grande diferença no seu desempenho.</p>

      <h2>Antes do Treino</h2>
      <p>Coma algo leve entre 30-60 minutos antes de correr. O ideal é combinar carboidratos com um pouco de proteína.</p>
      <p>Boas opções: banana com mel, aveia com frutas, ou pão integral com queijo.</p>

      <h2>Depois do Treino</h2>
      <p>A recuperação começa logo após o treino. Seu corpo está pronto para absorver nutrientes.</p>
      <p>Coma algo com proteína e carboidratos nos primeiros 30 minutos. Um bom exemplo é um smoothie com proteína em pó.</p>

      <h2>Hidratação</h2>
      <p>Beba água durante o dia, não apenas durante o treino. Para treinos de menos de 1 hora, água é suficiente.</p>

      <h2>Conclusão</h2>
      <p>Nutrição correta = melhor desempenho. Invista nela!</p>
    `,
    image: '/blog/post2.jpg',
    author: 'Carlos Santos',
    date: '2024-04-10',
    category: 'Nutrição',
    readTime: 6,
  },
  {
    id: '3',
    slug: 'treinos-para-melhorar-velocidade',
    title: 'Treinos Eficientes para Melhorar Sua Velocidade',
    excerpt: 'Descubra os melhores treinos intervalados para aumentar sua velocidade de corrida.',
    content: `
      <h2>Introdução</h2>
      <p>Melhorar velocidade é possível com treinos bem estruturados. Não é sobre correr mais rápido o tempo todo, mas sobre treinar inteligentemente.</p>

      <h2>Treino Intervalado</h2>
      <p>Este é o treino mais eficiente para melhorar velocidade. Alterne entre períodos rápidos e lentos.</p>
      <p>Exemplo: corra rápido por 2 minutos, depois caminhe/trote leve por 1 minuto. Repita 6-8 vezes.</p>

      <h2>Treino de Ritmo Constante</h2>
      <p>Escolha uma velocidade que seja desafiadora mas sustentável e mantenha por 20-30 minutos.</p>

      <h2>Treino Longo e Lento</h2>
      <p>Uma vez por semana, faça um treino longo em ritmo conversável. Isso constrói resistência aeróbica.</p>

      <h2>Conclusão</h2>
      <p>Variedade é a chave. Combine diferentes tipos de treino para máximos resultados!</p>
    `,
    image: '/blog/post3.jpg',
    author: 'Marina Costa',
    date: '2024-04-05',
    category: 'Treino',
    readTime: 7,
  },
  {
    id: '4',
    slug: 'recuperacao-pos-treino',
    title: 'Recuperação Pós-Treino: Como Acelerar Sua Recuperação',
    excerpt: 'Técnicas e estratégias para recuperação eficiente e prevenção de lesões.',
    content: `
      <h2>Introdução</h2>
      <p>A recuperação é tão importante quanto o treino. É durante a recuperação que seu corpo fica mais forte.</p>

      <h2>Descanso Adequado</h2>
      <p>Durma 7-9 horas por noite. O sono é quando seu corpo se recupera e se repara.</p>

      <h2>Alongamento</h2>
      <p>Faça alongamento após o treino. Isso ajuda a reduzir a fadiga muscular e a dor.</p>

      <h2>Massagem e Foam Rolling</h2>
      <p>Use um foam roller ou procure por massagem profissional para liberar tensão muscular.</p>

      <h2>Conclusão</h2>
      <p>Recuperação = crescimento. Não negligencie essa etapa importante!</p>
    `,
    image: '/blog/post4.jpg',
    author: 'João Pedro',
    date: '2024-03-28',
    category: 'Recuperação',
    readTime: 5,
  },
  {
    id: '5',
    slug: 'mental-corrida-supere-limites',
    title: 'O Lado Mental da Corrida: Supere Seus Limites Psicológicos',
    excerpt: 'Entenda como treinar sua mente para alcançar objetivos na corrida.',
    content: `
      <h2>Introdução</h2>
      <p>A corrida é 90% mental. Seu corpo é capaz de muito mais do que sua mente acredita.</p>

      <h2>Visualização</h2>
      <p>Antes de uma corrida importante, visualize-se alcançando seu objetivo. Seu cérebro não diferencia visualização de realidade.</p>

      <h2>Diálogo Interno Positivo</h2>
      <p>Fale consigo mesmo de forma positiva. "Eu sou forte" é muito mais poderoso que "Eu não consigo".</p>

      <h2>Estabeleça Metas Realistas</h2>
      <p>Metas pequenas levam a vitórias, e vitórias constroem confiança.</p>

      <h2>Conclusão</h2>
      <p>Treine sua mente tanto quanto treina seu corpo!</p>
    `,
    image: '/blog/post5.jpg',
    author: 'Ana Silva',
    date: '2024-03-20',
    category: 'Mentalidade',
    readTime: 6,
  },
  {
    id: '6',
    slug: 'equipamento-essencial-corredor',
    title: 'Equipamento Essencial: O Que Todo Corredor Precisa',
    excerpt: 'Conheça os itens indispensáveis para começar ou melhorar sua corrida.',
    content: `
      <h2>Introdução</h2>
      <p>Nem precisa de muito para começar a correr. Mas alguns itens realmente fazem diferença.</p>

      <h2>O Tênis Certo</h2>
      <p>Este é o item mais importante. Invista em um bom tênis de corrida.</p>

      <h2>Roupas Confortáveis</h2>
      <p>Procure por tecidos que absorvem suor. Algodão não é ideal para corrida.</p>

      <h2>Relógio de Corrida</h2>
      <p>Um smartwatch ou relógio de corrida ajuda a monitorar seu progresso.</p>

      <h2>Conclusão</h2>
      <p>A qualidade do equipamento importa, mas consistência importa ainda mais!</p>
    `,
    image: '/blog/post6.jpg',
    author: 'Carlos Santos',
    date: '2024-03-15',
    category: 'Equipamento',
    readTime: 5,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCategories(): string[] {
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  return categories.sort();
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts
    .filter(post => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}