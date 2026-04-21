const fs = require('fs');

// Fix post 4 excerpt: add link on "изкупуване на коли"
const posts = JSON.parse(fs.readFileSync('data/blog-posts.json', 'utf-8'));
const p4 = posts.find(p => p.id === 4);
p4.excerpt = p4.excerpt.replace(
  'изкупуване на коли',
  '<a href="https://carco.bg/blog/izkupuvane-na-koli-za-chasti" target="_blank" rel="noopener noreferrer"><strong>изкупуване на коли</strong></a>'
);
// excerpt_plain stays plain
fs.writeFileSync('data/blog-posts.json', JSON.stringify(posts, null, 2));
console.log('post 4 excerpt link:', p4.excerpt.includes('carco.bg') ? 'OK' : 'FAIL');
