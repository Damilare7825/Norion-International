import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { organization } from "@/content/organization";
import { ArrowUpRight } from "lucide-react";

export function FourPillars() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F7F4] border-b border-[#E8E8E2]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E8E8E2]">
          <div>
            <SectionLabel number="03" label="Our Guiding Creed" />
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight">
              Four Core Words
            </h2>
          </div>
          <p className="text-[#6B6B6B] text-sm md:text-base max-w-md">
            Every outreach, food bag, and seed grant is guided by this distinct fourfold commitment to human dignity.
          </p>
        </div>

        {/* Editorial Numbered Rows (Not generic cards) */}
        <div className="border-t border-[#171717]/15">
          {organization.corePillars.map((pillar) => (
              <div
                key={pillar.word}
                className="group border-b border-[#171717]/15 py-8 md:py-12 transition-all duration-300 px-4 md:px-6 cursor-default bg-transparent group-hover:bg-white group-hover:shadow-xs"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                  {/* Editorial Number */}
                  <div className="md:col-span-2 flex items-center gap-3">
                    <span className="font-mono text-sm md:text-base font-semibold text-[#087A5B]">
                      {pillar.number}
                    </span>
                    <span
                      className="h-px w-4 bg-[#171717]/30 transition-all duration-300 group-hover:w-8 group-hover:bg-[#087A5B]"
                    />
                  </div>

                  {/* Large Typography Word */}
                  <div className="md:col-span-4">
                    <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#102A43] group-hover:text-[#087A5B] transition-colors duration-200">
                      {pillar.word}
                    </h3>
                  </div>

                  {/* Grounded Explanation */}
                  <div className="md:col-span-5">
                    <p className="text-[#171717] text-base md:text-lg leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Subtle Arrow indicator */}
                  <div className="md:col-span-1 hidden md:flex justify-end">
                    <ArrowUpRight
                      className="w-6 h-6 text-gray-300 opacity-40 transition-all duration-300 group-hover:text-[#087A5B] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
