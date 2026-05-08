import type { MetadataRoute } from "next";

const BASE = "https://techity.io";

const homeAlternates = {
  en: `${BASE}/`,
  "fr-BE": `${BASE}/fr`,
  "nl-BE": `${BASE}/nl`,
};

const legalSlugs = ["privacy", "legal", "cookies"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const homePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: homeAlternates },
    },
    {
      url: `${BASE}/fr`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: homeAlternates },
    },
    {
      url: `${BASE}/nl`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: homeAlternates },
    },
  ];

  const legalPages: MetadataRoute.Sitemap = legalSlugs.flatMap((slug) => {
    const alternates = {
      en: `${BASE}/${slug}`,
      "fr-BE": `${BASE}/fr/${slug}`,
      "nl-BE": `${BASE}/nl/${slug}`,
    };
    return [
      {
        url: `${BASE}/${slug}`,
        lastModified,
        changeFrequency: "yearly" as const,
        priority: 0.3,
        alternates: { languages: alternates },
      },
      {
        url: `${BASE}/fr/${slug}`,
        lastModified,
        changeFrequency: "yearly" as const,
        priority: 0.3,
        alternates: { languages: alternates },
      },
      {
        url: `${BASE}/nl/${slug}`,
        lastModified,
        changeFrequency: "yearly" as const,
        priority: 0.3,
        alternates: { languages: alternates },
      },
    ];
  });

  return [...homePages, ...legalPages];
}
