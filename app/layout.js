import { Inter_Tight, Inter } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({ variable: "--font-intertight", subsets: ["latin"], weight: ["600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: "Bribu — Kontes Desain untuk Bisnismu",
  description: "Bribu: temukan desainer berbakat dan dapatkan desain profesional melalui kontes desain online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${interTight.variable} ${inter.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
