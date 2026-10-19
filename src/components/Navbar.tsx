import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'Meet Dr. Dallas' },
    { id: 'services', label: 'Services' },
    { id: 'transformations', label: 'Smile Gallery' },
    { id: 'experience', label: 'Patient Sanctuary' },
    { id: 'contact', label: 'Visit & Hours' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Quiet Utility Bar */}
      <div className="bg-[#0E1B2E] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[13px]">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#C29D59]" />
              <span>{CLINIC_INFO.address.street}, {CLINIC_INFO.address.city}, FL</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#C29D59]" />
              <span>Mon, Tue, Thu 9am–5pm · Wed 9am–1pm</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-slate-400">Las Olas District</span>
            <a
              href={CLINIC_INFO.phoneHref}
              className="flex items-center gap-1.5 font-medium text-amber-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-stone-200'
            : 'bg-[#FAF8F5] border-b border-stone-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single clean element) */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm"
          >
            <span className="block font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#0E1B2E] group-hover:text-amber-900 transition-colors whitespace-nowrap">
              Dr. Michele Dallas<span className="text-[#C29D59] font-normal">, DDS</span>
            </span>
            <span className="block text-[11px] tracking-widest uppercase font-medium text-stone-500 whitespace-nowrap">
              Las Olas Dental Centre
            </span>
          </button>

          {/* Zone 2: 4–5 single-line clean text links with subtle hover underlines */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-stone-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer hover:text-[#0E1B2E] ${
                    isActive ? 'text-[#0E1B2E] font-semibold' : 'text-stone-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C29D59] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CLINIC_INFO.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#0E1B2E] bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap"
              title="Call Las Olas Dental Centre"
            >
              <Phone className="w-3.5 h-3.5 text-[#C29D59]" />
              <span>Call Office</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0E1B2E] hover:bg-[#1A2E4C] rounded-lg shadow-sm transition-all duration-150 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Request Appointment</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-200 px-6 py-5 shadow-lg space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-left text-base font-medium text-stone-800 hover:text-[#0E1B2E] py-2 border-b border-stone-200/50"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={CLINIC_INFO.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-[#0E1B2E] bg-stone-200/80 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#C29D59]" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#0E1B2E] rounded-lg"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Request Appointment</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
