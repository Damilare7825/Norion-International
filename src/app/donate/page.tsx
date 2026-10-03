import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CopyButton } from "@/components/ui/CopyButton";
import { organization } from "@/content/organization";
import {
  Building2,
  CheckCircle2,
  MessageCircle,
  Mail,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Donate & Support | Direct Bank Transfer",
  description:
    "Support the humanitarian mission of Norion Caritas Foundation through direct Zenith Bank domestic transfer. 100% of verified contributions go toward food relief and widow startup capital.",
};

export default function DonatePage() {
  return (
    <div className="bg-[#F7F7F4] text-[#171717]">
      {/* Hero */}
      <section className="bg-[#102A43] text-white py-24 md:py-28 border-b border-white/10">
        <Container>
          <div className="max-w-3xl space-y-6">
            <SectionLabel label="Direct Humanitarian Giving" light />
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Support the Mission
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed">
              Every naira and gift goes directly to buying staple food for widows, feeding vulnerable children, and providing seed capital to launch independent micro-businesses.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Donation Details Section */}
      <section className="py-24 md:py-32 bg-white border-b border-[#E8E8E2]">
        <Container size="narrow">
          <div className="space-y-12">
            {/* Direct Bank Transfer Box */}
            <div className="bg-[#102A43] text-white p-8 sm:p-12 border border-white/10 shadow-xl space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#087A5B] flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#0088C9] font-bold">
                      Direct Domestic Transfer
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                      Official Bank Account
                    </h2>
                  </div>
                </div>
                <span className="font-mono text-xs px-3 py-1 bg-white/10 text-emerald-300 font-semibold self-start sm:self-auto">
                  VERIFIED NIGERIAN ACCOUNT
                </span>
              </div>

              {/* Bank Credentials Table */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-black/30 border border-white/10">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Bank Name
                  </span>
                  <p className="font-heading text-xl font-bold text-white">
                    {organization.bankDetails.bankName}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Account Name
                  </span>
                  <p className="font-heading text-lg font-bold text-white">
                    {organization.bankDetails.accountName}
                  </p>
                </div>

                <div className="space-y-1 md:col-span-1">
                  <span className="text-xs font-mono text-[#0088C9] uppercase tracking-wider font-semibold">
                    Account Number
                  </span>
                  <p className="font-mono text-2xl font-extrabold text-emerald-300 tracking-wider">
                    {organization.bankDetails.accountNumber}
                  </p>
                </div>
              </div>

              {/* Copy Action Button */}
              <div className="pt-2">
                <CopyButton
                  textToCopy={organization.bankDetails.accountNumber}
                  className="w-full py-4 text-sm"
                />
              </div>

              {/* Integrity Notice */}
              <div className="p-4 bg-white/5 border border-white/10 text-xs text-gray-300 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" />
                <p>
                  To ensure complete financial integrity, Norion Caritas Foundation receives donations solely through our verified corporate account with Zenith Bank. We do not use third-party intermediaries or payment links.
                </p>
              </div>
            </div>

            {/* Direct Support Discussion Callout */}
            <div className="p-8 sm:p-10 bg-[#F7F7F4] border border-[#E8E8E2] space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#087A5B] font-bold">
                  Personal Assistance
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#102A43] mt-1">
                  Need help or want to discuss your support?
                </h3>
                <p className="text-sm text-[#6B6B6B] mt-2 leading-relaxed">
                  If you wish to notify us of a direct transfer, confirm details, support a specific widow outreach, or send material supplies (rice, yams, clothing), please message or call our team directly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <a
                  href={organization.contact.phones.nigeriaWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#087A5B] hover:bg-[#07543F] text-white text-xs uppercase font-semibold tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-200" />
                  <span>Nigeria WhatsApp</span>
                </a>

                <a
                  href={organization.contact.phones.ukWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#102A43] hover:bg-[#0c2033] text-white text-xs uppercase font-semibold tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-sky-300" />
                  <span>UK WhatsApp</span>
                </a>

                <a
                  href={`mailto:${organization.contact.email}?subject=Norion%20Foundation%20Support`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-neutral-100 text-[#171717] border border-[#E8E8E2] text-xs uppercase font-semibold tracking-wider transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#087A5B]" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* What Your Support Funds */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-bold text-[#102A43]">
                Where Your Support Goes:
              </h3>
              <ul className="space-y-3 text-sm text-[#171717]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" />
                  <span><strong>Foodstuffs &amp; Staples:</strong> Purchasing sacks of rice, yams, and pantry provisions distributed directly to widows and hungry families.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" />
                  <span><strong>Micro-Enterprise Capital:</strong> Providing direct startup grants to widows so they can restock market stalls and generate daily income.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" />
                  <span><strong>Grassroots Outreach:</strong> Facilitating field teams to reach informal settlements, conduct listening sessions, and deliver emergency relief.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
