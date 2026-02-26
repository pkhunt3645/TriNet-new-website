import React from 'react';
import { Metadata } from 'next';
import {
    HeroSection,
    HowItWorks,
    IntegrationBenefits,
    IntegrationPartners,
    IntegrationSupport
} from '@/components/IntegrationsPage';

export const metadata: Metadata = {
    title: "Healthcare System Integrations Platform | EHR & Device Connectivity",
    description: "TriNet Medical’s integration platform securely connects EHRs, medical devices, and healthcare systems with real-time data sync, HIPAA compliance, and seamless interoperability.",
    keywords: [
        "healthcare system integrations",
        "EHR integration platform",
        "healthcare interoperability",
        "medical device integration",
        "HIPAA compliant data integration",
        "healthcare API integrations",
        "TriNet Medical integrations"
    ],
};

const IntegrationsPage: React.FC = () => {
    return (
        <article className='pt-16'>
            <HeroSection />
            <IntegrationPartners />
            <IntegrationBenefits />
            <HowItWorks />
            <IntegrationSupport />
        </article>
    )
}

export default IntegrationsPage;
