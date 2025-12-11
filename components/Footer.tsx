"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-blue-dark text-white border-t border-white/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Description */}
          <div className="space-y-4">
            <div className="bg-white px-4 py-3 rounded-lg flex items-center gap-3 flex-wrap">
              <Image
                src="/logo/IMI Logo - Booklets.png"
                alt="Improve ME Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="text-gray-700 text-xs font-medium">collaboration with</span>
              <Image
                src="/logo/study-mind-png-long-logo.png"
                alt="Study Mind Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-sm">
              Improve ME Institute, in collaboration with Study Mind UK, empowering students with real-world work experience and career preparation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#why-study-mind" className="text-white/70 hover:text-white text-sm transition-colors">
                  Why Choose Us?
                </a>
              </li>
              <li>
                <a href="#our-courses" className="text-white/70 hover:text-white text-sm transition-colors">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#who-should-join" className="text-white/70 hover:text-white text-sm transition-colors">
                  Who should join?
                </a>
              </li>
              <li>
                <a href="#faqs" className="text-white/70 hover:text-white text-sm transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#accommodation" className="text-white/70 hover:text-white text-sm transition-colors">
                  Accommodation
                </a>
              </li>
              <li>
                <a href="#safety" className="text-white/70 hover:text-white text-sm transition-colors">
                  Safety
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-white/70 hover:text-white text-sm transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#fees" className="text-white/70 hover:text-white text-sm transition-colors">
                  Fees
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Email: info@studymind.co.uk</li>
              <li>Phone: +44 (0) 20 3305 9593</li>
              <li>Phone: +971-58 547 1457</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Improve ME Institute in collaboration with Study Mind UK. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
