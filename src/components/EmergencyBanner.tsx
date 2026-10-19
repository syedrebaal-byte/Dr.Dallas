import React from 'react';
import { AlertCircle, Phone, ArrowRight, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface EmergencyBannerProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-[#0E1B2E] text-white py-10 sm:py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-300 mb-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>Urgent Dental Care in Fort Lauderdale</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-2">
              Experiencing Acute Dental Pain, a Broken Tooth, or Trauma?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Dr. Michele Dallas prioritizes same-day emergency triage to eliminate acute pain, stabilize damaged teeth, and restore your comfort immediately.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={CLINIC_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0E1B2E] bg-amber-300 hover:bg-amber-200 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency Line: {CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking('emergency-dentistry')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Request Urgent Slot</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
