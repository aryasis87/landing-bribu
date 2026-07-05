import { Inter_Tight, Inter } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({ variable: "--font-intertight", subsets: ["latin"], weight: ["600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Bribu","description":"Platform kontes desain online","url":"https://bribu.pintuweb.com","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://bribu.pintuweb.com"),
  title: "Bribu — Kontes Desain untuk Bisnismu",
  description: "Bribu: temukan desainer berbakat dan dapatkan desain profesional melalui kontes desain online yang cepat dan terpercaya.",
  applicationName: "Bribu",
  keywords: ["kontes desain", "jasa desain", "platform desain", "logo desain", "desainer"],
  authors: [{ name: "Bribu" }],
  creator: "Bribu",
  publisher: "Bribu",
  alternates: { canonical: "https://bribu.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bribu.pintuweb.com",
    siteName: "Bribu",
    title: "Bribu — Kontes Desain untuk Bisnismu",
    description: "Bribu: temukan desainer berbakat dan dapatkan desain profesional melalui kontes desain online yang cepat dan terpercaya.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Bribu — Kontes Desain untuk Bisnismu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bribu — Kontes Desain untuk Bisnismu",
    description: "Bribu: temukan desainer berbakat dan dapatkan desain profesional melalui kontes desain online yang cepat dan terpercaya.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${interTight.variable} ${inter.variable} antialiased`}>
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
