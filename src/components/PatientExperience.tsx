import React, { useState } from 'react';
import { ShieldCheck, Heart, Sparkles, CreditCard, HelpCircle, ChevronDown, Check, DollarSign, Calculator } from 'lucide-react';
import { AMENITIES_DATA, FAQS_DATA } from '../data/clinicData';

interface PatientExperienceProps {
  onOpenBooking: () => void;
}

export const PatientExperience: React.FC<PatientExperienceProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // CareCredit Payment Estimator State
  const [treatmentAmount, setTreatmentAmount] = useState<number>(3000);
  const [financingMonths, setFinancingMonths] = useState<number>(12);

  const calculateMonthly = () => {
    if (financingMonths === 6 || financingMonths === 12) {
      // Promotional 0% APR during promo period
      return Math.round(treatmentAmount / financingMonths);
    }
    // Fixed standard APR (approx 17.9% for extended 24/36 mo)
    const rate = 0.179 / 12;
    const payment = (treatmentAmount * rate * Math.pow(1 + rate, financingMonths)) / (Math.pow(1 + rate, financingMonths) - 1);
    return Math.round(payment);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs tracking-wider uppercase font-semibold text-[#8B6D36] mb-2">
            The Patient Sanctuary
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1B2E] font-semibold tracking-tight mb-4 text-balance">
            Dental Care Crafted for Peace of Mind.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We have intentionally engineered every aspect of Las Olas Dental Centre to replace clinical sterility with tranquil warmth, absolute transparency, and unhurried personal attention.
          </p>
        </div>

        {/* 6 Amenities Grid (Subtle hairline borders, single-elevation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {AMENITIES_DATA.map((amenity, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-lg font-semibold text-[#0E1B2E] block mb-2">
                  {amenity.title}
                </span>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {amenity.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance & Financing Dual Bento Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Insurance Transparency (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8B6D36] mb-2">
                <ShieldCheck className="w-4 h-4 text-[#C29D59]" />
                <span>Insurance Transparency</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#0E1B2E] mb-3">
                Maximizing Your Dental Insurance Benefits.
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                We accept and seamlessly file claims for most major <strong className="text-stone-900 font-semibold">PPO dental insurance plans</strong>. Our team verifies your benefits prior to treatment and gives you a clear written estimate so there are never any unexpected surprises.
              </p>

              <div className="space-y-2 text-xs text-stone-700">
                {[
                  'In-network claim filing for Delta Dental, Aetna, Cigna, MetLife, Guardian, and more',
                  'Complimentary insurance verification before any major procedure',
                  'Detailed written fee breakdowns with upfront estimates of co-pays',
                  'Assistance with HSA (Health Savings Account) & FSA allocations',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C29D59] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                Have questions about your specific plan?
              </span>
              <button
                onClick={onOpenBooking}
                className="text-xs font-semibold text-[#0E1B2E] hover:text-[#C29D59] transition-colors cursor-pointer"
              >
                Verify My Benefits →
              </button>
            </div>
          </div>

          {/* Right: CareCredit Monthly Financing Estimator (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8B6D36] mb-2">
                <Calculator className="w-4 h-4 text-[#C29D59]" />
                <span>Flexible Financing</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#0E1B2E] mb-2">
                CareCredit® Monthly Payment Calculator.
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                Invest in your dream smile with convenient monthly payments, including promotional 0% APR terms.
              </p>

              {/* Slider for Treatment Cost */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-medium text-stone-700 mb-1.5">
                    <span>Estimated Treatment Investment:</span>
                    <span className="font-semibold text-stone-900 tabular-nums">
                      ${treatmentAmount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="250"
                    value={treatmentAmount}
                    onChange={(e) => setTreatmentAmount(Number(e.target.value))}
                    className="w-full accent-[#0E1B2E] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                    <span>$500</span>
                    <span>$5,000</span>
                    <span>$10,000</span>
                  </div>
                </div>

                {/* Term Selector */}
                <div>
                  <span className="text-xs font-medium text-stone-700 block mb-1.5">
                    Financing Term:
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { months: 6, label: '6 Mo (0%*)' },
                      { months: 12, label: '12 Mo (0%*)' },
                      { months: 24, label: '24 Mo' },
                      { months: 36, label: '36 Mo' },
                    ].map((term) => (
                      <button
                        key={term.months}
                        onClick={() => setFinancingMonths(term.months)}
                        className={`py-1.5 px-2 text-xs font-medium rounded-lg text-center transition-colors cursor-pointer ${
                          financingMonths === term.months
                            ? 'bg-[#0E1B2E] text-white shadow-xs'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                        }`}
                      >
                        {term.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculation Output Box */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">
                      Estimated Monthly Payment
                    </span>
                    <span className="text-stone-500 text-[11px]">
                      {financingMonths <= 12 ? '*Subject to CareCredit promotional terms' : 'Fixed standard rate estimate'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-2xl font-bold text-[#0E1B2E] tabular-nums">
                      ${calculateMonthly()}
                    </span>
                    <span className="text-xs text-stone-500 block">/ month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-center sm:text-left">
              <span className="text-[11px] text-stone-400">
                CareCredit subject to credit approval. Financing applications available in our office.
              </span>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs tracking-wider uppercase font-semibold text-[#8B6D36] block mb-1">
              Patient Inquiries
            </span>
            <h3 className="font-serif text-2xl font-semibold text-[#0E1B2E]">
              Frequently Asked Questions.
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-white border border-stone-200 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-semibold text-[#0E1B2E] hover:text-[#C29D59] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0E1B2E]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
