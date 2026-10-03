import { Hero } from "@/components/sections/Hero";
import { WhyNorionExists } from "@/components/sections/WhyNorionExists";
import { YearsOfService } from "@/components/sections/YearsOfService";
import { FourPillars } from "@/components/sections/FourPillars";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { OurWorkList } from "@/components/sections/OurWorkList";
import { FeaturedImpact } from "@/components/sections/FeaturedImpact";
import { VisualStory } from "@/components/sections/VisualStory";
import { WhereWeServe } from "@/components/sections/WhereWeServe";
import { SupportMission } from "@/components/sections/SupportMission";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Why Norion Exists */}
      <WhyNorionExists />

      {/* 3. 15+ Years Storytelling */}
      <YearsOfService />

      {/* 4. Four Core Words (RENEW, EMPOWER, STRENGTHEN, TRANSFORM) */}
      <FourPillars />

      {/* 5. Who We Serve */}
      <WhoWeServe />

      {/* 6. Our Work Editorial List */}
      <OurWorkList />

      {/* 7. Featured Impact: Christmas Outreach for Widows (07.12.2023) */}
      <FeaturedImpact />

      {/* 8. Visual Story Magazine Spread */}
      <VisualStory />

      {/* 9. Where We Serve (Edo State & Across Nigeria) */}
      <WhereWeServe />

      {/* 10. Support the Mission (Donate, Partner, Spread Awareness) */}
      <SupportMission />

      {/* 11. Final CTA */}
      <FinalCTA />
    </>
  );
}
