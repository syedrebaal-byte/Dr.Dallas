import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, CheckCircle2, ArrowRight, HelpCircle, RefreshCw } from 'lucide-react';
import { CLINIC_IMAGES } from '../data/clinicData';

interface BeforeAfterGalleryProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCase, setActiveCase] = useState<'veneers' | 'invisalign' | 'whitening'>('veneers');

  // Interactive Smile Quiz State
  const [quizStep, setQuizStep] = useState<number>(1);
  const [quizAnswers, setQuizAnswers] = useState<{
    concern?: string;
    timeline?: string;
    sensitivities?: string;
  }>({});
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const handleQuizAnswer = (key: 'concern' | 'timeline' | 'sensitivities', value: string) => {
    const updated = { ...quizAnswers, [key]: value };
    setQuizAnswers(updated);

    if (quizStep < 3) {
      setQuizStep(quizStep + 1);
    } else {
      // Determine recommendation
      if (updated.concern?.includes('Crooked') || updated.timeline?.includes('Discreet')) {
        setQuizResult('invisalign');
      } else if (updated.concern?.includes('Color') && !updated.concern?.includes('Chipped')) {
        setQuizResult('laser-teeth-whitening');
      } else {
        setQuizResult('porcelain-veneers');
      }
    }
  };

  const resetQuiz = () => {
    setQuizStep(1);
    setQuizAnswers({});
    setQuizResult(null);
  };

  const caseDetails = {
    veneers: {
      title: 'Porcelain Laminate Veneers & Enamel Realignment',
      subtitle: 'Restoration of worn incisal edges, shade brightening & symmetry balance',
      timeline: 'Completed in 2 appointments over 14 days',
      preDesc: 'Pre-Treatment: Generalized enamel wear, uneven central incisor lengths, mild tetracycline discoloration.',
      postDesc: 'Post-Restoration: Multi-layered feldspathic ceramic veneers matching natural lip curvature and lifelike light reflectance.',
    },
    invisalign: {
      title: 'Discreet Invisalign® Clear Orthodontic Realignment',
      subtitle: 'Correction of anterior crowding and deep bite overlap without metal wires',
      timeline: 'Completed in 9 months with SmartTrack® aligners',
      preDesc: 'Pre-Treatment: Moderate anterior lower crowding and flared lateral incisors causing uneven bite friction.',
      postDesc: 'Post-Restoration: Perfectly harmonized dental arch, balanced bite occlusion, and effortless flossing access.',
    },
    whitening: {
      title: 'Laser In-Office Power Whitening & Enamel Polish',
      subtitle: 'Gentle lifting of coffee, red wine, and organic chromatic stains',
      timeline: 'Completed in a single 60-minute visit',
      preDesc: 'Pre-Treatment: Shade A3.5 with noticeable chromatic staining along cervical enamel boundaries.',
      postDesc: 'Post-Restoration: Brightened 7 full shades to natural B1 with zero residual dentinal sensitivity.',
    },
  };

  const currentCase = caseDetails[activeCase];

  return (
    <section id="transformations" className="py-16 sm:py-24 bg-[#F4EFEA]/80 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs tracking-wider uppercase font-semibold text-[#8B6D36] mb-2">
            Clinical Artistry &amp; Aesthetic Restraint
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1B2E] font-semibold tracking-tight mb-4 text-balance">
            Aesthetic Smile Transformations.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Dr. Dallas avoids the chalky, artificial appearance of mass-produced dental work. Each restoration honors facial symmetry, natural enamel translucency, and healthy biology.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-white border border-stone-200 rounded-xl shadow-xs">
            <button
              onClick={() => setActiveCase('veneers')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeCase === 'veneers'
                  ? 'bg-[#0E1B2E] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Porcelain Veneers
            </button>
            <button
              onClick={() => setActiveCase('invisalign')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeCase === 'invisalign'
                  ? 'bg-[#0E1B2E] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Invisalign® Alignment
            </button>
            <button
              onClick={() => setActiveCase('whitening')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeCase === 'whitening'
                  ? 'bg-[#0E1B2E] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Laser Whitening
            </button>
          </div>
        </div>

        {/* Interactive Comparison & Case Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Interactive Visual Slider (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-lg bg-stone-900 aspect-[16/10] select-none">
              {/* After Image (Full background) */}
              <img
                src={CLINIC_IMAGES.cosmeticSmile}
                alt="Post-treatment cosmetic smile outcome by Dr. Michele Dallas"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Before Overlay Image (Clipped by slider position with subtle clinical desaturation) */}
              <div
                className="absolute inset-0 overflow-hidden border-r-2 border-white shadow-2xl"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={CLINIC_IMAGES.cosmeticSmile}
                  alt="Pre-treatment baseline condition"
                  className="absolute inset-0 w-full h-full object-cover filter contrast-90 brightness-90 saturate-50 sepia-25 max-w-none"
                  style={{ width: '100%', minWidth: '100%' }}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  Pre-Treatment Baseline
                </div>
              </div>

              {/* After Label */}
              <div className="absolute top-4 right-4 bg-[#0E1B2E]/85 backdrop-blur-xs text-amber-300 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                Post-Restoration Outcome
              </div>

              {/* Slider Thumb Handle */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none border border-stone-300"
                style={{ left: `${sliderPosition}%` }}
              >
                <SlidersHorizontal className="w-4 h-4 text-[#0E1B2E]" />
              </div>

              {/* Range Input Control */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
                aria-label="Drag before and after smile transformation comparison"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-stone-500 mt-2 px-1">
              <span>← Drag slider left for full post-restoration view</span>
              <span>Drag right for baseline comparison →</span>
            </div>
          </div>

          {/* Case Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8B6D36] block mb-1">
                Clinical Case Study
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#0E1B2E]">
                {currentCase.title}
              </h3>
              <p className="text-stone-600 text-sm mt-1">
                {currentCase.subtitle}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-3 text-xs text-stone-700">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-stone-900 shrink-0">Duration:</span>
                <span>{currentCase.timeline}</span>
              </div>
              <div className="pt-2 border-t border-stone-100">
                <span className="font-semibold text-stone-900 block mb-1">Diagnostic Assessment:</span>
                <p className="text-stone-600 leading-relaxed">{currentCase.preDesc}</p>
              </div>
              <div className="pt-2 border-t border-stone-100">
                <span className="font-semibold text-stone-900 block mb-1">Clinical Execution:</span>
                <p className="text-stone-600 leading-relaxed">{currentCase.postDesc}</p>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking(activeCase === 'veneers' ? 'porcelain-veneers' : activeCase === 'invisalign' ? 'invisalign' : 'laser-teeth-whitening')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0E1B2E] hover:bg-[#1A2E4C] rounded-lg transition-colors cursor-pointer"
            >
              <span>Consult with Dr. Dallas on This Treatment</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>

        {/* Interactive 2-Minute Smile Assessment Card */}
        <div className="rounded-2xl bg-white border border-stone-200 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8B6D36] mb-2">
            <HelpCircle className="w-4 h-4 text-[#C29D59]" />
            <span>Interactive Smile Assessment</span>
          </div>

          <h3 className="font-serif text-2xl text-[#0E1B2E] font-semibold mb-2">
            Find the Right Path for Your Smile in 3 Quick Questions.
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mb-6">
            Answer 3 quick questions to receive a tailored clinical recommendation based on Dr. Dallas&apos; conservative aesthetic protocols.
          </p>

          {!quizResult ? (
            <div className="space-y-6">
              {/* Progress Indicator */}
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
                <span>Step {quizStep} of 3</span>
                <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C29D59] transition-all duration-300 rounded-full"
                    style={{ width: `${(quizStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              {quizStep === 1 && (
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-[#0E1B2E] mb-3">
                    1. What would you most like to improve about your smile?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Teeth color, deep stubborn stains or yellowing',
                      'Crooked, crowded, or overlapping teeth',
                      'Chipped edges, uneven lengths, or visible gaps',
                      'Multiple missing teeth or old failing fillings',
                    ].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleQuizAnswer('concern', opt)}
                        className="text-left p-3.5 text-xs sm:text-sm rounded-xl border border-stone-200 hover:border-[#0E1B2E] hover:bg-stone-50 transition-colors cursor-pointer font-medium text-stone-700 hover:text-stone-900"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-[#0E1B2E] mb-3">
                    2. What is your ideal timeframe for smile transformation?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Immediate or rapid results (1 to 2 appointments)',
                      'Discreet gradual alignment over several months',
                      'No rush; looking for the most conservative long-term option',
                      'Flexible based on what Dr. Dallas recommends',
                    ].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleQuizAnswer('timeline', opt)}
                        className="text-left p-3.5 text-xs sm:text-sm rounded-xl border border-stone-200 hover:border-[#0E1B2E] hover:bg-stone-50 transition-colors cursor-pointer font-medium text-stone-700 hover:text-stone-900"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 3 && (
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-[#0E1B2E] mb-3">
                    3. Do you experience dental anxiety or tooth sensitivity?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Yes, I have dental anxiety and prefer gentle, tranquil care',
                      'I have sensitive teeth to hot or cold foods',
                      'No significant sensitivity or anxiety',
                      'I haven’t visited a dentist in several years',
                    ].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleQuizAnswer('sensitivities', opt)}
                        className="text-left p-3.5 text-xs sm:text-sm rounded-xl border border-stone-200 hover:border-[#0E1B2E] hover:bg-stone-50 transition-colors cursor-pointer font-medium text-stone-700 hover:text-stone-900"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-stone-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8B6D36]">
                  Personalized Clinical Recommendation
                </span>
                <button
                  onClick={resetQuiz}
                  className="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Start Over</span>
                </button>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#0E1B2E]">
                {quizResult === 'invisalign'
                  ? 'Certified Invisalign® Clear Orthodontic Alignment'
                  : quizResult === 'laser-teeth-whitening'
                  ? 'Professional Laser Teeth Whitening + Enamel Polish'
                  : 'Custom Porcelain Laminate Veneers & Smile Rejuvenation'}
              </h4>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Based on your preferences ({quizAnswers.concern}), Dr. Dallas recommends beginning with a one-on-one diagnostic consultation to examine your enamel health, facial proportions, and design a customized, anxiety-free treatment plan.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenBooking(quizResult)}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0E1B2E] hover:bg-[#1A2E4C] rounded-lg transition-colors cursor-pointer"
                >
                  Book Your Smile Assessment Visit
                </button>
                <span className="text-xs text-stone-500">
                  Comprehensive 1-on-1 consultation with Dr. Dallas
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
