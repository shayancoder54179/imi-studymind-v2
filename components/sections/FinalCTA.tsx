'use client'

import { motion } from 'framer-motion'
import { Send, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 break-words px-2">
            Ready to Transform Your Summer?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 px-4 break-words">
            Join students from 50+ nations for the experience of a lifetime. Limited spots available.
          </p>

          {/* Application Form */}
          <div className="glass border border-white/20 p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl mb-6 md:mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 mb-2 break-words">
              Start Your Application
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 break-words">Improve ME Institute Application</p>
            
            <form className="space-y-3 sm:space-y-4">
              {/* Name & Email - Stack on mobile, side-by-side on tablet+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none text-gray-900 text-sm sm:text-base min-h-[48px]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none text-gray-900 text-sm sm:text-base min-h-[48px]"
                />
              </div>
              
              {/* Age & Career Interest - Stack on mobile, side-by-side on tablet+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="number"
                  placeholder="Age"
                  min="12"
                  max="18"
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none text-gray-900 text-sm sm:text-base min-h-[48px]"
                />
                <select
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none text-gray-900 text-sm sm:text-base min-h-[48px]"
                >
                  <option>Select Career Interest</option>
                  <option>Medicine</option>
                  <option>Law</option>
                  <option>Engineering</option>
                  <option>Business</option>
                  <option>Technology</option>
                  <option>Creative Arts</option>
                  <option>Architecture</option>
                  <option>Science</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Buttons - Stack on mobile, side-by-side on desktop */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <a 
                  href="https://studymind.co.uk/work-experience/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex flex-col items-center"
                >
                  <Button 
                    size="lg" 
                    className="w-full group bg-red-600 hover:bg-red-700 text-white py-3 sm:py-4 text-base sm:text-lg font-bold min-h-[48px]"
                  >
                    <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    Submit Application
                  </Button>
                  <span className="text-[10px] sm:text-xs text-gray-500 mt-1 break-words">Improve ME Institute Application</span>
                </a>
                <a 
                  href="https://studymind.co.uk/work-experience/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1"
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full bg-white text-blue-700 hover:bg-gray-50 border-0 py-3 sm:py-4 text-base sm:text-lg font-bold min-h-[48px]"
                  >
                    <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    Download Brochure
                  </Button>
                </a>
              </div>
            </form>
          </div>

          <p className="text-white/80 text-xs sm:text-sm px-4">
            By submitting, you agree to be contacted by Improve ME Institute and Study Mind about career camps and educational opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

