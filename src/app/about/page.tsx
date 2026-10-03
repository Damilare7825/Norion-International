import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { organization } from "@/content/organization";
import { ArrowRight, Compass, Sparkles, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Founder Nosa Peter Ighodaro & Our 15-Year Story",
  description:
    "Norion Caritas Foundation was founded 15 years ago by Nosa Peter Ighodaro. Headquartered in Benin City, Edo State with centers all over Nigeria, empowering widows, orphans, and bringing the helpless off the streets.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F7F7F4] text-[#171717]">
      {/* Editorial Page Hero */}
      <section className="bg-[#102A43] text-white py-24 md:py-28 border-b border-white/10">
        <Container>
          <div className="max-w-3xl space-y-6">
            <SectionLabel label="About Norion Caritas Foundation" light />
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Helping the helpless and bringing people off the street for 15 years.
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed">
              Founded by <strong>{organization.founderName}</strong>, Norion Caritas Foundation started 15 years ago with its national headquarters in Benin City, Edo State, Nigeria, and active centers all over Nigeria.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 md:py-32 bg-white border-b border-[#E8E8E2]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <SectionLabel number="01" label="Origins & Leadership" />
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
                Our Story
              </h2>
              <figure className="overflow-hidden border border-[#E8E8E2] bg-[#F7F7F4]">
                <Image
                  src="/images/founder-nosa-ighodaro.jpg"
                  alt="Founder Nosa Peter Ighodaro"
                  width={405}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <figcaption className="px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#6B6B6B]">
                  Nosa Peter Ighodaro, Founder
                </figcaption>
              </figure>
              <div className="p-6 bg-[#102A43] text-white border border-[#102A43] space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#0088C9] font-bold">
                  Founder
                </span>
                <p className="font-heading text-2xl font-bold text-white">
                  {organization.founderName}
                </p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Established the foundation 15 years ago with headquarters in Benin City, Edo State, expanding centers across Lagos, Abuja, and multiple Nigerian states.
                </p>
              </div>

              <div className="p-6 bg-[#F7F7F4] border border-[#E8E8E2] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#087A5B] font-bold">
                  <BookOpen className="w-4 h-4 text-[#087A5B]" />
                  <span>Foundational Scripture</span>
                </div>
                <blockquote className="font-serif italic text-sm text-[#102A43] leading-relaxed">
                  &ldquo;{organization.foundingScripture.text}&rdquo;
                </blockquote>
                <span className="font-mono text-xs text-[#6B6B6B] block font-semibold">
                  &mdash; {organization.foundingScripture.reference}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base text-[#171717] leading-relaxed">
              <p className="text-lg md:text-xl font-medium text-[#102A43]">
                The foundation started 15 years ago with its national headquarters in Benin City, Edo State, Nigeria. Driven by a divine calling to help the helpless, Founder Nosa Peter Ighodaro launched Norion Caritas Foundation to bring people out of the street by giving them physical materials and sustainable support.
              </p>
              <p className="text-[#6B6B6B]">
                We empower widows, orphans, and the abused. Our mission is hands-on: we provide physical materials, bags of rice, yams, and clothing, and we establish pathways for vulnerable people to regain their dignity.
              </p>
              <p className="text-[#6B6B6B]">
                In <strong>Abuja, every Saturday</strong>, we gather people to give them money to start small businesses and pray for them. In <strong>Lagos</strong> and across several other Nigerian states, we have active branches where we pray for people, uplift broken hearts, and distribute life-saving assistance.
              </p>
              <p className="text-[#6B6B6B]">
                Our vision has always remained pure and scriptural: <em>to sell what we have and give to the poor</em>, following the apostolic pattern of Acts 4:35, where distribution is made unto every person according as they have need.
              </p>

              <div className="pt-4 border-t border-[#E8E8E2] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-[#F7F7F4] border border-[#E8E8E2]">
                  <span className="font-heading font-extrabold text-xl text-[#087A5B] block">15</span>
                  <span className="text-[11px] font-mono uppercase text-[#6B6B6B]">Years Ago</span>
                </div>
                <div className="p-3 bg-[#F7F7F4] border border-[#E8E8E2]">
                  <span className="font-heading font-extrabold text-xl text-[#102A43] block">Benin City</span>
                  <span className="text-[11px] font-mono uppercase text-[#6B6B6B]">Headquarters</span>
                </div>
                <div className="p-3 bg-[#F7F7F4] border border-[#E8E8E2]">
                  <span className="font-heading font-extrabold text-xl text-[#0088C9] block">Saturdays</span>
                  <span className="text-[11px] font-mono uppercase text-[#6B6B6B]">Abuja Grants</span>
                </div>
                <div className="p-3 bg-[#F7F7F4] border border-[#E8E8E2]">
                  <span className="font-heading font-extrabold text-xl text-[#087A5B] block">Nigeria</span>
                  <span className="text-[11px] font-mono uppercase text-[#6B6B6B]">All Centers</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-24 md:py-32 bg-[#F7F7F4] border-b border-[#E8E8E2]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission Box */}
            <div className="p-8 md:p-12 bg-white border border-[#E8E8E2] space-y-6 shadow-xs">
              <div className="w-12 h-12 bg-[#087A5B] text-white flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <SectionLabel number="02" label="Guiding Mandate" />
              <h3 className="font-heading text-3xl font-extrabold text-[#102A43]">
                Our Goal &amp; Mission
              </h3>
              <p className="text-base sm:text-lg text-[#171717] leading-relaxed">
                {organization.goal}
              </p>
              <div className="pt-4 border-t border-neutral-100 text-xs text-[#6B6B6B] space-y-2">
                <span className="font-mono uppercase font-semibold text-[#087A5B]">Key Operational Mandates:</span>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#087A5B]" />
                    <span>Bring the helpless out of the street with physical materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#087A5B]" />
                    <span>Every Saturday in Abuja: Business startup funds &amp; prayer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#087A5B]" />
                    <span>Branches in Lagos &amp; other states praying for people and helping</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision Box */}
            <div className="p-8 md:p-12 bg-[#102A43] text-white border border-[#102A43] space-y-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#0088C9] text-white flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <SectionLabel number="03" label="Aspirational Horizon" light />
                <h3 className="font-heading text-3xl font-extrabold text-white mb-4">
                  Our Vision
                </h3>
                <blockquote className="text-xl sm:text-2xl text-emerald-300 font-serif leading-relaxed italic border-l-4 border-[#087A5B] pl-4 mb-4">
                  &ldquo;To sell what we have and give the poor.&rdquo;
                </blockquote>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Founded upon self-giving love, practical compassion, and the apostolic calling to ensure no vulnerable person is neglected in their affliction.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 text-xs font-mono text-gray-300">
                <span>Scripture: {organization.foundingScripture.reference}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-white border-b border-[#E8E8E2]">
        <Container>
          <div className="max-w-2xl mb-16">
            <SectionLabel number="04" label="Foundational Pillars" />
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
              Our Core Values
            </h2>
            <p className="text-[#6B6B6B] text-base mt-2">
              Four non-negotiable principles that drive our field staff, volunteers, and outreach programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {organization.corePillars.map((pillar) => (
              <div
                key={pillar.word}
                className="p-8 bg-[#F7F7F4] border border-[#E8E8E2] hover:border-[#087A5B] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#087A5B] block mb-4">
                    {pillar.number}
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold text-[#102A43] mb-3">
                    {pillar.word}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Who We Serve Section */}
      <section id="who-we-serve" className="py-24 md:py-32 bg-[#F7F7F4] border-b border-[#E8E8E2]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <SectionLabel number="05" label="Beneficiaries" />
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#102A43]">
                Who We Serve
              </h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                We empower widows and orphans, assist abused individuals, and bring the helpless out of the street by giving them physical materials and startup business funding.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {organization.beneficiaries.map((b) => (
                <div key={b.title} className="p-6 bg-white border border-[#E8E8E2] space-y-2">
                  <span className="font-mono text-[11px] text-[#087A5B] uppercase tracking-wider font-semibold">
                    {b.tag}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#102A43]">
                    {b.title}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Where We Work Section */}
      <section id="where-we-work" className="py-24 md:py-28 bg-white border-b border-[#E8E8E2]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <SectionLabel number="06" label="Territory of Service" />
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#102A43]">
              All Centers All Over Nigeria
            </h2>
            <p className="text-base text-[#171717] leading-relaxed">
              Started 15 years ago with headquarters in <strong>Benin City, Edo State, Nigeria</strong>, Norion Caritas Foundation maintains centers all over Nigeria, with weekly business funding and prayer outreaches in <strong>Abuja every Saturday</strong>, prayer and community support in <strong>Lagos</strong>, and active branches across several other states.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 bg-[#087A5B] hover:bg-[#07543F] text-white px-6 py-3.5 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#102A43] text-[#102A43] hover:bg-[#102A43] hover:text-white px-6 py-3.5 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Contact Headquarters</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
