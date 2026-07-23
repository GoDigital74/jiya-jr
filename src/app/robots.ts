import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart", "/checkout"], // Keep shopping cart and checkout private from search index
    },
    sitemap: "https://jiyajr.com/sitemap.xml",
  };
}
