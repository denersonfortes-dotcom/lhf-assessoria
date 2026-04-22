'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getAllBlogPosts, getCategories, getPostsByCategory } from './data';
import styles from './page.module.css';

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayedPosts = selectedCategory 
    ? getPostsByCategory(selectedCategory)
    : allPosts;

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Blog LHF</h1>
          <p className={styles.heroSubtitle}>
            Dicas, artigos e conhecimento para sua evolução
          </p>
        </div>
      </section>

      {/* Blog Section com Sidebar */}
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <div className={styles.blogWrapper}>
            {/* Sidebar - Categorias */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarBox}>
                <h3 className={styles.sidebarTitle}>Temas Principais</h3>
                
                <button
                  className={`${styles.categoryBtn} ${selectedCategory === null ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  <span className={styles.categoryDot}></span>
                  Todos ({allPosts.length})
                </button>

                {categories.map(category => {
                  const count = allPosts.filter(post => post.category === category).length;
                  return (
                    <button
                      key={category}
                      className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span className={styles.categoryDot}></span>
                      {category} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Featured Post */}
              <div className={styles.sidebarBox}>
                <h3 className={styles.sidebarTitle}>Destaque</h3>
                {allPosts[0] && (
                  <Link href={`/blog/${allPosts[0].slug}`} className={styles.featuredLink}>
                    <div className={styles.featuredImage}>
                      <div className={styles.imagePlaceholder}>Destaque</div>
                    </div>
                    <p className={styles.featuredTitle}>{allPosts[0].title}</p>
                  </Link>
                )}
              </div>
            </aside>

            {/* Main Content - Posts Grid */}
            <div className={styles.mainContent}>
              {/* Filter Info */}
              <div className={styles.filterInfo}>
                {selectedCategory && (
                  <div className={styles.filterTag}>
                    <span>Filtrando por: <strong>{selectedCategory}</strong></span>
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className={styles.clearFilter}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Posts Grid */}
              <div className={styles.postsGrid}>
                {displayedPosts.length > 0 ? (
                  displayedPosts.map(post => (
                    <article key={post.id} className={styles.postCard}>
                      {/* Imagem */}
                      <div className={styles.postImage}>
                        <div className={styles.imagePlaceholder}>
                          <p>{post.title}</p>
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <div className={styles.postContent}>
                        <div className={styles.postMeta}>
                          <span className={styles.category}>{post.category}</span>
                          <span className={styles.readTime}>{post.readTime} min</span>
                        </div>

                        <h2 className={styles.postTitle}>{post.title}</h2>

                        <p className={styles.postExcerpt}>{post.excerpt}</p>

                        <div className={styles.postFooter}>
                          <div className={styles.authorInfo}>
                            <p className={styles.author}>{post.author}</p>
                            <p className={styles.date}>
                              {new Date(post.date).toLocaleDateString('pt-BR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </p>
                          </div>

                          <Link href={`/blog/${post.slug}`} className={styles.readMoreBtn}>
                            Ler Mais →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className={styles.emptyState}>
                    <p>Nenhum post encontrado nesta categoria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}