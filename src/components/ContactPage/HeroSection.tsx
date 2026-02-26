import React from "react";
import { Zap } from "lucide-react";
import CenteredHeroSection from "@/components/common/CenteredHeroSection";

const HeroSection: React.FC = () => {
    return (
        <CenteredHeroSection
            badge={{
                icon: Zap,
                text: "Contact Us",
            }}
            title="Let’s Build Smarter"
            highlightedText="Healthcare Together"
            description="Have questions about medical inventory management, 340B compliance, or EMR/EHR integrations? Our team is here to help you streamline operations, maintain compliance, and deliver better patient care with confidence."
            ctaButtons={[
                {
                    text: "Schedule a Demo",
                    href: "#schedule-demo",
                    variant: "primary",
                },
                {
                    text: "Talk to an Expert",
                    href: "#contact-form",
                    variant: "secondary",
                },
            ]}
            trustIndicators={{
                left: {
                    avatarLetters: ["T", "M", "H"],
                    title: "Trusted by 5,000+",
                    subtitle: "healthcare organizations",
                },
                right: {
                    title: "HIPAA, SOC 2 & 340B Ready",
                    subtitle: "Secure & compliant by design",
                },
            }}
        />
    );
};

export default HeroSection;