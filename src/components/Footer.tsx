import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'accessibility' | null>(null);

  return (
    <footer className="bg-[#0E1B2E] text-stone-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Doctor Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl font-semibold text-white tracking-tight block">
                Dr. Michele Dallas<span className="text-[#C29D59]">, DDS</span>
              </span>
              <span className="text-xs tracking-widest uppercase text-slate-400 font-medium block mt-0.5">
                Las Olas Dental Centre · Fort Lauderdale, FL
              </span>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing personalized cosmetic, restorative, and family dental care in a peaceful sanctuary setting. Former two-term appointee to the Florida Board of Dentistry.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300">
              <ShieldCheck className="w-4 h-4 text-[#C29D59]" />
              <span>Certified Invisalign® Provider · Over 20 Years on Las Olas</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-white block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Meet Dr. Michele Dallas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Clinical Specializations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('transformations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Smile Transformations &amp; Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sanctuary &amp; Financing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Office Hours &amp; Directions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking()}
                  className="text-amber-300 hover:text-white font-medium transition-colors cursor-pointer"
                >
                  Request an Appointment →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-white block">
              Fort Lauderdale Office
            </span>

            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C29D59] shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.address.street}, {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C29D59] shrink-0" />
                <a href={CLINIC_INFO.phoneHref} className="hover:text-white font-medium transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C29D59] shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white font-medium transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1 text-stone-400">
                <Clock className="w-4 h-4 text-[#C29D59] shrink-0 mt-0.5" />
                <div>
                  <span className="block">Mon, Tue, Thu: 9:00 AM – 5:00 PM</span>
                  <span className="block">Wednesday: 9:00 AM – 1:00 PM</span>
                  <span className="block">Fri–Sun: Emergency / By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Legal Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Las Olas Dental Centre. All rights reserved. Dr. Michele A. Dallas, DDS.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Privacy &amp; HIPAA
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setLegalModal('accessibility')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Accessibility Statement
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white text-stone-800 rounded-2xl p-6 max-w-lg w-full border border-stone-200 shadow-2xl relative">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl font-semibold text-[#0E1B2E] mb-3">
              {legalModal === 'privacy' ? 'Patient Privacy & HIPAA Notice' : 'ADA Accessibility Commitment'}
            </h3>

            <div className="text-xs text-stone-600 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Las Olas Dental Centre and Dr. Michele A. Dallas, DDS are committed to protecting the privacy and security of your personal and protected health information (PHI) in strict compliance with the Health Insurance Portability and Accountability Act (HIPAA).
                  </p>
                  <p>
                    Information submitted via this website is used solely to facilitate appointment requests and answer clinical inquiries. We do not sell, rent, or distribute patient information to third-party commercial entities.
                  </p>
                  <p>
                    For specific records requests or formal privacy inquiries, please contact our privacy officer directly at info@drdallas.net or by phone at (954) 525-5055.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Las Olas Dental Centre is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards (WCAG 2.1 Level AA).
                  </p>
                  <p>
                    Our website features high-contrast typographic pairings, keyboard navigable focus states, responsive text scaling, and descriptive alternative text for all clinical visual assets.
                  </p>
                  <p>
                    If you experience any difficulty accessing content on this website, please call our office at (954) 525-5055 so we can provide immediate personal assistance.
                  </p>
                </>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-stone-200 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0E1B2E] rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
