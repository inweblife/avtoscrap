import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';

interface SiteMapEntry {
  url: string;
  changefreq: string;
  priority: string;
  lastmod?: string;
}

const generateSiteMap = (posts: any[]): string => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';
  
  const staticPages: SiteMapEntry[] = [
    {
      url: '/',
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/services',
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/contact',
      changefreq: 'monthly',
      priority: '0.8',
    },
  ];

  const blogPages: SiteMapEntry[] = posts.map((post) => ({
    url: `/blog/${post.id}`,
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: post.lastmod || new Date().toISOString().split('T')[0],
  }));

  const allPages: SiteMapEntry[] = [...staticPages, ...blogPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${allPages
       .map(({ url, changefreq, priority, lastmod }) => {
         return `
     <url>
       <loc>${`${baseUrl}${url}`}</loc>
       ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
       <changefreq>${changefreq}</changefreq>
       <priority>${priority}</priority>
     </url>
   `;
       })
       .join('')}
   </urlset>
 `;
};

function SiteMap() {
  // This component is not used - the XML is generated server-side
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    // Read blog posts from JSON file
    const postsPath = path.join(process.cwd(), 'data', 'blog-posts.json');
    const postsData = fs.readFileSync(postsPath, 'utf-8');
    const posts = JSON.parse(postsData);

    const sitemap = generateSiteMap(posts);

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.statusCode = 500;
    res.end('Error generating sitemap');
    return {
      props: {},
    };
  }
};

export default SiteMap;
