import React from 'react';
import { workflowData } from '@/data/inventoryManagementPageData';
import { SectionHeading } from '@/components/common';

const WorkflowSection: React.FC = () => {
  return (
    <section className="tn-section">
      <div className="tn-container space-y-6 md:space-y-8">
        <SectionHeading
          heading={workflowData.sectionTitle}
          title={workflowData.mainTitle}
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-17 left-0 right-0 h-1">
            <i className="absolute inset-0 border-t-2 border-dashed border-primary/30 left-1/6 right-1/6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {workflowData.steps.map((step, index) => (
              <div
                key={step.id}
                className="relative animate-fadeInUp group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32 rounded-full border-4 border-dashed border-primary/25 group-hover:border-primary flex items-center justify-center bg-white shadow-lg transition-all duration-500">
                    <span className="text-5xl font-bold text-primary/25 group-hover:text-primary font-poppins transition-all duration-500">{step.number}</span>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-txt-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
