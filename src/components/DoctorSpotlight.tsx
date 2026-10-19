import React from 'react';
import { Award, BookOpen, HeartHandshake, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';

interface DoctorSpotlightProps {
  onOpenBooking: () => void;
}

export const DoctorSpotlight: React.FC<DoctorSpotlightProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#F4EFEA]/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Doctor Portrait with Subtle Luxury Framing (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-xl bg-stone-200 aspect-[4/5]">
                <img
                  src={CLINIC_IMAGES.drDallas}
                  alt="Dr. Michele A. Dallas, DDS - Cosmetic and General Dentist in Fort Lauderdale"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block">
                    Lead Clinician &amp; Founder
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-semibold block">
                    Dr. Michele A. Dallas, DDS
                  </span>
                  <span className="text-xs text-stone-200">
                    Georgetown &amp; Howard Alumna · Former Florida Board of Dentistry Member
                  </span>
                </div>
              </div>

              {/* Verified Practice Philosophy Callout */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200 shadow-sm text-xs text-stone-600 leading-relaxed">
                <span className="font-semibold text-stone-900 block mb-1">
                  &ldquo;Dentistry is an intimate medical partnership.&rdquo;
                </span>
                We treat one patient at a time with unhurried clinical rigor, complete transparency, and a gentle touch that turns dental anxiety into peace of mind.
              </div>
            </div>
          </div>

          {/* Clinical Bio & Credential Matrix (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <div className="text-xs tracking-wider uppercase font-semibold text-[#8B6D36] mb-2">
                Excellence Grounded in Integrity
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0E1B2E] font-semibold leading-tight text-balance">
                Distinguished Leadership on the Florida Board of Dentistry.
              </h2>
            </div>

            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              Serving the Fort Lauderdale community for over two decades, <strong className="text-stone-900 font-semibold">Dr. Michele A. Dallas</strong> is widely respected not only as a master cosmetic and restorative dentist, but as a dental leader entrusted with statewide regulatory authority.
            </p>

            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              Her appointment to <strong className="text-stone-900 font-semibold">two consecutive terms on the Florida Board of Dentistry</strong> reflects her unbending dedication to ethical patient care, sterilization protocols, and advanced clinical technique. Her patients benefit from that same uncompromising standard during every checkup, veneer placement, and smile restoration.
            </p>

            {/* Academic & Professional Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                <div className="flex items-center gap-2 mb-1 text-xs font-semibold text-[#0E1B2E]">
                  <Award className="w-4 h-4 text-[#C29D59]" />
                  <span>Florida Board of Dentistry</span>
                </div>
                <p className="text-xs text-stone-600">
                  Two-term appointee shaping state clinical standards, ethics, and licensure.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                <div className="flex items-center gap-2 mb-1 text-xs font-semibold text-[#0E1B2E]">
                  <BookOpen className="w-4 h-4 text-[#C29D59]" />
                  <span>Georgetown University (B.S.)</span>
                </div>
                <p className="text-xs text-stone-600">
                  Pre-health sciences degree providing strong foundational scientific rigor.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                <div className="flex items-center gap-2 mb-1 text-xs font-semibold text-[#0E1B2E]">
                  <FileText className="w-4 h-4 text-[#C29D59]" />
                  <span>Howard University (D.D.S.)</span>
                </div>
                <p className="text-xs text-stone-600">
                  Doctor of Dental Surgery, followed by an Advanced General Dentistry (AEGD) residency.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                <div className="flex items-center gap-2 mb-1 text-xs font-semibold text-[#0E1B2E]">
                  <HeartHandshake className="w-4 h-4 text-[#C29D59]" />
                  <span>Honest, Conservative Care</span>
                </div>
                <p className="text-xs text-stone-600">
                  Known for clinical honesty; never prescribing treatments that are not in the patient&apos;s best interest.
                </p>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0E1B2E] hover:bg-[#1A2E4C] rounded-lg transition-colors cursor-pointer"
              >
                <span>Schedule a Consultation with Dr. Dallas</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>

              <span className="text-xs text-stone-500">
                New patients warmly welcomed · Most PPO insurance accepted
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
