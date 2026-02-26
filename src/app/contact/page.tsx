import type { Metadata } from "next";
import { ContactFormSection, HeroSection } from "@/components/ContactPage";

export const metadata: Metadata = {
    title: "Contact Us | Healthcare Inventory Software Support & Sales",
    description: "Get in touch with TriNet Medical for healthcare inventory management solutions, 340B compliance support, lot & expiration tracking, EMR/EHR integrations, or to schedule a personalized demo.",
    keywords: [
        "Contact TriNet Medical",
        "Healthcare Inventory Software Contact",
        "Medical Inventory Management Support",
        "340B Compliance Support",
        "DSCSA Compliance Help",
        "Healthcare Software Sales",
        "EMR EHR Integration Support",
        "Pharmacy Inventory Software Contact",
        "HIPAA Compliant Healthcare Platform Support",
    ],
};

const ContactPage = () => {
    return (
        <article className="pt-16">
            <HeroSection />
            <ContactFormSection />
        </article>
    );
}

export default ContactPage;