import type { MetadataRoute } from "next";

const siteUrl = "https://drahmetbozkurt.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${siteUrl}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${siteUrl}/services`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${siteUrl}/contact`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${siteUrl}/kvkk`, priority: 0.4, changeFrequency: "yearly" },
    { url: `${siteUrl}/gizlilik`, priority: 0.4, changeFrequency: "yearly" },
    { url: `${siteUrl}/cerez-politikasi`, priority: 0.4, changeFrequency: "yearly" },
    { url: `${siteUrl}/site-haritasi`, priority: 0.5, changeFrequency: "monthly" },
  ];
}
