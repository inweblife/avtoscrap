import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import blogPosts from "../../data/blog-posts.json";
import styles from "../../styles/Blog.module.css";

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

export default function BlogIndex() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

  return (
    <>
      <Head>
        <title>Блог | Коли за скрап София</title>
        <meta
          name="description"
          content="Полезни статии и публикации за бракуване на автомобили, документи за КАТ и изкупуване на коли за скрап в София."
        />
        <meta
          name="keywords"
          content="блог, коли за скрап, бракуване, документи КАТ, автомобили за скрап"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${baseUrl}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/blog`} />
        <meta property="og:title" content="Блог | Коли за скрап София" />
        <meta
          property="og:description"
          content="Полезни статии за бракуване на автомобили и изкупуване на коли за скрап."
        />
        <meta property="og:image" content={`${baseUrl}/mercedes.webp`} />
      </Head>

      <main className={styles.blogPostMain}>
        <div className={styles.postHeader}>
          <Link href="/" aria-label="Назад към началната страница">
            ← Назад към начало
          </Link>
          <h1>Блог</h1>
          <p className={styles.blogIntro}>
            Полезни статии и публикации за автомобилите за скрап
          </p>
        </div>

        <div className={styles.blogGrid}>
          {blogPosts.map((post: BlogPost) => (
            <div key={post.id} className={styles.blogCardWrapper}>
              <Link href={`/blog/${post.slug}`}>
                <a className={styles.blogCardLink} aria-label={`Прочети: ${post.title}`} />
              </Link>
              {post.image && (
                <div className={styles.cardImage}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              )}
              <div className={styles.cardContent}>
                <h3>{post.title}</h3>
                <div className={styles.postMeta}>
                  <span className={styles.date}>{post.date}</span>
                </div>
                <p
                  className={styles.blogExcerpt}
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <Link href={`/blog/${post.slug}`}>
                  <a className={styles.readMore}>Прочетете повече →</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
