import { siteConfig } from "@/lib/config";
export function LocalBusinessJsonLd() {
  const biz = siteConfig.business; const social = siteConfig.social;
  const sameAs = Object.values(social).filter(Boolean);
  const jsonLd = { "@context": "https://schema.org", "@type": "LocalBusiness", name: biz.name, description: biz.description, url: siteConfig.seo.siteUrl, telephone: biz.phone, email: biz.email, address: { "@type": "PostalAddress", streetAddress: biz.address }, ...(sameAs.length > 0 && { sameAs }) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
export function WebSiteJsonLd() {
  const jsonLd = { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.business.name, url: siteConfig.seo.siteUrl };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
