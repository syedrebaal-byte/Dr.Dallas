import React, { useState, useEffect } from 'react';
import { Calendar, Phone } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DoctorSpotlight } from './components/DoctorSpotlight';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { EmergencyBanner } from './components/EmergencyBanner';
import { PatientExperience } from './components/PatientExperience';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveBookingModal } from './components/InteractiveBookingModal';
import { CLINIC_INFO } from './data/clinicData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState('hero');

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // IntersectionObserver to sync active nav section on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'services', 'transformations', 'experience', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { threshold: 0.25 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero with Authority & Visual Suite */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={() => handleNavigate('services')}
        />

        {/* 2. Meet Dr. Dallas: Georgetown, Howard, Florida Board of Dentistry */}
        <DoctorSpotlight
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 3. Clinical Specializations Matrix (Veneers, Invisalign, Implants, etc.) */}
        <ServicesSection
          onOpenBooking={(sId) => handleOpenBooking(sId)}
        />

        {/* 4. Interactive Smile Transformations & 3-Step Assessment Quiz */}
        <BeforeAfterGallery
          onOpenBooking={(sId) => handleOpenBooking(sId)}
        />

        {/* 5. Urgent Emergency Dental Relief Banner */}
        <EmergencyBanner
          onOpenBooking={(sId) => handleOpenBooking(sId)}
        />

        {/* 6. Sanctuary Experience, Amenities, Insurance & CareCredit Estimator */}
        <PatientExperience
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 7. Verified Patient Testimonials & 4.9 Star Rating */}
        <TestimonialsSection />

        {/* 8. Office Location, Map, Hours & Inquiries */}
        <ContactSection />
      </main>

      {/* Quiet Accessible Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Multi-Step Appointment Concierge Modal */}
      <InteractiveBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={selectedServiceId}
      />

      {/* Mobile Sticky Action Bar (Compliant with 15% mobile viewport cap) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-lg flex items-center gap-2">
        <a
          href={CLINIC_INFO.phoneHref}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-[#0E1B2E] bg-stone-100 rounded-lg"
        >
          <Phone className="w-3.5 h-3.5 text-[#C29D59]" />
          <span>Call Office</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-white bg-[#0E1B2E] rounded-lg shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
}
