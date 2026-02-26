import React from 'react';
import { advancedSolutionsData } from '@/data/dscsaCompliancePageData';
import { SectionHeading } from '@/components/common';

const AdvancedSolutionsSection: React.FC = () => {

  return (
    <section className="tn-section relative overflow-hidden">
      <div className="tn-container space-y-8">
        <SectionHeading heading={advancedSolutionsData.sectionTitle} title={advancedSolutionsData.mainTitle} />

        <div className="relative overflow-hidden rounded-3xl border border-secondary/10 bg-white px-6 py-10 md:px-10 md:py-14">
          <span className="hidden md:block absolute top-1/2 -left-[50%] w-[70%] h-[140%] -translate-y-1/2 rounded-full bg-primary/10" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {advancedSolutionsData.solutions?.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={solution.id} className="flex flex-col gap-4 max-w-sm animate-fadeInUp" style={{ animationDelay: `${index * 120}ms` }}>
                  <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  <h3 className="text-lg md:text-xl font-semibold text-secondary leading-snug">{solution.title}</h3>
                  <p className="text-txt-gray text-base leading-relaxed">{solution.description}</p>
                </div>
              );
            })}
          </div>

          <span className="absolute -top-12 -left-12 w-28 h-28 rounded-full bg-primary/25" />
          <span className="absolute -bottom-20 right-1/4 w-32 h-32 rounded-full bg-primary/15" />
          <span className="absolute top-1/3 -right-20 w-30 h-30 rounded-full bg-primary/15" />
        </div>
      </div>
    </section>
  );
};

export default AdvancedSolutionsSection;
