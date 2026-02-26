import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export const footerLinks = {
    socialLinks: [
        { Icon: Facebook, href: '#', label: 'Facebook' },
        { Icon: Twitter, href: '#', label: 'Twitter' },
        { Icon: Instagram, href: '#', label: 'Instagram' },
        { Icon: Youtube, href: '#', label: 'YouTube' },
        { Icon: Linkedin, href: '#', label: 'LinkedIn' }
    ],
    solutionLinks: [
        { href: '/inventory-management', label: 'Inventory Management' },
        { href: '/dscsa-compliance', label: 'DSCSA Compliance' },
        { href: '#', label: 'Provider AI Assistance (Comming Soon)' },
    ],
    policiesLinks: [
        { href: '#', label: 'HIPAA Compliance' },
        { href: '#', label: 'SOC2 Compliance' },
        { href: '#', label: 'Terms & Conditions' },
        { href: '#', label: 'Privacy Policy' }
    ],
    companyLinks: [
        { href: '/about', label: 'About Us' },
        { href: '#', label: 'News Letter' },
        { href: '#', label: 'Careers' },
        { href: '/contact', label: 'Contact Us' }
    ],
}