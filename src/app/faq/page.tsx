import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Physical Therapy Boulder Questions - Peak Performance PT",
  description: "Get answers to common physical therapy Boulder questions. Dr. Sarah Mitchell answers your PT concerns. Book your appointment today!",
};

export default function FaqPage() {
  return (
    <main>
      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Physical Therapy Boulder Questions Answered</h1>
          <p className="mt-4 text-lg text-muted-foreground">Dr. Sarah Mitchell and our team at Peak Performance PT Boulder answer the most common questions about physical therapy, treatment options, and what to expect during your recovery journey.</p>
          <div className="mt-8"><a href="tel:(303) 555-7890" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Book Your Consultation</a></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">Frequently Asked Questions About Physical Therapy in Boulder</h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do I need a doctor's referral for physical therapy in Colorado?</h3>
              <p className="mt-2 text-muted-foreground">No, Colorado allows direct access to physical therapy. You can schedule an appointment at Peak Performance PT Boulder without a referral. However, some insurance plans may require a referral for coverage, so we recommend checking with your provider first.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What should I expect during my first physical therapy appointment?</h3>
              <p className="mt-2 text-muted-foreground">Your initial visit includes a comprehensive evaluation with Dr. Sarah Mitchell or one of our experienced therapists. We'll discuss your medical history, assess your movement patterns, identify problem areas, and create a personalized treatment plan. The appointment typically lasts 60-90 minutes.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">How long does physical therapy treatment usually take?</h3>
              <p className="mt-2 text-muted-foreground">Treatment duration varies based on your condition, goals, and adherence to the program. Most patients see improvement within 2-4 weeks, with complete recovery typically taking 6-12 weeks. Dr. Mitchell will provide a timeline estimate after your initial evaluation.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Does Peak Performance PT accept my insurance?</h3>
              <p className="mt-2 text-muted-foreground">We accept most major insurance plans including Anthem, Kaiser, Cigna, and United Healthcare. Our team will verify your benefits before your first appointment and explain any out-of-pocket costs. We also offer competitive cash-pay rates for uninsured patients.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What types of conditions do you treat at your Boulder clinic?</h3>
              <p className="mt-2 text-muted-foreground">We specialize in sports injuries, post-surgical rehabilitation, chronic pain management, and movement disorders. Common conditions include back pain, knee injuries, shoulder problems, neck pain, and athletic performance enhancement. Our 15 years of experience treating Boulder's active community means we understand your lifestyle needs.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Do you offer dry needling and other specialized treatments?</h3>
              <p className="mt-2 text-muted-foreground">Yes, Dr. Mitchell is certified in dry needling, manual therapy, and movement analysis. We use evidence-based techniques tailored to each patient's needs. These advanced treatments are integrated into your personalized care plan to accelerate healing and improve outcomes.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">What are your hours and how do I schedule an appointment?</h3>
              <p className="mt-2 text-muted-foreground">Peak Performance PT Boulder is open Monday-Friday 7am-6pm and Saturday 8am-12pm. Schedule by calling (303) 555-7890 or emailing hello@peakpt.nephew.app. We're located at 789 Pearl St in downtown Boulder with convenient parking available.</p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <h3 className="font-semibold">Can physical therapy help prevent future injuries?</h3>
              <p className="mt-2 text-muted-foreground">Absolutely. Prevention is a key focus at Peak Performance PT Boulder. We identify movement patterns and muscle imbalances that contribute to injury risk. Through targeted exercises, education, and lifestyle modifications, we help Boulder's athletes and active adults stay injury-free and performing at their best.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Start Your Recovery Journey?</h2>
          <p className="mt-2 opacity-80">Don't let pain or injury keep you from doing what you love. Dr. Sarah Mitchell and our team are here to help you get back to peak performance. Call today to schedule your comprehensive evaluation.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(303) 555-7890" className="rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Book Your Appointment</a>
            <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")} className="rounded-lg border border-current px-6 py-3 text-sm font-medium opacity-90 hover:opacity-100">Call {siteConfig.business.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
