import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/config";
export const metadata = { title: "Blog | " + siteConfig.seo.defaultTitle, description: "Latest posts from " + siteConfig.business.name };
export default function BlogIndex() {
  const posts = getAllPosts();
  return (<main><section className="px-6 py-16"><div className="mx-auto max-w-4xl"><h1 className="text-4xl font-bold">Blog</h1><p className="mt-2 text-lg text-muted-foreground">Tips, news, and updates from {siteConfig.business.name}.</p>
  {posts.length === 0 ? (<div className="mt-12 rounded-xl border bg-muted p-12 text-center"><p className="text-muted-foreground">Blog posts coming soon.</p></div>) : (<div className="mt-10 space-y-6">{posts.map(post => (<article key={post.slug}><Link href={"/blog/" + post.slug} className="block rounded-xl border p-6 hover:shadow-md"><div className="flex items-center gap-3 text-sm text-muted-foreground"><span>{post.category}</span><span>&middot;</span><time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</time><span>&middot;</span><span>{post.readingTime}</span></div><h2 className="mt-2 text-xl font-semibold">{post.title}</h2><p className="mt-2 text-muted-foreground line-clamp-2">{post.description}</p></Link></article>))}</div>)}
  </div></section></main>);
}
