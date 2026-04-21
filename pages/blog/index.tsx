import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import blogPosts from "../../data/blog-posts.json";
import blogStyles from "../../styles/Blog.module.css";
import cardStyles from "../../styles/Home.module.css";
import { sanitize } from "../../lib/sanitize";

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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://kolizascrap.vercel.app";

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Блог | Коли за скрап София",
              "description": "Полезни статии и публикации за бракуване на автомобили, документи за КАТ и изкупуване на коли за скрап в София.",
              "url": `${baseUrl}/blog`,
              "publisher": {
                "@type": "Organization",
                "name": "Коли за скрап София",
                "logo": { "@type": "ImageObject", "url": `${baseUrl}/mercedes.webp` }
              }
            })
          }}
        />
      </Head>

      <main className={blogStyles.blogListMain}>
        <div className={blogStyles.postHeader}>
          <Link href="/" aria-label="Назад към началната страница">
            ← Назад към начало
          </Link>
          <h1>Блог</h1>
          <p className={cardStyles.blogIntro}>
            Полезни статии и публикации за автомобилите за скрап
          </p>
        </div>

        <div className={cardStyles.blogGrid}>
          {[...(blogPosts as BlogPost[])].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => (
            <div key={post.id} className={cardStyles.blogCardWrapper}>
              <Link href={`/blog/${post.slug}`} className={cardStyles.blogCardLink} aria-label={`Прочети: ${post.title}`} />
              {post.image && (
                <div className={cardStyles.cardImage}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    sizes="(min-width: 45em) 450px, 100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              <div className={cardStyles.cardContent}>
                <h3>{post.title}</h3>
                <div className={blogStyles.postMeta}>
                  <span className={blogStyles.date}>{post.date}</span>
                </div>
                <p
                  className={cardStyles.blogExcerpt}
                  dangerouslySetInnerHTML={{ __html: sanitize(post.excerpt) }}
                />
                <Link href={`/blog/${post.slug}`} className={cardStyles.readMore}>Прочетете повече →</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
