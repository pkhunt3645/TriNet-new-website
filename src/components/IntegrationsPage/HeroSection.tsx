import React from 'react';
import { Zap } from "lucide-react";
import CenteredHeroSection from '@/components/common/CenteredHeroSection';

const HeroSection: React.FC = () => {
  return (
    <CenteredHeroSection
      badge={{
        icon: Zap,
        text: "Powering the Future of Healthcare Connectivity"
      }}
      title="Seamless Integration for"
      highlightedText="Modern Healthcare"
      description="Connect your medical devices, EHR systems, and healthcare applications with our secure, scalable integration platform. Built for interoperability and compliance."
      ctaButtons={[
        {
          text: "Explore Integrations",
          href: "#integration_partners",
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
          avatarLetters: ["J", "M", "S"],
          title: "Trusted by 5000+",
          subtitle: "healthcare providers"
        },
        right: {
          title: "HIPAA & SOC 2 Compliance",
          subtitle: "Enterprise-grade security"
        }
      }}
    />
  );
};

export default HeroSection;
