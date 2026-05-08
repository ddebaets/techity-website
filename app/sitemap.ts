import type { MetadataRoute } from "next";

const BASE = "https://techity.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${BASE}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE}/`,
          "fr-BE": `${BASE}/fr`,
          "nl-BE": `${BASE}/nl`,
        },
      },
    },
    {
      url: `${BASE}/fr`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${BASE}/`,
          "fr-BE": `${BASE}/fr`,
          "nl-BE": `${BASE}/nl`,
        },
      },
    },
    {
      url: `${BASE}/nl`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${BASE}/`,
          "fr-BE": `${BASE}/fr`,
          "nl-BE": `${BASE}/nl`,
        },
      },
    },
  ];
}
