import React from 'react';
import { Zap } from "lucide-react";
import CenteredHeroSection from '@/components/common/CenteredHeroSection';

const HeroSection: React.FC = () => {
  return (
    <CenteredHeroSection
      badge={{
        icon: Zap,
        text: "DSCSA Compliance"
      }}
      title="A comprehensive solution addressing all"
      highlightedText="DSCSA mandates"
      description='TriNet Medical DSCTtrack is engineered to meet all current and upcoming requirements of the <span class="text-primary font-semibold">Drug Supply Chain Security Act</span> ensuring your pharmacy is fully compliant across every critical area of operation.'
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
          title: "Our team of healthcare experts",
          subtitle: "worldwide"
        },
        right: {
          title: "Dedicated to",
          subtitle: "operational excellence"
        }
      }}
    />
  );
};

export default HeroSection;
