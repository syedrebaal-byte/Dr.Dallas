import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SlidersHorizontal, ArrowRight, HelpCircle, RefreshCw, Eye } from 'lucide-react';
import { CLINIC_IMAGES } from '../data/clinicData';

interface BeforeAfterGalleryProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeCase, setActiveCase] = useState<'veneers' | 'invisalign' | 'whitening'>('veneers');
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  // Interactive Smile Quiz State
  const [quizStep, setQuizStep] = useState<number>(1);
  const [quizAnswers, setQuizAnswers] = useState<{
    concern?: string;
    timeline?: string;
    sensitivities?: string;
  }>({});
  const [quizResult, setQuizResult] = useState<string | null>(null);

  // Move handler calculating percentage from clientX
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(Math.round(percent * 10) / 10);
  }, []);

  // Mouse & Touch down handlers on the slider container
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      isDraggingRef.current = true;
      setIsDragging(true);
      handleMove(e.touches[0].clientX);
    }
  };

  // Global window listeners for drag & release
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        e.preventDefault();
        handleMove(e.clientX);
      }
    };

    const onMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging(false);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current && e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    const onTouchEnd = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [handleMove]);

  // Keyboard accessibility (ArrowLeft and ArrowRight)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  const handleQuizAnswer = (key: 'concern' | 'timeline' | 'sensitivities', value: string) => {
    const updated = { ...quizAnswers, [key]: value };
    setQuizAnswers(updated);

    if (quizStep < 3) {
      setQuizStep(quizStep + 1);
    } else {
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
      image: CLINIC_IMAGES.cosmeticSmile,
      preDesc: 'Pre-Treatment: Generalized enamel wear, uneven central incisor lengths, mild tetracycline discoloration.',
      postDesc: 'Post-Restoration: Multi-layered feldspathic ceramic veneers matching natural lip curvature and lifelike light reflectance.',
    },
    invisalign: {
      title: 'Discreet Invisalign® Clear Orthodontic Realignment',
      subtitle: 'Correction of anterior crowding and deep bite overlap without metal wires',
      timeline: 'Completed in 9 months with SmartTrack® aligners',
      image: CLINIC_IMAGES.cosmeticSmile,
      preDesc: 'Pre-Treatment: Moderate anterior lower crowding and flared lateral incisors causing uneven bite friction.',
      postDesc: 'Post-Restoration: Perfectly harmonized dental arch, balanced bite occlusion, and effortless flossing access.',
    },
    whitening: {
      title: 'Laser In-Office Power Whitening & Enamel Polish',
      subtitle: 'Gentle lifting of coffee, red wine, and organic chromatic stains',
      timeline: 'Completed in a single 60-minute visit',
      image: CLINIC_IMAGES.cosmeticSmile,
      preDesc: 'Pre-Treatment: Shade A3.5 with noticeable chromatic staining along cervical enamel boundaries.',
      postDesc: 'Post-Restoration: Brightened 7 full shades to natural B1 with zero residual dentinal sensitivity.',
    },
  };

  const currentCase = caseDetails[activeCase];

  return (
    <section id="transformations" className="py-16 sm:py-24 bg-[#F4EFEA]/80 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs tracking-wider uppercase font-semibold text-[#8B6D36] mb-2">
            Clinical Artistry &amp; Aesthetic Restraint
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1B2E] font-semibold tracking-tight mb-4 text-balance">
            Interactive Smile Transformations.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Drag the slider handle or click anywhere across the image to explore the difference between baseline pre-treatment and post-restoration results.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-white border border-stone-200 rounded-xl shadow-xs">
            <button
              onClick={() => {
                setActiveCase('veneers');
                setSliderPosition(50);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeCase === 'veneers'
                  ? 'bg-[#0E1B2E] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Porcelain Veneers
            </button>
            <button
              onClick={() => {
                setActiveCase('invisalign');
                setSliderPosition(50);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeCase === 'invisalign'
                  ? 'bg-[#0E1B2E] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Invisalign® Alignment
            </button>
            <button
              onClick={() => {
                setActiveCase('whitening');
                setSliderPosition(50);
              }}
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
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="slider"
              aria-label="Before and after smile comparison slider. Use left and right arrow keys to adjust, or drag with mouse or touch."
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
              className={`relative rounded-2xl overflow-hidden border border-stone-300 shadow-xl bg-stone-900 aspect-[16/10] select-none touch-none focus:outline-none focus:ring-2 focus:ring-[#0E1B2E] ${
                isDragging ? 'cursor-grabbing' : 'cursor-ew-resize'
              }`}
            >
              {/* Layer 1: AFTER Image (Full natural image) */}
              <img
                src={currentCase.image}
                alt="Post-treatment cosmetic smile outcome by Dr. Michele Dallas"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Layer 2: BEFORE Image (Hardware-clipped via clipPath with warm pre-treatment tone) */}
              <div
                className="absolute inset-0 pointer-events-none select-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={currentCase.image}
                  alt="Pre-treatment baseline condition"
                  className="w-full h-full object-cover pointer-events-none select-none filter contrast-90 brightness-90 saturate-50 sepia-[0.35]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-xs text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm pointer-events-none">
                Pre-Treatment Baseline
              </div>

              <div className="absolute top-4 right-4 bg-[#0E1B2E]/90 backdrop-blur-xs text-amber-300 text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm pointer-events-none">
                Post-Restoration Result
              </div>

              {/* Vertical Divider Hairline */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              />

              {/* Slider Handle Hub */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-2xl flex items-center justify-center pointer-events-none border-2 border-[#0E1B2E] z-10 transition-transform ${
                  isDragging ? 'scale-115' : 'hover:scale-105'
                }`}
                style={{ left: `${sliderPosition}%` }}
              >
                <SlidersHorizontal className="w-5 h-5 text-[#0E1B2E]" />
              </div>
            </div>

            {/* Quick-Jump Controls & Interactive Range Input */}
            <div className="mt-3 flex items-center justify-between gap-3 text-xs text-stone-600 px-1">
              <button
                type="button"
                onClick={() => setSliderPosition(0)}
                className="px-3 py-1.5 rounded-lg bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 font-medium transition-colors cursor-pointer"
              >
                Full Before (0%)
              </button>

              <button
                type="button"
                onClick={() => setSliderPosition(50)}
                className="px-3.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-[#0E1B2E] font-semibold transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
              >
                <Eye className="w-3.5 h-3.5 text-[#C29D59]" />
                <span>Split View (50%)</span>
              </button>

              <button
                type="button"
                onClick={() => setSliderPosition(100)}
                className="px-3 py-1.5 rounded-lg bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 font-medium transition-colors cursor-pointer"
              >
                Full After (100%)
              </button>
            </div>

            {/* Range Scrubber Bar */}
            <div className="mt-3 px-1">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={Math.round(sliderPosition)}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-full accent-[#0E1B2E] cursor-pointer"
                aria-label="Fine slide adjustment"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-0.5">
                <span>← Drag or click to inspect transformation</span>
                <span>{Math.round(sliderPosition)}%</span>
              </div>
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
