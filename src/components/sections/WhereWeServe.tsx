import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MapPin, ArrowRight, Calendar } from "lucide-react";

export function WhereWeServe() {
  const verifiedLocations = [
    {
      state: "Benin City, Edo State",
      focus: "Headquarters & Primary Foundation Center",
      description: "Center of foundation operations for 15 years, ongoing widow fellowships, large foodstuff drives, and trade startup grants.",
      badge: "National Headquarters",
    },
    {
      state: "Abuja (Federal Capital Territory)",
      focus: "Every Saturday Business Grants & Prayer Outreach",
      description: "Every Saturday in Abuja, we gather people, provide cash seed capital to start businesses, and pray with them.",
      badge: "Weekly Saturday Outreach",
    },
    {
      state: "Lagos State",
      focus: "Prayer Fellowships & Community Outreach",
      description: "Reaching out into communities to pray for people, assist those facing hardship, and distribute physical materials.",
      badge: "Prayer & Relief Center",
    },
    {
      state: "Centers & Branches Across Nigeria",
      focus: "Nationwide Outreach & Prayer Centers",
      description: "Branches across several Nigerian states where we pray for people, uplift the afflicted, and bring the helpless out of the street.",
      badge: "Nationwide Network",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F7F7F4] border-b border-[#E8E8E2]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Geographic Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel number="08" label="Geographic Reach" />

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight">
              Where We Serve
            </h2>

            <p className="text-[#171717] text-base md:text-lg leading-relaxed">
              The foundation started 15 years ago with headquarters in Benin City, Edo State, Nigeria. Today, our mission extends through centers and branches across several Nigerian states.
            </p>

            <p className="text-[#6B6B6B] text-sm leading-relaxed">
              In Abuja, our teams conduct outreach <strong>every Saturday</strong> to give people money to start business and pray for them. In Lagos and multiple other states, our branches gather people for continuous prayer and compassionate physical support.
            </p>

            <div className="p-4 bg-[#102A43] text-white border border-[#102A43] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#45BCE7] font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Weekly Flagship Outreach:</span>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed">
                <strong>Abuja Every Saturday:</strong> Empowering individuals with seed business grants and dedicated prayer sessions to bring people off the streets and into sustainable livelihoods.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#087A5B] hover:text-[#07543F]"
              >
                <span>Visit or Contact Headquarters</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Verified Locations List */}
          <div className="lg:col-span-7 space-y-4">
            {verifiedLocations.map((loc) => (
              <div
                key={loc.state}
                className="p-6 md:p-8 bg-white border border-[#E8E8E2] hover:border-[#087A5B] transition-all duration-200 shadow-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#087A5B]" />
                    <h3 className="font-heading text-xl font-bold text-[#102A43]">
                      {loc.state}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase px-2.5 py-0.5 bg-[#F7F7F4] text-[#087A5B] border border-[#E8E8E2]">
                    {loc.badge}
                  </span>
                </div>

                <div className="pl-6.5 space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#006A94] block">
                    {loc.focus}
                  </span>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {loc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
