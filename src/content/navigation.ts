export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "/about", description: "Our 15-year story, mission, and core values" },
  { label: "Our Work", href: "/our-work", description: "Six verified pillars of outreach & empowerment" },
  { label: "Impact", href: "/impact", description: "Documented outreach activities and field records" },
  { label: "Gallery", href: "/gallery", description: "Video archive and documentary photography" },
  { label: "Donate", href: "/donate", description: "Direct Zenith Bank support details" },
  { label: "Contact", href: "/contact", description: "Benin City headquarters and phone/WhatsApp" },
];

export const footerLinks = {
  about: [
    { label: "Our Story & 15 Years", href: "/about#story" },
    { label: "Who We Serve", href: "/about#who-we-serve" },
    { label: "Mission & Values", href: "/about#mission" },
    { label: "Where We Work", href: "/about#where-we-work" },
  ],
  work: [
    { label: "Widow Empowerment", href: "/our-work#widow-empowerment" },
    { label: "Orphan & Vulnerable Care", href: "/our-work#orphan-vulnerable-support" },
    { label: "Community Outreach", href: "/our-work#community-outreach" },
    { label: "Business Seed Capital", href: "/our-work#business-empowerment" },
    { label: "Material & Food Relief", href: "/our-work#material-assistance" },
    { label: "Prayer & Fellowship", href: "/our-work#prayer-community-support" },
  ],
  impact: [
    { label: "Christmas Outreach 2023", href: "/impact#christmas-outreach-widows-2023" },
    { label: "Documented Field Activities", href: "/impact#activities" },
    { label: "Video & Media Archive", href: "/gallery" },
    { label: "Direct Support Information", href: "/donate" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact & Head Office", href: "/contact" },
  ],
};

export const socialMediaLinks = [
  {
    platform: "Facebook",
    handle: "Peter Nosa Ighodaro",
    // Uses Facebook search until the foundation profile URL is confirmed.
    href: "https://www.facebook.com/search/top?q=Peter%20Nosa%20Ighodaro",
    isConfigured: true,
  },
  {
    platform: "TikTok",
    handle: "@dr_nosadaro",
    href: "https://www.tiktok.com/@dr_nosadaro",
    isConfigured: true,
  },
];
