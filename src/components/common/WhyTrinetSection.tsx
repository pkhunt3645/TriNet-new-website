import React from 'react';
import { MessageSquareQuote, Quote } from 'lucide-react';

const WhyTrinetSection: React.FC = () => {

  return (
    <section className="tn-section bg-none">
      <div className="tn-container">
        <div className="relative bg-linear-to-br from-primary/10 to-white p-6 lg:p-8 flex flex-col gap-6 animate-fadeInUp group">
          <i className='absolute inset-0 w-1 bg-primary' />
          <div className="flex items-center gap-4">
            <Quote className='w-10 h-auto text-primary stroke-1 fill-transparent group-hover:fill-primary transition duration-500' />
            <h5 className="text-2xl lg:text-3xl font-bold text-secondary">Why TriNet Medical SRX?</h5>
            <i className='hidden md:block h-px max-w-3xs w-full bg-linear-to-r from-primary to-light-cyan' />
          </div>
          <p className="text-secondary text-base lg:text-lg">
            The fundamental motive behind SRX is to revolutionize healthcare Lot & Inventory tracking, creating a more efficient, accurate, and safer environment for both providers and patients by offering seamless EMR/EHR integration, precise barcode tracking for diverse supplies, and real-time alerts to prevent errors and ensure regulatory compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyTrinetSection;
