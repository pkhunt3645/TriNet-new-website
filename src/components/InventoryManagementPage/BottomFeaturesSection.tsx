import React from 'react';
import { bottomFeaturesData } from '@/data/inventoryManagementPageData';

const BottomFeaturesSection: React.FC = () => {
  return (
    <section className="tn-section pb-0">
      <div className="tn-container space-y-6 md:space-y-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomFeaturesData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <li
                key={feature.id}
                className="group relative overflow-hidden rounded-2xl bg-white border border-light-gray/30 shadow-sm p-6 flex flex-col items-center text-center transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-primary/30 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-theme-green/10 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary/15 to-primary/5 ring-1 ring-primary/20 shadow-sm transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="relative z-10 mb-2 text-xl font-semibold text-secondary transition-colors duration-500 group-hover:text-primary">{feature.title}</h3>
                <p className="relative z-10 text-sm md:text-base leading-relaxed text-txt-gray">{feature.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default BottomFeaturesSection;
