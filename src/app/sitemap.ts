import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { getAllPosts } from "@/lib/blog";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.siteUrl;
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: base+"/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: base+"/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: base+"/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: base+"/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: base+"/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
  const blogPages = getAllPosts().map(post => ({ url: base+"/blog/"+post.slug, lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: 0.6 }));
  return [...staticPages, ...blogPages];
}
