import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CopyButton } from "@/components/ui/CopyButton";
import { organization } from "@/content/organization";
import { Heart, Handshake, Share2, ArrowRight } from "lucide-react";

export function SupportMission() {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-[#E8E8E2]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E8E8E2]">
          <div>
            <SectionLabel number="09" label="Meaningful Participation" />
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight">
              Support the Mission
            </h2>
          </div>
          <p className="text-[#6B6B6B] text-sm md:text-base max-w-md">
            Direct, transparent ways you can stand with widows, orphans, and vulnerable families today.
          </p>
        </div>

        {/* 3 Action Pathways */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Action 1: Donate */}
          <div className="p-8 bg-[#102A43] text-white flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 bg-[#087A5B] flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-[#45BCE7] font-semibold">
                Action 01
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mt-1 mb-3">
                Direct Financial Support
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Support food relief and business startup grants through direct domestic transfer into our official foundation bank account.
              </p>

              {/* Bank Account Snapshot */}
              <div className="p-4 bg-white/5 border border-white/10 space-y-1.5 mb-6 text-xs font-mono">
                <div className="text-gray-400">Zenith Bank Nigeria</div>
                <div className="text-lg font-bold text-emerald-300 tracking-wider">
                  {organization.bankDetails.accountNumber}
                </div>
                <div className="text-gray-300 text-[11px]">
                  {organization.bankDetails.accountName}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <CopyButton
                textToCopy={organization.bankDetails.accountNumber}
                className="w-full text-xs"
              />
              <Link
                href="/donate"
                className="w-full flex items-center justify-center gap-1.5 py-3 border border-white/20 hover:border-white text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Full Donation Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Action 2: Partner */}
          <div className="p-8 bg-[#F7F7F4] text-[#171717] border border-[#E8E8E2] flex flex-col justify-between hover:border-[#087A5B] transition-colors">
            <div>
              <div className="w-12 h-12 bg-[#102A43] text-white flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6 text-sky-300" />
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-[#087A5B] font-semibold">
                Action 02
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#102A43] mt-1 mb-3">
                Partner With Us
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
                Are you an individual, family, community leader, or organization wanting to co-sponsor a widow outreach or provide food supplies? Connect directly with our leadership team.
              </p>

              <div className="p-4 bg-white border border-[#E8E8E2] space-y-1 text-xs text-[#6B6B6B] mb-6">
                <span className="font-semibold text-[#102A43] block">Direct Dialogue:</span>
                <p>We welcome personal conversations to discuss tailored community initiatives in Edo State and beyond.</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-[#102A43] hover:bg-[#07543F] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Contact Foundation Leadership</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Action 3: Spread Awareness */}
          <div className="p-8 bg-[#F7F7F4] text-[#171717] border border-[#E8E8E2] flex flex-col justify-between hover:border-[#087A5B] transition-colors">
            <div>
              <div className="w-12 h-12 bg-[#0088C9] text-white flex items-center justify-center mb-6">
                <Share2 className="w-6 h-6 text-white" />
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-[#087A5B] font-semibold">
                Action 03
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#102A43] mt-1 mb-3">
                Spread Awareness
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
                Share documented outreach stories and videos with your network, prayer group, church, or community. Amplifying our message connects vulnerable people with needed aid.
              </p>

              <div className="p-4 bg-white border border-[#E8E8E2] space-y-1 text-xs text-[#6B6B6B] mb-6 font-mono">
                <span className="font-semibold text-[#102A43] block">Verified Reference:</span>
                <p>TikTok / Facebook: Peter Nosa Ighodaro</p>
                <p className="text-[#087A5B]">Email: {organization.contact.email}</p>
              </div>
            </div>

            <Link
              href="/gallery"
              className="w-full flex items-center justify-center gap-1.5 py-3.5 border border-[#102A43] hover:bg-[#102A43] text-[#102A43] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>View & Share Video Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
