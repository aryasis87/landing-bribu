import { BRIEF, SITE } from "@/lib/papan";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/papan`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE}/untuk-desainer`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...BRIEF.map((b) => ({ url: `${SITE}/papan/${b.kode.toLowerCase()}`, lastModified: now, changeFrequency: "weekly", priority: 0.6 })),
  ];
}
