import { CheckCircle, LockIcon, Percent, Shield, ShieldCheck, TrendingUp, Users } from "lucide-react";

export const bannerData = [
    {
        "id": 1,
        "title": "We improve practice efficiency and patient safety",
        "subtitle": "Innovative Inventory Tracking with EMR Integration",
        "description": "Revolutionizing healthcare facilities with accurate technology driven solutions to optimize.",
        "image": "/images/banner.webp"
    },
    {
        "id": 2,
        "title": "Streamline Your Medical Inventory Management",
        "subtitle": "Advanced 340B and Non-340B Inventory Solutions",
        "description": "Optimize your healthcare facility's inventory with our cutting-edge tracking solutions.",
        "image": "/images/banner.webp"
    }
];

export const statsData = [
    {
        id: 1,
        value: '340%',
        title: 'Improved Practice Efficiency',
        desc: 'We have improved Average practice efficiency by over 340% by eliminating slow, errorful and manual data entry.',
        Icon: TrendingUp,
    },
    {
        id: 2,
        value: '5000+',
        title: 'Number of Providers',
        desc: 'Trusted by over 5,000 providers for proven, reliable and accurate solutions.',
        Icon: Users,
    },
    {
        id: 3,
        value: '80%',
        title: 'Reduce Operational Costs',
        desc: 'Reduce operational expenses over 80% with optimized inventory and track wastage.',
        Icon: Percent,
    },
    {
        id: 4,
        value: null,
        title: 'Compliances',
        desc: 'TriNet Medical follows an ethic code and ensures strong compliance with HIPAA and SOC2.',
        Icon: ShieldCheck,
    },
];

export const aboutData = {
    features: [
        'Increase practice efficiency and productivity.',
        'Built to reduce operational cost with real-time quality data.',
        'Real-time inventory and lot tracking for 340B and non-340B',
        'Integrated with EMRs like Ochin Epic, AthenaHealth, eClinicalWorks, NextGen, Veradigm, Greenway Intergy, and Altera'
    ],
    excellence: [
        {
            percentage: '95%',
            label: 'Improvement in billing & state registry accuracy'
        },
        {
            percentage: '95%',
            label: 'Improvement in patient care & safety'
        }
    ]
};

export const techPartnersData = [
    {
        id: 1,
        image: '/images/tech-partners/ochin-epic-logo.png',
        name: 'Ochin Epic',
        url: '#'
    },
    {
        id: 2,
        image: '/images/tech-partners/athena-logo.png',
        name: 'Athena Health',
        url: '#'
    },
    {
        id: 3,
        image: '/images/tech-partners/ecw-logo.png',
        name: 'eClinical Works',
        url: '#'
    },
    {
        id: 4,
        image: '/images/tech-partners/nextgen-logo.png',
        name: 'NextGen Heathcare',
        url: '#'
    },
    {
        id: 5,
        image: '/images/tech-partners/mckesson-logo.png',
        name: 'McKesson',
        url: '#'
    },
    {
        id: 6,
        image: '/images/tech-partners/greenway-logo.png',
        name: 'Greenway health',
        url: '#'
    },
    {
        id: 7,
        image: '/images/tech-partners/altera-logo.png',
        name: 'Altera Digital Health',
        url: '#'
    },
    {
        id: 8,
        image: '/images/tech-partners/veradigm-logo.png',
        name: 'Veradigm',
        url: '#'
    }
];

export const testimonialsData = [
    {
        id: 1,
        rating: 5,
        content: "TriNet Medical is a pleasure to work with. Their product provides a targeted solution and their service and customer engagement is outstanding.",
        author: "Operations Manager",
        company: "Healthcare Clinic",
    },
    {
        id: 2,
        rating: 5,
        content: "TriNet Medical has been a great partner for us. Their product is easy to use and their customer support is always there when we need them.",
        author: "Pharmacy Director",
        company: "Specialty Pharmacy",
    },
    {
        id: 3,
        rating: 5,
        content: "Everyone is used to the workflow and it does save a lot of time on the data entry side. As far as the data quality, I believe it is far more accurate.",
        author: "Compliance Lead",
        company: "Medical Center",
    },
];

export const Soc2CertificationData = {
    title: 'TriNet Medical, LLC is now SOC 2 (TYPE 2) certified',
    description: "We're delighted to announce that TriNet Medical, LLC has achieved a SOC 2 (TYPE 2) certification, a rigorous international certification demonstrating our commitment to maintaining and protecting information security.",
    features: [
        {
            id: 1,
            title: 'Data Security',
            description: 'Enterprise-grade security protocols',
            Icon: Shield
        },
        {
            id: 2,
            title: 'Compliance',
            description: 'HIPAA and SOC2 compliant systems',
            Icon: LockIcon
        },
        {
            id: 3,
            title: 'Verified',
            description: 'Third-party audited and certified',
            Icon: CheckCircle
        }
    ]
};