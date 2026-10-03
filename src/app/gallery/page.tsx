import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentary Video Gallery",
  description:
    "View authentic video documentation of Norion Caritas Foundation outreach in Benin City, Edo State and Nigerian communities.",
};

export default function GalleryPage() {
  return (
    <div className="bg-[#F7F7F4] text-[#171717]">
      {/* Header */}
      <section className="bg-[#102A43] text-white py-24 md:py-28 border-b border-white/10">
        <Container>
          <div className="max-w-3xl space-y-6">
            <SectionLabel label="Video Documentation" light />
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Documentary Video Archive
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed">
              Authentic field recordings from widow empowerment events, food distributions, prayer fellowships, and community visits in Edo State and across Nigeria.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-emerald-300">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>All videos represent genuine field documentation with verified dates and locations.</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Gallery Section */}
      <section className="py-20 md:py-24 bg-white border-b border-[#E8E8E2]">
        <Container>
          {/* Interactive Filterable Gallery Grid */}
          <GalleryGrid />
        </Container>
      </section>
    </div>
  );
}
