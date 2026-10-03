export interface GalleryMediaItem {
  id: string;
  type: "video" | "image";
  title: string;
  category: "Outreach" | "Empowerment" | "Community" | "Events";
  dateBadge: string;
  locationBadge: string;
  caption: string;
  mediaSrc: string;
  posterSrc?: string;
  isPlaceholderImage?: boolean;
  placeholderAlt?: string;
}

export const galleryCategories = ["All", "Outreach", "Empowerment", "Community", "Events"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryMediaItem[] = [
  {
    id: "gal-christmas-widows-video",
    type: "video",
    title: "Christmas Party & Support for Widows",
    category: "Events",
    dateBadge: "07.12.2023",
    locationBadge: "BENIN CITY, EDO STATE",
    caption:
      "Documentary broadcast recording of the Christmas outreach at Naomi Gardens, Benin City. Providing food staples, cash gifts, and business startup funds to 9 widows.",
    mediaSrc: "/videos/christmas-outreach-2023.mp4",
  },
  {
    id: "gal-market-empowerment-video",
    type: "video",
    title: "Marketplace Widow Business Grants",
    category: "Empowerment",
    dateBadge: "FIELD RECORD",
    locationBadge: "EDO STATE",
    caption:
      "Peter Nosa Ighodaro meeting with market women and widows in the marketplace, providing direct financial startup assistance and celebrating new beginnings.",
    mediaSrc: "/videos/business-grant-empowerment.mp4",
  },
  {
    id: "gal-food-distribution-video",
    type: "video",
    title: "Foodstuff & Yam Distribution",
    category: "Outreach",
    dateBadge: "FIELD RECORD",
    locationBadge: "BENIN CITY",
    caption:
      "Direct distribution of fresh tubers of yam and vital pantry provisions to local widows confronting severe economic difficulty.",
    mediaSrc: "/videos/food-distribution-widows.mp4",
  },
  {
    id: "gal-widows-fellowship-video",
    type: "video",
    title: "Communal Widows Prayer Service",
    category: "Community",
    dateBadge: "FIELD RECORD",
    locationBadge: "EDO STATE",
    caption:
      "Communal prayer and worship gathering led by Rev. Mrs. Nosa Ighodaro, bringing hope, spiritual upliftment, and mutual comfort to widows.",
    mediaSrc: "/videos/widows-worship-support.mp4",
  },
  {
    id: "gal-outdoor-prayer-video",
    type: "video",
    title: "Outdoor Widow Fellowship Gathering",
    category: "Community",
    dateBadge: "FIELD RECORD",
    locationBadge: "COMMUNITY GROUNDS",
    caption:
      "Outdoor gathering of widows clapping, praying, and sharing mutual encouragement and solidarity.",
    mediaSrc: "/videos/widows-prayer-fellowship.mp4",
  },
  {
    id: "gal-abuja-outreach-video",
    type: "video",
    title: "Abuja Grassroots Community Outreach",
    category: "Outreach",
    dateBadge: "FIELD RECORD",
    locationBadge: "LUGBE, ABUJA",
    caption:
      "Field representative speaking with a large assembly of community members and widows in Lugbe, Abuja to establish regular support channels.",
    mediaSrc: "/videos/abuja-community-outreach.mp4",
  },
  {
    id: "gal-settlement-inspection-video",
    type: "video",
    title: "Settlement Living Conditions Inspection",
    category: "Outreach",
    dateBadge: "FIELD RECORD",
    locationBadge: "INFORMAL SETTLEMENT",
    caption:
      "Peter Nosa Ighodaro visiting an underserved community settlement, listening to resident widows and evaluating urgent housing and micro-business needs.",
    mediaSrc: "/videos/field-outreach-visitation.mp4",
  },
  {
    id: "gal-vulnerable-youth-video",
    type: "video",
    title: "Field Care & Need Assessment",
    category: "Community",
    dateBadge: "FIELD RECORD",
    locationBadge: "FIELD SITE",
    caption:
      "Direct listening and medical support engagement with vulnerable community members and individuals experiencing physical affliction.",
    mediaSrc: "/videos/vulnerable-care-assessment.mp4",
  },
];
