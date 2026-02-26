import React from 'react';
import { Zap } from "lucide-react";
import CenteredHeroSection from '@/components/common/CenteredHeroSection';

const HeroSection: React.FC = () => {
  return (
    <CenteredHeroSection
      badge={{
        icon: Zap,
        text: "Inventory Management"
      }}
      title="Revolutionizing Lot & Inventory tracking in"
      highlightedText="healthcare industry"
      description='TriNet Medical from a simple barcode scan eliminates manual data entry to save time tracking expiration, serialize, organize efficiently and minimizes and safety. We boost efficiency, integrate with your workflow, empowering healthcare focus entirely on what matters the most - <span class="text-primary font-semibold">"Your Patients"</span>.'
      ctaButtons={[
        {
          text: "Explore Features",
          href: "#features",
          variant: "primary"
        },
        {
          text: "Schedule a Demo",
          href: "#",
          variant: "secondary"
        }
      ]}
      trustIndicators={{
        left: {
          avatarLetters: ["T", "H", "C"],
          title: "Trusted by healthcare experts",
          subtitle: "worldwide"
        },
        right: {
          title: "Operational Excellence",
          subtitle: "Dedicated support"
        }
      }}
    />
  );
};

export default HeroSection;
