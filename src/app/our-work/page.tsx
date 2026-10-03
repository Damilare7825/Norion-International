import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { programs } from "@/content/programs";
import { ArrowRight, CheckCircle2, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work | Six Verified Humanitarian Pillars",
  description:
    "Explore the six core pillars of Norion Caritas Foundation: Widow Empowerment, Orphan Support, Community Outreach, Business Grants, Material Assistance, and Prayer Support.",
};

export default function OurWorkPage() {
  return (
    <div className="bg-[#F7F7F4] text-[#171717]">
      {/* Hero Header */}
      <section className="bg-[#102A43] text-white py-24 md:py-28 border-b border-white/10">
        <Container>
          <div className="max-w-3xl space-y-6">
            <SectionLabel label="What We Do" light />
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Six pillars of compassionate, hands-on intervention.
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed">
              Norion Caritas Foundation focuses on practical, verifiable humanitarian aid. From direct food deliveries to non-repayable business startup grants, our programs are engineered to restore human dignity.
            </p>
          </div>
        </Container>
      </section>

      {/* Program Sections */}
      <div className="divide-y divide-[#E8E8E2]">
        {programs.map((program, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <section
              key={program.id}
              id={program.id}
              className={`py-24 md:py-28 ${isEven ? "bg-white" : "bg-[#F7F7F4]"}`}
            >
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[#087A5B]">
                        PILLAR {program.number}
                      </span>
                      <span className="w-8 h-px bg-[#087A5B]/40" />
                      <span className="text-xs uppercase font-mono tracking-widest text-[#6B6B6B]">
                        VERIFIED INITIATIVE
                      </span>
                    </div>

                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
                      {program.title}
                    </h2>

                    <p className="text-lg text-[#171717] font-medium leading-relaxed">
                      {program.shortDescription}
                    </p>

                    <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed">
                      {program.fullDescription}
                    </p>

                    {/* Key Actions Checklist */}
                    <div className="p-6 bg-neutral-50 border border-[#E8E8E2] space-y-3">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#087A5B]">
                        Tangible Field Actions:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#171717]">
                        {program.keyActions.map((action, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#087A5B] shrink-0 mt-0.5" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="border-l-2 border-[#087A5B] pl-4 italic text-xs md:text-sm text-[#6B6B6B]">
                      &ldquo;{program.editorialQuote}&rdquo;
                    </blockquote>

                    <div className="pt-2 flex items-center gap-4">
                      <Link
                        href="/donate"
                        className="inline-flex items-center gap-2 bg-[#087A5B] hover:bg-[#07543F] text-white px-5 py-3 text-xs uppercase tracking-wider font-semibold transition-colors"
                      >
                        <Heart className="w-3.5 h-3.5 text-emerald-200" />
                        <span>Support This Pillar</span>
                      </Link>
                      <Link
                        href="/gallery"
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#102A43] hover:text-[#087A5B]"
                      >
                        <span>View Footage</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Media / Video Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative bg-white border border-[#E8E8E2] p-3 shadow-md">
                      <div className="relative aspect-4/3 bg-neutral-900 overflow-hidden">
                        {program.featuredVideo ? (
                          <video
                            src={program.featuredVideo}
                            controls
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#102A43] text-white">
                            <span className="font-mono text-xs uppercase text-[#0088C9] mb-2">
                              Photo Archive Slot
                            </span>
                            <p className="text-sm font-semibold">{program.imagePlaceholderText}</p>
                          </div>
                        )}
                      </div>

                      <div className="p-3 bg-neutral-50 text-[11px] font-mono text-[#6B6B6B] flex items-center justify-between border-t border-[#E8E8E2] mt-2">
                        <span>{program.title}</span>
                        <span className="text-[#087A5B] font-bold">Field Documentation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>
    </div>
  );
}
