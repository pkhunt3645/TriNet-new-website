import React from 'react';
import { Hash, Mail, PhoneCall } from 'lucide-react';
import { ContactForm } from '@/components/common';
import { techPartnersData } from "@/data/landingPageData";
import Link from 'next/link';
import Image from 'next/image';

const ContactFormSection: React.FC = () => {
    return (
        <section className='tn-section relative overflow-hidden'>
            <Image
                src="/images/contact-bg-lines.png"
                alt="Background lines"
                height={700}
                width={1200}
                className="absolute inset-0 z-0 w-full h-full object-cover blur-[0.0313rem]"
            />
            <div className="tn-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                    <div className="space-y-6 lg:space-y-8 animate-fadeInUp">
                        <div className='flex flex-col gap-1.5 xl:gap-2'>
                            <div className="tn-section-head--heading"><Hash className='h-5 w-5' /> Got a question? We've got answers!</div>
                            <h2 className="tn-section-head--title">Get in touch</h2>
                            <p className="tn-section-head--subtitle">Whether you're curious about our healthcare inventory solutions, need assistance with 340B compliance, or want to explore EMR/EHR integrations, our team is here to help. Fill out the form below, and we'll get back to you promptly.</p>
                        </div>
                        <div className='flex flex-wrap gap-x-6 gap-y-3'>
                            <Link href="tel:+1-908-575-7304" className="relative bg-linear-to-br from-light-cyan/75 to-white/75 backdrop-blur-md hover:from-white/75 border border-light-gray/50 shadow-lg hover:shadow-xl hover:shadow-primary/20 rounded-xl px-6 py-4 animate-fadeInUp z-20 group transition duration-500">
                                <PhoneCall className='w-5 h-5 text-primary absolute top-2.5 right-2.5' />
                                <div className="flex flex-col gap-1">
                                    <span className="text-txt-gray text-sm group-hover:text-secondary transition duration-500">Call us</span>
                                    <strong className="text-secondary font-semibold text-base group-hover:text-primary transition duration-500">+1-908-575-7304</strong>
                                </div>
                            </Link>
                            <Link href="mailto:trinet@trinetmedical.com" className="relative bg-linear-to-br from-light-cyan/75 to-white/75 backdrop-blur-md hover:from-white/75 border border-light-gray/50 shadow-lg hover:shadow-xl hover:shadow-primary/20 rounded-xl px-6 py-4 animate-fadeInUp z-20 group transition duration-500">
                                <Mail className='w-5 h-5 text-primary absolute top-2.5 right-2.5' />
                                <div className="flex flex-col gap-1">
                                    <span className="text-txt-gray text-sm group-hover:text-secondary transition duration-500">Email us</span>
                                    <strong className="text-secondary font-semibold text-base group-hover:text-primary transition duration-500">trinet@trinetmedical.com</strong>
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h4 className='text-secondary text-lg font-semibold flex items-center gap-2'>
                                <span className='shrink-0'>Our Integration Partners</span>
                                <i className='flex-1 h-0.5 bg-linear-to-r from-primary/50 to-white rounded-2xl'></i>
                            </h4>
                            <ul className='grid grid-cols-3 gap-4'>
                                {techPartnersData.slice(0, 6).map((partner) => (
                                    <li key={partner.name} className='h-12 w-full'>
                                        <Image src={partner.image} alt={partner.name} height={32} width={80} className='h-full w-full object-contain aspect-video' />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className=''>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;