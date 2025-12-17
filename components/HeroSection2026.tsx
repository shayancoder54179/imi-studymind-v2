'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

// Floating particle component
const FloatingParticle = ({ delay, duration, size, startX, startY }: {
  delay: number
  duration: number
  size: number
  startX: number
  startY: number
}) => (
  <motion.div
    className="absolute rounded-full bg-white/10 backdrop-blur-sm"
    style={{
      width: size,
      height: size,
      left: `${startX}%`,
      top: `${startY}%`,
    }}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
)

// Geometric shape component
const GeometricShape = ({ type, className, delay }: {
  type: 'circle' | 'square' | 'triangle'
  className: string
  delay: number
}) => {
  const shapes = {
    circle: 'rounded-full',
    square: 'rounded-lg rotate-45',
    triangle: 'clip-triangle',
  }

  return (
    <motion.div
      className={`absolute ${shapes[type]} ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.1, 0.2, 0.1], 
        scale: [1, 1.1, 1],
        rotate: type === 'square' ? [45, 90, 45] : 0,
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export default function HeroSection2026() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Generate particles only on client
  const particles = mounted ? Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 4,
    size: 4 + Math.random() * 12,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
  })) : []

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-50"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary animated gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(ellipse at 80% 20%, rgba(6, 182, 212, 0.4) 0%, transparent 40%)',
              'radial-gradient(ellipse at 20% 80%, rgba(167, 139, 250, 0.4) 0%, transparent 40%)',
              'radial-gradient(ellipse at 60% 40%, rgba(56, 189, 248, 0.4) 0%, transparent 40%)',
              'radial-gradient(ellipse at 80% 20%, rgba(6, 182, 212, 0.4) 0%, transparent 40%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <FloatingParticle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Geometric Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GeometricShape 
          type="circle" 
          className="w-64 h-64 md:w-96 md:h-96 -top-20 -left-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 blur-xl"
          delay={0}
        />
        <GeometricShape 
          type="circle" 
          className="w-48 h-48 md:w-72 md:h-72 -bottom-10 -right-10 bg-gradient-to-br from-purple-500/20 to-pink-500/10 blur-xl"
          delay={2}
        />
        <GeometricShape 
          type="square" 
          className="w-32 h-32 md:w-48 md:h-48 top-1/4 right-[10%] bg-gradient-to-br from-indigo-500/10 to-blue-500/5 blur-sm hidden md:block"
          delay={1}
        />
        <GeometricShape 
          type="circle" 
          className="w-20 h-20 md:w-32 md:h-32 bottom-1/4 left-[15%] bg-gradient-to-br from-teal-500/15 to-emerald-500/10 blur-sm hidden md:block"
          delay={3}
        />
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/3 left-[10%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_20px_8px_rgba(34,211,238,0.4)] hidden md:block"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-[15%] w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_20px_8px_rgba(167,139,250,0.4)] hidden md:block"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_15px_6px_rgba(96,165,250,0.4)] hidden lg:block"
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center py-8 sm:py-0">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-[1.1] tracking-tight px-2"
        >
          <span className="text-white">2026 Work Experience</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Programmes
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto font-light px-2 md:whitespace-nowrap"
        >
          Offered by <span className="text-white font-medium">Improve ME Institute</span> in Collaboration with <span className="text-white font-medium">Study Mind UK</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('booking')}
            className="group w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all duration-300 border border-cyan-400/20"
          >
            Book Now
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
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
              className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Learn More
            </Button>
          </a>
        </motion.div>

      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
    </section>
  )
}

