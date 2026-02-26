import React from 'react';
import { Zap } from "lucide-react";
import CenteredHeroSection from '@/components/common/CenteredHeroSection';

const HeroSection: React.FC = () => {
    return (
        <CenteredHeroSection
            badge={{
                icon: Zap,
                text: "About Us"
            }}
            title="Transforming Healthcare Through"
            highlightedText="Innovation"
            description="TriNet Medical is dedicated to transforming healthcare delivery with intelligent and user-friendly technology. By merging extensive industry knowledge with pioneering innovation, we develop EMR/EHR systems that foster trust among healthcare providers and improve patient outcomes. Our philosophy centers on empowering healthcare professionals through powerful, secure, and remarkably simple technology solutions."
            ctaButtons={[
                {
                    text: "Explore more",
                    href: "#",
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
                    avatarLetters: ["K", "A", "H"],
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