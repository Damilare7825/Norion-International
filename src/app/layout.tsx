import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { organization } from "@/content/organization";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#102A43",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://norioncaritas.org"),
  title: {
    default: "Norion Caritas Foundation | Renew. Empower. Strengthen. Transform.",
    template: "%s | Norion Caritas Foundation",
  },
  description:
    "Founded 15 years ago by Nosa Peter Ighodaro with headquarters in Benin City, Edo State, Nigeria. Empowering widows and orphans, bringing the helpless off the streets with physical materials and weekly business grants.",
  icons: {
    icon: "/icon.png?v=brand-logo",
    shortcut: "/icon.png?v=brand-logo",
    apple: "/icon.png?v=brand-logo",
  },
  keywords: [
    "Norion Caritas Foundation",
    "Nosa Peter Ighodaro",
    "Widow Empowerment Nigeria",
    "Benin City NGO",
    "Edo State humanitarian outreach",
    "Abuja Saturday business grants",
    "Lagos prayer outreach",
    "Acts 4:35 charity",
    "Renew Empower Strengthen Transform",
  ],
  authors: [{ name: "Nosa Peter Ighodaro" }, { name: "Norion Caritas Foundation" }],
  creator: "Norion Caritas Foundation",
  publisher: "Norion Caritas Foundation",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://norioncaritas.org",
    siteName: "Norion Caritas Foundation",
    title: "Norion Caritas Foundation | Founded by Nosa Peter Ighodaro",
    description:
      "Helping the helpless, bringing people from the street, and empowering widows and orphans across Nigeria for 15 years.",
    images: [
      {
        url: "/icon.png?v=brand-logo",
        width: 512,
        height: 512,
        alt: "Norion Caritas Foundation Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Norion Caritas Foundation | Renew. Empower. Strengthen. Transform.",
    description:
      "Founded 15 years ago by Nosa Peter Ighodaro. Headquartered in Benin City with centers across Nigeria.",
    images: ["/icon.png?v=brand-logo"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: organization.name,
    founder: {
      "@type": "Person",
      name: organization.founderName,
    },
    url: "https://norioncaritas.org",
    description: organization.mission,
    slogan: organization.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${organization.contact.address.line1}, ${organization.contact.address.line2}`,
      addressLocality: organization.contact.address.city,
      addressRegion: organization.contact.address.state,
      addressCountry: "NG",
    },
    telephone: organization.contact.phones.nigeria,
    email: organization.contact.email,
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png?v=brand-logo" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F7F4] text-[#171717] font-sans antialiased selection:bg-[#087A5B] selection:text-white">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#102A43] text-white font-medium shadow-md outline-none focus:ring-2 focus:ring-[#087A5B]"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
