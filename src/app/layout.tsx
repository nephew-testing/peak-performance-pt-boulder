import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/config";
import { LocalBusinessJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";
import { SubscribeForm } from "@/components/forms/subscribe-form";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: siteConfig.seo.defaultTitle, template: siteConfig.seo.titleTemplate },
  description: siteConfig.seo.defaultDescription,
  metadataBase: new URL(siteConfig.seo.siteUrl),
  openGraph: { title: siteConfig.seo.defaultTitle, description: siteConfig.seo.defaultDescription, url: siteConfig.seo.siteUrl, siteName: siteConfig.business.name, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const socialLinks = Object.entries(siteConfig.social).filter(([, url]) => url);
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="text-xl font-bold text-foreground">{siteConfig.business.name}</a>
            <nav className="hidden items-center gap-8 md:flex">
              {siteConfig.navigation.map((item: { label: string; href: string }) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>
              ))}
              <a href="/contact" className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Contact Us</a>
            </nav>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="border-t border-border bg-secondary text-secondary-foreground">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-4">
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold">{siteConfig.business.name}</h3>
                <p className="mt-2 text-sm opacity-80">{siteConfig.business.tagline}</p>
                {siteConfig.features.emailSubscribe && (
                  <div className="mt-6">
                    <p className="mb-2 text-sm font-medium">Stay updated</p>
                    <SubscribeForm />
                  </div>
                )}
              </div>
              <div>
                <h4 className="font-semibold">Contact</h4>
                <ul className="mt-3 space-y-2 text-sm opacity-80">
                  <li><a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="hover:opacity-100">{siteConfig.business.phone}</a></li>
                  <li><a href={"mailto:" + siteConfig.business.email} className="hover:opacity-100">{siteConfig.business.email}</a></li>
                  <li>{siteConfig.business.address}</li>
                  <li>{siteConfig.business.hours}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Links</h4>
                <ul className="mt-3 space-y-2 text-sm opacity-80">
                  {siteConfig.navigation.map((item: { label: string; href: string }) => (
                    <li key={item.href}><a href={item.href} className="hover:opacity-100">{item.label}</a></li>
                  ))}
                </ul>
                {socialLinks.length > 0 && (
                  <div className="mt-4 flex gap-3">
                    {socialLinks.map(([platform, url]) => (
                      <a key={platform} href={url as string} target="_blank" rel="noopener noreferrer" className="text-sm capitalize opacity-80 hover:opacity-100">{platform}</a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs opacity-60">
              &copy; {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
