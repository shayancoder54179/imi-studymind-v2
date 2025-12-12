"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navigationLinks = [
  { label: "Why Choose Us?", href: "#why-study-mind" },
  { label: "Our Courses", href: "#our-courses" },
  { label: "Who should join?", href: "#who-should-join" },
  { label: "Accommodation", href: "#accommodation" },
  { label: "Safety", href: "#safety" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQs", href: "#faqs" },
  { label: "Fees", href: "#fees" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const scrollToHash = (hash: string) => {
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    const element = document.getElementById(id);
    if (!element) return false;

    const nav = document.querySelector<HTMLElement>("[data-navbar]");
    const headerOffset = Math.ceil(nav?.getBoundingClientRect().height ?? 0);
    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(0, elementTop - headerOffset),
      behavior: "smooth",
    });

    return true;
  };

  const handleNavClick = (href: string) => {
    scrollToHash(href);
    setIsMobileMenuOpen(false);
  };

  const handleBookNow = () => {
    handleNavClick("#booking");
  };

  const handleLogoClick = () => {
    const didScroll = scrollToHash("#home");
    if (!didScroll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md overflow-x-hidden w-full max-w-[100vw]"
      data-navbar
    >
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 xl:px-8 w-full">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 min-h-[56px] sm:min-h-[64px] gap-2">
          {/* Logo Section - Left */}
          <div className="flex items-center flex-shrink-0 min-w-0 max-w-[calc(100%-80px)] xl:max-w-none overflow-hidden">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0 min-w-0 cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Scroll to top"
              type="button"
            >
              <Image
                src="/logo/IMI Logo - Booklets.png"
                alt="Improve ME Institute Logo"
                width={120}
                height={40}
                className="h-10 sm:h-9 md:h-10 lg:h-12 w-auto object-contain flex-shrink-0 max-w-[90px] sm:max-w-[90px] md:max-w-none"
                priority
              />
              <div className="h-10 sm:h-9 md:h-10 lg:h-12 w-px bg-gray-400 hidden sm:block flex-shrink-0"></div>
              <Image
                src="/logo/study-mind-png-long-logo.png"
                alt="Study Mind Logo"
                width={150}
                height={40}
                className="h-10 sm:h-9 md:h-10 lg:h-12 w-auto object-contain flex-shrink-0 max-w-[120px] sm:max-w-[110px] md:max-w-none"
                priority
              />
            </button>
          </div>

          {/* Navigation Menu - Center (Only visible on xl: 1280px+) */}
          <div className="hidden xl:flex items-center justify-center flex-1 min-w-0 px-4 overflow-x-hidden">
            <nav className="flex items-center gap-4 max-w-full" aria-label="Main navigation">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-2 py-2 text-gray-800 hover:text-primary-blue-dark text-xs font-medium transition-colors duration-200 relative group whitespace-nowrap flex-shrink-0 max-w-full overflow-hidden"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-blue-dark group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Right Section - Book Now Button & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Book Now Button - Only visible on xl (1280px+) */}
            <button
              onClick={handleBookNow}
              className="hidden xl:block bg-primary-blue-dark text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-button font-bold text-xs sm:text-sm hover:bg-primary-blue transition-all shadow-md whitespace-nowrap flex-shrink-0"
              type="button"
            >
              Book Now
            </button>

            {/* Hamburger Menu - Only visible below xl (1280px) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden text-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-primary-blue rounded-lg flex-shrink-0"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop (prevents underlying content from intercepting touches) */}
            <div
              className="fixed left-0 right-0 bottom-0 top-14 sm:top-16 md:top-20 bg-black/40 z-[55] xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel */}
            <div
              id="mobile-nav-panel"
              className="fixed left-0 right-0 top-14 sm:top-16 md:top-20 z-[60] xl:hidden bg-white shadow-lg border-t border-gray-200 max-h-[calc(100vh-56px)] sm:max-h-[calc(100vh-64px)] md:max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="max-w-[1920px] mx-auto px-4 sm:px-5 md:px-6 xl:px-8 py-4 space-y-1">
                {navigationLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-blue-dark hover:bg-gray-50 text-sm font-medium transition-colors duration-200 rounded-lg whitespace-nowrap cursor-pointer"
                    style={{ touchAction: "manipulation" }}
                    type="button"
                  >
                    {link.label}
                  </button>
                ))}

                {/* Book Now Button in Mobile Menu */}
                <button
                  onClick={handleBookNow}
                  className="w-full mt-2 bg-primary-blue-dark text-white px-4 py-3 rounded-button font-bold text-sm hover:bg-primary-blue transition-all shadow-md whitespace-nowrap"
                  style={{ touchAction: "manipulation" }}
                  type="button"
                >
                  Book Now
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
