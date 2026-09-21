export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://landing-bribu.vercel.app/sitemap.xml",
    host: "https://landing-bribu.vercel.app",
  };
}
