import type { Metadata } from "next";
import "./globals.css";
import PersistentBackgroundVideo from "@/components/PersistentBackgroundVideo";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://rnpandeyinsurance.com"),
  title: "R N Pandey Insurance | Premium Asset Protection & Wealth Security",
  description: "Experience elite-tier asset protection, automated AI claim settlement ledger checks, comprehensive health coverages, and customized luxury policy options. Crafted for premium security.",
  keywords: "R N Pandey Insurance, RN Pandey, Premium Insurance, Luxury Asset Defense, AI Claim Settlement, Wealth Security, Premium Cover",
  authors: [{ name: "R N Pandey" }],
  openGraph: {
    title: "R N Pandey Insurance | Premium Asset Protection",
    description: "Elite-tier asset protection, automated AI claim settlement ledger checks, and customized luxury policy options.",
    url: "https://rnpandeyinsurance.com",
    siteName: "R N Pandey Insurance",
    images: [
      {
        url: "/hero-person.png",
        width: 1200,
        height: 630,
        alt: "R N Pandey Insurance Executive Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R N Pandey Insurance | Premium Asset Protection",
    description: "Elite-tier asset protection, automated AI claim settlement ledger checks, and customized luxury policy options.",
    images: ["/hero-person.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PersistentBackgroundVideo />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
