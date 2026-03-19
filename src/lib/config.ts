export const siteConfig = {
  business: {
    name: "Peak Performance PT Boulder",
    tagline: "Get back to peak performance faster",
    description: "A patient-centered physical therapy clinic specializing in sports rehabilitation, post-surgical recovery, and chronic pain management. Founded by Dr. Sarah Mitchell, DPT, with 15 years of experience treating athletes and active adults. We use evidence-based manual therapy, dry needling, and movement analysis to get people back to doing what they love.",
    phone: "(303) 555-7890",
    email: "hello@peakpt.nephew.app",
    address: "789 Pearl St, Boulder, CO 80302",
    hours: "Mon-Fri 7am-6pm, Sat 8am-12pm",
    founded: "2026",
  },

  brand: {
    primaryColor: "#1B6B4A",
    secondaryColor: "#1a1a19",
    accentColor: "#E8A838",
    headingFont: "Inter",
    bodyFont: "Inter",
    voice: "professional, friendly, and approachable",
  },

  social: {
    instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    tiktok: "",
    youtube: "",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  seo: {
    defaultTitle: "Peak Performance PT Boulder",
    titleTemplate: "%s | Peak Performance PT Boulder",
    defaultDescription: "A patient-centered physical therapy clinic specializing in sports rehabilitation, post-surgical recovery, and chronic pain management. Founded by Dr. Sarah Mitchell, DPT, with 15 years of experience treating athletes and active adults. We use evidence-based manual therapy, dry needling, and movement analysis to get people back to doing what they love.",
    siteUrl: "https://peak-performance-pt-boulder.vercel.app",
  },

  features: {
    booking: false,
    blog: true,
    contactForm: true,
    emailSubscribe: true,
    reviews: false,
  },

  nephew: {
    tenantId: process.env.NEPHEW_TENANT_ID ?? "",
    apiUrl: process.env.NEPHEW_API_URL ?? "https://api.nephew.app",
  },
} as const;

export type SiteConfig = typeof siteConfig;
