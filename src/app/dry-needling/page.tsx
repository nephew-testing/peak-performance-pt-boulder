import { siteConfig } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Dry Needling Boulder CO | Trigger Point Treatment | Peak PT",
  description: "Expert dry needling Boulder CO for trigger point release & pain relief. Dr. Sarah Mitchell, DPT offers specialized treatment. Book your appointment today.",
};

export default function DryNeedlingPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Dry Needling Boulder CO - Advanced Trigger Point Treatment</h1>
          <p className="mt-4 text-lg text-muted-foreground">Break the cycle of chronic pain and muscle tension with precise dry needling therapy from Dr. Sarah Mitchell, DPT</p>
          <div className="mt-8"><a href="tel:(303) 555-7890" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Book Your Appointment</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">What is Dry Needling and How Does it Work?</h2>
          <div className="mt-4 text-muted-foreground leading-relaxed space-y-4"><p>Dry needling is a specialized technique that uses thin needles to release trigger points in tight muscle bands that cause pain and restrict movement. Unlike acupuncture, dry needling targets specific anatomical structures based on Western medicine principles. Dr. Sarah Mitchell uses this evidence-based approach to treat chronic pain, sports injuries, and post-surgical recovery at Peak Performance PT Boulder. With 15 years of experience treating athletes and active adults, Dr. Mitchell combines dry needling with manual therapy and movement analysis for comprehensive pain relief. This targeted treatment helps restore normal muscle function, reduce inflammation, and accelerate healing so you can get back to doing what you love.</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">Conditions We Treat with Dry Needling in Boulder</h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Chronic Neck & Shoulder Pain</h3>
                <p className="mt-2 text-muted-foreground">Release trigger points causing headaches, neck stiffness, and shoulder tension from desk work or poor posture</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Sports Injuries & Recovery</h3>
                <p className="mt-2 text-muted-foreground">Accelerate healing for muscle strains, IT band syndrome, and overuse injuries in runners, cyclists, and athletes</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Lower Back Pain & Sciatica</h3>
                <p className="mt-2 text-muted-foreground">Target deep muscle tension and trigger points contributing to chronic lower back pain and nerve irritation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Post-Surgical Recovery</h3>
                <p className="mt-2 text-muted-foreground">Reduce scar tissue formation and restore normal muscle activation after orthopedic surgeries</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Chronic Pain Conditions</h3>
                <p className="mt-2 text-muted-foreground">Break pain cycles in fibromyalgia, myofascial pain syndrome, and other persistent pain conditions</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Tennis & Golfer's Elbow</h3>
                <p className="mt-2 text-muted-foreground">Release forearm trigger points and restore normal muscle function for lasting elbow pain relief</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Dry Needling Questions from Boulder Patients</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Does dry needling hurt?</h3>
              <p className="mt-2 text-muted-foreground">Most patients experience minimal discomfort during needle insertion. You may feel a brief muscle twitch or cramping sensation when the trigger point releases, which indicates effective treatment. Any soreness typically resolves within 24-48 hours.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How is dry needling different from acupuncture?</h3>
              <p className="mt-2 text-muted-foreground">Dry needling targets specific trigger points and muscle knots based on Western anatomy and physiology. Acupuncture follows Traditional Chinese Medicine principles using energy meridians. Both use thin needles but have different treatment goals and techniques.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How many dry needling sessions will I need?</h3>
              <p className="mt-2 text-muted-foreground">Most patients see improvement within 2-4 sessions, though this varies based on your condition's severity and duration. Dr. Mitchell will assess your progress and adjust your treatment plan accordingly during your Boulder visits.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Can I exercise after dry needling treatment?</h3>
              <p className="mt-2 text-muted-foreground">Light movement and gentle stretching are encouraged after treatment. Avoid intense exercise for 24 hours to allow your muscles to recover. Dr. Mitchell will provide specific activity guidelines based on your treatment areas.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Is dry needling covered by insurance in Colorado?</h3>
              <p className="mt-2 text-muted-foreground">Many insurance plans cover dry needling when performed by a licensed physical therapist. We'll verify your benefits and help you understand your coverage before starting treatment at Peak Performance PT Boulder.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Experience Pain Relief with Dry Needling?</h2>
          <p className="mt-2 opacity-80">Schedule your consultation with Dr. Sarah Mitchell at Peak Performance PT Boulder. Located at 789 Pearl St, we're here to help you move better and feel better.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(303) 555-7890" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Call (303) 555-7890</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
