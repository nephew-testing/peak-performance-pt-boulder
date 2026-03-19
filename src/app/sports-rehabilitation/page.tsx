import { siteConfig } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Sports Rehabilitation Boulder CO | Peak Performance PT",
  description: "Expert sports rehabilitation in Boulder, CO. Dr. Sarah Mitchell helps athletes recover faster with proven treatments. Book your appointment today!",
};

export default function SportsRehabilitationPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Sports Rehabilitation Boulder CO</h1>
          <p className="mt-4 text-lg text-muted-foreground">Get back in the game faster with expert sports injury treatment from Dr. Sarah Mitchell and the Peak Performance PT team</p>
          <div className="mt-8"><a href="tel:(303) 555-7890" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Book Your Appointment</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Specialized Sports Rehabilitation for Boulder Athletes</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>At Peak Performance PT Boulder, we understand that sports injuries require specialized care. Dr. Sarah Mitchell, DPT, has 15 years of experience treating athletes and active adults in Boulder, CO, using evidence-based techniques that get you back to peak performance. Our sports rehabilitation program combines manual therapy, dry needling, and advanced movement analysis to address the root cause of your injury, not just the symptoms. Whether you're a weekend warrior, competitive athlete, or fitness enthusiast, we create personalized treatment plans that fit your sport and goals. Located on Pearl Street in Boulder, we're here to help you return to the activities you love stronger than before.</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">Our Sports Rehabilitation Services</h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Movement Analysis & Correction</h3>
                <p className="mt-2 text-muted-foreground">Advanced biomechanical assessment to identify movement patterns that contribute to injury and performance limitations</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Manual Therapy & Dry Needling</h3>
                <p className="mt-2 text-muted-foreground">Hands-on techniques and trigger point dry needling to reduce pain, improve mobility, and accelerate healing</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Sport-Specific Training</h3>
                <p className="mt-2 text-muted-foreground">Customized exercise programs that prepare you for the demands of your specific sport or activity</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Injury Prevention Programs</h3>
                <p className="mt-2 text-muted-foreground">Proactive conditioning and education to reduce your risk of future injuries and maintain peak performance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Sports Rehabilitation FAQ</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How long does sports rehabilitation take?</h3>
              <p className="mt-2 text-muted-foreground">Recovery time varies based on your injury type and severity. Most athletes see significant improvement within 4-6 weeks, with full return to sport typically taking 6-12 weeks. Dr. Mitchell will provide a personalized timeline during your initial evaluation.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do I need a referral for sports rehabilitation?</h3>
              <p className="mt-2 text-muted-foreground">No referral is needed in Colorado. You can schedule directly with Peak Performance PT Boulder. However, we recommend checking with your insurance provider about coverage requirements.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What sports injuries do you treat?</h3>
              <p className="mt-2 text-muted-foreground">We treat all types of sports injuries including ACL tears, shoulder impingement, tennis elbow, runner's knee, ankle sprains, back pain, and post-surgical rehabilitation. Our Boulder clinic specializes in both acute injuries and chronic conditions.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Can you help prevent future sports injuries?</h3>
              <p className="mt-2 text-muted-foreground">Absolutely. Our movement analysis identifies risk factors and muscle imbalances before they cause problems. We create injury prevention programs tailored to your sport and individual needs.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What makes Peak Performance PT different?</h3>
              <p className="mt-2 text-muted-foreground">Dr. Sarah Mitchell's 15 years of sports rehabilitation experience, combined with evidence-based treatments like dry needling and manual therapy, sets us apart. We focus on getting Boulder athletes back to peak performance, not just pain-free.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Get Back in the Game?</h2>
          <p className="mt-2 opacity-80">Schedule your sports rehabilitation consultation with Dr. Sarah Mitchell at Peak Performance PT Boulder. Call (303) 555-7890 or visit us at 789 Pearl St.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(303) 555-7890" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Book Your Appointment</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
