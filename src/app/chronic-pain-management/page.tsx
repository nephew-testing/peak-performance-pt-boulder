import { siteConfig } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Chronic Pain Physical Therapy Boulder CO | Peak Performance PT",
  description: "Expert chronic pain physical therapy in Boulder. Dr. Sarah Mitchell uses proven techniques to break the pain cycle. Book your appointment today.",
};

export default function ChronicPainManagementPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Break Free from Chronic Pain with Expert Physical Therapy in Boulder</h1>
          <p className="mt-4 text-lg text-muted-foreground">Dr. Sarah Mitchell and our team use evidence-based treatments to help you reclaim your life from persistent pain conditions</p>
          <div className="mt-8"><a href="tel:(303) 555-7890" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Book Your Pain Assessment</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Comprehensive Chronic Pain Management That Actually Works</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>Living with chronic pain doesn't have to be your new normal. At Peak Performance PT Boulder, we specialize in treating persistent pain conditions that have lasted months or years. Our chronic pain physical therapy approach addresses not just your symptoms, but the underlying movement patterns and tissue restrictions causing your ongoing discomfort.</p><p>Dr. Sarah Mitchell, DPT, brings 15 years of experience treating complex pain conditions in Boulder's active community. We combine manual therapy, dry needling, and detailed movement analysis to identify why your pain persists and create a personalized treatment plan that gets results.</p><p>Our evidence-based approach has helped hundreds of Boulder residents reduce their pain levels, improve their function, and return to activities they thought were lost forever. Whether you're dealing with chronic back pain, persistent neck issues, or ongoing joint problems, we have the expertise to help you heal.</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">Our Proven Chronic Pain Treatment Methods</h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Manual Therapy & Soft Tissue Work</h3>
                <p className="mt-2 text-muted-foreground">Hands-on techniques to release muscle tension, improve joint mobility, and restore proper movement patterns that reduce chronic pain.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Dry Needling for Pain Relief</h3>
                <p className="mt-2 text-muted-foreground">Targeted dry needling to release trigger points and reduce muscle tension that contributes to ongoing pain and dysfunction.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Movement Pattern Analysis</h3>
                <p className="mt-2 text-muted-foreground">Detailed assessment of how you move to identify compensations and imbalances that perpetuate your chronic pain cycle.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Pain Science Education</h3>
                <p className="mt-2 text-muted-foreground">Understanding how chronic pain works helps you take control of your recovery and develop effective long-term management strategies.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Personalized Exercise Programs</h3>
                <p className="mt-2 text-muted-foreground">Custom strengthening and mobility exercises designed specifically for your condition and goals, progressed safely over time.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Lifestyle Modification Guidance</h3>
                <p className="mt-2 text-muted-foreground">Practical strategies for ergonomics, sleep, stress management, and daily activities that support your pain-free lifestyle.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Frequently Asked Questions About Chronic Pain Physical Therapy</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How long does it take to see results with chronic pain physical therapy?</h3>
              <p className="mt-2 text-muted-foreground">Most patients notice some improvement within 2-3 sessions, with significant progress typically seen within 4-6 weeks. Chronic pain that has persisted for months or years requires patience, but our evidence-based approach consistently delivers lasting results.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What makes chronic pain different from acute pain in treatment?</h3>
              <p className="mt-2 text-muted-foreground">Chronic pain involves changes in your nervous system that require specialized treatment approaches. We address not just the physical aspects but also pain sensitivity, movement fears, and the psychological components that maintain chronic pain cycles.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Will physical therapy hurt if I already have chronic pain?</h3>
              <p className="mt-2 text-muted-foreground">Our treatments are designed to reduce pain, not increase it. Dr. Mitchell carefully grades all interventions to stay within your comfort zone while still promoting healing. Many patients experience immediate relief even during their first session.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do you accept insurance for chronic pain physical therapy?</h3>
              <p className="mt-2 text-muted-foreground">Yes, we work with most major insurance plans. Our team will verify your benefits and explain your coverage before treatment begins. We also offer self-pay options for those without coverage.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How is your approach different from other Boulder physical therapy clinics?</h3>
              <p className="mt-2 text-muted-foreground">Dr. Mitchell's 15 years of experience with chronic pain gives us unique expertise in Boulder. We combine multiple evidence-based techniques, spend longer with each patient, and focus on education to help you understand and manage your condition long-term.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Start Your Journey to Pain-Free Living?</h2>
          <p className="mt-2 opacity-80">Call Peak Performance PT Boulder today to schedule your chronic pain assessment with Dr. Sarah Mitchell, DPT</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(303) 555-7890" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Call (303) 555-7890</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
