import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://swagatasarkar.com",
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "monthly",
    },
  ];
}