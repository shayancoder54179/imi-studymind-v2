'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, end])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const stats = [
    { value: 50, suffix: '+', label: 'Nations Represented' },
    { value: 99, suffix: '%', label: 'Recommendation Rate' },
    { value: 200, suffix: '+', label: 'Partner Schools' },
    { value: 20, suffix: '+', label: 'Career Pathways' },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Responsive grid: 2x2 mobile, 4 columns desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center px-2 sm:px-0"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2 md:mb-3 text-white leading-tight">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-white/90 font-medium leading-tight break-words">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

