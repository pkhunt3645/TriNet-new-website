import type { Metadata } from 'next';
import {
  HeroSection,
  FeaturesSection,
  WorkflowSection,
  AdvancedSolutionsSection,
  KeyBenefitsSection,
  BottomFeaturesSection
} from '@/components/DscsaCompliancePage';
import { WhyTrinetSection } from '@/components/common';

export const metadata: Metadata = {
    title: 'DSCSA Compliance Software for Pharmacies',
    description: 'TriNet Medical DSCTtrack is a comprehensive DSCSA compliance software helping pharmacies scan, verify, quarantine, and securely store supply chain data while meeting all FDA mandates.',
    keywords: [
        "DSCSA compliance software",
        "DSCSA tracking",
        "pharmacy supply chain compliance",
        "drug supply chain security act",
        "DSCTtrack",
        "TriNet Medical",
        "FDA compliance software",
        "pharmacy compliance solutions"
    ],
};

const DscsaCompliancePage: React.FC = () => {
    return (
        <article className="pt-16">
            <HeroSection />
            <FeaturesSection />
            <WorkflowSection />
            <AdvancedSolutionsSection />
            <KeyBenefitsSection />
            <BottomFeaturesSection />
            <WhyTrinetSection />
        </article>
    );
};

export default DscsaCompliancePage;
