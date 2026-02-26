import {
  ShieldCheck,
  FileCheck,
  Building2,
  ClipboardCheck,
  Database,
  Lock,
  AlertCircle,
  FileBarChart,
  Package,
  Scan,
  Archive,
  CheckCircle2,
  BarChart3,
  FileText,
  Bell,
  RefreshCcw
} from "lucide-react";

export const heroData = {
  subtitle: "Our solution",
  title: "A comprehensive solution addressing all DSCSA mandates",
  description: "TriNet Medical DSCTtrack is engineered to meet all current and upcoming requirements of the Drug Supply Chain Security Act ensuring your pharmacy is fully compliant across every critical area of operation.",
  linkText: "Drug Supply Chain Security Act",
  features: [
    {
      icon: FileCheck,
      title: "Our team of healthcare experts"
    },
    {
      icon: Building2,
      title: "Dedicated to operational excellence"
    }
  ]
};

export const featuresData = {
  sectionTitle: "Our Features",
  mainTitle: "What our <span>DSCSA Compliance</span> software offers",
  features: [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Supplier Validation & Onboarding",
      description: "We handle supplier validation, credential confirmation, and licensure verification through a seamless data exchange"
    },
    {
      id: 2,
      icon: Database,
      title: "DSCSA Compliance SOPs",
      description: "Our solution provides you with customizable compliance SOPs that are electronically maintained to align with each new FDA guidance update, removing the burden of manual documentation"
    },
    {
      id: 3,
      icon: Building2,
      title: "Compliance Data Reporting to Federal Agencies",
      description: "We deliver compliance data reporting capabilities specifically designed to meet the requirements of all federal and state agencies"
    },
    {
      id: 4,
      icon: ClipboardCheck,
      title: "Compliance Data Reporting for Claims",
      description: "Our platform is equipped to handle complex reporting requirements, generating compliance data for EBM Rx claims, Diabetic, ASN T3 audits, and the latest T2 audits"
    }
  ]
};

export const workflowData = {
  sectionTitle: "Work flow analysis",
  mainTitle: "How TriNet Medical DSCTtrack <span>transforms your daily operations</span>",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Scan & Receive",
      description: "Simply scan receiving products. DSCTtrack automatically ingests and validates data from your suppliers"
    },
    {
      id: 2,
      number: "02",
      title: "Verify & Quarantine",
      description: "Verify every product at the package lot number level and easily quarantine any suspicious or illegitimate drugs"
    },
    {
      id: 3,
      number: "03",
      title: "Store & Secure",
      description: "All serialized data remains stored in our intelligent repository, ensuring it's safe and accessible anytime"
    }
  ]
};

export const advancedSolutionsData = {
  sectionTitle: "Advanced Features",
  mainTitle: "Advanced solutions for a more <span>compliant and efficient practice</span>",
  solutions: [
    {
      id: 1,
      icon: Lock,
      title: "Secure Data Exchange",
      description: "Ensure secure, compliant data exchange with trading partners while maintaining full chain-of-custody documentation required by DSCSA."
    },
    {
      id: 2,
      icon: AlertCircle,
      title: "Product Verification",
      description: "Instantly verify product authenticity to quickly identify, investigate, and respond to suspect or illegitimate products."
    },
    {
      id: 3,
      icon: FileBarChart,
      title: "Comprehensive Audit Trails",
      description: "Maintain complete transaction histories and audit-ready records that simplify inspections and regulatory reviews."
    },
    {
      id: 4,
      icon: Package,
      title: "Serialization Management",
      description: "Track products at the package level with full serialization data for end-to-end traceability."
    },
    {
      id: 5,
      icon: RefreshCcw,
      title: "Efficient Recall Management",
      description: "Quickly identify affected inventory and respond to recalls with confidence using real-time tracking and alerts."
    },
    {
      id: 6,
      icon: ShieldCheck,
      title: "DSCSA Compliance Ready",
      description: "Stay aligned with evolving DSCSA requirements through built-in compliance workflows and reporting tools."
    }
  ]
};

export const keyBenefitsData = {
  sectionTitle: "Your complete DSCSA compliance solution",
  mainTitle: "Automating <span>DSCSA compliance</span> for your pharmacy",
  description: "At TriNet Medical, we understand the complexities of DSCSA compliance. Our DSCTtrack platform provides a comprehensive turnkey solution for dispensaries, designed to address all 10 current and upcoming DSCSA mandates. The service provides customized compliance SOPs that are electronically maintained with each new FDA guidance update and is backed by full administrative and technical support.",
  benefits: [
    {
      id: 1,
      title: "Complete DSCSA Compliance"
    },
    {
      id: 2,
      title: "Automated Data Management"
    },
    {
      id: 3,
      title: "Supplier Verification"
    },
    {
      id: 4,
      title: "Regulatory Reporting"
    },
    {
      id: 5,
      title: "Real-time Alerts"
    },
    {
      id: 6,
      title: "Audit Ready Documentation"
    }
  ],
  keyHighlights: [
    {
      id: 1,
      title: "Compliance",
      subtitle: "Meet all FDA mandates"
    },
    {
      id: 2,
      title: "Security",
      subtitle: "Protect supply chain integrity"
    },
    {
      id: 3,
      title: "Efficiency",
      subtitle: "Automate verification processes"
    },
    {
      id: 4,
      title: "Support",
      subtitle: "Full technical & administrative backup"
    }
  ]
};

export const bottomFeaturesData = [
  {
    id: 1,
    icon: Scan,
    title: "Barcode Scanning",
    description: "Quickly capture and verify product information through efficient barcode scanning at receiving"
  },
  {
    id: 2,
    icon: Archive,
    title: "Data Repository",
    description: "Securely store all transaction data in our intelligent repository for easy access and compliance"
  },
  {
    id: 3,
    icon: Bell,
    title: "Automated Alerts",
    description: "Receive instant notifications for suspect products, verification issues, and compliance updates"
  },
  {
    id: 4,
    icon: FileText,
    title: "Compliance Reporting",
    description: "Generate comprehensive reports for federal agencies, state boards, and internal audits"
  }
];
