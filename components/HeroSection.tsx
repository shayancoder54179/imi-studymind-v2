'use client'

import Image from "next/image";
import { motion } from "framer-motion";

// Hero section images from public folder
const heroImages = [
  "/hero section/DSC03280.JPG",
  "/hero section/DSC03370.JPG",
  "/hero section/DSC03384.JPG",
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden w-full">
      {/* Top Hero Section - Deep Blue */}
      <div className="relative bg-gradient-to-br from-primary-blue-dark via-primary-blue to-primary-blue-dark text-white pt-[120px] pb-16 sm:pb-20 md:pb-28 lg:pb-36 w-full overflow-x-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] flex items-center">
        {/* Subtle Background Pattern - Removed cut-off hexagon, kept subtle elements */}
        <div className="absolute right-4 top-24 sm:right-10 sm:top-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-blue-light">
            <rect x="20" y="20" width="60" height="60" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute left-1/3 top-32 sm:top-40 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-blue-light">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
        </div>

        <div className="container-custom relative z-10 w-full">
          {/* Main Content */}
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4">
                2026 Work Experience Programmes
              </span>
              <span className="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white leading-tight px-2">
                Offered by Improve ME Institute in Collaboration with Study Mind UK
              </span>
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 sm:mt-16"
            >
              <a
                href="#booking"
                className="bg-white text-primary-blue-dark px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-button font-bold text-base sm:text-lg md:text-xl hover:bg-opacity-95 transition-all duration-300 shadow-lg hover:shadow-2xl text-center w-full sm:w-auto"
              >
                Book Now
              </a>
              <a
                href="https://studymind.co.uk/work-experience/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-button font-bold text-base sm:text-lg md:text-xl hover:bg-white hover:text-primary-blue-dark transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex justify-center items-center w-full sm:w-auto"
              >
                Learn More
              </a>
            </motion.div>

            {/* Image Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6"
            >
              {heroImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="relative w-full h-[280px] sm:h-[300px] md:h-[320px] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <Image
                    src={image}
                    alt={`Student experience ${index + 1}`}
                    fill
                    quality={80}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 320px"
                    className="object-cover"
                    priority={index === 0}
                    style={{ filter: "brightness(0.98) contrast(0.95)" }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
