import { siteConfig } from "@/lib/config";
export const metadata = { title: "Terms of Service | " + siteConfig.business.name };
export default function TermsPage() { const b = siteConfig.business; return (<main className="px-6 py-16"><div className="mx-auto max-w-3xl prose prose-lg"><h1>Terms of Service</h1><p>By using {siteConfig.seo.siteUrl}, you agree to these terms. Content is owned by {b.name}. Services provided as-is. Contact <a href={"mailto:"+b.email}>{b.email}</a> with questions.</p></div></main>); }
