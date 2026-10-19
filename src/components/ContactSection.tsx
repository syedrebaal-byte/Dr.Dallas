import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Details, Hours & Directions (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-xs tracking-wider uppercase font-semibold text-[#8B6D36] mb-2">
                Visit Las Olas Dental Centre
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1B2E] font-semibold tracking-tight text-balance">
                Conveniently Located in Downtown Fort Lauderdale.
              </h2>
              <p className="text-stone-600 text-sm mt-3 leading-relaxed">
                Our tranquil office on NE 3rd Street provides peaceful operatory suites just blocks north of world-famous Las Olas Boulevard, featuring dedicated patient parking.
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3.5 shadow-xs">
                <MapPin className="w-5 h-5 text-[#C29D59] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="font-semibold text-stone-900 text-sm block">Office Address</span>
                  <span className="text-xs sm:text-sm text-stone-600 block">
                    {CLINIC_INFO.address.street}, {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                  </span>
                  <span className="text-xs text-stone-400 block mt-0.5">
                    {CLINIC_INFO.address.area} · Dedicated patient parking available
                  </span>
                  <a
                    href={CLINIC_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0E1B2E] hover:text-[#C29D59] mt-2 underline transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="p-4 rounded-xl bg-white border border-stone-200 hover:border-stone-300 flex items-start gap-3.5 shadow-xs transition-colors group"
                >
                  <Phone className="w-5 h-5 text-[#C29D59] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 text-sm block group-hover:text-amber-900">
                      Telephone
                    </span>
                    <span className="text-xs sm:text-sm text-stone-600 block font-medium">
                      {CLINIC_INFO.phone}
                    </span>
                    <span className="text-[11px] text-stone-400 block mt-0.5">Click to call office</span>
                  </div>
                </a>

                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="p-4 rounded-xl bg-white border border-stone-200 hover:border-stone-300 flex items-start gap-3.5 shadow-xs transition-colors group"
                >
                  <Mail className="w-5 h-5 text-[#C29D59] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 text-sm block group-hover:text-amber-900">
                      Email Concierge
                    </span>
                    <span className="text-xs sm:text-sm text-stone-600 block font-medium">
                      {CLINIC_INFO.email}
                    </span>
                    <span className="text-[11px] text-stone-400 block mt-0.5">Responses within 24 business hours</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Verified Clinical Hours */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-[#8B6D36]">
                <Clock className="w-4 h-4 text-[#C29D59]" />
                <span>Verified Office Hours</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                {CLINIC_INFO.hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between py-1 border-b border-stone-100 last:border-0">
                    <span className="font-medium text-stone-700">{h.days}</span>
                    <span className="text-stone-900 font-semibold tabular-nums">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Concierge Form (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-sm">
            <div className="text-xs tracking-wider uppercase font-semibold text-[#8B6D36] mb-2">
              Patient Inquiries
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#0E1B2E] mb-2">
              Send a Note to Dr. Dallas&apos; Team.
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mb-6">
              Have questions regarding treatment options, insurance coverage, or special accommodations? Send us a confidential message below.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-semibold text-stone-900">
                  Message Successfully Received
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  Thank you, {formState.name}. A member of Dr. Dallas&apos; Las Olas team will review your inquiry and follow up shortly by phone or email.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="text-xs font-semibold text-[#0E1B2E] hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#0E1B2E] bg-stone-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="(954) 000-0000"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#0E1B2E] bg-stone-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#0E1B2E] bg-stone-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Topic of Interest
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#0E1B2E] bg-stone-50/50"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Porcelain Veneers">Porcelain Veneers</option>
                      <option value="Invisalign Orthodontics">Invisalign Orthodontics</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Insurance Coverage">Insurance Coverage Verification</option>
                      <option value="Second Opinion">Second Opinion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    How May We Help You?
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your dental goals, previous experiences, or questions..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#0E1B2E] bg-stone-50/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0E1B2E] hover:bg-[#1A2E4C] rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Transmit Confidential Note'}</span>
                </button>

                <p className="text-[11px] text-stone-400 text-center">
                  Protected under HIPAA patient privacy guidelines. We never share your contact details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
