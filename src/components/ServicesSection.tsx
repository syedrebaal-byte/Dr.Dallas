import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Sparkles, X, ChevronRight, Calendar } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/clinicData';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'cosmetic', label: 'Cosmetic Dentistry' },
    { id: 'orthodontics', label: 'Invisalign® Ortho' },
    { id: 'restorative', label: 'Implants & Crowns' },
    { id: 'preventative', label: 'Preventative & Hygiene' },
    { id: 'emergency', label: 'Emergency Relief' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-stone-200">
          <div className="max-w-2xl">
            <div className="text-xs tracking-wider uppercase font-semibold text-[#8B6D36] mb-2">
              Clinical Specializations
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1B2E] font-semibold tracking-tight text-balance">
              Comprehensive Dental Care Tailored to Your Biology.
            </h2>
          </div>

          <p className="text-stone-600 text-sm max-w-md leading-relaxed">
            From conservative porcelain veneers and certified Invisalign® alignment to precision implant restorations and preventative wellness, every treatment is delivered with meticulous attention.
          </p>
        </div>

        {/* Filter Bar (Interactive Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#0E1B2E] text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Bento / Asymmetric Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const hasMarqueeImage = !!service.image;
            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-white border border-stone-200 hover:border-stone-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                {/* Optional High-Fidelity Feature Image */}
                {hasMarqueeImage && (
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white/90 uppercase tracking-wider drop-shadow-sm">
                      {service.tagline}
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {!hasMarqueeImage && (
                      <span className="text-[11px] font-semibold text-[#8B6D36] uppercase tracking-wider block mb-2">
                        {service.tagline}
                      </span>
                    )}

                    <h3 className="font-serif text-xl font-semibold text-[#0E1B2E] mb-2 group-hover:text-amber-900 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Key Benefit Highlights (Clean unboxed text) */}
                    <div className="space-y-1.5 mb-6 text-xs text-stone-700">
                      {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C29D59] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold text-[#0E1B2E] hover:text-[#C29D59] inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Procedure Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenBooking(service.id)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-md bg-stone-100 hover:bg-[#0E1B2E] text-stone-800 hover:text-white transition-colors cursor-pointer"
                    >
                      Book Visit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* In-Depth Clinical Slide-Over Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-stone-200 flex items-start justify-between gap-4 bg-[#FAF8F5]">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8B6D36] block mb-1">
                  Clinical Overview &amp; Protocol
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#0E1B2E]">
                  {selectedService.title}
                </h3>
                <span className="text-xs text-stone-500 mt-1 block">
                  Typical duration: {selectedService.duration}
                </span>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-stone-700">
              {/* Full Description */}
              <div>
                <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider mb-2">
                  Clinical Approach
                </h4>
                <p className="leading-relaxed text-stone-600">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* What to Expect: Numbered Steps */}
              <div>
                <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider mb-3">
                  What to Expect (Treatment Protocol)
                </h4>
                <div className="space-y-3">
                  {selectedService.steps.map((st, i) => (
                    <div key={i} className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                      <span className="font-semibold text-stone-900 text-xs block mb-0.5">
                        {st.step}
                      </span>
                      <span className="text-xs text-stone-600 leading-relaxed block">
                        {st.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Candidates */}
              <div>
                <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider mb-2">
                  Ideal Indications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedService.idealFor.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C29D59] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-stone-500">
                Consultation required to establish individual treatment candidacy.
              </span>

              <button
                onClick={() => {
                  const sId = selectedService.id;
                  setSelectedService(null);
                  onOpenBooking(sId);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0E1B2E] hover:bg-[#1A2E4C] rounded-lg transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book This Treatment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
