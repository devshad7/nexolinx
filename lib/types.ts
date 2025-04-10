// lib/types.ts
export interface Post {
    [x: string]: string | TrustedHTML;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    author: string;
    image: string;
    slug: string;
  }
  