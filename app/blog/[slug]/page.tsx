import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPost, getAllBlogPosts } from '../data';
import styles from './page.module.css';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllBlogPosts().map(post => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  return {
    title: `${post.title} - Blog LHF`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === params.slug);
  const nextPost = allPosts[currentIndex + 1];
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  if (!post) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.postHero}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            <div className={styles.metaLeft}>
              <span className={styles.author}>{post.author}</span>
              <span className={styles.dot}>•</span>
              <span className={styles.date}>
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className={styles.dot}>•</span>
              <span className={styles.readTime}>{post.readTime} min de leitura</span>
            </div>
            <span className={styles.category}>{post.category}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className={styles.imageSection}>
        <div className={styles.imagePlaceholder}>
          <p>{post.title}</p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <article 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Navigation */}
      {(prevPost || nextPost) && (
        <section className={styles.navigationSection}>
          <div className={styles.container}>
            <div className={styles.navigation}>
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className={styles.navPrev}>
                  <span className={styles.navArrow}>← Anterior</span>
                  <span className={styles.navTitle}>{prevPost.title}</span>
                </Link>
              ) : (
                <div />
              )}

              <Link href="/blog" className={styles.navBack}>
                Voltar ao Blog
              </Link>

              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className={styles.navNext}>
                  <span className={styles.navTitle}>{nextPost.title}</span>
                  <span className={styles.navArrow}>Próximo →</span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}