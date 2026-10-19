import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F4EFEA]/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs tracking-wider uppercase font-semibold text-[#8B6D36] mb-2">
              Verified Patient Experiences
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1B2E] font-semibold tracking-tight text-balance">
              Decades of Trust in Fort Lauderdale.
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-600 bg-white px-4 py-2 rounded-xl border border-stone-200 shadow-xs">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-stone-900 tabular-nums">4.9 / 5.0</span>
            <span className="text-stone-400">·</span>
            <span>Over 20 Years of Patient Relationships</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#C29D59]/40 mb-3" />
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <span className="font-serif font-semibold text-stone-900 text-sm block">
                  {testimonial.author}
                </span>
                <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#C29D59]" />
                  <span>{testimonial.location}</span>
                </div>
                <span className="text-[11px] text-[#8B6D36] font-medium block mt-1">
                  {testimonial.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
