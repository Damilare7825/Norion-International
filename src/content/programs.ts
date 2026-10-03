export interface ProgramItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyActions: string[];
  editorialQuote: string;
  featuredVideo: string;
  posterSrc: string;
}

export const programs: ProgramItem[] = [
  {
    id: "widow-empowerment",
    number: "01",
    title: "Widow Empowerment",
    shortDescription:
      "Empowering widows through direct food supplies, non-repayable business startup funds, physical materials, and continuous prayer support.",
    fullDescription:
      "Widows are at the heart of Norion Caritas Foundation. Started 15 years ago by Founder Nosa Peter Ighodaro, our widow outreach provides bags of rice, yams, physical provisions, and seed capital to launch small trade businesses so widows can support their children and regain self-sufficiency.",
    keyActions: [
      "Targeted financial assistance and seed capital to start micro-businesses",
      "Large-scale foodstuff distributions including rice and yams",
      "Weekly community gatherings with prayer and spiritual fellowship",
      "Physical materials and welfare support to lift widows out of distress",
    ],
    editorialQuote: "And laid them down at the apostles' feet: and distribution was made unto every man according as he had need. — Acts 4:35",
    posterSrc: "/images/christmas-outreach-2023/group-at-christmas-outreach.webp",
    featuredVideo: "/videos/christmas-outreach-2023.mp4",
  },
  {
    id: "orphan-vulnerable-support",
    number: "02",
    title: "Orphan & Vulnerable People Support",
    shortDescription:
      "Bringing children and vulnerable people off the streets with food, clothing, physical materials, and compassionate shelter care.",
    fullDescription:
      "Our goal is to help the helpless and bring them out of the street by giving them physical materials. We reach orphans and abandoned youth without family safety nets, offering vital provisions, educational supplies, and dignified protection across Nigerian states.",
    keyActions: [
      "Physical materials, daily essentials, and clothing distribution",
      "Stepping in to remove vulnerable children and youths from street hazards",
      "Nutritional care, food packages, and school support",
      "Protection, advocacy, and guidance for at-risk youth",
    ],
    editorialQuote: "Our mission is to reach those living in the streets, restore their dignity, and show them true love in action.",
    posterSrc: "/images/video-poster.webp",
    featuredVideo: "/videos/vulnerable-care-assessment.mp4",
  },
  {
    id: "community-outreach",
    number: "03",
    title: "Community Outreach Across Nigeria",
    shortDescription:
      "Active branches and regular field outreaches across Edo State, Abuja, Lagos, and several other states.",
    fullDescription:
      "From our headquarters in Benin City, Edo State, Norion Caritas Foundation operates branches and field outreaches across Nigeria. In Abuja, every Saturday we gather people, give them money to start businesses, and pray for them. In Lagos and other states, we conduct regular prayer and material support outreaches.",
    keyActions: [
      "Abuja Saturday Outreach: Weekly business capital distribution and prayers",
      "Lagos Outreach: Community prayer assemblies and material assistance",
      "Edo State: Ongoing grassroots outreach, home visitations, and food drives",
      "Expanding centers and prayer branches into additional Nigerian states",
    ],
    editorialQuote: "Every Saturday in Abuja and across states, we put faith into action by funding businesses and lifting people in prayer.",
    posterSrc: "/images/christmas-outreach-2023/widow-business-support.webp",
    featuredVideo: "/videos/abuja-community-outreach.mp4",
  },
  {
    id: "business-empowerment",
    number: "04",
    title: "Business Empowerment & Seed Grants",
    shortDescription:
      "Providing direct seed money for widows and people on the street to start trading businesses and become self-reliant.",
    fullDescription:
      "Charity provides immediate relief, but business capital creates lasting freedom. Founder Nosa Peter Ighodaro personally meets market women, widows, and vulnerable youth on site to award non-repayable startup funds to establish trade stalls, buy goods, and earn dignified daily income.",
    keyActions: [
      "Direct cash seed grants to launch or restock small businesses",
      "Weekly business support drives in Abuja, Edo State, and market centers",
      "Mentorship, encouragement, and practical trade guidance",
      "Empowering families to move permanently from poverty to self-reliance",
    ],
    editorialQuote: "When you give someone the money to start a business, you take them off the street forever.",
    posterSrc: "/images/christmas-outreach-2023/food-provisions.webp",
    featuredVideo: "/videos/business-grant-empowerment.mp4",
  },
  {
    id: "material-assistance",
    number: "05",
    title: "Physical Materials & Food Relief",
    shortDescription:
      "Delivering bags of rice, yams, provisions, and physical household supplies to meet urgent human needs.",
    fullDescription:
      "Following Acts 4:35, we make distribution to everyone according as they have need. We provide physical materials—large sacks of parboiled rice, tubers of yam, clean provisions, and essential household items—directly to families confronting acute lack.",
    keyActions: [
      "Bulk distributions of staple parboiled rice bags and farm produce",
      "Doorstep delivery of physical food provisions to elderly widows",
      "Distribution of clothing, beddings, and emergency household goods",
      "Swift, respectful relief directly to the hands of beneficiaries",
    ],
    editorialQuote: "Distribution made unto every man according as he had need. — Acts 4:35",
    posterSrc: "/images/video-poster.webp",
    featuredVideo: "/videos/food-distribution-widows.mp4",
  },
  {
    id: "prayer-community-support",
    number: "06",
    title: "Prayer & Community Support",
    shortDescription:
      "Branches and centers where we pray for people, uplift broken hearts, and share joyous Christian fellowship.",
    fullDescription:
      "We believe that material assistance must be coupled with powerful, compassionate prayer. Across our branches in Edo State, Abuja, Lagos, and other states, we gather regularly to pray for people, intercede for widows, celebrate life with songs of praise, and bring spiritual healing to all in need.",
    keyActions: [
      "Regular prayer meetings and fellowship services across all branches",
      "Intercessory prayer for widows, the sick, and afflicted families",
      "Uplifting choir praise, worship, and shared celebrations",
      "A compassionate family network where no one suffers alone",
    ],
    editorialQuote: "We have branches where we pray for people, lift their burdens, and release God's transforming grace.",
    posterSrc: "/images/video-poster.webp",
    featuredVideo: "/videos/widows-worship-support.mp4",
  },
];
