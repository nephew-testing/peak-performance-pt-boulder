import { siteConfig } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Post Surgical Physical Therapy Boulder | Peak Performance PT",
  description: "Expert post surgical physical therapy in Boulder. Dr. Sarah Mitchell helps you recover faster with evidence-based treatment. Book your appointment today.",
};

export default function PostSurgicalRecoveryPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Post-Surgical Physical Therapy in Boulder</h1>
          <p className="mt-4 text-lg text-muted-foreground">Get back to your active life faster with expert post-operative rehabilitation from Dr. Sarah Mitchell and the Peak Performance PT team</p>
          <div className="mt-8"><a href="tel:(303) 555-7890" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Book Your Recovery Session</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Expert Post-Surgical Recovery in Boulder</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>After surgery, your recovery depends on the right rehabilitation approach. At Peak Performance PT Boulder, Dr. Sarah Mitchell, DPT, brings 15 years of experience helping patients recover from orthopedic surgeries including knee replacements, ACL repairs, rotator cuff repairs, and spinal procedures.</p><p>Our post surgical physical therapy Boulder program combines evidence-based manual therapy, targeted movement analysis, and progressive strengthening protocols. We work closely with your surgeon's timeline while addressing your specific recovery goals — whether that's returning to competitive sports, hiking Colorado's trails, or simply moving pain-free in daily activities.</p><p>Located on Pearl Street in Boulder, we see patients throughout the Front Range who want to maximize their surgical outcomes and minimize recovery time.</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">Our Post-Surgical Recovery Services</h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Orthopedic Surgery Recovery</h3>
                <p className="mt-2 text-muted-foreground">Specialized rehabilitation for knee, hip, shoulder, and spine surgeries with surgeon-approved protocols</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Sports Surgery Rehabilitation</h3>
                <p className="mt-2 text-muted-foreground">ACL reconstruction, meniscus repair, and rotator cuff recovery for athletes and active adults</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Manual Therapy & Dry Needling</h3>
                <p className="mt-2 text-muted-foreground">Hands-on techniques to reduce scar tissue, improve mobility, and accelerate healing</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Movement Analysis</h3>
                <p className="mt-2 text-muted-foreground">Identify and correct movement patterns that could impact your recovery or cause re-injury</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Pain Management</h3>
                <p className="mt-2 text-muted-foreground">Evidence-based approaches to manage post-operative pain without over-relying on medication</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Return-to-Activity Planning</h3>
                <p className="mt-2 text-muted-foreground">Progressive programs to safely return to work, sports, and recreational activities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Post-Surgical Physical Therapy Questions</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">When should I start physical therapy after surgery?</h3>
              <p className="mt-2 text-muted-foreground">This depends on your specific surgery and surgeon's protocol. Some procedures require immediate post-operative PT within days, while others need several weeks of healing first. We coordinate directly with your surgical team to ensure optimal timing for your recovery.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How long does post-surgical physical therapy take?</h3>
              <p className="mt-2 text-muted-foreground">Recovery timelines vary by surgery type and individual factors. Minor arthroscopic procedures may require 6-8 weeks of PT, while major joint replacements often need 12-16 weeks. Dr. Mitchell will provide realistic timelines based on your specific procedure and goals.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do you accept referrals from Boulder surgeons?</h3>
              <p className="mt-2 text-muted-foreground">Yes, we work with orthopedic surgeons throughout Boulder and the Front Range. We follow surgeon protocols precisely while customizing treatment to your individual needs and recovery goals.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Will post-surgical PT be covered by my insurance?</h3>
              <p className="mt-2 text-muted-foreground">Most insurance plans cover post-surgical physical therapy when medically necessary. We verify benefits before your first visit and work with most major insurance providers in Colorado to minimize your out-of-pocket costs.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What should I bring to my first post-surgical PT appointment?</h3>
              <p className="mt-2 text-muted-foreground">Bring your surgical notes, any post-operative instructions from your surgeon, insurance cards, and a list of current medications. Wear comfortable clothing that allows access to your surgical site.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Start Your Recovery?</h2>
          <p className="mt-2 opacity-80">Don't let post-surgical recovery hold you back. Call Peak Performance PT Boulder today to schedule your evaluation with Dr. Sarah Mitchell.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(303) 555-7890" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Call (303) 555-7890</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
