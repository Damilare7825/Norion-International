export interface ImpactActivity {
  id: string;
  title: string;
  date: string;
  dateBadge: string;
  location: string;
  stateBadge: string;
  category: "Widow Outreach" | "Business Empowerment" | "Community Aid" | "Spiritual Fellowship";
  summary: string;
  details: string[];
  videoSrc?: string;
  imagePlaceholder: string;
  verifiedNotes: string;
}

export const featuredImpact: ImpactActivity = {
  id: "christmas-outreach-widows-2023",
  title: "Christmas Outreach for Widows",
  date: "7 December 2023",
  dateBadge: "07.12.2023",
  location: "Naomi Gardens, GRA, Benin City, Edo State, Nigeria",
  stateBadge: "EDO STATE",
  category: "Widow Outreach",
  summary:
    "Norion Caritas Foundation convened a major Christmas outreach gathering for widows in Edo State, providing staple food supplies, cash gifts, and vital business startup funds to empower nine widows toward financial self-reliance.",
  details: [
    "Full staple food support including multiple bags of parboiled rice distributed to attending widows",
    "Direct financial support and cash gifts to cushion urgent household expenses",
    "Cash seed capital presented to 9 widows specifically earmarked to launch their own micro-businesses",
    "An uplifting afternoon of community dance, mutual encouragement, shared meal, and communal prayers",
    "Coordinated on the ground by Founder Nosa Peter Ighodaro and Rev. Mrs. Nosa Ighodaro",
  ],
  videoSrc: "/videos/christmas-outreach-2023.mp4",
  imagePlaceholder: "Documentary photograph: Widows presenting startup fund envelopes with joy at Naomi Gardens",
  verifiedNotes:
    "Documented field activity verified through official video records and attendee photographic documentation.",
};

export const documentedActivities: ImpactActivity[] = [
  featuredImpact,
  {
    id: "abuja-saturday-empowerment",
    title: "Abuja Every Saturday Business Grants & Prayer Outreach",
    date: "Weekly Every Saturday",
    dateBadge: "WEEKLY OUTREACH",
    location: "Abuja (FCT) & Peri-Urban Communities",
    stateBadge: "ABUJA / FCT",
    category: "Business Empowerment",
    summary:
      "Every Saturday in Abuja, Norion Caritas Foundation gathers people, gives them direct cash capital to start businesses, and prays for them to be lifted out of hardship.",
    details: [
      "Every Saturday: Handing cash seed capital directly to individuals to launch trading businesses",
      "Dedicated prayer sessions for individuals, families, and street youths",
      "Bringing the helpless out of the street into dignity and productive trade",
      "Distribution made unto every person according as they have need (Acts 4:35)",
    ],
    videoSrc: "/videos/abuja-community-outreach.mp4",
    imagePlaceholder: "Documentary photograph: Saturday business startup distribution and prayer assembly in Abuja",
    verifiedNotes: "Regular weekly Saturday outreach in Abuja.",
  },
  {
    id: "lagos-prayer-community-outreach",
    title: "Lagos Community Outreach & Prayer Branch",
    date: "Regular Community Outreach",
    dateBadge: "PRAYER & RELIEF",
    location: "Lagos Communities, Lagos State",
    stateBadge: "LAGOS STATE",
    category: "Spiritual Fellowship",
    summary:
      "Reaching into neighborhoods in Lagos State to pray for people, comfort the afflicted, and distribute food, clothing, and physical materials to families facing hardship.",
    details: [
      "Communal prayer and intercession for families, the sick, and afflicted individuals",
      "Direct distribution of physical relief materials and food packages",
      "Connecting street youth and struggling parents to supportive community centers",
    ],
    videoSrc: "/videos/widows-worship-support.mp4",
    imagePlaceholder: "Documentary photograph: Community outreach and prayer assembly in Lagos",
    verifiedNotes: "Ongoing outreach across Lagos communities.",
  },
  {
    id: "food-distribution-direct",
    title: "Direct Foodstuff & Material Distribution",
    date: "Documented Field Activity",
    dateBadge: "FIELD RECORD",
    location: "Benin City & Surrounding Areas, Edo State",
    stateBadge: "EDO STATE",
    category: "Community Aid",
    summary:
      "Direct humanitarian delivery of fresh yams, foodstuffs, and pantry staples straight to widows and families living under severe economic strain.",
    details: [
      "Physical distribution of fresh agricultural produce including tubers of yam",
      "Direct engagement with elderly widows in their neighborhoods",
      "Immediate alleviation of household food deficits without bureaucratic delays",
    ],
    videoSrc: "/videos/food-distribution-widows.mp4",
    imagePlaceholder: "Documentary photograph: Distribution of yams and provisions to local widows",
    verifiedNotes: "Verified via on-site field recording.",
  },
  {
    id: "market-widow-empowerment",
    title: "Marketplace Widow Seed Grants",
    date: "Documented Field Activity",
    dateBadge: "FIELD RECORD",
    location: "Local Community Markets, Nigeria",
    stateBadge: "GRASSROOTS",
    category: "Business Empowerment",
    summary:
      "Visits to market women and widows at their stalls by Founder Nosa Peter Ighodaro, providing immediate cash seed grants to purchase new stock and kickstart sustainable trading.",
    details: [
      "On-site assessment of women operating in informal market stalls",
      "Direct provision of non-repayable trading capital",
      "Celebratory dancing and shared praise among market women",
    ],
    videoSrc: "/videos/business-grant-empowerment.mp4",
    imagePlaceholder: "Documentary photograph: Market women celebrating after receiving business startup funds",
    verifiedNotes: "Verified via on-ground video documentation.",
  },
  {
    id: "vulnerable-settlement-assessment",
    title: "Vulnerable Settlement Field Visitation",
    date: "Documented Field Activity",
    dateBadge: "FIELD RECORD",
    location: "Underserved Informal Settlements, Nigeria",
    stateBadge: "FIELD REPORT",
    category: "Community Aid",
    summary:
      "Personal visit by Founder Nosa Peter Ighodaro into fragile residential settlements to directly inspect housing conditions, listen to long-term widow residents, and provide immediate aid.",
    details: [
      "Walking through settlement corridors to meet long-term residents",
      "Assessing immediate shelter, welfare, and livelihood needs",
      "Planning structured intervention for housing and startup funds",
    ],
    videoSrc: "/videos/field-outreach-visitation.mp4",
    imagePlaceholder: "Documentary photograph: Inspection of living conditions in underserved settlement",
    verifiedNotes: "Verified via on-ground documentary footage.",
  },
];
