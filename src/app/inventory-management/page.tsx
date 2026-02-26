import type { Metadata } from 'next';
import {
  HeroSection,
  FeaturesSection,
  WorkflowSection,
  AdvancedSolutionsSection,
  KeyBenefitsSection,
  BottomFeaturesSection
} from '@/components/InventoryManagementPage';
import { WhyTrinetSection } from '@/components/common';

export const metadata: Metadata = {
  title: 'Healthcare Inventory Management Software | Lot & Barcode Tracking',
  description: 'TriNet Medical’s inventory management software streamlines lot & barcode tracking, EMR integration, real-time reporting, and compliance to improve safety and operational efficiency in healthcare practices.',
  keywords: [
    'inventory management',
    'healthcare inventory',
    'medical inventory tracking',
    'barcode tracking',
    'EMR integration',
    'lot tracking',
    'expiry tracking',
    '340B program',
    'healthcare compliance',
    'medical supplies management',
  ],
};

const InventoryManagementPage: React.FC = () => {
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

export default InventoryManagementPage;
