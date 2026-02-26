import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Montserrat, Caveat, Poppins } from "next/font/google";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trinetmedical.com"),
  title: {
    default: "TriNet Medical | Healthcare Inventory, Compliance & Integrations",
    template: "%s | TriNet Medical",
  },
  description: "TriNet Medical delivers secure healthcare solutions for inventory management, lot & expiration tracking, DSCSA compliance, EMR/EHR integrations, and real-time reporting. Built for modern healthcare providers.",
  applicationName: "TriNet Medical",
  keywords: [
    "Healthcare Inventory Management",
    "Lot and Expiration Tracking",
    "DSCSA Compliance Software",
    "Healthcare Integrations",
    "EHR EMR Integration",
    "Medical Inventory Software",
    "340B Compliance",
    "HIPAA Compliant Healthcare Software",
    "Pharmacy Inventory Management",
    "Healthcare SaaS Platform",
  ],
  authors: [{ name: "TriNet Medical" }],
  creator: "TriNet Medical",
  publisher: "TriNet Medical",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "TriNet Medical",
    title: "TriNet Medical | Secure Healthcare Software Solutions",
    description: "Modern healthcare software for inventory tracking, DSCSA & 340B compliance, EMR integrations, and operational excellence.",
    url: "https://www.trinetmedical.com",
    images: [
      {
        url: "/og/og-home.png",
        width: 1200,
        height: 630,
        alt: "TriNet Medical – Healthcare Software Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TriNet Medical | Healthcare Software Solutions",
    description:
      "Secure, compliant healthcare inventory and integration solutions built for modern medical practices.",
    images: ["/og/og-home.png"],
    creator: "@TriNetMedical",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#1E4DB7",
  category: "Healthcare Technology",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${caveat.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}