import React from 'react';
import { Zap } from "lucide-react";
import CenteredHeroSection from '@/components/common/CenteredHeroSection';

const HeroSection: React.FC = () => {
    return (
        <CenteredHeroSection
            badge={{
                icon: Zap,
                text: "ROI Calculator"
            }}
            title="Calculate Your ROI with"
            highlightedText="TriNet Medical SRX"
            description="Calculate the real financial impact of improving operational efficiency in your healthcare practice. See how reducing minutes per scan, automating workflows, and optimizing provider productivity can translate into significant annual savings and faster break-even."
            ctaButtons={[
                {
                    text: "Calculate Your ROI",
                    href: "#roi-calculator",
                    variant: "primary"
                },
                {
                    text: "Schedule a Demo",
                    href: "#schedule-demo",
                    variant: "secondary"
                }
            ]}
            trustIndicators={{
                left: {
                    avatarLetters: ["T", "M", "H"],
                    title: "Trusted by Healthcare Teams",
                    subtitle: "Across clinics & hospitals"
                },
                right: {
                    title: "HIPAA & SOC 2 Compliant",
                    subtitle: "Secure & compliant platform"
                }
            }}
        />
    );
};

export default HeroSection;
