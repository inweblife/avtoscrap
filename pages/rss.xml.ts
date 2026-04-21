import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  excerpt_plain: string;
  content: string;
  image?: string;
  date: string;
  author: string;
}

const generateRss = (posts: BlogPost[]): string => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://kolizascrap.vercel.app';
  const buildDate = new Date().toUTCString();

  const items = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString();
      const link = `${baseUrl}/blog/${post.slug}`;
      const excerpt = post.excerpt_plain || post.excerpt.replace(/<[^>]+>/g, '');
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>contact@kolizascrap.vercel.app (${post.author})</author>
      <description><![CDATA[${excerpt}]]></description>
    </item>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Коли за скрап София — Блог</title>
    <link>${baseUrl}</link>
    <description>Полезни статии за изкупуване и бракуване на автомобили в София и Софийска област</description>
    <language>bg</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/avtoscrap.webp</url>
      <title>Коли за скрап София</title>
      <link>${baseUrl}</link>
    </image>${items}
  </channel>
</rss>`;
};

function Rss() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const postsPath = path.join(process.cwd(), 'data', 'blog-posts.json');
    const postsData = fs.readFileSync(postsPath, 'utf-8');
    const posts: BlogPost[] = JSON.parse(postsData);

    const rss = generateRss(posts);

    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
    res.write(rss);
    res.end();

    return { props: {} };
  } catch (error) {
    console.error('RSS generation error:', error);
    res.statusCode = 500;
    res.end('Error generating RSS feed');
    return { props: {} };
  }
};

export default Rss;
