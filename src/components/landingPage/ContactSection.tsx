import React from 'react';
import Link from 'next/link';
import { Hash, PhoneCall } from 'lucide-react';
import { ContactForm } from '@/components/common';
import Image from "next/image";

const ContactSection: React.FC = () => {
    return (
        <section className='tn-section bg-[url("/images/contact-bg-lines.png")] bg-no-repeat bg-center bg-cover pb-0'>
            <div className="tn-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-6 lg:space-y-8 animate-fadeInUp">
                        <div className='flex flex-col gap-1.5 xl:gap-2'>
                            <div className="tn-section-head--heading"><Hash className='h-5 w-5' /> Got a question? We've got answers!</div>
                            <h2 className="tn-section-head--title">Get in touch</h2>
                        </div>
                        <ContactForm />
                    </div>

                    <div className="relative hidden lg:flex justify-center">
                        <div className="relative z-10">
                            <Image
                                preload
                                fetchPriority='high'
                                src="/images/contact-doctor-img.png"
                                alt="Contact Us - Healthcare Professional"
                                width={600}
                                height={700}
                                className="w-aut0 h-full object-contain"
                            />
                        </div>

                        <Link href="tel:+1-908-575-7304" className="absolute bottom-8 right-8 bg-white rounded-xl shadow-2xl shadow-primary/50 border border-light-gray/30 hover:shadow-3xl px-6 py-4 animate-fadeInUp z-20 group transition duration-500">
                            <PhoneCall className='w-5 h-5 text-primary absolute top-2 right-2 animate-pulse' />
                            <div className="flex flex-col gap-1">
                                <span className="text-txt-gray text-sm font-semibold group-hover:text-secondary transition duration-500">Contact us</span>
                                <strong className="text-secondary font-bold text-lg group-hover:text-primary transition duration-500">+1-908-575-7304</strong>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;