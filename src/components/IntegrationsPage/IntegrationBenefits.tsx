import React from 'react';
import { integrationBenefitsData } from '@/data/integrationsPageData';
import { SectionHeading } from '@/components/common';

const IntegrationBenefits: React.FC = () => {
    return (
        <section className='tn-section'>
            <div className="tn-container space-y-6 md:space-y-8">
                <SectionHeading
                    heading={'Benefits'}
                    title={'Why Choose <span>Our Integrations</span>'}
                    subTitle='Our integration platform delivers measurable improvements to your healthcare operations, reducing costs and improving patient care.'
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {integrationBenefitsData.map((benefit) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={benefit.id}
                                className="group space-y-2 relative bg-white border-2 border-primary/10 rounded-2xl p-6 lg:p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 animate-fadeInUp"
                            >
                                <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-linear-to-br from-theme-green/10 to-light-cyan group-hover:scale-110 transition-transform duration-500`}>
                                    <Icon className={`w-6 h-6 lg:w-7 lg:h-7 text-theme-green`} />
                                </div>
                                <h3 className="text-secondary font-bold text-lg lg:text-xl group-hover:text-primary transition-colors duration-500 mt-1">{benefit.title}</h3>
                                <p className="text-txt-gray text-sm lg:text-base leading-relaxed">{benefit.description}</p>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center pt-4 space-y-4 animate-fadeInUp">
                    <p className="text-txt-gray text-sm lg:text-base">Ready to transform your healthcare operations?</p>
                    <a
                        href="#integration_support"
                        className="inline-flex items-center justify-center gap-2 bg-linear-to-br from-primary to-secondary text-white text-base lg:text-lg font-semibold py-3 px-8 rounded-full hover:from-secondary hover:to-primary hover:shadow-lg hover:shadow-primary/30 transition duration-500"
                    >
                        Get Started Today
                    </a>
                </div>
            </div>
        </section>
    );
};

export default IntegrationBenefits;
