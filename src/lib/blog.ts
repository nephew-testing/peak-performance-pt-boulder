import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");
export interface BlogPost { slug: string; title: string; description: string; date: string; author: string; category: string; tags: string[]; targetKeyword: string; featuredImage: string | null; published: boolean; readingTime: string; content: string; }
export function getAllPosts(): Omit<BlogPost, "content">[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md")).map(filename => {
    const file = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data } = matter(file);
    if (!data.published) return null;
    return { slug: data.slug || filename.replace(/\.md$/, ""), title: data.title || "Untitled", description: data.description || "", date: data.date || "", author: data.author || "Nephew AI", category: data.category || "General", tags: data.tags || [], targetKeyword: data.targetKeyword || "", featuredImage: data.featuredImage || null, published: true, readingTime: readingTime(file).text };
  }).filter((p): p is Omit<BlogPost, "content"> => p !== null).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;
  for (const f of fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"))) {
    const file = fs.readFileSync(path.join(BLOG_DIR, f), "utf-8");
    const { data, content } = matter(file);
    if ((data.slug || f.replace(/\.md$/, "")) === slug) return { slug, title: data.title || "Untitled", description: data.description || "", date: data.date || "", author: data.author || "Nephew AI", category: data.category || "General", tags: data.tags || [], targetKeyword: data.targetKeyword || "", featuredImage: data.featuredImage || null, published: data.published !== false, readingTime: readingTime(content).text, content };
  }
  return null;
}
export function getRelatedPosts(currentSlug: string, category: string, limit = 3) { return getAllPosts().filter(p => p.slug !== currentSlug && p.category === category).slice(0, limit); }
