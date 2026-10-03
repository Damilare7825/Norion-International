import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { organization } from "@/content/organization";

export function WhyNorionExists() {
  const verifiedPurposes = [
    "Empowering widows through direct food supplies, physical materials, and business seed capital",
    "Caring for orphans and bringing vulnerable children and people off the streets",
    "Assisting abused, at-risk, and destitute individuals with shelter and restorative aid",
    "In Abuja every Saturday: Giving people money to start business and praying for them",
    "In Lagos and across Nigeria: Community prayer assemblies and direct material distributions",
    "Fulfilling Acts 4:35 — Making distribution to everyone according as they have need",
  ];

  return (
    <section className="py-24 md:py-28 lg:py-32 bg-white border-b border-[#E8E8E2]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel number="01" label="Mission & Purpose" />

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight">
              Why Norion Exists
            </h2>

            <p className="text-lg md:text-xl text-[#171717] font-medium leading-relaxed">
              The foundation started 15 years ago with headquarters in Benin City, Edo State, Nigeria, driven by a clear mandate: to help the helpless and bring them out of the street by giving them physical materials.
            </p>

            <p className="text-[#6B6B6B] text-base leading-relaxed">
              Founded by <strong>{organization.founderName}</strong>, Norion Caritas Foundation works across Nigeria to empower widows and orphans, support the abused, and lift struggling families into sustainable self-reliance. Guided by our vision &ldquo;to sell what we have and give the poor,&rdquo; we combine physical relief with life-changing enterprise funding and unified Christian prayer.
            </p>

            <div className="pt-4 border-t border-[#E8E8E2]">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#087A5B] mb-4">
                Core Humanitarian Focus Areas:
              </h3>
              <ul className="space-y-3">
                {verifiedPurposes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#171717]">
                    <CheckCircle2 className="w-4 h-4 text-[#087A5B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[#087A5B] hover:text-[#07543F] group"
              >
                <span>Read our full 15-year story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Editorial Composition with Outreach Video Clip */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#F7F7F4] border border-[#E8E8E2] p-6 md:p-8 space-y-6">
              {/* Asymmetric border detail */}
              <div className="absolute top-0 left-0 w-24 h-1 bg-[#087A5B]" />

              <div className="flex items-center justify-between text-xs font-mono text-[#6B6B6B] pb-3 border-b border-[#E8E8E2]">
                <span className="uppercase tracking-widest text-[#102A43] font-bold">
                  On-the-ground Reality
                </span>
                <span>BENIN CITY • ABUJA • LAGOS</span>
              </div>

              {/* Documentary Video Clip */}
              <div className="relative aspect-video bg-neutral-900 border border-[#E8E8E2] overflow-hidden group">
                <video
                  src="/videos/food-distribution-widows.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#102A43] text-white text-[10px] font-mono px-2 py-0.5 tracking-wider uppercase">
                  Direct Field Assistance
                </div>
              </div>

              {/* Quote / Editorial Observation */}
              <blockquote className="border-l-2 border-[#087A5B] pl-4 italic text-sm text-[#171717] leading-relaxed">
                &ldquo;Our goal is to help the helpless, bring them out of the street by giving them physical materials, and empower them to become self-sufficient.&rdquo;
              </blockquote>

              <div className="flex items-center justify-between pt-2 text-xs font-mono text-[#6B6B6B]">
                <span>Headquarters: {organization.contact.address.city}, {organization.contact.address.state}</span>
                <span className="text-[#087A5B] font-semibold">Founder: {organization.founderName}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
