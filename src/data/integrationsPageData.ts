import { Clock, Shield, TrendingDown, Database, Zap, CheckCircle2, GitMerge, Users, Phone, Mail, MessageCircle, FileText, BookOpen, Headphones } from "lucide-react";

export const integrationBenefitsData = [
    {
        id: 1,
        icon: Clock,
        title: 'Real-Time Data Synchronization',
        description: 'Instant updates across all connected systems ensure your team always has the most current information.'
    },
    {
        id: 2,
        icon: TrendingDown,
        title: 'Reduced Manual Data Entry',
        description: 'Eliminate duplicate data entry and minimize billing errors with automated data flow between systems.'
    },
    {
        id: 3,
        icon: Database,
        title: 'Improved Inventory Tracking',
        description: 'Accurate, real-time visibility into medical lot tracking and inventory levels across all locations.'
    },
    {
        id: 4,
        icon: Shield,
        title: 'HIPAA-Compliant Data Transfer',
        description: 'Enterprise-grade security ensures all data transfers meet strict healthcare compliance standards.'
    },
    {
        id: 5,
        icon: Zap,
        title: 'Single Source of Truth',
        description: 'Centralize data across platforms to eliminate discrepancies and improve decision-making.'
    },
    {
        id: 6,
        icon: CheckCircle2,
        title: 'Seamless Workflow Integration',
        description: 'Work within your existing systems while enjoying the power of connected healthcare data.'
    }
];

export const integrationProcessData = [
    {
        id: 1,
        step: '01',
        title: 'Select Your Integration',
        description: 'Choose from our library of pre-built integrations with leading EMR and healthcare platforms.',
        icon: GitMerge,
        color: 'from-primary to-secondary'
    },
    {
        id: 2,
        step: '02',
        title: 'Authenticate & Connect',
        description: 'Securely connect your systems using enterprise-grade authentication protocols.',
        icon: Shield,
        color: 'from-secondary to-primary'
    },
    {
        id: 3,
        step: '03',
        title: 'Configure Data Mapping',
        description: 'Map data fields between systems with our intuitive configuration interface.',
        icon: Database,
        color: 'from-primary to-secondary'
    },
    {
        id: 4,
        step: '04',
        title: 'Start Syncing Automatically',
        description: 'Your systems are now connected and data flows seamlessly in real-time.',
        icon: Zap,
        color: 'from-secondary to-primary'
    }
];

export const integrationSupportData = {
    features: [
        {
            id: 1,
            icon: Users,
            title: 'Dedicated Integration Specialists',
            description: 'Work with experienced professionals who understand your unique healthcare workflows and integration needs.'
        },
        {
            id: 2,
            icon: Clock,
            title: 'Rapid Implementation Timeline',
            description: 'Most integrations are up and running within 2-4 weeks, minimizing disruption to your operations.'
        },
        {
            id: 3,
            icon: BookOpen,
            title: 'Comprehensive Training & Onboarding',
            description: 'Tailored training sessions ensure your team is confident and proficient with the new integration.'
        },
        {
            id: 4,
            icon: Headphones,
            title: '24/7 Technical Support',
            description: 'Round-the-clock support team ready to assist with any questions or technical issues.'
        }
    ],
    contactOptions: [
        {
            id: 1,
            icon: Phone,
            title: 'Call Us',
            value: '1-800-TRINET',
            link: 'tel:1-800-874-6388',
            color: 'text-primary'
        },
        {
            id: 2,
            icon: Mail,
            title: 'Email Us',
            value: 'support@trinetmedical.com',
            link: 'mailto:support@trinetmedical.com',
            color: 'text-secondary'
        },
        {
            id: 3,
            icon: MessageCircle,
            title: 'Live Chat',
            value: 'Available 24/7',
            link: '#',
            color: 'text-theme-green'
        },
        {
            id: 4,
            icon: FileText,
            title: 'Documentation',
            value: 'View Resources',
            link: '#',
            color: 'text-primary'
        }
    ]
};
