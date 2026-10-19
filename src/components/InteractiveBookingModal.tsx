import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, FileText, ArrowRight, ArrowLeft } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';

interface InteractiveBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const InteractiveBookingModal: React.FC<InteractiveBookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const [step, setStep] = useState<number>(1);
  const [patientType, setPatientType] = useState<'new' | 'returning'>('new');
  const [service, setService] = useState<string>(preselectedServiceId || 'porcelain-veneers');
  const [preferredDay, setPreferredDay] = useState<string>('Monday');
  const [preferredTime, setPreferredTime] = useState<string>('Morning (9am - 12pm)');
  const [urgency, setUrgency] = useState<string>('Next 1-2 weeks');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setService(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (!name || !phone) return;
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsConfirmed(true);
      }, 700);
    }
  };

  const handleReset = () => {
    setStep(1);
    setIsConfirmed(false);
    onClose();
  };

  const selectedServiceObj = SERVICES_DATA.find((s) => s.id === service) || SERVICES_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8B6D36] block">
              Las Olas Dental Centre · Concierge
            </span>
            <h3 id="booking-modal-title" className="font-serif text-xl sm:text-2xl font-semibold text-[#0E1B2E]">
              {isConfirmed ? 'Appointment Request Confirmed' : 'Request Your Dental Visit'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-200/80 transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (Visible during multi-step flow) */}
        {!isConfirmed && (
          <div className="px-6 pt-4 pb-2 bg-white flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 flex flex-col gap-1">
                <div
                  className={`h-1.5 rounded-full transition-colors ${
                    step >= s ? 'bg-[#0E1B2E]' : 'bg-stone-200'
                  }`}
                />
                <span className="text-[10px] text-stone-500 font-medium">
                  {s === 1 ? '1. Treatment' : s === 2 ? '2. Schedule' : '3. Details'}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[75vh]">
          {isConfirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>

              <div>
                <h4 className="font-serif text-2xl font-semibold text-[#0E1B2E] mb-1">
                  Thank You, {name}.
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Your appointment inquiry for <strong className="text-stone-900">{selectedServiceObj.title}</strong> has been transmitted directly to Dr. Dallas&apos; Las Olas clinical coordinator.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-left text-xs text-stone-700 max-w-sm mx-auto space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-stone-500">Preferred Day:</span>
                  <span className="font-semibold text-stone-900">{preferredDay} ({preferredTime})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Contact Number:</span>
                  <span className="font-semibold text-stone-900">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Clinic Location:</span>
                  <span className="font-semibold text-stone-900">620 NE 3rd St, Fort Lauderdale</span>
                </div>
              </div>

              <p className="text-[11px] text-stone-500">
                Our front desk will contact you via phone or SMS during normal office hours to verify insurance coverage and lock in your exact chair time.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0E1B2E] rounded-lg hover:bg-[#1A2E4C] transition-colors cursor-pointer"
                >
                  Return to Website
                </button>
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-stone-800 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors text-center"
                >
                  Call Directly: {CLINIC_INFO.phone}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNextStep} className="space-y-5">
              {/* STEP 1: Treatment & Patient Status */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Are you a new or returning patient?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPatientType('new')}
                        className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-colors cursor-pointer text-left ${
                          patientType === 'new'
                            ? 'bg-[#0E1B2E] text-white border-[#0E1B2E]'
                            : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                        }`}
                      >
                        <span className="block font-semibold">New Patient</span>
                        <span className="text-[11px] opacity-80 block">First visit to Las Olas Dental</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPatientType('returning')}
                        className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-colors cursor-pointer text-left ${
                          patientType === 'returning'
                            ? 'bg-[#0E1B2E] text-white border-[#0E1B2E]'
                            : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                        }`}
                      >
                        <span className="block font-semibold">Returning Patient</span>
                        <span className="text-[11px] opacity-80 block">Existing patient on file</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Primary Treatment or Reason for Visit
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full p-3 rounded-xl border border-stone-300 bg-stone-50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0E1B2E]"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title} ({s.category.toUpperCase()})
                        </option>
                      ))}
                      <option value="consultation">General Aesthetic Smile Consultation</option>
                    </select>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950">
                    <span className="font-semibold block mb-0.5">Personalized Care Guarantee:</span>
                    Dr. Michele Dallas personally conducts your consultation and diagnostic evaluation. We do not use intermediary sales personnel.
                  </div>
                </div>
              )}

              {/* STEP 2: Scheduling Preferences */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Preferred Day of Week
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday'].map((day) => (
                        <button
                          key={day}
                          type="button"
                          onClick={() => setPreferredDay(day)}
                          className={`p-2.5 rounded-lg border text-xs font-medium text-center transition-colors cursor-pointer ${
                            preferredDay === day
                              ? 'bg-[#0E1B2E] text-white border-[#0E1B2E]'
                              : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Preferred Time Window
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        'Morning (9am - 12pm)',
                        'Afternoon (1pm - 5pm)',
                        'First available slot',
                        'Lunch hour (12pm - 1pm)',
                      ].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setPreferredTime(t)}
                          className={`p-2.5 rounded-lg border text-xs font-medium text-center transition-colors cursor-pointer ${
                            preferredTime === t
                              ? 'bg-[#0E1B2E] text-white border-[#0E1B2E]'
                              : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Urgency
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Within 48 hours', 'Next 1-2 weeks', 'Flexible schedule'].map((urg) => (
                        <button
                          key={urg}
                          type="button"
                          onClick={() => setUrgency(urg)}
                          className={`p-2 rounded-lg border text-[11px] font-medium text-center transition-colors cursor-pointer ${
                            urgency === urg
                              ? 'bg-[#0E1B2E] text-white border-[#0E1B2E]'
                              : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                          }`}
                        >
                          {urg}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Patient Contact & Health Notes */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#0E1B2E] bg-stone-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Primary Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(954) 555-0199"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#0E1B2E] bg-stone-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@example.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#0E1B2E] bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Insurance Provider or Notes for Dr. Dallas (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Delta Dental PPO, past dental anxiety, seeking consultation for front teeth..."
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#0E1B2E] bg-stone-50/50"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0E1B2E] hover:bg-[#1A2E4C] rounded-lg shadow-sm transition-colors cursor-pointer disabled:opacity-50"
                >
                  <span>
                    {isSubmitting
                      ? 'Confirming Request...'
                      : step === 3
                      ? 'Submit Appointment Request'
                      : 'Continue to Next Step'}
                  </span>
                  {step < 3 && <ArrowRight className="w-4 h-4 text-amber-300" />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
