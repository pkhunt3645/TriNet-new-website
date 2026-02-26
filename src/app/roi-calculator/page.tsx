import { HeroSection, CalculatorSection } from '@/components/RoiCalculatorPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "ROI Calculator | Healthcare Technology Investment Analysis",
    description: "Calculate the return on investment (ROI) for healthcare technology solutions with TriNet Medical's ROI Calculator. Assess cost savings, efficiency gains, and financial benefits of implementing our healthcare inventory management and EMR/EHR integration software.",
    keywords: [
        "ROI Calculator",
        "Healthcare Technology ROI",
        "Medical Software Investment Analysis",
        "Healthcare Inventory Management ROI",
        "EMR EHR Integration ROI",
        "Healthcare Software Cost Savings",
        "Medical Technology Financial Benefits",
        "Healthcare IT Investment Analysis",
    ],
};

const ROICalculatorPage: React.FC = () => {
    return (
        <article className='pt-16'>
            <HeroSection />
            <CalculatorSection />
        </article>
    )
}

export default ROICalculatorPage;
