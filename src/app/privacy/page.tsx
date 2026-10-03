import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: "Privacy Policy | Informational Transparency",
  description:
    "Privacy and data policy for Norion Caritas Foundation. We operate an informational website with no user tracking, advertising cookies, or personal data collection.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#F7F7F4] text-[#171717]">
      <section className="bg-[#102A43] text-white py-20 md:py-24 border-b border-white/10">
        <Container size="narrow">
          <SectionLabel label="Institutional Transparency" light />
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-2 font-mono">
            Effective Date: {new Date().getFullYear()} • Norion Caritas Foundation
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white border-b border-[#E8E8E2]">
        <Container size="narrow">
          <div className="space-y-8 text-sm sm:text-base text-[#171717] leading-relaxed">
            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-[#102A43]">
                1. General Overview
              </h2>
              <p className="text-[#6B6B6B]">
                This website is operated by <strong>Norion Caritas Foundation</strong> (Norion International) as an informational resource to introduce our humanitarian outreach, document past activities, and share direct contact channels.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-[#102A43]">
                2. No Tracking or Marketing Cookies
              </h2>
              <p className="text-[#6B6B6B]">
                We respect your privacy. This website does not utilize tracking cookies, marketing pixels, or intrusive browser finger-printing mechanisms. You can browse all pages freely without cookie consent prompts because we do not collect personal identifiers.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-[#102A43]">
                3. Direct Communications
              </h2>
              <p className="text-[#6B6B6B]">
                When you contact us via telephone, WhatsApp, or email, any information you provide (such as your name, phone number, or email address) is used strictly to respond to your inquiry, acknowledge your donation, or coordinate community assistance. We never sell, rent, or share personal contact information with third parties.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-[#102A43]">
                4. External Links
              </h2>
              <p className="text-[#6B6B6B]">
                Our website includes direct links to external services such as WhatsApp (wa.me) and social media platforms. Please note that once you navigate to an external website, their respective privacy policies and terms apply.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-[#102A43]">
                5. Media &amp; Documentary Integrity
              </h2>
              <p className="text-[#6B6B6B]">
                Photographs and video recordings published on this website depict actual humanitarian outreach activities, community gatherings, and food distribution events. All media is published in good faith to accurately communicate the organization&apos;s work.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-[#102A43]">
                6. Contact Information
              </h2>
              <p className="text-[#6B6B6B]">
                If you have questions regarding this policy or wish to discuss our data handling practices, please write to us at:
              </p>
              <div className="p-4 bg-[#F7F7F4] border border-[#E8E8E2] text-xs font-mono space-y-1">
                <p><strong>Norion Caritas Foundation</strong></p>
                <p>Blessed Ighodaro Estate, 164 2nd East Circular Road, Benin City, Edo State, Nigeria</p>
                <p>Email: {organization.contact.email}</p>
                <p>Phone: {organization.contact.phones.nigeriaDisplay}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
