import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/lib/config"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">Boulder's Premier Physical Therapy</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Get Back to Peak Performance with Boulder's Premier Physical Therapy
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert sports rehabilitation, post-surgical recovery, and chronic pain management in Boulder, CO. Led by Dr. Sarah Mitchell, DPT with 15 years of experience helping athletes and active adults return to what they love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href="/contact">Book Your Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")}>Call {siteConfig.business.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Physical Therapy Services in Boulder
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-2xl font-bold text-primary">Sports Rehabilitation</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Get back in the game faster with specialized treatment for athletic injuries. We work with weekend warriors to competitive athletes using proven techniques.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-2xl font-bold text-primary">Post-Surgical Recovery</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Accelerate your healing after surgery with personalized rehabilitation programs designed to restore strength, mobility, and function safely.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-2xl font-bold text-primary">Chronic Pain Management</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Break the cycle of chronic pain with evidence-based manual therapy, movement analysis, and targeted exercises that address root causes.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-2xl font-bold text-primary">Dry Needling Therapy</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Release muscle tension and trigger points with this advanced technique that complements traditional physical therapy for faster results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
              Why Boulder Residents Choose Peak Performance PT
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed">
                Founded by Dr. Sarah Mitchell, DPT, Peak Performance PT Boulder brings 15 years of specialized experience to 789 Pearl St. We're not just another physical therapy clinic – we're your partners in getting back to an active lifestyle. Our patient-centered approach combines evidence-based manual therapy with cutting-edge movement analysis to create personalized treatment plans that work. Whether you're recovering from surgery, dealing with chronic pain, or getting back on the field after an injury, we have the expertise to help you reach your peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
              Proven Results You Can Trust
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-background/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl sm:text-5xl font-bold text-accent-foreground mb-2">15+ Years</div>
              <p className="text-accent-foreground/80 text-lg">Dr. Mitchell's experience treating athletes and active adults</p>
            </div>
            <div className="text-center bg-background/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl sm:text-5xl font-bold text-accent-foreground mb-2">Pearl Street</div>
              <p className="text-accent-foreground/80 text-lg">Convenient Boulder location with flexible scheduling</p>
            </div>
            <div className="text-center bg-background/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl sm:text-5xl font-bold text-accent-foreground mb-2">Evidence-Based</div>
              <p className="text-accent-foreground/80 text-lg">Treatment approaches backed by the latest research</p>
            </div>
            <div className="text-center bg-background/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl sm:text-5xl font-bold text-accent-foreground mb-2">6 Days/Week</div>
              <p className="text-accent-foreground/80 text-lg">Open Monday-Friday 7am-6pm, Saturday 8am-12pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Back to What You Love?
            </h2>
            <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Don't let pain or injury keep you on the sidelines. Call (303) 555-7890 or book online to start your journey back to peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Link href="/contact">Schedule Your Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href={"tel:" + siteConfig.business.phone.replace(/\D/g, "")}>Call Now: {siteConfig.business.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}