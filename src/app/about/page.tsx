import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "About Boulder Physical Therapist Dr Sarah Mitchell | Peak PT",
  description: "Meet Dr. Sarah Mitchell, DPT - Boulder's trusted physical therapist with 15 years experience in sports rehab & pain management. Book your appointment today.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Meet Dr. Sarah Mitchell, Your Boulder Physical Therapist</h1>
          <p className="mt-4 text-lg text-muted-foreground">15 years of helping Boulder athletes and active adults get back to peak performance</p>
          <div className="mt-8"><a href="tel:(303) 555-7890" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Schedule Your Consultation</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">From Athlete to Healer: Dr. Mitchell's Journey</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>Dr. Sarah Mitchell's path to becoming Boulder's trusted physical therapist started with her own sports injury in college. After experiencing firsthand how the right PT approach could transform recovery, she knew she wanted to help others do the same.</p><p>She earned her Doctor of Physical Therapy degree from the University of Colorado and has spent 15 years perfecting her craft right here in Boulder. Dr. Mitchell has treated everyone from weekend warriors to Olympic hopefuls, always with the same patient-centered approach that puts your goals first.</p><p>&quot;I don't just treat injuries – I treat people,&quot; says Dr. Mitchell. &quot;Every patient has unique needs, and my job is to create a recovery plan that fits your life, not the other way around.&quot;</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Our Philosophy: Evidence-Based Care That Actually Works</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>At Peak Performance PT Boulder, we believe physical therapy should be more than just exercises and ice packs. Dr. Mitchell combines cutting-edge techniques like dry needling and movement analysis with proven manual therapy methods.</p><p>Our approach is simple: understand what's really causing your pain, address the root cause (not just symptoms), and get you back to doing what you love faster. Whether you're recovering from surgery, dealing with chronic pain, or need sports rehabilitation, we create personalized treatment plans based on the latest research.</p><p>Located at 789 Pearl St in the heart of Boulder, our clinic serves the active Boulder community with convenient hours Monday through Saturday. We accept most insurance plans and always provide upfront pricing.</p></div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Start Your Recovery Journey?</h2>
          <p className="mt-2 opacity-80">Dr. Mitchell is accepting new patients. Call today to schedule your consultation and take the first step toward getting back to peak performance.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(303) 555-7890" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Book Your Appointment</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
