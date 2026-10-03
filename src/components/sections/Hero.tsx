import Link from "next/link";
import { ArrowRight, Heart, ShieldCheck, BookOpen } from "lucide-react";
import { organization } from "@/content/organization";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Hero() {

  return (
    <section className="relative bg-[#102A43] text-white pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-32 overflow-hidden border-b border-white/10">
      {/* Subtle background grain/texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <Container>
        {/* Editorial Subheader Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 mb-8 md:mb-12">
          <SectionLabel
            label={`${organization.name} • HQ: ${organization.headquarters}`}
            light
            className="mb-0"
          />
          <div className="flex items-center gap-3 text-xs font-mono tracking-wider text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#087A5B] inline-block" />
            <span>FOUNDED 15 YEARS AGO • CENTERS ALL OVER NIGERIA</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Headline & Mission Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Helping the helpless, bringing people from the{" "}
              <span className="text-[#45BCE7] font-normal italic">street</span>{" "}
              toward <span className="underline decoration-[#087A5B] decoration-2 underline-offset-8">hope.</span>
            </h1>

            <p className="text-gray-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Founded 15 years ago by <strong>{organization.founderName}</strong>, Norion Caritas Foundation empowers widows and orphans, assists abused individuals, provides life-saving physical materials, and conducts weekly business empowerment and prayer outreaches across Nigeria.
            </p>

            {/* Foundational Scripture Anchor */}
            <div className="p-4 bg-white/5 border-l-2 border-[#0088C9] text-xs sm:text-sm text-gray-300 space-y-1">
              <div className="flex items-center gap-2 font-mono text-[#45BCE7] font-semibold uppercase text-xs">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Foundational Scripture &mdash; {organization.foundingScripture.reference}</span>
              </div>
              <p className="italic font-serif text-white">
                &ldquo;{organization.foundingScripture.text}&rdquo;
              </p>
            </div>

            {/* Core Values Tagline Strip */}
            <div className="pt-1">
              <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 py-2 px-3.5 bg-white/5 border border-white/10 text-xs sm:text-sm font-mono tracking-wider uppercase text-gray-200">
                <span className="text-[#087A5B] font-bold">RENEW</span>
                <span className="text-gray-500">•</span>
                <span className="text-[#45BCE7] font-bold">EMPOWER</span>
                <span className="text-gray-500">•</span>
                <span className="text-emerald-400 font-bold">STRENGTHEN</span>
                <span className="text-gray-500">•</span>
                <span className="text-sky-300 font-bold">TRANSFORM</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2.5 bg-[#087A5B] hover:bg-[#07543F] text-white px-7 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-md group"
              >
                <Heart className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform" />
                <span>Support the Mission</span>
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white px-7 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-200 group"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Credibility note */}
            <div className="flex items-center gap-2 text-xs text-gray-400 pt-2 font-mono">
              <ShieldCheck className="w-4 h-4 text-[#087A5B]" />
              <span>Direct humanitarian bank transfer (Zenith Bank) • 100% verified grassroots outreach</span>
            </div>
          </div>

          {/* Right Column: Actual Documentary Video Window */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#0c2135] border border-white/20 p-2 shadow-2xl">
              {/* Media header tag */}
              <div className="flex items-center justify-between px-3 py-2 bg-black/40 text-[11px] font-mono text-gray-300 mb-2 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>DOCUMENTARY FOOTAGE</span>
                </span>
                <span className="text-[#45BCE7]">EDO STATE, NIGERIA</span>
              </div>

              {/* Video Element */}
              <div className="relative aspect-4/3 sm:aspect-16/10 bg-black overflow-hidden group">
                <video
                  src="/videos/christmas-outreach-2023.mp4"
                  muted
                  playsInline
                  poster="/images/christmas-outreach-2023/group-at-christmas-outreach.webp"
                  aria-label="Christmas outreach video from Benin City"
                  className="w-full h-full object-cover"
                controls preload="none" />

                <div className="absolute top-3 left-3 bg-[#087A5B] text-white text-[10px] uppercase font-mono px-2 py-0.5 tracking-wider font-semibold">
                  Field Record: 07.12.2023
                </div>
              </div>

              {/* Documentary Caption */}
              <div className="p-3 text-xs text-gray-300 bg-black/30 border-t border-white/10">
                <p className="line-clamp-2">
                  <strong className="text-white">Documented Outreach:</strong> Christmas Party &amp; business startup grants for widows at Naomi Gardens, Benin City, Edo State.
                </p>
                <Link
                  href="/impact#christmas-outreach-widows-2023"
                  className="inline-flex items-center gap-1 text-[#45BCE7] hover:underline text-[11px] font-medium mt-1.5"
                >
                  <span>Read documented story &amp; watch full video</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
