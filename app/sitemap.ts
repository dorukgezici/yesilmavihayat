import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yesilmavihayat.com",
      lastModified: new Date(),
    },
    {
      url: "https://yesilmavihayat.com/yorumlar",
      lastModified: new Date(),
    },
    {
      url: "https://yesilmavihayat.com/okuma-listesi",
      lastModified: new Date(),
    },
    {
      url: "https://yesilmavihayat.com/medya",
      lastModified: new Date(),
    },
  ];
}
