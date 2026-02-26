import React from 'react';
import { CheckCircle } from 'lucide-react';
import { keyBenefitsData } from '@/data/inventoryManagementPageData';
import { SectionHeading } from '@/components/common';

const KeyBenefitsSection: React.FC = () => {
  return (
    <section className="tn-section">
      <div className="tn-container space-y-10 md:space-y-14">
        <SectionHeading
          heading={keyBenefitsData.sectionTitle}
          title={keyBenefitsData.mainTitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fadeInUp">
            <p className="text-secondary text-base md:text-lg leading-relaxed mb-8">{keyBenefitsData.description}</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {keyBenefitsData.benefits.map((benefit) => (
                <li key={benefit.id} className="flex items-center gap-2">
                  <div className="shrink-0">
                    <CheckCircle className="w-5 h-5 text-theme-green" />
                  </div>
                  <span className="text-secondary font-semibold">{benefit.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fadeInUp space-y-6">
            <h3 className="text-2xl font-bold text-secondary">Key Benefits:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {keyBenefitsData.keyHighlights.map((highlight) => (
                <li key={highlight.id} className="group relative overflow-hidden rounded-xl border border-light-gray/30 bg-white p-5 transition-shadow duration-500 hover:shadow-xl">
                  <span aria-hidden className="absolute inset-y-0 left-0 w-1 origin-left scale-x-100 group-hover:scale-x-125 bg-linear-to-b from-primary to-secondary group-hover:from-secondary group-hover:to-primary opacity-80 transition-all duration-500 ease-out" />
                  <h4 className="text-lg font-semibold text-secondary transition-colors duration-500 group-hover:text-primary">
                    {highlight.title}
                  </h4>
                  {highlight.subtitle && (
                    <p className="text-sm text-txt-gray leading-relaxed">{highlight.subtitle}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
