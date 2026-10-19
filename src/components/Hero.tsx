import React from 'react';
import { Calendar, Phone, ShieldCheck, Sparkles, MapPin, Award } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section id="hero" className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* 2-Column Split: Editorial Value Proposition & High-Impact Visual Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Proposition & Authority (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2 sm:py-4">
            <div>
              {/* Clean unboxed category kicker without pill badge */}
              <div className="flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-[#8B6D36] mb-4">
                <span>Fort Lauderdale, Florida</span>
                <span aria-hidden="true">·</span>
                <span>Las Olas District</span>
                <span aria-hidden="true">·</span>
                <span>Cosmetic & General Dentistry</span>
              </div>

              {/* Marquee Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0E1B2E] leading-[1.15] mb-6 text-balance">
                Artistry, Integrity &amp; Clinical Precision in Every Smile.
              </h1>

              {/* Supporting Copy grounded in verified credentials */}
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 max-w-2xl">
                Welcome to Las Olas Dental Centre, where Dr. Michele A. Dallas, DDS—former two-term member of the{' '}
                <strong className="text-stone-900 font-semibold">Florida Board of Dentistry</strong>—combines over two decades of clinical expertise with bespoke aesthetic dentistry in a tranquil, private sanctuary.
              </p>

              {/* Dual Primary Action Points */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#0E1B2E] hover:bg-[#1A2E4C] rounded-lg shadow-sm hover:shadow transition-all duration-150 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Request a Private Consultation</span>
                </button>

                <a
                  href={CLINIC_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#0E1B2E] bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C29D59]" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>

              {/* Verified Clinical Trust Markers (Clean unboxed inline metadata) */}
              <div className="pt-6 border-t border-stone-200/80">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600">
                  <div className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-[#C29D59] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900 block">FL Board of Dentistry</span>
                      <span className="text-stone-500">2-Term Gubernatorial Appointee</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#C29D59] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900 block">20+ Years Clinical Mastery</span>
                      <span className="text-stone-500">Georgetown &amp; Howard Alumna</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#C29D59] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900 block">Certified Invisalign®</span>
                      <span className="text-stone-500">Clear Aesthetic Orthodontics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Suite Asset (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-lg h-full min-h-[380px] sm:min-h-[460px] bg-stone-100 group">
              <img
                src={CLINIC_IMAGES.heroSuite}
                alt="Las Olas Dental Centre luxurious clinical operatory suite overlooking tropical palms in Fort Lauderdale"
                className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Ambient verified location overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/80 shadow-md">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#8B6D36] block">
                      Patient Sanctuary Suite
                    </span>
                    <span className="text-sm font-semibold text-stone-900 block">
                      620 NE 3rd Street, Fort Lauderdale
                    </span>
                    <span className="text-xs text-stone-500">
                      Private operatory overlooking Florida palms · Low-radiation digital imaging
                    </span>
                  </div>
                  <button
                    onClick={onExploreServices}
                    className="shrink-0 text-xs font-semibold text-[#0E1B2E] hover:text-[#C29D59] underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    View Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Quantitative Rigor & Trust Bar (Single-Elevation, hairline border) */}
        <div className="mt-12 pt-8 pb-6 border-y border-stone-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="px-2">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#0E1B2E] block tabular-nums">
                20+
              </span>
              <span className="text-xs sm:text-sm text-stone-600 font-medium">Years Serving Fort Lauderdale</span>
            </div>

            <div className="px-2 border-l border-stone-200">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#0E1B2E] block tabular-nums">
                2 Terms
              </span>
              <span className="text-xs sm:text-sm text-stone-600 font-medium">Florida Board of Dentistry</span>
            </div>

            <div className="px-2 border-l border-stone-200">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#0E1B2E] block tabular-nums">
                100%
              </span>
              <span className="text-xs sm:text-sm text-stone-600 font-medium">Bespoke, Unhurried Care</span>
            </div>

            <div className="px-2 border-l border-stone-200">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#0E1B2E] block tabular-nums">
                4.9 / 5.0
              </span>
              <span className="text-xs sm:text-sm text-stone-600 font-medium">Verified Patient Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
