import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
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
    (post: BlogPost) => post.id === parseInt(context.params.id)
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
    params: { id: post.id.toString() },
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
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{post.title} | Коли за скрап</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.blogPostMain}>
        <div className={styles.postHeader}>
          <Link href="/">← Назад към начало</Link>
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

        <section className={styles.relatedPosts}>
          <h3>Други публикации</h3>
          <div className={styles.relatedGrid}>
            {blogPosts
              .filter((p: BlogPost) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost: BlogPost) => (
                <div key={relatedPost.id} className={styles.relatedCard}>
                  <h4>
                    <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
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
