import React from 'react';
import { featuresData } from '@/data/inventoryManagementPageData';
import { SectionHeading } from '@/components/common';

const FeaturesSection: React.FC = () => {
  return (
    <section className="tn-section" id='features'>
      <div className="tn-container space-y-10 md:space-y-14">
        <SectionHeading
          heading={featuresData.sectionTitle}
          title={featuresData.mainTitle}
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {featuresData.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <li
                key={feature.id}
                className="group relative overflow-visible rounded-2xl p-6 bg-linear-to-br from-primary/10 to-light-cyan/50 border border-light-cyan hover:border-primary/50 transition-all duration-500 animate-fadeInUp"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="absolute -top-6 left-6 z-10 flex p-3 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary shadow-lg transition-all duration-500 group-hover:rotate-6">
                  <Icon className="h-6 w-6 text-white" />
                  <i className="absolute inset-0 rounded-2xl bg-primary/20 group-hover:animate-ping opacity-0 group-hover:opacity-75" />
                </div>

                <h3 className="my-3 text-xl font-semibold text-secondary transition-all duration-500 group-hover:text-primary">{feature.title}</h3>
                <p className="text-sm md:text-base leading-relaxed text-txt-gray">{feature.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
