import type { Metadata } from "next";
import {
  BannerSection,
  StatsSection,
  AboutSection,
  TechnologyPartners,
  TestimonialSection,
  SOC2CertificationSection,
  ContactSection
} from "@/components/landingPage";

export const metadata: Metadata = {
  title: "Healthcare Inventory & Lot Tracking Software | TriNet Medical",
  description: "TriNet Medical helps healthcare providers streamline medical inventory management with real-time lot & expiration tracking, 340B compliance, EMR/EHR integrations, and enterprise-grade security.",
  keywords: [
    "Healthcare Inventory Management",
    "Medical Inventory Software",
    "Lot and Expiration Tracking",
    "340B Inventory Management",
    "DSCSA Compliance Software",
    "EMR EHR Integration",
    "Healthcare Compliance Software",
    "Pharmacy Inventory Management",
    "HIPAA Compliant Healthcare Platform",
  ],
};

const Home = () => {
  return (
    <article>
      <BannerSection />
      <StatsSection />
      <AboutSection />
      <TechnologyPartners />
      <TestimonialSection />
      <SOC2CertificationSection />
      <ContactSection />
    </article>
  );
}

export default Home;