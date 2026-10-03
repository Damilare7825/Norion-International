export interface BankDetails {
  accountName: string;
  bankName: string;
  accountNumber: string;
}

export interface ContactInfo {
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    full: string;
  };
  phones: {
    nigeria: string;
    nigeriaDisplay: string;
    nigeriaWhatsAppUrl: string;
    ukWhatsApp: string;
    ukWhatsAppDisplay: string;
    ukWhatsAppUrl: string;
  };
  email: string;
  founder: {
    name: string;
    title: string;
    bio: string;
  };
}

export interface OrganizationData {
  name: string;
  shortName: string;
  tagline: string;
  yearsOfService: string;
  headquarters: string;
  founderName: string;
  foundingScripture: {
    reference: string;
    text: string;
  };
  corePillars: {
    number: string;
    word: string;
    description: string;
  }[];
  beneficiaries: {
    title: string;
    description: string;
    tag: string;
  }[];
  mission: string;
  vision: string;
  goal: string;
  bankDetails: BankDetails;
  contact: ContactInfo;
}

export const organization: OrganizationData = {
  name: "Norion Caritas Foundation",
  shortName: "Norion Caritas",
  tagline: "Renew. Empower. Strengthen. Transform.",
  yearsOfService: "Started 15 years ago",
  headquarters: "Benin City, Edo State, Nigeria",
  founderName: "NOSA PETER IGHODARO",
  foundingScripture: {
    reference: "Acts 4:35",
    text: "And laid them down at the apostles' feet: and distribution was made unto every man according as he had need.",
  },
  goal: "Our goal is to help the helpless and bring them out of the street by giving them physical materials, food, shelter support, and sustainable business startup funding.",
  mission:
    "Norion Caritas Foundation works across Nigeria to empower widows and orphans, assist abused and vulnerable people, provide life-changing physical materials, and conduct regular community prayer and business empowerment outreaches.",
  vision: "To sell what we have and give to the poor.",
  corePillars: [
    {
      number: "01",
      word: "RENEW",
      description: "Restoring hope, spiritual comfort, and inner strength to widows, orphans, and abused individuals across Nigeria.",
    },
    {
      number: "02",
      word: "EMPOWER",
      description: "Equipping people with physical materials and non-repayable cash seed grants every week to start businesses and achieve self-reliance.",
    },
    {
      number: "03",
      word: "STRENGTHEN",
      description: "Providing consistent food relief, medical aid, and community prayer fellowships so vulnerable families are lifted from hardship.",
    },
    {
      number: "04",
      word: "TRANSFORM",
      description: "Bringing the helpless out of the street and creating lasting, generational transformation through love, faith, and practical charity.",
    },
  ],
  beneficiaries: [
    {
      title: "Widows",
      description: "Empowered through weekly business grants, bags of rice and food supplies, communal fellowship, and continuous prayer support.",
      tag: "Dignity & Livelihood",
    },
    {
      title: "Orphans",
      description: "Vulnerable children brought off the streets, provided with food, clothing, education assistance, and compassionate protection.",
      tag: "Protection & Care",
    },
    {
      title: "The Abused & At-Risk",
      description: "Individuals enduring physical trauma, domestic abuse, or abandonment, received with open arms and restoration aid.",
      tag: "Healing & Hope",
    },
    {
      title: "The Helpless on the Street",
      description: "Men, women, and youths without food or shelter, given immediate physical materials, sustenance, and pathways to work.",
      tag: "Direct Relief",
    },
    {
      title: "Communities Across Nigeria",
      description: "Outreaches in Edo State, Abuja, Lagos, and several other states bringing prayer, business capital, and practical charity.",
      tag: "Nationwide Outreaches",
    },
  ],
  bankDetails: {
    accountName: "Norion Caritas Foundation",
    bankName: "Zenith Bank",
    accountNumber: "1014999717",
  },
  contact: {
    address: {
      line1: "Blessed Ighodaro Estate",
      line2: "164 2nd East Circular Road",
      city: "Benin City",
      state: "Edo State",
      country: "Nigeria",
      full: "Blessed Ighodaro Estate, 164 2nd East Circular Road, Benin City, Edo State, Nigeria",
    },
    phones: {
      nigeria: "07035266255",
      nigeriaDisplay: "0703 526 6255",
      nigeriaWhatsAppUrl: "https://wa.me/2347035266255",
      ukWhatsApp: "+447432887462",
      ukWhatsAppDisplay: "+44 7432 887462",
      ukWhatsAppUrl: "https://wa.me/447432887462",
    },
    email: "nosadarolimited@gmail.com",
    founder: {
      name: "NOSA PETER IGHODARO",
      title: "Founder",
      bio: "Founder of Norion Caritas Foundation. Driven by a deep commitment to the Gospel and Acts 4:35, Nosa Peter Ighodaro established the foundation 15 years ago to help the helpless, bring people out of the streets with physical materials, and empower widows and youth across Edo State, Abuja, Lagos, and Nigeria.",
    },
  },
};
