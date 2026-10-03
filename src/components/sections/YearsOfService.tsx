import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight, HeartHandshake, Compass, Users2 } from "lucide-react";

export function YearsOfService() {
  return (
    <section className="py-24 md:py-28 bg-[#102A43] text-white border-b border-white/10 relative overflow-hidden">
      {/* Decorative large typographic watermark */}
      <div
        className="absolute -right-10 top-1/2 -translate-y-1/2 font-heading font-extrabold text-[180px] sm:text-[240px] md:text-[320px] text-white/[0.03] select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        15+
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Big Number Storytelling Callout */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <SectionLabel number="02" label="Enduring Commitment" light />
            
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#45BCE7] tracking-tighter leading-none">
                15+
              </span>
              <span className="text-xl sm:text-2xl font-mono text-gray-300 uppercase tracking-widest font-semibold">
                Years
              </span>
            </div>

            <p className="font-heading text-xl sm:text-2xl font-bold text-white mt-4 tracking-tight">
              Approximately 15 years of dedicated community service.
            </p>

            <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed">
              Quiet, steady, and community-rooted. Long before social media campaigns, Norion Caritas Foundation was already walking into communities in Benin City and Edo State, knocking on doors, visiting widows, sharing food, and offering prayer.
            </p>
          </div>

          {/* Right Column: Three Pillars of Endurance */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 flex flex-col justify-between hover:border-[#087A5B] transition-colors">
                <div className="w-10 h-10 bg-[#087A5B]/20 border border-[#087A5B] flex items-center justify-center text-[#087A5B] mb-6">
                  <Compass className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white">
                    Rooted in Edo State
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    Centering our efforts around Benin City with verified outreach reaching neighboring quarters and communities.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 flex flex-col justify-between hover:border-[#0088C9] transition-colors">
                <div className="w-10 h-10 bg-[#0088C9]/20 border border-[#0088C9] flex items-center justify-center text-[#45BCE7] mb-6">
                  <Users2 className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white">
                    Direct Hands-on Aid
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    No middlemen or artificial overheads. Support goes straight into the hands of widows and vulnerable families.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 flex flex-col justify-between hover:border-[#087A5B] transition-colors">
                <div className="w-10 h-10 bg-[#087A5B]/20 border border-[#087A5B] flex items-center justify-center text-[#087A5B] mb-6">
                  <HeartHandshake className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white">
                    Sustainable Hope
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    Pairing immediate food relief with business startup capital so families move toward lasting independence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between p-4 bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">
              <span>Verified Fact: Operating for ~15 years without interruption</span>
              <Link href="/about" className="text-[#45BCE7] hover:underline flex items-center gap-1 font-semibold">
                <span>Discover Our Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
