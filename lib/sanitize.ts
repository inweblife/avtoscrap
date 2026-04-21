import sanitizeHtml from 'sanitize-html';

const allowedTags = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'p', 'br', 'strong', 'em', 'b', 'i', 'u',
  'ul', 'ol', 'li',
  'a', 'img',
  'blockquote', 'pre', 'code',
];

const allowedAttributes: sanitizeHtml.IOptions['allowedAttributes'] = {
  a: ['href', 'target', 'rel'],
  img: ['src', 'alt', 'width', 'height'],
};

export function sanitize(html: string): string {
  return sanitizeHtml(html, { allowedTags, allowedAttributes });
}
