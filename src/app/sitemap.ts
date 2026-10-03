import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://norioncaritas.org";

  const routes = [
    "",
    "/about",
    "/our-work",
    "/impact",
    "/gallery",
    "/donate",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/donate" ? 0.9 : 0.8,
  }));
}
