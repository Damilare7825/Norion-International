import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { featuredImpact } from "@/content/impact";

export function FeaturedImpact() {
  return (
    <section className="py-24 md:py-32 bg-[#102A43] text-white border-b border-white/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Video Player */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative bg-[#0c2135] border border-white/20 p-2 shadow-2xl">
              <div className="flex items-center justify-between px-3 py-2 bg-black/40 text-[11px] font-mono text-gray-300 mb-2 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#087A5B] inline-block" />
                  <span>DOCUMENTARY RECORD</span>
                </span>
                <span className="text-[#45BCE7] font-bold">{featuredImpact.stateBadge}</span>
              </div>

              <div className="relative aspect-video bg-black overflow-hidden">
                <video
                  src={featuredImpact.videoSrc}
                  playsInline
                  className="w-full h-full object-cover"
                poster="/images/video-poster.webp" controls preload="none" />
              </div>

              <div className="p-4 bg-black/40 text-xs text-gray-300 border-t border-white/10 space-y-1">
                <div className="flex items-center justify-between font-mono text-[11px] text-gray-400">
                  <span>Venue: Naomi Gardens, GRA, Benin City</span>
                  <span className="text-[#45BCE7]">{featuredImpact.dateBadge}</span>
                </div>
                <p className="text-gray-300 text-xs pt-1">
                  Full broadcast footage capturing food distribution, cash gifts, and 9 widow micro-enterprise seed grant presentations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Explanation */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <SectionLabel number="06" label="Documented Activity" light className="mb-0" />
              <span className="text-xs font-mono px-2 py-0.5 bg-[#087A5B] text-white font-semibold">
                {featuredImpact.dateBadge}
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {featuredImpact.title}
            </h2>

            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              {featuredImpact.summary}
            </p>

            <div className="space-y-3 pt-2">
              {featuredImpact.details.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#45BCE7] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6">
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 bg-[#087A5B] hover:bg-[#07543F] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>View Documented Impact Archive</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
              >
                <span>Browse All Videos & Photos</span>
                <span className="text-[#45BCE7]">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/15 pt-10">
          <div className="mb-8 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[#45BCE7] font-bold">Photo archive</p>
            <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-white">Christmas Party &amp; Outreach</h3>
            <p className="mt-2 text-sm text-gray-300">Photographs from the gathering, its food distribution, and the foundation’s leadership.</p>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-6 xl:gap-8">
            {[
              { src: "/images/christmas-outreach-2023/group-at-christmas-outreach.webp", alt: "Guests gathered at the Christmas outreach", caption: "Outreach gathering" },
              { src: "/images/christmas-outreach-2023/widow-business-support.webp", alt: "A Christmas outreach support presentation", caption: "Support presentation" },
              { src: "/images/christmas-outreach-2023/food-provisions.webp", alt: "Food provisions prepared for distribution", caption: "Food provisions" },
              { src: "/images/christmas-outreach-2023/celebration.webp", alt: "Guests celebrating during the Christmas outreach", caption: "Community celebration" },
              { src: "/images/christmas-outreach-2023/founder-and-wife.webp", alt: "Founder Nosa Peter Ighodaro with his wife at the Christmas party", caption: "Founder and his wife" },
            ].map((photo, index) => (
              <figure key={photo.src} className={"overflow-hidden border border-white/15 bg-[#0c2135] " + (index === 4 ? "xl:col-start-2" : "")}>
                <div className="relative aspect-[4/3] sm:aspect-video">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-3 py-3 text-xs sm:px-4 sm:text-sm text-gray-200">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
