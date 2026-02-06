import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Blog.module.css";
import blogPosts from "../../data/blog-posts.json";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  date: string;
  author: string;
}

export async function getStaticProps(context: { params: { id: string } }) {
  const post = blogPosts.find(
    (post: BlogPost) => post.slug === context.params.id
  );

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = blogPosts.map((post: BlogPost) => ({
    params: { id: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface PostPageProps {
  post: BlogPost;
}

export default function BlogPost({ post }: PostPageProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";
  const canonicalUrl = `${baseUrl}/blog/${post.slug}`;
  const ogImage = post.image ? `${baseUrl}${post.image}` : `${baseUrl}/mercedes.webp`;

  // Find previous and next posts
  const currentIndex = blogPosts.findIndex((p: BlogPost) => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      <Head>
        <title>{post.title} | Коли за скрап</title>
        <meta name="description" content={post.excerpt.replace(/<[^>]*>/g, '')} />
        <meta name="keywords" content="коли за скрап, бракуване, документи КАТ, автомобили за скрап" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={`${post.title} | Коли за скрап`} />
        <meta property="og:description" content={post.excerpt.replace(/<[^>]*>/g, '')} />
        <meta property="og:image" content={ogImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt.replace(/<[^>]*>/g, ''),
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "datePublished": post.date,
              "image": ogImage,
              "publisher": {
                "@type": "Organization",
                "name": "Коли за скрап София",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${baseUrl}/mercedes.webp`
                }
              }
            })
          }}
        />
      </Head>

      <main className={styles.blogPostMain}>
        <div className={styles.postHeader}>
          <Link href="/" aria-label="Назад към началната страница">← Назад към начало</Link>
          <h1>{post.title}</h1>
          <div className={styles.postMeta}>
            <span className={styles.author}>{post.author}</span>
            <span className={styles.date}>{post.date}</span>
          </div>
        </div>

        <article className={styles.postContent}>
          {post.image && (
            <div className={styles.postImage}>
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Previous/Next Post Navigation */}
        <nav className={styles.postNavigation} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2em', padding: '1em 0', borderTop: '1px solid #ccc' }}>
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`} className={styles.prevPost} style={{ textDecoration: 'none', color: 'inherit' }}>
              ← Предишен: {prevPost.title}
            </Link>
          ) : (
            <span></span>
          )}
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`} className={styles.nextPost} style={{ textDecoration: 'none', color: 'inherit' }}>
              Следващ: {nextPost.title} →
            </Link>
          ) : (
            <span></span>
          )}
        </nav>

        <section className={styles.relatedPosts}>
          <h3>Други публикации</h3>
          <div className={styles.relatedGrid}>
            {blogPosts
              .filter((p: BlogPost) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost: BlogPost) => (
                <div key={relatedPost.id} className={styles.relatedCard}>
                  <h4>
              <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                  </h4>
                  <p>{relatedPost.excerpt}</p>
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
