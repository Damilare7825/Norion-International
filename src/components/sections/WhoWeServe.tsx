import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { organization } from "@/content/organization";
import { ArrowUpRight } from "lucide-react";

export function WhoWeServe() {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-[#E8E8E2]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E8E8E2]">
          <div>
            <SectionLabel number="04" label="Target Population" />
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight">
              Who We Serve
            </h2>
          </div>
          <p className="text-[#6B6B6B] text-sm md:text-base max-w-md">
            Our mission prioritizes those frequently forgotten by broader society, offering dignity, direct relief, and sustained advocacy.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {organization.beneficiaries.map((item, index) => {
            const isFeatured = index === 0; // Widows featured
            return (
              <div
                key={item.title}
                className={`relative flex flex-col justify-between p-4 sm:p-6 lg:p-8 border transition-all duration-300 group ${
                  isFeatured
                    ? "md:col-span-2 lg:col-span-1 bg-[#102A43] text-white border-[#102A43]"
                    : "bg-[#F7F7F4] text-[#171717] border-[#E8E8E2] hover:border-[#087A5B]"
                }`}
              >
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between gap-1 mb-5 sm:mb-8">
                  <span
                    className={`font-mono text-xs font-semibold uppercase tracking-widest px-2.5 py-1 ${
                      isFeatured
                        ? "bg-[#087A5B] text-white"
                        : "bg-white text-[#6B6B6B] border border-[#E8E8E2]"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <span
                    className={`font-mono text-xs font-bold ${
                      isFeatured ? "text-gray-400" : "text-[#087A5B]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <h3
                    className={`font-heading text-lg sm:text-2xl font-bold tracking-tight ${
                      isFeatured ? "text-white" : "text-[#102A43]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isFeatured ? "text-gray-200" : "text-[#6B6B6B]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom Link */}
                <div className="pt-4 border-t border-current/10">
                  <Link
                    href="/our-work"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider ${
                      isFeatured
                        ? "text-[#0088C9] group-hover:text-white"
                        : "text-[#087A5B] group-hover:text-[#07543F]"
                    } transition-colors`}
                  >
                    <span>View Related Initiatives</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
