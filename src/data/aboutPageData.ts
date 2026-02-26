import { Award, Users, LineChart } from "lucide-react";

export const briefHistoryData = {
  sectionTag: "About us",
  title: "Our brief <span>history</span>",
  paragraphs: [
    "Since 2008, TriNet Medical has provided integrated software solutions to the Healthcare Electronic Medical/Health Records (EMR/EHR) industry. Our success comes from helping healthcare providers bridge their knowledge gaps in data management and innovative technology solutions.",
    "Through a clear understanding of business and regulatory requirements, we help our customers reduce operational costs, increase practice efficiency and patient safety, and improve the accuracy and compliance of their patients' records."
  ],
  stats: [
    {
      id: 1,
      value: "15+",
      label: "Years of Excellence"
    },
    {
      id: 2,
      value: "5000+",
      label: "Healthcare Providers"
    }
  ],
  image: "/images/about-page-brief-history.png",
  imageAlt: "TriNet Medical Healthcare Professional"
};

export const missionData = {
  sectionTag: "Our mission",
  title: "Empowering healthcare",
  highlightedTitle: "through technology",
  description: "At TriNet Medical, we provide advanced medication, vaccine, and inventory tracking solutions that integrate directly into your existing EMR/EHR. We deliver secure, user-friendly, and empowering efficient operations and enhanced patient care.",
  features: [
    "Lot & Inventory tracking",
    "340B Program support",
    "EMR Integration",
    "Real-time alerts and reporting",
    "Improved practice efficiency and productivity",
    "Reduce medical data errors"
  ],
  images: [
    {
      src: "/images/about-page-our-mission.png",
      alt: "Healthcare Professional Using Tablet"
    },
    {
      src: "/images/about-page-our-mission-2.png",
      alt: "Medical Team Discussion"
    },
    {
      src: "/images/about-page-our-mission-3.png",
      alt: "Nurse Administering Vaccine"
    }
  ]
};

export const whyChooseData = {
  title: "Why choose TriNet Medical?",
  description: "We hold ourselves accountable to our customers, partners, and employees by honoring our commitments and striving for the highest quality.",
  reasons: [
    {
      id: 1,
      icon: Award,
      title: "Innovative Solutions",
      description: "We are dedicated to helping medical providers through digital transformation in a seamless, simple, and cost-effective way."
    },
    {
      id: 2,
      icon: Users,
      title: "Proven Expertise",
      description: "We have over 15 years of consulting and integration experience in healthcare."
    },
    {
      id: 3,
      icon: LineChart,
      title: "Our Values",
      description: "Our company values integrity, honesty, openness, excellence, continual self-improvement, and mutual respect. We possess strong project management skills and business-focused leadership experience to guide your projects effectively."
    }
  ],
  image: "/images/about-page-why-choose.png",
  imageAlt: "TriNet Medical Team Presentation"
};
