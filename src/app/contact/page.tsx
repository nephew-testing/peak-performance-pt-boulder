import { siteConfig } from "@/lib/config";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = {
  title: "Contact Peak Performance PT Boulder | CO 80302",
  description: "Get in touch with Peak Performance PT Boulder. Call (303) 555-7890 or fill out our contact form. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We&apos;d love to hear from you. Fill out the form and we&apos;ll get back to you as soon as possible.
              </p>
              <div className="mt-8 space-y-5">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Phone</h3>
                  <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="mt-1 block text-lg font-medium text-primary hover:underline">
                    {siteConfig.business.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Email</h3>
                  <a href={"mailto:" + siteConfig.business.email} className="mt-1 block text-lg font-medium text-primary hover:underline">
                    {siteConfig.business.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Address</h3>
                  <p className="mt-1 text-foreground">{siteConfig.business.address}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Hours</h3>
                  <p className="mt-1 text-foreground">{siteConfig.business.hours}</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
