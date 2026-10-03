import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { organization } from "@/content/organization";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  User,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Founder Nosa Peter Ighodaro & Headquarters",
  description:
    "Get in touch directly with Norion Caritas Foundation. National headquarters located in Blessed Ighodaro Estate, Benin City, Edo State, Nigeria, with centers all over Nigeria.",
  alternates: { canonical: "/contact" },
  openGraph: { type: "website", locale: "en_NG", siteName: "Norion Caritas Foundation", title: "Contact Us | Founder Nosa Peter Ighodaro & Headquarters", description: "Get in touch directly with Norion Caritas Foundation. National headquarters located in Blessed Ighodaro Estate, Benin City, Edo State, Nigeria, with centers all over Nigeria.", url: "/contact" },
  twitter: { card: "summary_large_image", title: "Contact Us | Founder Nosa Peter Ighodaro & Headquarters", description: "Get in touch directly with Norion Caritas Foundation. National headquarters located in Blessed Ighodaro Estate, Benin City, Edo State, Nigeria, with centers all over Nigeria.", images: ["/images/norion-social-card.webp"] },

};

export default function ContactPage() {
  return (
    <div className="bg-[#F7F7F4] text-[#171717]">
      {/* Hero */}
      <section className="bg-[#102A43] text-white py-24 md:py-28 border-b border-white/10">
        <Container>
          <div className="max-w-3xl space-y-6">
            <SectionLabel label="Direct Communication" light />
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              &ldquo;Let&apos;s do some good together.&rdquo;
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed">
              We welcome your inquiries, prayer requests, partnerships, and visits to our national headquarters in Benin City, Edo State, or our branches in Abuja, Lagos, and across Nigeria.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Contact Grid */}
      <section className="py-24 md:py-32 bg-white border-b border-[#E8E8E2]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Primary Contact Cards */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <SectionLabel number="01" label="National Headquarters" />
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#102A43]">
                  Nigeria Office &amp; Mailing Address
                </h2>
              </div>

              {/* Physical Address Card */}
              <div className="p-8 bg-[#F7F7F4] border border-[#E8E8E2] space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#087A5B] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#087A5B] font-bold">
                      National Headquarters
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[#102A43]">
                      Blessed Ighodaro Estate
                    </h3>
                    <p className="text-sm text-[#171717] leading-relaxed">
                      164 2nd East Circular Road,
                      <br />
                      Benin City, Edo State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E8E2] flex items-center gap-2 text-xs text-[#6B6B6B] font-mono">
                  <span>Open for official appointments, food distribution drop-offs, and community prayer.</span>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nigeria Phone & WhatsApp */}
                <div className="p-6 bg-white border border-[#E8E8E2] space-y-4 hover:border-[#087A5B] transition-colors shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#087A5B]/10 text-[#087A5B] flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#6B6B6B] block">Nigeria Contact</span>
                      <strong className="text-sm font-heading text-[#102A43]">
                        {organization.contact.phones.nigeriaDisplay}
                      </strong>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <a
                      href={`tel:${organization.contact.phones.nigeria}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#102A43] hover:bg-[#07543F] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Direct</span>
                    </a>
                    <a
                      href={organization.contact.phones.nigeriaWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#087A5B] hover:bg-[#07543F] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Nigeria WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* UK WhatsApp & Email */}
                <div className="p-6 bg-white border border-[#E8E8E2] space-y-4 hover:border-[#0088C9] transition-colors shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0088C9]/10 text-[#006A94] flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#6B6B6B] block">UK Liaison WhatsApp</span>
                      <strong className="text-sm font-heading text-[#102A43]">
                        {organization.contact.phones.ukWhatsAppDisplay}
                      </strong>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <a
                      href={organization.contact.phones.ukWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#006A94] hover:bg-[#005576] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Message UK Line</span>
                    </a>
                    <a
                      href={`mailto:${organization.contact.email}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-[#171717] text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Email</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Founder Information Card */}
              <div className="p-8 bg-[#102A43] text-white space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#087A5B] flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#45BCE7] font-bold block">
                      Founder &amp; Leadership
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {organization.founderName}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-gray-200 leading-relaxed">
                  {organization.contact.founder.bio}
                </p>

                <div className="pt-2 text-xs text-gray-300 font-mono border-t border-white/10">
                  <span>Verified Social References: Facebook &amp; TikTok • {organization.founderName}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Nationwide Centers & Banking */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionLabel number="02" label="Outreach Centers" />
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#102A43]">
                  Centers Across Nigeria
                </h2>
              </div>

              {/* Centers summary */}
              <div className="p-6 bg-[#F7F7F4] border border-[#E8E8E2] space-y-4 text-xs">
                <div className="space-y-3">
                  <div className="p-4 bg-white border border-[#E8E8E2] space-y-1">
                    <span className="font-mono font-bold text-[#102A43] uppercase tracking-wider block">
                      Benin City (Headquarters)
                    </span>
                    <p className="text-[#6B6B6B]">Blessed Ighodaro Estate, 164 2nd East Circular Road, Benin City, Edo State.</p>
                  </div>

                  <div className="p-4 bg-white border border-[#E8E8E2] space-y-1">
                    <span className="font-mono font-bold text-[#087A5B] uppercase tracking-wider block">
                      Abuja Center (Weekly Saturday Outreach)
                    </span>
                    <p className="text-[#6B6B6B]">Every Saturday business grant empowerment and prayer gathering for the community.</p>
                  </div>

                  <div className="p-4 bg-white border border-[#E8E8E2] space-y-1">
                    <span className="font-mono font-bold text-[#006A94] uppercase tracking-wider block">
                      Lagos &amp; Other State Branches
                    </span>
                    <p className="text-[#6B6B6B]">Centers and prayer branches where we pray for people, distribute physical materials, and help the helpless.</p>
                  </div>
                </div>
              </div>

              {/* Direct Bank Summary Card */}
              <div className="p-6 bg-white border border-[#E8E8E2] space-y-3 shadow-xs">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087A5B]">
                  Foundation Banking Credentials
                </span>
                <div className="p-4 bg-[#F7F7F4] border border-[#E8E8E2] space-y-1 font-mono text-xs">
                  <div className="text-[#6B6B6B]">Zenith Bank Nigeria</div>
                  <div className="text-xl font-bold text-[#102A43] tracking-wider">
                    {organization.bankDetails.accountNumber}
                  </div>
                  <div className="text-[#6B6B6B] text-[11px]">
                    {organization.bankDetails.accountName}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
