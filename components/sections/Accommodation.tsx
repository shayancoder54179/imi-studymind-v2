'use client'

import { motion } from 'framer-motion'
import { Home, Shield, MapPin, Sparkles } from 'lucide-react'

export default function Accommodation() {
  const features = [
    {
      icon: Home,
      text: 'Private rooms in modern UCL Ramsay Hall',
    },
    {
      icon: Shield,
      text: '24/7 safeguarding, security & support staff',
    },
    {
      icon: MapPin,
      text: 'Central London location near UCL campus',
    },
    {
      icon: Sparkles,
      text: 'Modern facilities with dining & common areas',
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Your Home at UCL
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comfortable, safe, and located in the heart of London
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-secondary-200 to-primary-200 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-secondary-500">
                <Home className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-30" />
              </div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 glass p-3 sm:p-4 rounded-lg">
                <p className="text-xs sm:text-sm font-medium text-primary-600 break-words">
                  UCL Ramsay Hall - Your Home in London
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 sm:gap-4 glass p-4 sm:p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-gradient-to-br from-red-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 pt-1 sm:pt-2 break-words">
                    {feature.text}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

