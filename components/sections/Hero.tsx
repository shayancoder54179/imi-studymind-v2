'use client'

import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, Globe, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 opacity-20 hidden sm:block"
        >
          <GraduationCap className="w-16 h-16 sm:w-24 sm:h-24 text-blue-600" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 opacity-20 hidden sm:block"
        >
          <Globe className="w-24 h-24 sm:w-32 sm:h-32 text-red-600" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 right-40 opacity-20 hidden md:block"
        >
          <Award className="w-20 h-20 sm:w-28 sm:h-28 text-blue-500" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Floating Trust Badges - One line on mobile */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-row flex-wrap sm:grid sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 justify-center max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12"
          >
            <div className="glass px-2 sm:px-3 py-2 sm:py-3 rounded-lg text-[10px] sm:text-xs md:text-sm font-medium text-blue-700 flex flex-row sm:flex-col items-center gap-1 sm:gap-1 flex-shrink-0">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-red-600 flex-shrink-0" />
              <span className="whitespace-nowrap">UCL Hosted</span>
            </div>
            <div className="glass px-2 sm:px-3 py-2 sm:py-3 rounded-lg text-[10px] sm:text-xs md:text-sm font-medium text-blue-700 flex flex-row sm:flex-col items-center gap-1 sm:gap-1 flex-shrink-0">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-red-600 flex-shrink-0" />
              <span className="whitespace-nowrap">50+ Nations</span>
            </div>
            <div className="glass px-2 sm:px-3 py-2 sm:py-3 rounded-lg text-[10px] sm:text-xs md:text-sm font-medium text-blue-700 flex flex-row sm:flex-col items-center gap-1 sm:gap-1 flex-shrink-0">
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-red-600 flex-shrink-0" />
              <span className="whitespace-nowrap">99% Recommended</span>
            </div>
            <div className="glass px-2 sm:px-3 py-2 sm:py-3 rounded-lg text-[10px] sm:text-xs md:text-sm font-medium text-blue-700 flex flex-row sm:flex-col items-center gap-1 sm:gap-1 flex-shrink-0 hidden sm:flex">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-red-600 flex-shrink-0" />
              <span className="whitespace-nowrap">Elite Program</span>
            </div>
          </motion.div>

          {/* Main Headline - Responsive text sizing */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-blue-700 leading-tight break-words px-2"
          >
            Transform Your Future at{' '}
            <span className="gradient-text">UCL London</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-snug px-4 break-words"
          >
            Elite Summer Career Camps for Ambitious Students | Ages 12-18
          </motion.p>

          {/* CTAs - Stack on mobile, side-by-side on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('programs')}
              className="group w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold"
            >
              Explore Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a 
              href="https://studymind.co.uk/work-experience/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold"
              >
                Apply Now (Save AED 440)
              </Button>
            </a>
          </motion.div>

          {/* Special Offer Highlight */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mb-6 sm:mb-8 text-xs sm:text-sm text-gray-600 px-4"
          >
            Use code <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded text-xs sm:text-sm">IMPROVEME120</span> to save AED 440 (£120)
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-blue-600 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

