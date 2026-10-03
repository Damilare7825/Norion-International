import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { featuredImpact, documentedActivities } from "@/content/impact";
import { CheckCircle2, ArrowRight, Heart, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Documented Impact | Real Field Activities & Outreaches",
  description:
    "Explore the documented humanitarian activities of Norion Caritas Foundation, including the 2023 Christmas Outreach for Widows in Edo State, food distributions, and micro-business seed grants.",
  alternates: { canonical: "/impact" },
  openGraph: { type: "website", locale: "en_NG", siteName: "Norion Caritas Foundation", title: "Documented Impact | Real Field Activities & Outreaches", description: "Explore the documented humanitarian activities of Norion Caritas Foundation, including the 2023 Christmas Outreach for Widows in Edo State, food distributions, and micro-business seed grants.", url: "/impact" },
  twitter: { card: "summary_large_image", title: "Documented Impact | Real Field Activities & Outreaches", description: "Explore the documented humanitarian activities of Norion Caritas Foundation, including the 2023 Christmas Outreach for Widows in Edo State, food distributions, and micro-business seed grants.", images: ["/images/norion-social-card.webp"] },

};

export default function ImpactPage() {
  return (
    <div className="bg-[#F7F7F4] text-[#171717]">
      {/* Hero Header */}
      <section className="bg-[#102A43] text-white py-24 md:py-28 border-b border-white/10">
        <Container>
          <div className="max-w-3xl space-y-6">
            <SectionLabel label="Verifiable Field Records" light />
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Our impact is measured in people supported, lives strengthened, and communities reached.
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed">
              We uphold strict institutional transparency. We do not publish fabricated counters or exaggerated statistics. Every story documented here is grounded in real people, confirmed dates, and authentic field records.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Story: Christmas Outreach 2023 */}
      <section id="christmas-outreach-widows-2023" className="py-24 md:py-32 bg-white border-b border-[#E8E8E2]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Full Video Documentation Player */}
            <div className="lg:col-span-7">
              <div className="bg-[#102A43] border border-white/20 p-3 shadow-2xl">
                <div className="flex items-center justify-between px-3 py-2 bg-black/40 text-[11px] font-mono text-gray-300 mb-2 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#087A5B]" />
                    <span className="text-white font-bold">PRIMARY DOCUMENTARY RECORD</span>
                  </span>
                  <span className="text-[#45BCE7]">{featuredImpact.dateBadge}</span>
                </div>

                <div className="relative aspect-video bg-black overflow-hidden">
                  <video
                    src={featuredImpact.videoSrc}
                    playsInline
                    className="w-full h-full object-cover"
                  poster="/images/video-poster.webp" controls preload="none" />
                </div>

                <div className="p-4 bg-black/40 text-xs text-gray-300 border-t border-white/10 flex items-center justify-between">
                  <span>Location: Naomi Gardens, GRA, Benin City, Edo State</span>
                  <span className="text-[#45BCE7] font-mono font-bold">Verified Outreach Video</span>
                </div>
              </div>
            </div>

            {/* Right: Story Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-[#087A5B] text-white text-xs font-mono font-bold uppercase tracking-wider">
                  Featured Milestone
                </span>
                <span className="text-xs font-mono text-[#6B6B6B]">
                  {featuredImpact.stateBadge}
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
                {featuredImpact.title}
              </h2>

              <div className="p-4 bg-[#F7F7F4] border border-[#E8E8E2] text-xs font-mono text-[#102A43] space-y-1">
                <div><strong>Date:</strong> {featuredImpact.date}</div>
                <div><strong>Venue:</strong> {featuredImpact.location}</div>
                <div><strong>Leadership:</strong> Pastor &amp; Rev. Mrs. Nosa Ighodaro</div>
              </div>

              <p className="text-base text-[#171717] leading-relaxed">
                {featuredImpact.summary}
              </p>

              <div className="space-y-2.5 pt-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#087A5B]">
                  Documented Provisions:
                </h3>
                {featuredImpact.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717]">
                    <CheckCircle2 className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E8E8E2]">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 bg-[#087A5B] hover:bg-[#07543F] text-white px-6 py-3.5 text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Support Future Widow Outreaches</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Documented Activities List */}
      <section id="activities" className="py-24 md:py-32 bg-[#F7F7F4] border-b border-[#E8E8E2]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E8E8E2]">
            <div>
              <SectionLabel number="02" label="Field Archive" />
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#102A43]">
                Verified Field Activities
              </h2>
            </div>
            <p className="text-[#6B6B6B] text-sm max-w-md">
              Each recorded outreach demonstrates immediate material aid, direct listening, and genuine community upliftment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentedActivities.slice(1).map((activity) => (
              <div
                key={activity.id}
                className="bg-white border border-[#E8E8E2] flex flex-col justify-between hover:border-[#102A43] transition-all duration-200 shadow-xs"
              >
                {/* Media area */}
                {activity.videoSrc && (
                  <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                    <video
                      src={activity.videoSrc}
                      playsInline
                      className="w-full h-full object-cover"
                    poster="/images/video-poster.webp" controls preload="none" />
                    <div className="absolute top-2 left-2 bg-[#102A43] text-white font-mono text-[10px] px-2 py-0.5 tracking-wider uppercase">
                      {activity.category}
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#6B6B6B] uppercase tracking-wider">
                      <span className="text-[#087A5B] font-bold">{activity.stateBadge}</span>
                      <span>{activity.dateBadge}</span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-[#102A43]">
                      {activity.title}
                    </h3>

                    <p className="text-xs text-[#6B6B6B] leading-relaxed">
                      {activity.summary}
                    </p>

                    <ul className="space-y-1 pt-2 border-t border-neutral-100 text-xs text-[#171717]">
                      {activity.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#087A5B] font-bold">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#E8E8E2] flex items-center justify-between text-[11px] font-mono text-[#087A5B]">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{activity.verifiedNotes}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transparent note regarding ongoing documentation */}
          <div className="mt-16 p-8 bg-white border border-[#E8E8E2] text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#087A5B] font-bold">
              Field Records
            </span>
            <h3 className="font-heading text-xl font-bold text-[#102A43]">
              Ask about an outreach
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
              Contact the Benin City office for details about current activities and available supporting records.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#087A5B] hover:underline"
              >
                <span>Inquire About Outreach Schedule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
