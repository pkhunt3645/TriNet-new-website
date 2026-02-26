import {
    HeroSection,
    BriefHistorySection,
    MissionSection,
    WhyChooseSection
} from '@/components/AboutPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "About Us | Healthcare Technology Since 2008",
    description: "Learn about TriNet Medical's mission to transform healthcare through innovative technology solutions. Since 2008, we've been helping healthcare providers with integrated EMR/EHR solutions, inventory management, and compliance software.",
    keywords: [
        "about TriNet Medical",
        "healthcare technology company",
        "medical software provider",
        "healthcare inventory solutions",
        "EMR EHR integration",
        "healthcare compliance solutions",
        "medical technology innovation",
        "healthcare IT company",
    ],
};

const About: React.FC = () => {
    return (
        <article className='pt-16'>
            <HeroSection />
            <BriefHistorySection />
            <MissionSection />
            <WhyChooseSection />
        </article>
    )
}

export default About;
