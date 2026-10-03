import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";

export function VisualStory() {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-[#E8E8E2]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Magazine Layout */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Main Primary Visual */}
              <div className="relative w-full aspect-4/3 bg-neutral-900 border border-[#E8E8E2] overflow-hidden shadow-md">
                <video
                  src="/videos/widows-worship-support.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#102A43]/90 text-white font-mono text-[11px] px-2.5 py-1 tracking-wider uppercase">
                  Community Assembly • Edo State
                </div>
              </div>

              {/* Smaller Asymmetric Supporting Element */}
              <div className="hidden sm:block absolute -bottom-10 -right-6 w-3/5 aspect-4/3 bg-[#F7F7F4] border-4 border-white shadow-xl overflow-hidden">
                <video
                  src="/videos/business-grant-empowerment.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-[#087A5B] text-white font-mono text-[10px] px-2 py-0.5 tracking-wider uppercase">
                  Marketplace Grant
                </div>
              </div>
            </div>

            <div className="pt-8 sm:pt-14 text-xs font-mono text-[#6B6B6B] flex items-center justify-between">
              <span>DOCUMENTARY SPREAD: FELLOWSHIP &amp; ENTERPRISE</span>
              <span>VERIFIED FIELD FOOTAGE</span>
            </div>
          </div>

          {/* Right Column: Editorial Text & Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel number="07" label="Editorial Perspective" />

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight">
              Human dignity at the center of every intervention.
            </h2>

            <p className="text-[#171717] text-base leading-relaxed">
              True humanitarian assistance does not treat people as passive statistics or objects of pity. In every gathering, our approach honors the identity, history, and resilience of each woman and family.
            </p>

            <blockquote className="border-l-2 border-[#087A5B] pl-4 py-1 italic text-sm text-[#6B6B6B] leading-relaxed">
              &ldquo;We meet them at market stalls, in fellowship halls, and along village pathways. We listen to their burdens before we hand over assistance.&rdquo;
            </blockquote>

            <p className="text-[#6B6B6B] text-sm leading-relaxed">
              By combining spiritual encouragement and heartfelt fellowship with practical financial seed funding, we help widows transform from recipients of aid into confident proprietors of small businesses.
            </p>

            <div className="pt-4 border-t border-[#E8E8E2]">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#087A5B] hover:text-[#07543F]"
              >
                <span>View Complete Media Archive</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
